# 好友頭像製圖需求（交給協作者 / AI 繪圖工具用）

✅ **已完成**：下面列的 10 張頭像已經全部生成並放入 `img/`，12 位好友現在都有各自專屬的頭像圖，實測畫面確認顯示正常。以下內容保留作為紀錄／未來新增好友時的參考範本。

MindHarbor（心靈港灣）App 的「好友動態」原本有 12 位好友，但頭像圖檔只有 2 張在循環使用，導致畫面上一堆好友長得一模一樣。這份文件當初是要請你補齊剩下 10 張頭像，讓每位好友都有專屬的一張圖。

## 專案風格（務必遵守，確保跟整站風格一致）

畫風：**扁平向量插畫（flat vector illustration）**，走溫暖、簡約、療癒系的 wellness app 風格。抽象卡通角色剪影，**不畫五官、不寫實**，維持一點神秘/匿名感（跟行銷頁「真人心理師照片」的風格刻意做出區隔）。

共用風格前綴（每個 prompt 最後都建議加上）：
```
flat vector illustration, soft minimalist wellness-app aesthetic, warm cream and sage green color palette, gentle rounded shapes, soft radial-gradient shading for subtle depth, no hard black outlines, generous negative space, calm therapeutic mood, Scandinavian minimalism meets kawaii mascot design, clean and friendly, no text, no watermark, high resolution
```

好友頭像專用風格（抽象人形剪影）：
```
flat vector avatar icon, abstract friendly character silhouette, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines, no text, no watermark
```

負面 prompt（如果工具支援）：
```
no text, no watermark, no harsh outlines, no photorealistic skin texture, no facial features, no realistic photo
```

## 產出規格

- **正方形**，建議至少 512×512px（顯示時會被裁切成圓形，邊緣留一點安全範圍）
- 去背或簡單背景皆可（背景會被圓形裁切蓋掉，不影響）
- 檔名務必完全照下表命名（大小寫、連字號都要一致），存好直接丟進專案的 `img/` 資料夾即可，不用改任何程式碼

## 需要生成的 10 張圖

每張都在同一套暖棕色系基礎上做一點色調變化，並依好友暱稱給一個小巧的識別意象（維持抽象剪影、不畫臉），方便使用者在好友列表裡一眼認出誰是誰：

---

**`avatar-friend-3.png`** — 好友暱稱：夜貓子，主色 `#8B6F5C`（暗夜棕）
```
flat vector avatar icon, abstract friendly character silhouette, deep dusky brown tones (#8B6F5C, #5C4A3D), tiny crescent-moon accent motif, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-4.png`** — 好友暱稱：拿鐵不加糖，主色 `#B8895F`（咖啡拿鐵）
```
flat vector avatar icon, abstract friendly character silhouette, warm latte-brown tones (#B8895F, #7A5432), tiny coffee-cup-foam swirl accent motif, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-5.png`** — 好友暱稱：旅行者42，主色 `#C9976B`（赤陶橘棕）
```
flat vector avatar icon, abstract friendly character silhouette, warm terracotta tones (#C9976B, #8C6446), tiny compass or paper-airplane accent motif, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-6.png`** — 好友暱稱：薄荷茶，主色 `#C2A379`（暖棕 + 薄荷點綴）
```
flat vector avatar icon, abstract friendly character silhouette, warm tan tones (#C2A379, #8C6F52) with a small mint-green accent leaf motif (#9CC3A0), simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-7.png`** — 好友暱稱：微光，主色 `#D4A574`（暖金棕）
```
flat vector avatar icon, abstract friendly character silhouette, warm golden-tan tones (#D4A574, #96703F), tiny glowing spark or firefly accent motif, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-8.png`** — 好友暱稱：溫柔的風，主色 `#CBA283`（柔霧棕）
```
flat vector avatar icon, abstract friendly character silhouette, soft muted beige-brown tones (#CBA283, #8F6B52), tiny gentle wind-swirl accent motif, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-9.png`** — 好友暱稱：深呼吸練習生，主色 `#B58F6C`（沉穩棕）
```
flat vector avatar icon, abstract friendly character silhouette, calm muted tan tones (#B58F6C, #7C5D42), tiny concentric breathing-circle accent motif, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-10.png`** — 好友暱稱：慢慢走，主色 `#A67C52`（大地棕）
```
flat vector avatar icon, abstract friendly character silhouette, earthy brown tones (#A67C52, #6E4F35), tiny footprint-trail accent motif, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-11.png`** — 好友暱稱：小雨滴，主色 `#B79A81`（灰棕 + 雨滴點綴）
```
flat vector avatar icon, abstract friendly character silhouette, soft grayish-tan tones (#B79A81, #7D6650) with a small dusty-blue raindrop accent motif (#8FA9C4), simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-12.png`** — 好友暱稱：拾光者，主色 `#D9A441`（暖琥珀）
```
flat vector avatar icon, abstract friendly character silhouette, warm amber-gold tones (#D9A441, #96701E), tiny sunbeam or light-ray accent motif, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

---

## 已經有的 2 張（不用重做，僅供風格參考）

| 檔名 | 好友暱稱 |
|---|---|
| `avatar-friend-1.png` | 小海豚 |
| `avatar-friend-2.png` | 向日葵 |

## 交件流程

1. 依上面 10 個 prompt 逐一生成圖片（Midjourney / DALL·E / Stable Diffusion 皆可）。
2. 裁切成正方形，存成對應檔名（`avatar-friend-3.png` ~ `avatar-friend-12.png`）。
3. 全部丟進專案的 `img/` 資料夾（跟現有的 `avatar-friend-1.png`、`avatar-friend-2.png`放同一層）即可，不需要動到任何程式碼。

## 重要提醒

上面「暱稱 → 編號」的對應，是依照目前 `data/friends.json` 好友清單的**順序**（第 1 位好友對應 `-1`，第 2 位對應 `-2`，以此類推），不是永久綁定某個名字。如果之後好友清單順序或內容有調整，麻煩通知一下，看是否需要重新對應或補圖。
