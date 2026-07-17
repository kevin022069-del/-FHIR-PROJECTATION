# 好友頭像規模擴充

> 給協作者/AI 繪圖工具的獨立交付版本見專案根目錄的 `friend.md`（內容與下方一致，但去掉了程式碼細節，方便直接轉交）。

「好友動態」原本只有 2 張頭像圖（`avatar-friend-1.png`、`avatar-friend-2.png`），好友數量再多也是這 2 張輪流循環套用，同一頁常常出現一堆撞臉的好友。這次擴充：

- 頭像張數從 **2 張 → 對應目前好友數量（12 張）**，改成「每位好友一張專屬編號頭像」，不再用 `i % 2` 循環。
- 對應邏輯：`avatar-friend-N.png` 的 `N` = 好友在 `data/friends.json` 清單中的順序（第 1 位好友用 `-1`，第 2 位用 `-2`，以此類推）。
- 程式碼修改位置：`ScreenDashboard.dc.html` 的 `renderVals()`，`friends` / `filteredFriends` / `friendActivity` 三處的 `avatarLayer` 都從 `` `./img/avatar-friend-${(i % 2) + 1}.png` `` 改成 `` `./img/avatar-friend-${i + 1}.png` ``。改完已重新執行 `node build-index.js` 打包。
- 沒有對應圖片的好友會 fallback 顯示原本的暖棕色漸層圓形（`radial-gradient(#D19A76,#9A6B54)`），不會破圖，行為與其他圖片替換邏輯一致。

✅ **2026-07-17 更新**：10 張新頭像圖已經全部生成並放入 `img/`，12 張好友頭像已 100% 齊全。實測「好友動態」與「好友列表」畫面，12 位好友都各自顯示專屬圖像，不再共用/循環。

## 好友頭像清單與圖示狀態

目前 `data/friends.json` 共有 12 位好友（依清單順序）：

| # | 圖示檔名 | 好友暱稱 | 圖示狀態 |
|---|---|---|---|
| 1 | `avatar-friend-1.png` | 小海豚 | ✅ 已有 |
| 2 | `avatar-friend-2.png` | 向日葵 | ✅ 已有 |
| 3 | `avatar-friend-3.png` | 夜貓子 | ✅ 已有 |
| 4 | `avatar-friend-4.png` | 拿鐵不加糖 | ✅ 已有 |
| 5 | `avatar-friend-5.png` | 旅行者42 | ✅ 已有 |
| 6 | `avatar-friend-6.png` | 薄荷茶 | ✅ 已有 |
| 7 | `avatar-friend-7.png` | 微光 | ✅ 已有 |
| 8 | `avatar-friend-8.png` | 溫柔的風 | ✅ 已有 |
| 9 | `avatar-friend-9.png` | 深呼吸練習生 | ✅ 已有 |
| 10 | `avatar-friend-10.png` | 慢慢走 | ✅ 已有 |
| 11 | `avatar-friend-11.png` | 小雨滴 | ✅ 已有 |
| 12 | `avatar-friend-12.png` | 拾光者 | ✅ 已有 |

> **重要**：這個對應是「依清單順序」而不是綁定名字。如果之後調整 `data/friends.json` 裡好友的排列順序或新增/刪除好友，`avatar-friend-N.png` 對應到的人也會跟著變。如果未來好友數超過 12 位，只要照同樣規則命名 `avatar-friend-13.png`…就會自動套用，不用改程式碼。

## 尚未新增的好友頭像 — AI 繪圖 Prompt

沿用 `img/IMAGE_PROMPTS.md` 的好友頭像共用風格（抽象、卡通化、匿名感，跟團隊心理師的真人照片風格區隔開來）：

```
flat vector avatar icon, abstract friendly character silhouette, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines, no text, no watermark
```

以下 10 張每張都在暖棕色系基礎上做一點色調變化，並依暱稱給一個小巧的識別意象（維持抽象、不畫五官），方便在好友列表裡一眼分辨：

**`avatar-friend-3.png`** — 夜貓子，主色 `#8B6F5C`（暗夜棕）
```
flat vector avatar icon, abstract friendly character silhouette, deep dusky brown tones (#8B6F5C, #5C4A3D), tiny crescent-moon accent motif, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-4.png`** — 拿鐵不加糖，主色 `#B8895F`（咖啡拿鐵）
```
flat vector avatar icon, abstract friendly character silhouette, warm latte-brown tones (#B8895F, #7A5432), tiny coffee-cup-foam swirl accent motif, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-5.png`** — 旅行者42，主色 `#C9976B`（赤陶橘棕）
```
flat vector avatar icon, abstract friendly character silhouette, warm terracotta tones (#C9976B, #8C6446), tiny compass or paper-airplane accent motif, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-6.png`** — 薄荷茶，主色 `#C2A379`（暖棕 + 薄荷點綴）
```
flat vector avatar icon, abstract friendly character silhouette, warm tan tones (#C2A379, #8C6F52) with a small mint-green accent leaf motif (#9CC3A0), simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-7.png`** — 微光，主色 `#D4A574`（暖金棕）
```
flat vector avatar icon, abstract friendly character silhouette, warm golden-tan tones (#D4A574, #96703F), tiny glowing spark or firefly accent motif, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-8.png`** — 溫柔的風，主色 `#CBA283`（柔霧棕）
```
flat vector avatar icon, abstract friendly character silhouette, soft muted beige-brown tones (#CBA283, #8F6B52), tiny gentle wind-swirl accent motif, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-9.png`** — 深呼吸練習生，主色 `#B58F6C`（沉穩棕）
```
flat vector avatar icon, abstract friendly character silhouette, calm muted tan tones (#B58F6C, #7C5D42), tiny concentric breathing-circle accent motif, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-10.png`** — 慢慢走，主色 `#A67C52`（大地棕）
```
flat vector avatar icon, abstract friendly character silhouette, earthy brown tones (#A67C52, #6E4F35), tiny footprint-trail accent motif, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-11.png`** — 小雨滴，主色 `#B79A81`（灰棕 + 雨滴點綴）
```
flat vector avatar icon, abstract friendly character silhouette, soft grayish-tan tones (#B79A81, #7D6650) with a small dusty-blue raindrop accent motif (#8FA9C4), simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

**`avatar-friend-12.png`** — 拾光者，主色 `#D9A441`（暖琥珀）
```
flat vector avatar icon, abstract friendly character silhouette, warm amber-gold tones (#D9A441, #96701E), tiny sunbeam or light-ray accent motif, simple rounded shapes, circular composition, minimal and cute, flat illustration, no outlines
```

---

## 加入流程

1. 用上面的 prompt 逐一生成圖片。
2. 裁切成正方形、去背（透明背景 PNG），依上表檔名放進 `img/` 資料夾。
3. 在專案根目錄執行 `node build-index.js` 重新打包 `index.html`，即可在「好友動態」與「好友列表」看到新頭像套用。
4. 之後若 `data/friends.json` 增減好友或調整順序，記得同步檢查頭像編號是否還對得上，或補上新增好友的 `avatar-friend-N.png`。

---

# 成就徽章（勳章）規模擴充

「成就徽章」功能原本只有 6 枚固定勳章，且解鎖狀態是寫死的（前 3 枚一定亮、後 3 枚一定灰）。這次擴充：

- 勳章數量從 **6 枚 → 16 枚**（新增 10 枚）。
- 每枚勳章都改成依照玩家「真實進度」判斷是否解鎖（心魔指數、靈力點數、任務完成度、壓力量表結果、好友數、簽到狀態…），不再是假資料。
- 徽章頁新增「已解鎖 X / 16 枚勳章」總覽列，以及未解鎖徽章右上角的 🔒 標示。

程式碼修改位置：`ScreenDashboard.dc.html`（`BADGES` 常數 + `renderVals()` 中的 `badges` 計算 + 徽章卡片模板）。改完記得執行 `node build-index.js` 重新打包 `index.html`。

✅ **2026-07-17 更新**：新增的 10 枚勳章圖示已經全部生成並放入 `img/`，16 枚勳章圖示已 100% 齊全（實測畫面已確認全部正確載入、不再顯示色塊 fallback）。

## 完整勳章清單與解鎖條件

| # | 圖示檔名 | 名稱 | 說明 | 解鎖條件（程式邏輯） | 主色 | 圖示狀態 |
|---|---|---|---|---|---|---|
| 1 | `badge-calm.png` | Calm | 完成今日簽到 | `checkedInToday` 為真 | `#9CC3A0` 薄荷綠 | ✅ 已有 |
| 2 | `badge-focus.png` | Focus | 完成第一項任務 | `tasksDone >= 1` | `#8FA9C4` 藍 | ✅ 已有 |
| 3 | `badge-courage.png` | Courage | 完成壓力量表評估 | `pssCategory` 有值 | `#A688B0` 紫 | ✅ 已有 |
| 4 | `badge-reflection.png` | Reflection | 完成每日總結 | `summaryDone` 為真 | `#D19A76` 棕 | ✅ 已有 |
| 5 | `badge-consistency.png` | Consistency | 連續 7 天修練 | `completed && checkedInToday`（暫代，尚無真正的連續天數計數器，見下方備註） | `#E8B44C` 金 | ✅ 已有 |
| 6 | `badge-growth.png` | Growth | 心魔降至 40 以下 | `mindDemon <= 40` | `#557A60` 深綠 | ✅ 已有 |
| 7 | `badge-day-complete.png` | Day Complete | 完成一整天旅程 | `completed` 為真 | `#6ECBAF` 青綠 | ✅ 已有 |
| 8 | `badge-task-master.png` | Task Master | 一日內完成所有任務 | `tasksTotal > 0 && tasksDone === tasksTotal` | `#C97B4A` 焦糖橘 | ✅ 已有 |
| 9 | `badge-inner-peace.png` | Inner Peace | 心魔降至 20 以下 | `mindDemon <= 20` | `#3F5C48` 深林綠 | ✅ 已有 |
| 10 | `badge-spirit-spark.png` | Spirit Spark | 靈力達 100 | `spiritPower >= 100` | `#F0C868` 淺金 | ✅ 已有 |
| 11 | `badge-spirit-adept.png` | Spirit Adept | 靈力達 300 | `spiritPower >= 300` | `#D9A441` 中金 | ✅ 已有 |
| 12 | `badge-spirit-master.png` | Spirit Master | 靈力達 500 | `spiritPower >= 500` | `#A67C27` 古銅金 | ✅ 已有 |
| 13 | `badge-low-stress.png` | Low Stress | 壓力量表達成低壓力 | `pssCategory === 'low'` | `#B7D9A8` 淺綠 | ✅ 已有 |
| 14 | `badge-steady-mind.png` | Steady Mind | 曾勇敢尋求危機支援 | `highRisk` 為真 | `#E29C8B` 珊瑚粉 | ✅ 已有 |
| 15 | `badge-companion.png` | Companion | 認識第一位旅伴 | `friends.length >= 1` | `#7FB3D5` 天藍 | ✅ 已有 |
| 16 | `badge-social-butterfly.png` | Social Butterfly | 好友數達 3 人 | `friends.length >= 3` | `#6C8FB0` 深藍 | ✅ 已有 |

> **Consistency 備註**：目前 App 狀態（`MindHarbor.dc.html`）沒有儲存「連續打卡天數」的欄位，只有「今天是否簽到」。這枚勳章暫時用「今天完整走完一輪修練」當代理條件，之後如果要做真正的連續天數，需要在登入狀態多存一個 `streakDays` 欄位並在每天簽到時累加/中斷重置。

---

## 尚未新增的勳章圖標 — AI 繪圖 Prompt

以下 10 個是**目前 `img/` 資料夾裡還沒有的**徽章圖示。生成時記得都加上專案共用的風格前綴（與 `img/IMAGE_PROMPTS.md` 一致），確保跟既有 6 枚徽章風格統一：

### 共用風格前綴（貼在每個 prompt 後面）

```
flat vector illustration, soft minimalist wellness-app aesthetic, warm cream and sage green color palette (#F4F0E7 cream, #557A60 sage green, #88AE8E light green, #DCE6DB pale mint, #D19A76 warm tan, #E8B44C soft gold), gentle rounded shapes, soft radial-gradient shading for subtle depth, no hard black outlines, generous negative space, calm therapeutic mood, Scandinavian minimalism meets kawaii mascot design, clean and friendly, no text, no watermark, high resolution
```

負面 prompt（若工具支援）：
```
no text, no watermark, no harsh outlines, no photorealistic skin texture (illustrations only)
```

生成規格：正方形、置中構圖，之後會被裁切成圓形顯示（44×44px 起跳，建議至少 256×256px 出圖）。

---

**`badge-day-complete.png`** — 主色 `#6ECBAF`（青綠）
```
flat vector circular badge icon representing "completing a full day's journey", a small checkmark inside a sunset/horizon arc motif, teal-green tones (#6ECBAF), minimal flat design, centered composition
```

**`badge-task-master.png`** — 主色 `#C97B4A`（焦糖橘）
```
flat vector circular badge icon representing "task mastery", a small stacked checklist or clipboard with checkmarks motif, caramel-orange tones (#C97B4A), minimal flat design, centered composition
```

**`badge-inner-peace.png`** — 主色 `#3F5C48`（深林綠）
```
flat vector circular badge icon representing "deep inner peace", a lotus flower or calm seated silhouette motif, deep forest-green tones (#3F5C48), minimal flat design, centered composition
```

**`badge-spirit-spark.png`** — 主色 `#F0C868`（淺金）
```
flat vector circular badge icon representing "first spark of inner energy", a small single glowing spark or firefly motif, pale gold tones (#F0C868), minimal flat design, centered composition
```

**`badge-spirit-adept.png`** — 主色 `#D9A441`（中金）
```
flat vector circular badge icon representing "growing inner energy", a small cluster of three glowing sparks or a rising flame motif, amber-gold tones (#D9A441), minimal flat design, centered composition
```

**`badge-spirit-master.png`** — 主色 `#A67C27`（古銅金）
```
flat vector circular badge icon representing "mastery of inner energy", a radiant sun or blazing torch motif, deep bronze-gold tones (#A67C27), minimal flat design, centered composition
```

**`badge-low-stress.png`** — 主色 `#B7D9A8`（淺綠）
```
flat vector circular badge icon representing "achieving low stress", a gentle smiling leaf or calm butterfly motif, soft pale-green tones (#B7D9A8), minimal flat design, centered composition
```

**`badge-steady-mind.png`** — 主色 `#E29C8B`（珊瑚粉）
```
flat vector circular badge icon representing "courage to ask for help in a crisis", a small steady anchor or open helping-hand motif, soft coral-pink tones (#E29C8B), minimal flat design, centered composition
```

**`badge-companion.png`** — 主色 `#7FB3D5`（天藍）
```
flat vector circular badge icon representing "making a first companion", two small overlapping friendly circles or a handshake motif, sky-blue tones (#7FB3D5), minimal flat design, centered composition
```

**`badge-social-butterfly.png`** — 主色 `#6C8FB0`（深藍）
```
flat vector circular badge icon representing "a growing circle of friends", a small friendly butterfly or three connected dots/nodes motif, deeper blue tones (#6C8FB0), minimal flat design, centered composition
```

---

## 加入流程

1. 用上面的 prompt 逐一生成圖片（Midjourney / DALL·E / Stable Diffusion 皆可）。
2. 裁切成正方形、去背（透明背景 PNG），檔名依照上表命名，放進 `img/` 資料夾。
3. 在專案根目錄執行：
   ```
   node build-index.js
   ```
   重新打包 `index.html`，即可在「成就徽章」頁看到新圖示套用。
4. 若之後要新增更多勳章，只要在 `ScreenDashboard.dc.html` 的 `BADGES` 陣列多加一筆 `{name, desc, color, slug, test}`，並補上對應的 `img/badge-{slug}.png` 即可，不需要改其他地方。
