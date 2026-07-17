# 「觀看介紹」功能製作說明

行銷首頁（`ScreenMarketing.dc.html`）Hero 區塊的「觀看介紹 ▸」按鈕目前完全沒有功能：

```html
<button style="border:1px solid #C9C2B4;background:transparent;color:#423D37;padding:15px 28px;border-radius:999px;font:600 16px 'Noto Sans TC';white-space:nowrap">觀看介紹 ▸</button>
```

沒有 `onClick`，純裝飾。這份文件說明怎麼把它做成 **App 內建的互動式功能導覽（onboarding carousel）**——不需要額外錄影片、純 HTML/CSS/JS、離線用 `file://` 雙擊開啟一樣能用，風格完全沿用現有專案的設計語言。

## 功能行為

1. 點擊「觀看介紹 ▸」→ 彈出全螢幕半透明遮罩 + 置中卡片（Modal）。
2. 卡片內是一張一張的「介紹卡」，每張有：一個圖示/插圖 + 標題 + 一段說明文字。
3. 卡片下方有「上一步 / 下一步」按鈕 + 一排小圓點（目前在第幾張的指示器，點圓點可以跳頁）。
4. 最後一張卡的「下一步」改成「開始今日修練 ›」，直接呼叫 `goToLogin`（跟 Hero 的主要 CTA 一致）。
5. 點遮罩空白處或右上角 ✕ 可以直接關閉。
6. 開啟/關閉都要有淡入淡出＋縮放的動畫（沿用專案 splash 畫面已經在用的手法）。

## 介紹卡內容（建議 6 張，沿用現有素材，不用另外做圖）

| # | 標題 | 說明 | 用到的素材 |
|---|---|---|---|
| 1 | 心魔 · 靈力 | 每天記錄你的「心魔」與「靈力」，看得見的內在成長 | `img/mascot-devil.png`、`img/mascot-angel.png` |
| 2 | PSS-10 壓力量表 | 科學化的壓力量表，幾分鐘了解你今天的壓力狀態 | 沿用 `icon` 手繪風格（跟 Hero 信任條同款） |
| 3 | 每日任務 | 身心練習小任務，完成後累積靈力、平緩心魔 | 沿用 `icon` 手繪風格 |
| 4 | 成就徽章 | 16 種成就徽章，記錄你每一天的修練里程碑 | `img/badge-calm.png`、`img/badge-growth.png` |
| 5 | 紓壓配對 | 認識同樣在努力的旅伴，互相鼓勵、不孤單 | `img/avatar-friend-1.png`、`img/avatar-friend-2.png` |
| 6 | FHIR 健康資料 | 所有記錄同步至 HAPI FHIR R4，串接真實醫療資料標準 | 沿用 `icon` 手繪風格（跟 Hero 信任條同款） |

## 技術實作（怎麼接進 `ScreenMarketing.dc.html`）

### 1. 為什麼不能簡單用 `position:fixed` 蓋滿全螢幕

這個專案已經踩過一次坑（見 `ScreenShop.dc.html` 的兌換成功 toast）：這個畫面最外層的 root div 有 `animation:mh-page-enter .5s ... both`，`animation-fill-mode:both` 會讓 `transform` 的計算值**永久存在**（不是動畫播完就消失），而任何祖先元素只要有作用中的 `transform`，就會變成 `position:fixed` 子孫元素的「定位基準」——導致 `position:fixed` 實際上表現得像 `position:absolute`，只蓋住那個祖先的範圍，而不是整個視窗。

**解法**：Modal 要放在 `<x-dc>` 底下、跟那個有動畫的 root div平行的「兄弟節點」，而不是它的子節點。這樣 `position:fixed` 才會是真正相對於視窗定位。

### 2. State

```js
state = {
  // ...原本的 state
  introOpen: false,
  introStep: 0,
};
```

### 3. 內容陣列（放在 class 外面，跟 `services` 陣列同一層）

```js
const INTRO_SLIDES = [
  { title: '心魔 · 靈力', desc: '每天記錄你的「心魔」與「靈力」，看得見的內在成長。', img: './img/mascot-devil.png' },
  { title: 'PSS-10 壓力量表', desc: '科學化的壓力量表，幾分鐘了解你今天的壓力狀態。', icon: 'lock' },
  { title: '每日任務', desc: '身心練習小任務，完成後累積靈力、平緩心魔。', icon: 'chat' },
  { title: '成就徽章', desc: '16 種成就徽章，記錄你每一天的修練里程碑。', img: './img/badge-growth.png' },
  { title: '紓壓配對', desc: '認識同樣在努力的旅伴，互相鼓勵、不孤單。', img: './img/avatar-friend-1.png' },
  { title: 'FHIR 健康資料', desc: '所有記錄同步至 HAPI FHIR R4，串接真實醫療資料標準。', icon: 'badge' },
];
```

### 4. 按鈕：把原本沒功能的按鈕接上 `openIntro`

```html
<button onClick="{{ openIntro }}" style="border:1px solid #C9C2B4;background:transparent;color:#423D37;padding:15px 28px;border-radius:999px;font:600 16px 'Noto Sans TC';white-space:nowrap">觀看介紹 ▸</button>
```

### 5. Modal markup（放在 `</div>`〈root 結束〉之後、`</x-dc>` 之前 —— 跟手機版 nav dropdown、shop toast 用同一招）

```html
<sc-if value="{{ introOpen }}" hint-placeholder-val="{{ false }}">
  <div style="{{ introBackdropStyle }}" onClick="{{ closeIntro }}">
    <div style="{{ introCardStyle }}" onClick="{{ stopPropagation }}">
      <div onClick="{{ closeIntro }}" style="position:absolute;top:16px;right:16px;width:28px;height:28px;border-radius:50%;background:#F4F0E7;display:flex;align-items:center;justify-content:center;cursor:pointer;font:700 14px 'Noto Sans TC';color:#7C756B">✕</div>

      <div style="{{ introImgStyle }}"></div>
      <div style="font:700 22px 'Quicksand';color:#423D37;text-align:center;margin-bottom:10px">{{ introTitle }}</div>
      <div style="font:400 14px/1.8 'Noto Sans TC';color:#7C756B;text-align:center;max-width:360px;margin:0 auto 26px">{{ introDesc }}</div>

      <div style="display:flex;justify-content:center;gap:8px;margin-bottom:22px">
        <sc-for list="{{ introDots }}" as="dot" hint-placeholder-count="6">
          <div onClick="{{ dot.onClick }}" style="{{ dot.style }}"></div>
        </sc-for>
      </div>

      <div style="display:flex;justify-content:space-between;gap:12px">
        <button onClick="{{ introPrev }}" style="{{ introPrevStyle }}">‹ 上一步</button>
        <button onClick="{{ introNext }}" style="border:none;background:#557A60;color:#FBF9F4;padding:12px 26px;border-radius:999px;font:600 14px 'Noto Sans TC';white-space:nowrap">{{ introNextLabel }}</button>
      </div>
    </div>
  </div>
</sc-if>
```

### 6. `renderVals()` 裡新增的邏輯

```js
const introStep = this.state.introStep;
const isLastIntroStep = introStep === INTRO_SLIDES.length - 1;
const slide = INTRO_SLIDES[introStep];

const introDots = INTRO_SLIDES.map((_, i) => ({
  onClick: () => this.setState({ introStep: i }),
  style: `width:8px;height:8px;border-radius:50%;cursor:pointer;background:${i === introStep ? '#557A60' : '#DCE6DB'};transition:background .2s`,
}));

// ...加進 return { ... } 裡：
openIntro: () => this.setState({ introOpen: true, introStep: 0 }),
closeIntro: () => this.setState({ introOpen: false }),
stopPropagation: (e) => e.stopPropagation(),
introPrev: () => this.setState(s => ({ introStep: Math.max(0, s.introStep - 1) })),
introNext: () => isLastIntroStep ? this.props.goToLogin() : this.setState(s => ({ introStep: Math.min(INTRO_SLIDES.length - 1, s.introStep + 1) })),
introNextLabel: isLastIntroStep ? '開始今日修練 ›' : '下一步 ›',
introPrevStyle: `border:1px solid #C9C2B4;background:transparent;color:${introStep === 0 ? '#C9C2B4' : '#423D37'};padding:12px 22px;border-radius:999px;font:600 13px 'Noto Sans TC';cursor:${introStep === 0 ? 'default' : 'pointer'};visibility:${introStep === 0 ? 'hidden' : 'visible'}`,
introOpen: this.state.introOpen,
introTitle: slide.title,
introDesc: slide.desc,
introDots,
introImgStyle: `width:120px;height:120px;border-radius:50%;margin:0 auto 20px;background:${slide.img ? `url('${slide.img}') center/cover no-repeat,` : ''}radial-gradient(circle at 35% 30%,#DCE6DB,#9CC3A0)`,
introBackdropStyle: `position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;background:rgba(46,42,36,.45);padding:20px;opacity:${this.state.introOpen ? 1 : 0};transition:opacity .3s ease`,
introCardStyle: `position:relative;background:#FBF9F4;border-radius:28px;padding:40px 32px 32px;max-width:420px;width:100%;box-shadow:0 30px 70px rgba(0,0,0,.3);transform:scale(${this.state.introOpen ? 1 : 0.9});transition:transform .3s cubic-bezier(.22,1,.36,1)`,
```

> `stopPropagation` 是為了讓點卡片本體不會觸發背景遮罩的 `closeIntro`（點遮罩空白處才關閉）。

### 7. 放置位置

```html
<div class="mh-dash-root" ...>
  ... 原本整個行銷首頁內容 ...
</div>

<!-- 手機導覽下拉選單、shop toast 都是這樣放：跟有動畫的 root 平行，
     這樣 position:fixed 才會是真正相對於整個視窗 -->
<sc-if value="{{ introOpen }}" ...>
  ... 上面第 5 步的 modal markup ...
</sc-if>

</x-dc>
```

### 8. 加分項目（非必要，但如果要做得更細緻）

- **鍵盤支援**：`componentDidMount` 加一個 `keydown` 監聽，`Escape` 呼叫 `closeIntro`，`ArrowRight`/`ArrowLeft` 呼叫 `introNext`/`introPrev`；`componentWillUnmount` 記得移除監聽（沿用專案裡 `_onMove` 監聽器的清理模式）。
- **卡片切換動畫**：目前上面的設計是「內容瞬間換掉，只有外層 modal 有淡入縮放」；如果想要每張卡片切換時也有左右滑動的動畫，可以比照 `ScreenChat.dc.html` 的 PSS-10 量表做法（用 `introStep` 當 key 讓內容重新渲染，搭配 `transform:translateX(...)` 過渡）。
- **完成後不用每次都從頭播**：可選加一個 `localStorage` 記錄「使用者是否已經看過介紹」，如果想要保留「隨時可以重新看」的彈性，這個可以先不做。

## 驗收方式

實作完後，用瀏覽器打開 `index.html`（或跑 `node build-index.js` 打包後開），點「觀看介紹 ▸」應該：
1. 彈出遮罩 + 卡片，有淡入 + 縮放動畫。
2. 6 張卡片可以用「上一步/下一步」和圓點正確切換。
3. 最後一張的按鈕文字變成「開始今日修練 ›」，點下去會導到登入頁。
4. 點遮罩空白處或 ✕ 會關閉 modal，且不會把使用者導去登入頁。
5. 手機寬度下 modal 也要能正常置中顯示、不跑版（`max-width:420px;width:100%` + `padding:20px` 已經處理好）。
