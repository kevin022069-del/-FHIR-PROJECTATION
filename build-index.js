// Bundles the sibling *.dc.html screens into MindHarbor.dc.html so the
// result (index.html) can be opened directly via file:// (double-click),
// without needing a local server. The dc-runtime (support.js) normally
// fetches sibling components with fetch(), which browsers block for
// file:// pages; pre-registering them as in-memory Blobs skips that fetch.
const fs = require("fs");
const path = require("path");

const dir = __dirname;
const rootFile = "MindHarbor.dc.html";

const screenNames = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith(".dc.html") && f !== rootFile)
  .map((f) => f.replace(/\.dc\.html$/, ""));

const entries = screenNames.map((name) => {
  const content = fs.readFileSync(path.join(dir, name + ".dc.html"), "utf8");
  const url = "./" + encodeURIComponent(name) + ".dc.html";
  return { name, url, content };
});

// Escape "</" so embedded HTML (e.g. sibling files' own </script> tags)
// can't prematurely close this <script> element when inlined as a string.
const dataJson = JSON.stringify(entries.map((e) => [e.url, e.content])).replace(
  /<\//g,
  "<\\/"
);

const bundleScript = `<script>
(function () {
  var blobs = {};
  var resources = {};
  var data = ${dataJson};
  data.forEach(function (pair, i) {
    var key = "res:" + i;
    blobs[key] = new Blob([pair[1]], { type: "text/html" });
    resources[pair[0]] = key;
  });
  window.__resourceBlobs = blobs;
  window.__resources = resources;
})();
</script>`;

const rootContent = fs.readFileSync(path.join(dir, rootFile), "utf8");
const out = rootContent.replace(
  '<script src="./support.js"></script>',
  bundleScript + '\n<script src="./support.js"></script>'
);

if (out === rootContent) {
  throw new Error("Could not find support.js script tag to patch in " + rootFile);
}

fs.writeFileSync(path.join(dir, "index.html"), out, "utf8");
console.log("Wrote index.html with " + entries.length + " bundled screens:", screenNames.join(", "));
