# AI 圖片生成 Prompt（給 Midjourney / DALL·E / Stable Diffusion 等工具用）

檔名對照請見同資料夾的 `README.md`。以下每個 prompt 生成完後，記得裁切成建議尺寸再存成對應檔名放進 `img/`。

---

## 共用風格前綴（每個 prompt 最後都建議加上，確保整站風格一致）

```
flat vector illustration, soft minimalist wellness-app aesthetic, warm cream and sage green color palette (#F4F0E7 cream, #557A60 sage green, #88AE8E light green, #DCE6DB pale mint, #D19A76 warm tan, #E8B44C soft gold), gentle rounded shapes, soft radial-gradient shading for subtle depth, no hard black outlines, generous negative space, calm therapeutic mood, Scandinavian minimalism meets kawaii mascot design, clean and friendly, no text, no watermark, high resolution
```

---

## Logo

**`logo.png`**（正方形、透明背景）
```
minimalist app icon logo for a mental health wellness app called "MindHarbor", simple rounded square badge, abstract wave/harbor or leaf-and-heart motif, sage green gradient (#88AE8E to #557A60), extremely simple and iconic, works at small size, transparent background, no text, no letters
```

---

## 背景

**`bg-marketing.jpg`**（橫式 1920×1080+）
```
soft abstract wellness background, gentle flowing organic blobs in cream and sage green tones (#F4F0E7, #DCE6DB, #9CC3A0), subtle calming gradient, minimal flat design, plenty of empty negative space for text overlay, peaceful morning light mood, wide horizontal composition, no people
```

**`bg-login.jpg`**（橫式 1920×1080+）
```
soft dreamy abstract gradient background, gentle cream-to-mint tones (#F4F0E7 to #DCE6DB), minimal flat wellness illustration, calm and welcoming, blurred soft shapes, no focal subject, no people
```

**`bg-crisis.jpg`**（橫式 1920×1080+，色調偏溫暖粉色，給予安撫感）
```
extremely soft, gentle, comforting abstract background, warm blush pink and cream tones (#FBF4F1, #E8B7A9), flowing organic shapes, safe and reassuring atmosphere, minimal flat illustration, no sharp edges, no people
```

**`bg-dashboard.jpg`**（橫式，需低對比、不能搶走 UI 卡片的視覺焦點）
```
extremely subtle, low-contrast abstract texture background, very soft cream and pale mint tones (#F4F0E7, #DCE6DB), barely-there organic pattern, minimal and quiet, designed to sit behind UI cards without distracting, flat illustration
```

---

## 插畫 / 物件

**`hero-illustration.png`**（橫式，約 4:3，中下留白給互動角色疊圖）
```
soft dreamy gradient backdrop resembling a cozy evening sky or calm room interior, warm cream to pale mint gradient (#EDE8DE to #DCE6DB), flat minimal illustration, plenty of empty space in the center-bottom area for character illustrations to be placed on top, no characters, no text
```

**`about-illustration.png`**（橫式，約 4:3）
```
flat vector illustration of a warm, welcoming counseling room or a person meditating peacefully by a window, soft mint green and cream palette, minimal line-free flat design, cozy and safe atmosphere, rounded organic shapes, no text, no visible face detail
```

**`icon-crisis.png`**（正方形圖示）
```
simple flat icon of two gentle cupped hands forming a heart shape, soft coral pink and cream colors (#E8B7A9, #FBF4F1), caring and supportive symbol, circular composition, flat minimal design, no outlines, transparent background
```

**`icon-celebration.png`**（正方形圖示）
```
simple flat icon of a small celebration burst — sparkle, confetti, or star shape, warm gold and sage green colors (#E8B44C, #9CC3A0), minimal flat vector design, circular composition, joyful and gentle mood, transparent background
```

心魔/靈力互動角色圖（`mascot-devil.png` / `mascot-angel.png`）的 prompt 另外整理在同資料夾的 `ak.md`。

---

## PSS-10 壓力量表表情圖示（正方形，取代 emoji，裁切成圓形顯示）

**`pss-never.png`** — 從不 / 0分
```
simple flat icon face expressing calm and relaxed mood, gentle smile, soft yellow-cream tones, minimal circular emoji-style icon, flat design, transparent background
```
**`pss-rarely.png`** — 很少 / 1分
```
simple flat icon face expressing mild contentment, soft closed-eye smile, soft light green tones, minimal circular emoji-style icon, flat design, transparent background
```
**`pss-sometimes.png`** — 有時 / 2分
```
simple flat icon face expressing a neutral, unsure mood, flat mouth line, soft tan/beige tones, minimal circular emoji-style icon, flat design, transparent background
```
**`pss-often.png`** — 常常 / 3分
```
simple flat icon face expressing mild worry or stress, slightly furrowed brow, soft orange tones, minimal circular emoji-style icon, flat design, transparent background
```
**`pss-always.png`** — 幾乎總是 / 4分
```
simple flat icon face expressing high stress or overwhelm, tense expression, soft coral-red tones (#B5543C), minimal circular emoji-style icon, flat design, transparent background
```

---

## 團隊成員照片（`avatar-team-1.png` ~ `avatar-team-4.png`）

可以用真人照片（推薦，較有真實感），或用同風格插畫頭像。兩種 prompt 都附上：

**真人照片風格**：
```
professional headshot photo of a friendly East Asian counselor, warm genuine smile, soft natural lighting, neutral cream or sage-green backdrop, business casual attire, square crop, photorealistic, high quality portrait photography
```

**插畫頭像風格**（想跟其他角色一致時用）：
```
flat vector portrait avatar of a friendly counselor, simple rounded face shape, minimal facial features, soft pastel color palette matching sage green / warm tan / soft purple / soft blue tones, circular composition, flat illustration, no outlines
```

四張分別調整衣著/髮型/膚色即可做出區隔（陳/林/黃/吳心理師）。

---

## 頭像（`avatar-user.png`、`avatar-practitioner.png`、`avatar-admin.png`、`avatar-friend-1.png`、`avatar-friend-2.png`）

沿用上面「插畫頭像風格」或「真人照片風格」皆可，正方形、會裁切成圓形顯示。若要跟 好友/陌生人 的匿名感區隔，好友頭像可以刻意做得更卡通化一點：
```
flat vector avatar icon, abstract friendly character silhouette, warm tan and brown tones (#D19A76, #9A6B54), simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

---

## 靈力商城商品圖（正方形，裁切置中）

**`shop-latte.png`**
```
flat vector illustration of a cozy latte coffee cup with heart-shaped foam art, warm tan and cream tones, minimal icon style, centered composition
```
**`shop-cookie.png`**
```
flat vector illustration of a stack of two homemade cookies, warm golden-brown tones, minimal icon style, centered composition
```
**`shop-fruit-tea.png`**
```
flat vector illustration of a glass of fruit tea with citrus slices, soft mint and orange tones, minimal icon style, centered composition
```
**`shop-snack-box.png`**
```
flat vector illustration of a healthy snack box with nuts and dried fruit, soft purple and cream tones, minimal icon style, centered composition
```
**`shop-movie-ticket.png`**
```
flat vector illustration of a cinema ticket with a small film-reel icon, soft blue and cream tones, minimal icon style, centered composition
```
**`shop-night-light.png`**
```
flat vector illustration of a small cozy glowing night lamp, soft lavender and warm yellow glow, minimal icon style, centered composition
```

（每個都可以加上共用風格前綴）

---

## 成就徽章圖（正方形，裁切成圓形顯示）

**`badge-calm.png`** — 主色 `#9CC3A0`（薄荷綠）
```
flat vector circular badge icon representing "calm", gentle wave or still-water ripple motif, mint green tones (#9CC3A0), minimal flat design, centered composition
```
**`badge-focus.png`** — 主色 `#8FA9C4`（藍）
```
flat vector circular badge icon representing "focus", simple target or single beam-of-light motif, soft blue tones (#8FA9C4), minimal flat design, centered composition
```
**`badge-courage.png`** — 主色 `#A688B0`（紫）
```
flat vector circular badge icon representing "courage", small flame or shield motif, soft purple tones (#A688B0), minimal flat design, centered composition
```
**`badge-reflection.png`** — 主色 `#D19A76`（棕）
```
flat vector circular badge icon representing "reflection", mirror or moon motif, warm tan tones (#D19A76), minimal flat design, centered composition
```
**`badge-consistency.png`** — 主色 `#E8B44C`（金）
```
flat vector circular badge icon representing "7-day consistency streak", small calendar or seven-dot motif, gold tones (#E8B44C), minimal flat design, centered composition
```
**`badge-growth.png`** — 主色 `#557A60`（深綠）
```
flat vector circular badge icon representing "growth", small sprouting plant or upward arrow motif, sage green tones (#557A60), minimal flat design, centered composition
```

---

## 使用建議
- 每次生成時把「共用風格前綴」貼在對應 prompt 後面，維持整站色調與插畫語言一致。
- 如果工具支援負面 prompt，可加：`no text, no watermark, no harsh outlines, no photorealistic skin texture (illustrations only)`。
- 生成後統一裁切／去背（logo、icon、avatar、badge、shop 系列都需要正方形＋透明或簡單背景），存成對應檔名丟進 `img/` 資料夾，重新執行 `node build-index.js` 即可看到效果。
