# MindHarbor（心靈修練）

第三屆 FHIR 大健康 Projectathon・初賽・FHIR 基礎實作

- **隊伍名稱**：（請填寫）
- **作品名稱**：MindHarbor（心靈修練 / 心魔管理系統）
- **主題領域**：醫療資訊（心理健康／壓力管理）
- **使用者角色**：個案（一般使用者）、心理師、管理員
- **核心 FHIR Resources**：`Patient`、`QuestionnaireResponse`、`Observation`、`Task`、`Flag`、`CareTeam`、`Communication`
  （即時寫入 [HAPI FHIR R4 公開測試伺服器](https://hapi.fhir.org/baseR4)；同一次使用只會建立一筆 `Patient`，後續資源都關聯回同一個 `patientId`）
- **Demo 入口**：
  1. 直接開啟本 repo 的 `index.html`（無需伺服器，可用瀏覽器 file:// 直接雙擊開啟）
  2. 首頁點選登入／註冊 → 任選性別 → 輸入任意帳號密碼即可登入（Demo 階段未做真實帳密驗證）
  3. 依序體驗：AI 陪伴對話 → PSS-10 量表 → 每日修練任務（勾選完成即寫入 FHIR）→ 反思總結（送出即寫入 FHIR）→ 今日結算（可看到 FHIR 寫入筆數）；紓壓配對若偵測到高風險，也會寫入 FHIR `Flag` 並顯示在心理師端「高危通知」
  4. 首頁右下角「紓壓群組」可瀏覽／建立／加入群組聊天（全程匿名），發送訊息會寫入 FHIR `Communication`，加入群組會寫入 `CareTeam`；心理師端「社群互動紀錄」可唯讀查看所有群組
- **如何執行**：
  - 無需安裝任何套件（純前端、無 build 工具鏈、無 npm 依賴）
  - 若修改任一個 `ScreenXXX.dc.html` 或 `MindHarbor.dc.html`，需重新產生 `index.html`：
    ```
    node build-index.js
    ```
  - 產生後直接用瀏覽器開啟 `index.html` 即可預覽

## 專案簡介

MindHarbor 是一個心理健康／壓力管理教育型網站原型：使用者每日透過「AI 陪伴對話 → PSS-10 知覺壓力量表 → 每日修練任務 → 反思總結 → 結果結算（心魔指數／靈力點數）」的遊戲化流程進行自我壓力覺察，並設有個案、心理師、管理員三種角色介面，模擬真實心理諮商機構的後台管理與高風險個案通報流程。

## 技術架構

純前端單頁應用（SPA），以專案自有的 `.dc.html` 元件式框架撰寫：

- `support.js`：執行期核心（dc-runtime）
- `MindHarbor.dc.html`：單一根組件，集中管理全域 state 與畫面路由（`goTo()`）
- `ScreenXXX.dc.html`（共 12 個）：各畫面元件
- `data/*.json`：展示用模擬資料（使用者、群組、心理師個案、商城商品等），與畫面邏輯分離，方便單獨編輯調整規模
- `build-index.js`：將各畫面與 `data/*.json` 預先打包進 `index.html`（`data/*.json` 內嵌為 `window.__MOCK_DATA`），方便以 `file://` 直接雙擊開啟，不需 local server、不需要在執行時 fetch 任何檔案

沒有 React／Vue 等前端框架、沒有 npm 套件管理、沒有其他 build 流程。

## FHIR 串接現況

第一次寫入 FHIR 時（PSS-10 量表、完成任務、送出總結、或紓壓配對高風險通報，以先發生者為準）會先建立一筆 `Patient`，取得的 `patientId` 存回前端 state 並在同一次使用中重複使用，之後的寫入都會關聯回同一位 `Patient`：

- **PSS-10 壓力量表**（`ScreenChat` 送出時）：`QuestionnaireResponse` + `Observation`
- **每日修練任務**（`ScreenTasks` 勾選完成時，逐項寫入）：`Task`
- **反思總結**（`ScreenSummary` 送出時）：`QuestionnaireResponse`
- **紓壓配對高風險通報**（`ScreenPairing` 偵測到高風險並通報心理師時）：`Flag`
- **群組聊天**（`ScreenGroups`）：建立群組或加入群組時寫入 `CareTeam`（成員清單）；每則訊息送出時寫入 `Communication`；訊息內容偵測到高風險字詞時，額外寫入 `Flag` 並通報心理師端

群組聊天全程匿名（沿用紓壓配對的匿名模式），且目前為純前端模擬，尚未接真正的即時通訊後端（WebSocket／輪詢）；心理師端對群組聊天僅有唯讀查看權限。

寫入目標為 HAPI FHIR R4 公開測試伺服器（`hapi.fhir.org/baseR4`）。管理員面板「FHIR 工具」可即時查詢 `Patient`／`QuestionnaireResponse`／`Observation`／`Task`／`Flag`／`CareTeam`／`Communication` 七種真實資源；其餘型別（`CarePlan`／`RiskAssessment`／`Appointment`）仍為示範用途，尚未建立對應的真實寫入邏輯，詳見 `MindHarbor_專案架構與待辦分析.docx`。

## 文件

- `MindHarbor_專案架構與待辦分析.docx`：系統架構統整與待辦分析
- 規劃文件、學習紀錄文件：（撰寫中，將放於 repo 根目錄）
