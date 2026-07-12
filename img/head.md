# 圖片生成 Prompt 補充（team 頭像 + coming-soon 圖示）

延續 `img/IMAGE_PROMPTS.md` 的共用色票／風格慣例，這份文件只補上這次新談到的兩組圖：
1. 「專業團隊」四張頭像，改成**寫實照片風格**
2. 「未來功能搶先看」六個小方塊，補上對應圖示 prompt（程式碼已經接好，見下方「怎麼套用」）

生成後照 `img/README.md` 的檔名表放進 `img/` 資料夾，重新執行 `node build-index.js` 即可套用；沒放檔案的項目會維持原本的純色設計，不會破圖。

---

## 一、團隊頭像（寫實風格）— 取代 `img/avatar-team-1.png` ~ `avatar-team-4.png`

沿用 `img/IMAGE_PROMPTS.md` 裡「真人照片風格」的基底 prompt，這裡依每位心理師在頁面上顯示的角色/經歷個別調整，並讓攝影棚背景色呼應該張卡片原本的強調色（卡片背景色是 fallback，色調對齊起來整排看仍會協調）。

**`avatar-team-1.png` — 陳心理師 · 臨床心理師 · 15年經驗**（背景色參考 `#DCE6DB` 薄荷綠）
```
professional headshot photo of a warm, experienced East Asian female clinical psychologist in her late 40s, calm confident smile, soft natural window lighting, neutral pale sage-green backdrop (#DCE6DB), simple business-casual blazer, square crop centered on face and shoulders, photorealistic, high quality portrait photography, shallow depth of field, no text, no watermark
```

**`avatar-team-2.png` — 林心理師 · 諮商心理師 · 伴侶諮商**（背景色參考 `#F4E4D6` 暖杏色）
```
professional headshot photo of a warm, approachable East Asian male counseling psychologist in his mid-30s, gentle genuine smile, soft natural lighting, neutral warm cream-tan backdrop (#F4E4D6), simple business-casual sweater or shirt, square crop centered on face and shoulders, photorealistic, high quality portrait photography, shallow depth of field, no text, no watermark
```

**`avatar-team-3.png` — 黃心理師 · 諮商心理師 · 兒少專長**（背景色參考 `#E4DCF0` 淺紫）
```
professional headshot photo of a friendly, gentle East Asian female counseling psychologist in her early 30s specializing in child therapy, soft warm smile, bright soft natural lighting, neutral pale lavender backdrop (#E4DCF0), simple business-casual cardigan, square crop centered on face and shoulders, photorealistic, high quality portrait photography, shallow depth of field, no text, no watermark
```

**`avatar-team-4.png` — 吳心理師 · 臨床心理師 · 職涯諮詢**（背景色參考 `#DDE7EF` 淺藍）
```
professional headshot photo of a composed, trustworthy East Asian male clinical psychologist in his late 30s specializing in career counseling, subtle confident smile, soft natural lighting, neutral pale blue backdrop (#DDE7EF), simple business-casual blazer, square crop centered on face and shoulders, photorealistic, high quality portrait photography, shallow depth of field, no text, no watermark
```

> 四張都是正方形照片，會被裁切成圓角方形卡片置中顯示，人臉建議置中偏上、肩膀以上構圖即可。

---

## 二、「未來功能搶先看」圖示 — 對應 `img/icon-upcoming-*.png`

目前這六個小方塊（38×38，`<div style="width:38px;height:38px;...">`）是純色色塊，程式碼已經改成會優先讀取對應檔名的圖示，讀不到就照舊顯示純色，**不會破圖**，可以放心之後再慢慢補圖。

這組是小尺寸功能圖示，建議維持跟 `icon-crisis.png` / `icon-celebration.png` 一致的**扁平向量圖示風格**，不建議用寫實照片（38px 尺寸下寫實照片會糊掉、看不清楚）。共用風格前綴請貼在下方每個 prompt 之後：
```
flat vector illustration, soft minimalist wellness-app aesthetic, warm cream and sage green color palette (#F4F0E7 cream, #557A60 sage green, #88AE8E light green, #DCE6DB pale mint, #D19A76 warm tan, #E8B44C soft gold), gentle rounded shapes, soft radial-gradient shading for subtle depth, no hard black outlines, generous negative space, calm therapeutic mood, no text, no watermark, high resolution
```

**`icon-upcoming-ai-analysis.png` — AI 情緒分析**
```
simple flat icon of a gentle sparkle merged with a soft heartbeat/mood wave line, symbolizing AI-powered emotion analysis, sage green and soft gold tones (#557A60, #E8B44C), circular composition, minimal flat design, transparent background
```

**`icon-upcoming-booking.png` — 線上預約系統**
```
simple flat icon of a small calendar page with a rounded checkmark, symbolizing online appointment booking, sage green and cream tones (#88AE8E, #F4F0E7), circular composition, minimal flat design, transparent background
```

**`icon-upcoming-chat.png` — 即時諮詢聊天**
```
simple flat icon of a rounded speech bubble with a small dot trio (typing indicator), symbolizing real-time chat, sage green tones (#557A60, #DCE6DB), circular composition, minimal flat design, transparent background
```

**`icon-upcoming-health-tracking.png` — 健康追蹤**
```
simple flat icon of a small heart shape with a gentle upward pulse/trend line through it, symbolizing health tracking, warm tan and sage green tones (#D19A76, #88AE8E), circular composition, minimal flat design, transparent background
```

**`icon-upcoming-knowledge-base.png` — 心理健康知識庫**
```
simple flat icon of an open book with a small leaf growing from its pages, symbolizing a mental-health knowledge base, warm tan and sage green tones (#D19A76, #557A60), circular composition, minimal flat design, transparent background
```

**`icon-upcoming-courses.png` — 線上課程**
```
simple flat icon of a rounded play button inside a small screen/monitor shape, symbolizing online courses, soft gold and sage green tones (#E8B44C, #88AE8E), circular composition, minimal flat design, transparent background
```

---

## 怎麼套用（已完成的程式碼變更）
- `ScreenMarketing.dc.html` 的 `upcoming` 資料已從純字串陣列改成 `{label, icon, iconStyle}` 物件陣列，`iconStyle` 用 CSS 多層背景（圖片在前、原本的 `#DCE6DB` 純色在後）疊加，圖片檔不存在時會自動顯示回原本的純色方塊。
- 產生圖片後放進 `img/`，跑 `node build-index.js` 重新打包 `index.html` 即可看到效果，不需要再改任何程式碼。
