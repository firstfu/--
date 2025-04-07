# 山伴資料頁面 - 設計規範

本文檔提供「山伴」平台資料頁面的設計規範，包括視覺設計、互動設計、排版規則和使用者體驗準則，確保所有資料頁面具有一致的專業形象，並提供最佳的使用者體驗。

## 設計原則

### 1. 專業權威性

資料頁面設計應體現「山伴」平台的專業形象，使用清晰、嚴謹的版面設計和適當的視覺元素，建立使用者對內容的信任感。

### 2. 使用者導向

以使用者需求為中心，優化內容的可讀性、可掃描性和可用性，確保使用者能快速找到所需資訊。

### 3. 品牌一致性

資料頁面應與「山伴」主站保持視覺一致性，使用相同的色彩系統、排版風格和設計語言，確保整體品牌體驗的連貫性。

### 4. 響應式設計

所有頁面必須完全支援響應式設計，在不同裝置（桌面、平板、手機）上提供最佳的瀏覽體驗。

## 視覺設計規範

### 1. 色彩系統

#### 主要色彩

- **主色調**：#4CAF50（自然綠）

  - 用於主要按鈕、標題強調、重要連結

- **輔助色**：#2E7D32（深綠）

  - 用於 hover 狀態、次要按鈕背景、深色區塊

- **強調色**：#FF9800（秋橙）
  - 用於重要提示、行動號召按鈕、標籤

#### 中性色調

- **深灰**：#333333

  - 主要文字顏色

- **中灰**：#666666

  - 次要文字、說明文字

- **淺灰**：#EEEEEE
  - 背景色、分隔線、邊框

#### 功能色彩

- **成功色**：#4CAF50（綠色）
- **警告色**：#FF9800（橙色）
- **危險色**：#F44336（紅色）
- **資訊色**：#2196F3（藍色）

### 2. 排版系統

#### 字體規範

- **主要字體**：'Noto Sans TC', sans-serif

  - 用於所有中文內容和導航

- **輔助字體**：'Montserrat', sans-serif
  - 用於英文標題、數字和特殊強調文字

#### 字級尺寸

- **頁面標題(H1)**：28px/1.2（桌面）；24px/1.2（行動）
- **主要段落標題(H2)**：24px/1.3（桌面）；20px/1.3（行動）
- **次要段落標題(H3)**：20px/1.4（桌面）；18px/1.4（行動）
- **小標題(H4)**：18px/1.4（桌面）；16px/1.4（行動）
- **正文文字**：16px/1.6（桌面）；16px/1.5（行動）
- **輔助文字**：14px/1.5
- **說明文字**：12px/1.5

#### 行高與段落間距

- **標題行高**：1.2-1.4 倍字號
- **正文行高**：1.5-1.8 倍字號
- **段落間距**：1.5 倍正文行高
- **相關段落間距**：1 倍正文行高

### 3. 圖像規範

#### 圖片風格

- **真實性**：優先使用真實的登山照片，避免過度濾鏡和不自然編輯
- **高品質**：使用高解析度、清晰、光線充足的圖片
- **多樣性**：展示不同季節、天氣條件和角度的登山場景
- **人物視角**：適當加入登山者視角的照片，增加親近感

#### 圖片技術規範

- **格式**：

  - 照片使用 JPEG 格式，品質設定為 80-85%
  - 圖標和簡單圖形使用 SVG 或 PNG 格式

- **尺寸與解析度**：

  - 主視覺圖片：1920px（寬）x 1080px（高）
  - 內容圖片：最小寬度 800px，最大寬度 1200px
  - 縮圖：400px（寬）x 300px（高）
  - 所有圖片解析度至少為 72dpi

- **圖片最佳化**：
  - 所有圖片需進行壓縮處理
  - 使用延遲載入技術
  - 提供適合不同裝置的圖片尺寸（使用 srcset 屬性）

#### 圖示系統

- 使用一致的線條風格圖示集
- 圖示顏色應與整體色彩系統協調
- 互動元素的圖示應提供 hover 狀態視覺反饋

### 4. 佈局系統

#### 網格系統

- 基於 12 欄網格系統
- 桌面版側邊留白：最小 5%，理想 10%
- 行動版側邊留白：16px

#### 內容區塊

- **主要內容區**：最大寬度 1200px，置中對齊
- **文字內容區**：最大寬度 800px，確保最佳可讀性
- **卡片與方框**：圓角 4px，輕微陰影（0px 2px 4px rgba(0,0,0,0.1)）

#### 間距系統

使用 8px 為基礎單位的間距系統：

- **緊湊間距**：8px（0.5rem）
- **標準間距**：16px（1rem）
- **寬鬆間距**：24px（1.5rem）
- **段落間距**：32px（2rem）
- **區塊間距**：48px（3rem）
- **大區塊間距**：64px（4rem）

## 頁面元素規範

### 1. 導航元素

#### 麵包屑導航

- 位於主內容區頂部，標題上方
- 使用 > 或 / 作為分隔符
- 包含完整的層級路徑
- 最後一項為當前頁面（無連結）

```html
<nav class="breadcrumb"><a href="/">首頁</a> / <a href="/knowledge/">知識庫</a> / <a href="/knowledge/trails/">登山路線</a> / <span>玉山主峰</span></nav>
```

#### 頁內導航

- 適用於長內容頁面
- 固定在頁面右側或頂部（行動版）
- 自動高亮當前閱讀區段
- 使用平滑滾動效果

### 2. 內容模塊

#### 路線資訊卡片

- 背景色：淺灰或白色
- 邊框：輕微陰影或 1px 淺灰邊框
- 內間距：24px
- 包含：基本資訊表格、地圖縮圖、難度指示器、季節適宜度

```html
<div class="route-card">
  <div class="route-info">
    <ul>
      <li><span>路線長度:</span> 8.5公里</li>
      <li><span>海拔高度:</span> 3,952公尺</li>
      <li><span>所需時間:</span> 2天1夜</li>
      <!-- 其他資訊 -->
    </ul>
  </div>
  <div class="route-map">
    <img src="/img/maps/yushan-route.jpg" alt="玉山主峰路線圖" />
  </div>
</div>
```

#### 警告與提示框

- **注意提示**：淺藍背景，藍色左邊框
- **重要提示**：淺橙背景，橙色左邊框
- **警告提示**：淺紅背景，紅色左邊框
- **提示框**：帶有適當圖標，四周內間距 16px

```html
<div class="alert alert-warning">
  <div class="alert-icon">⚠️</div>
  <div class="alert-content">
    <h4>注意事項</h4>
    <p>玉山國家公園需提前申請入園證，建議至少提前一個月申請。</p>
  </div>
</div>
```

#### 步驟說明

- 清晰的數字標示
- 步驟間明顯間隔
- 可選用卡片式設計或時間軸設計
- 適當添加步驟圖片說明

```html
<div class="steps">
  <div class="step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>準備入山申請文件</h4>
      <p>包含身分證正反面影本、入山申請表等材料...</p>
    </div>
  </div>
  <!-- 更多步驟 -->
</div>
```

### 3. 互動元素

#### 按鈕設計

- **主要按鈕**：實心綠色背景，白色文字
- **次要按鈕**：白色背景，綠色邊框與文字
- **文字按鈕**：無背景與邊框，僅帶下劃線效果
- **所有按鈕**：內間距 12px 24px，圓角 4px

```html
<a href="#" class="btn btn-primary">尋找山伴</a>
<a href="#" class="btn btn-secondary">了解更多</a>
<a href="#" class="btn btn-text">查看相關資訊</a>
```

#### 表格設計

- 清晰的表頭（稍深背景色）
- 隔行變色（提高可讀性）
- 響應式設計（行動版可水平滾動）
- 適當內間距（垂直 12px，水平 16px）

```html
<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th>難度等級</th>
        <th>所需經驗</th>
        <th>體能要求</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>初級</td>
        <td>無需經驗</td>
        <td>一般體能即可</td>
      </tr>
      <!-- 更多行 -->
    </tbody>
  </table>
</div>
```

#### 標籤與徽章

- 圓角設計（4px）
- 適當內間距（垂直 2px，水平 8px）
- 按類別區分顏色
- 字體大小較小（14px）

```html
<span class="tag tag-difficulty-medium">中級難度</span>
<span class="tag tag-season-autumn">秋季推薦</span>
<span class="tag tag-feature-view">絕佳視野</span>
```

### 4. 媒體元素

#### 圖片展示

- 主要圖片寬度 100%
- 圖說置於圖片下方，使用較小字體（14px）
- 群組圖片使用網格布局
- 支援點擊放大檢視

```html
<figure class="image">
  <img src="/img/trails/yushan-peak.jpg" alt="玉山主峰全景" />
  <figcaption>玉山主峰山頂360度全景，天氣晴朗時可遠眺中央山脈</figcaption>
</figure>
```

#### 影片嵌入

- 響應式容器（保持 16:9 比例）
- 自動顯示影片縮圖
- 載入優化（點擊後才載入完整影片）
- 提供影片說明文字

```html
<div class="video-container">
  <iframe src="https://www.youtube.com/embed/..." frameborder="0" allowfullscreen></iframe>
</div>
<p class="video-caption">影片：玉山主峰登山路線全程紀錄</p>
```

#### 地圖嵌入

- 預設適當的縮放比例
- 提供互動控制項
- 允許全螢幕檢視
- 可選擇離線地圖版本下載

```html
<div class="map-container">
  <div id="trail-map" class="interactive-map"></div>
  <div class="map-controls">
    <button class="btn-map-control" data-action="zoom-in">放大</button>
    <button class="btn-map-control" data-action="zoom-out">縮小</button>
    <a href="/files/maps/yushan-offline.pdf" class="btn-map-download">下載離線地圖</a>
  </div>
</div>
```

## 響應式設計規範

### 桌面版（>1024px）

- 全寬度內容區塊
- 側邊導航與主內容並排顯示
- 多欄內容佈局
- 圖片與文字並排展示

### 平板版（768px-1024px）

- 側邊導航轉為頂部水平導航
- 減少欄數（通常為 2 欄）
- 保持關鍵內容的視覺層次
- 調整間距與留白（略微減少）

### 行動版（<768px）

- 單欄佈局
- 折疊式導航
- 更緊湊的內容間距
- 較大的互動元素（便於觸控）
- 調整字體大小與行高
- 減少非必要裝飾元素

### 斷點設定

- **小型行動裝置**：< 576px
- **大型行動裝置**：576px - 767px
- **平板裝置**：768px - 1023px
- **桌面裝置**：1024px - 1439px
- **大型桌面**：≥ 1440px

## 頁面加載優化

### 關鍵路徑渲染

- 內嵌關鍵 CSS
- 延遲加載非關鍵 JavaScript
- 優先載入可視區域內容

### 圖片優化策略

- 使用 `srcset` 與 `sizes` 屬性提供多種尺寸
- 使用 `<picture>` 元素提供不同格式選項
- 實作延遲載入技術
- 使用漸進式 JPG 格式

```html
<picture>
  <source srcset="/img/trails/yushan-peak.webp" type="image/webp" />
  <source srcset="/img/trails/yushan-peak.jpg" type="image/jpeg" />
  <img
    src="/img/trails/yushan-peak.jpg"
    alt="玉山主峰全景"
    loading="lazy"
    srcset="/img/trails/yushan-peak-400.jpg 400w, /img/trails/yushan-peak-800.jpg 800w, /img/trails/yushan-peak-1200.jpg 1200w"
    sizes="(max-width: 576px) 100vw,
           (max-width: 1024px) 800px,
           1200px"
  />
</picture>
```

### 動畫與過渡效果

- 使用 CSS 轉換與漸變
- 動畫應微妙且有目的，避免過度
- 提供減少動畫的訪問選項
- 考慮 `prefers-reduced-motion` 媒體查詢

## 無障礙設計準則

### 色彩對比

- 所有文字需滿足 WCAG AA 標準對比度
- 主要內容至少達到 4.5:1 對比度
- 大字標題至少達到 3:1 對比度

### 鍵盤可訪問性

- 所有互動元素可通過鍵盤訪問
- 明確的鍵盤焦點狀態
- 邏輯的鍵盤 Tab 順序

### 螢幕閱讀器支援

- 所有非裝飾性圖片提供 alt 文字
- 使用適當的 HTML5 語義化標籤
- 複雜互動元素添加 ARIA 標籤

## 頁面模板範例

### 路線詳情頁模板架構

```html
<!DOCTYPE html>
<html lang="zh-TW">
  <head>
    <!-- Meta 標籤 -->
    <title>[路線名] 登山路線指南 - 難度、行程和準備建議 | 山伴</title>
    <meta name="description" content="..." />
    <!-- 結構化資料 -->
    <!-- 樣式表 -->
  </head>
  <body>
    <!-- 全站導航 -->

    <!-- 麵包屑導航 -->
    <div class="breadcrumb-container">...</div>

    <!-- 頁面標題區 -->
    <header class="page-header">
      <h1>[路線名] 登山路線指南</h1>
      <div class="page-meta">
        <!-- 更新日期、閱讀時間、難度指示等 -->
      </div>
    </header>

    <!-- 路線資訊卡片 -->
    <div class="route-info-card">...</div>

    <!-- 頁內導航 -->
    <aside class="page-toc">...</aside>

    <!-- 主要內容區 -->
    <main class="page-content">
      <section id="overview">...</section>
      <section id="access">...</section>
      <section id="route-details">...</section>
      <section id="equipment">...</section>
      <section id="safety">...</section>
      <section id="tips">...</section>
      <section id="find-companions">...</section>
    </main>

    <!-- 相關路線推薦 -->
    <section class="related-routes">...</section>

    <!-- 行動呼籲區塊 -->
    <div class="cta-container">...</div>

    <!-- 全站頁腳 -->
  </body>
</html>
```

## 設計呈現效果檢查清單

在實施設計時，使用以下清單確保頁面符合設計標準：

- [ ] 色彩使用符合品牌規範
- [ ] 排版遵循層次結構和字級規範
- [ ] 間距系統使用一致
- [ ] 互動元素提供適當的視覺反饋
- [ ] 頁面在所有目標裝置上呈現正確
- [ ] 圖片品質高且載入優化
- [ ] 無障礙設計準則全面實施
- [ ] 頁面載入時間在可接受範圍內（<3 秒）
- [ ] 內容佈局清晰易讀
- [ ] 品牌識別一致性

---

本文檔將持續更新。相關技術實施細節請參考[實施計劃](data_pages_implementation.md)文檔。
