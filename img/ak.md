# 心魔 / 靈力 角色圖片生成 Prompt

行銷首頁 Hero 區塊的「心魔」（惡魔）與「靈力」（天使）互動角色，現在支援自訂外觀圖片。

## 檔名

| 檔名 | 對應角色 | 建議尺寸 |
|---|---|---|
| `mascot-devil.png` | 心魔（惡魔） | 正方形，建議 400×400 以上，**透明背景 PNG** |
| `mascot-angel.png` | 靈力（天使） | 正方形，建議 400×450 以上，**透明背景 PNG** |

放進 `img/` 資料夾、檔名一致，重新執行 `node build-index.js` 就會自動套用，完全覆蓋原本 CSS 畫的角色（包含耳朵/角/眼睛/嘴巴都會被取代）。沒有放圖片時會維持原本 CSS 繪製的樣子，不會破版。

角色圖會被放進一個會隨滑鼠左右移動輕微傾斜的容器裡，所以圖片本身不需要再做互動，只要是一張完整、置中的角色插畫即可。**背景務必透明**，否則會變成方形色塊蓋住卡片底圖。

---

## 共用風格前綴（建議每個 prompt 都加上）

```
flat vector illustration, cute kawaii mascot character design, soft minimalist wellness-app aesthetic, gentle rounded shapes, soft radial-gradient shading for subtle depth, no hard black outlines, simple friendly facial expression, centered composition, transparent background, no text, no watermark, high resolution
```

---

## `mascot-devil.png` — 心魔

角色設定：不是嚇人的惡魔，是「內心的小小心魔」，代表壓力/焦慮，但造型要可愛、圓潤、無威脅感，像個調皮的小怪獸。原始配色：紅棕色 `#B5453A` 到 `#E28A76` 漸層。

```
cute round chibi devil mascot character, small friendly horns, round soft body, warm reddish-brown gradient (#B5453A to #E28A76), simple minimal facial expression (slightly mischievous but not scary), no arms or very small stubby arms optional, flat vector illustration, kawaii mascot design, soft rounded shapes, no hard outlines, centered, transparent background, no text
```

---

## `mascot-angel.png` — 靈力

角色設定：代表內在的平靜與力量，溫柔、療癒系天使造型，小翅膀 + 光環。原始配色：薄荷綠 `#6FA37C` 到 `#BFE0C4` 漸層，金色光環 `#E8C766`。

```
cute round chibi angel mascot character, small soft wings, thin gold halo (#E8C766), round soft body, gentle mint-green gradient (#6FA37C to #BFE0C4), calm peaceful minimal facial expression, flat vector illustration, kawaii mascot design, soft rounded shapes, no hard outlines, centered, transparent background, no text
```

---

## 小提醒
- 兩個角色的「圓潤可愛、無威脅感」是重點，避免生成過於寫實或恐怖的惡魔造型（這是一個心理健康 App，心魔角色要讓人會心一笑，不是感到害怕）。
- 如果生成結果背景不是透明，記得另外去背（remove.bg 或 Photoshop/Figma 都可以）再存檔。
- 兩張圖建議用同一套 prompt 跑多次挑一張構圖最置中、最方正的，這樣裁切後在小尺寸（112px）顯示時效果最好。
