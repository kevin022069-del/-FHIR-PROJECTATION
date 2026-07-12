# 自訂圖片資料夾

把圖片檔案放進這個資料夾，**檔名符合下表**就會自動被網頁抓取顯示，不需要改任何程式碼。
沒有放圖片的項目會維持原本的顏色/漸層設計，不會出現破圖。

重新加圖後，記得在專案根目錄重新執行一次 `node build-index.js`，讓 `index.html` 重新打包。

## Logo
| 檔名 | 用途 | 建議尺寸 |
|---|---|---|
| `logo.png` | App 圖示（行銷首頁導覽列、登入頁、個案/管理員側邊欄），透明背景 PNG | 正方形，至少 128×128 |

## 背景
| 檔名 | 用途 | 建議尺寸 |
|---|---|---|
| `bg-marketing.jpg` | 行銷首頁整體背景 | 1920×1080 以上，橫式 |
| `bg-login.jpg` | 登入頁背景 | 1920×1080 以上，橫式 |
| `bg-crisis.jpg` | 危機介入頁背景 | 1920×1080 以上，橫式 |
| `bg-dashboard.jpg` | 個案端 Dashboard 背景 | 1920×1080 以上，橫式 |

## 插畫 / 物件
| 檔名 | 用途 | 建議尺寸 |
|---|---|---|
| `about-illustration.png` | 行銷首頁「關於我們」插畫 | 橫式，約 4:3 |
| `icon-crisis.png` | 危機介入頁頂部圖示 | 正方形 |
| `icon-celebration.png` | 今日結果頁慶祝圖示 | 正方形 |
| `mascot-devil.png` | 行銷首頁「心魔」互動角色，會完全取代 CSS 繪製造型（含互動傾斜效果）。詳見 `ak.md` | 正方形 400×400+，透明背景 |
| `mascot-angel.png` | 行銷首頁「靈力」互動角色，同上 | 正方形 400×450+，透明背景 |

## PSS-10 壓力量表表情圖示
| 檔名 | 對應選項 |
|---|---|
| `pss-never.png` | 從不（0分） |
| `pss-rarely.png` | 很少（1分） |
| `pss-sometimes.png` | 有時（2分） |
| `pss-often.png` | 常常（3分） |
| `pss-always.png` | 幾乎總是（4分） |

正方形，會裁切成圓形置中顯示，取代原本的 emoji。

## 團隊成員照片（行銷首頁「專業團隊」）
| 檔名 | 對應人物 |
|---|---|
| `avatar-team-1.png` | 陳心理師 |
| `avatar-team-2.png` | 林心理師 |
| `avatar-team-3.png` | 黃心理師 |
| `avatar-team-4.png` | 吳心理師 |

正方形照片，會裁切置中顯示。

## 頭像
| 檔名 | 用途 |
|---|---|
| `avatar-user.png` | 個案端 Dashboard 左下角「自己」的頭像 |
| `avatar-practitioner.png` | 心理師端側邊欄頭像 |
| `avatar-admin.png` | 管理員端右上角頭像 |
| `avatar-friend-1.png` | 好友「小海豚」頭像 |
| `avatar-friend-2.png` | 好友「向日葵」頭像 |

正方形照片，會裁切成圓形置中顯示。

## 靈力商城商品圖
| 檔名 | 商品 |
|---|---|
| `shop-latte.png` | 拿鐵咖啡 |
| `shop-cookie.png` | 手作餅乾 |
| `shop-fruit-tea.png` | 水果茶 |
| `shop-snack-box.png` | 健康零食盒 |
| `shop-movie-ticket.png` | 電影兌換券 |
| `shop-night-light.png` | 紓壓小夜燈 |

正方形，會裁切置中顯示。

## 成就徽章圖
| 檔名 | 徽章 |
|---|---|
| `badge-calm.png` | Calm 保持平靜 |
| `badge-focus.png` | Focus 專注當下 |
| `badge-courage.png` | Courage 勇於面對 |
| `badge-reflection.png` | Reflection 深度反思 |
| `badge-consistency.png` | Consistency 連續 7 天 |
| `badge-growth.png` | Growth 心魔下降 50% |

正方形，會裁切成圓形置中顯示。

## 未來功能搶先看圖示（行銷首頁「未來功能搶先看」小方塊）
| 檔名 | 對應項目 |
|---|---|
| `icon-upcoming-ai-analysis.png` | AI 情緒分析 |
| `icon-upcoming-booking.png` | 線上預約系統 |
| `icon-upcoming-chat.png` | 即時諮詢聊天 |
| `icon-upcoming-health-tracking.png` | 健康追蹤 |
| `icon-upcoming-knowledge-base.png` | 心理健康知識庫 |
| `icon-upcoming-courses.png` | 線上課程 |

38×38 小圖示，沒放圖檔會維持原本純色方塊。Prompt 見 `head.md`。

## 沒有開放自訂的地方
以下維持 CSS 純繪製，沒有做圖片替換（避免破壞資料可讀性或功能性小圖示）：
- 心理師端／管理員端 Dashboard 的整體背景（保留素色，維持資料辨識度）
- Dashboard 心魔/靈力數值小圖示、FHIR 圖示、社群圖示等功能性微小圖示
- 紓壓配對頁的匿名旅伴頭像（設計上刻意保持匿名/隨機）

如果之後也想開放這些，跟我說一聲即可加上。
