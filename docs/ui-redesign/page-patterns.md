本文檔提供山伴網站各種頁面類型的設計模式和建議，作為開發團隊實施重設計的參考。

## 通用頁面結構

每個頁面都應遵循以下基本結構：

```
頂部導航欄
|
頁面標題區域（可選）
|
主要內容區域
|
行動召喚區域（可選）
|
頁腳
```

## 首頁設計模式

### 英雄區塊

#### 設計規範

- **布局**：全屏寬度，高度為視窗高度的 80-90%
- **背景**：高品質的登山照片，添加深色漸變蒙版
- **內容**：左對齊的標題、副標題和行動按鈕
- **效果**：輕微的視差滾動效果，背景圖片帶有細微動態

#### 示例結構

```html
<section class="hero">
  <div class="hero-background">
    <!-- 背景圖片和蒙版 -->
  </div>
  <div class="container">
    <div class="hero-content">
      <h1>找人一起爬山，從未如此簡單</h1>
      <p class="hero-subtitle">無論你是尋找專業嚮導、經驗豐富的夥伴，還是想認識志同道合的朋友，山伴都能幫你找到完美的登山搭檔。</p>
      <div class="hero-buttons">
        <a href="/companions" class="btn-primary">尋找夥伴</a>
        <a href="/create-request" class="btn-secondary">發布需求</a>
      </div>
    </div>
  </div>
</section>
```

### 特色區塊

#### 設計規範

- **布局**：三列網格（行動裝置降為單列）
- **風格**：卡片式設計，帶有陰影和懸浮效果
- **內容**：每個卡片包含圖標、標題、簡短描述
- **間距**：卡片之間保持合適間距，視覺上保持呼吸空間

#### 示例結構

```html
<section class="features">
  <div class="container">
    <h2 class="section-title">為什麼選擇山伴？</h2>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon"><!-- SVG圖標 --></div>
        <h3>安全可靠</h3>
        <p>所有夥伴都經過身份驗證，並有完整的評價系統，讓你安心挑選。</p>
      </div>
      <!-- 其他特色卡片 -->
    </div>
  </div>
</section>
```

### 夥伴類型展示

#### 設計規範

- **布局**：水平滾動卡片，或網格布局
- **卡片**：圖片+文字組合，圖片占比較大
- **互動**：懸浮時圖片輕微放大，陰影增強
- **視覺**：每種類型使用不同的強調色標籤

#### 示例結構

```html
<section class="companions-showcase">
  <div class="container">
    <h2 class="section-title">你可以找到的夥伴</h2>
    <div class="companions-slider">
      <div class="companion-type-card">
        <div class="image-container">
          <img src="path/to/image.jpg" alt="專業嚮導" />
          <div class="badge pro">專業嚮導</div>
        </div>
        <div class="card-content">
          <h3>專業嚮導</h3>
          <p>擁有豐富經驗和專業證照，能帶領你安全攀登各種難度的山脈。</p>
          <a href="/companions?type=pro" class="text-link">探索更多 →</a>
        </div>
      </div>
      <!-- 其他夥伴類型卡片 -->
    </div>
  </div>
</section>
```

### 用戶故事區塊

#### 設計規範

- **布局**：左右交替或輪播式設計
- **視覺**：溫暖的背景色，引述符號，用戶頭像
- **內容**：簡短且真實的用戶分享，帶有用戶基本信息
- **互動**：若為輪播，添加流暢的滑動效果和指示器

#### 示例結構

```html
<section class="testimonials">
  <div class="container">
    <h2 class="section-title">用戶分享</h2>
    <div class="testimonials-carousel">
      <div class="testimonial-card">
        <div class="testimonial-quote">
          "作為一個登山新手，我很擔心獨自爬山的安全問題。通過山伴，我找到了一位專業嚮導，不僅帶我安全完成了玉山之旅，還學到了很多登山知識。"
        </div>
        <div class="testimonial-user">
          <img src="path/to/avatar.jpg" alt="陳先生" class="avatar" />
          <div class="user-info">
            <h4>陳先生，38歲</h4>
            <p>台北市</p>
          </div>
        </div>
      </div>
      <!-- 其他見證卡片 -->
      <div class="carousel-indicators"><!-- 指示器 --></div>
    </div>
  </div>
</section>
```

### 行動召喚區塊

#### 設計規範

- **布局**：全寬背景，內容居中對齊
- **視覺**：深色背景搭配山脈剪影或登山相關圖案
- **內容**：醒目標題、簡短描述和明確按鈕
- **設計**：使用強調色，確保行動按鈕視覺突出

#### 示例結構

```html
<section class="cta">
  <div class="container">
    <h2>準備好找尋你的山伴了嗎？</h2>
    <p>無論是為了安全、學習還是社交，山伴都能幫你找到最適合的爬山夥伴。</p>
    <div class="cta-buttons">
      <a href="/register" class="btn-accent">立即加入</a>
      <a href="/how-it-works" class="btn-secondary">了解更多</a>
    </div>
  </div>
</section>
```

## 列表頁設計模式

### 搜尋與過濾區塊

#### 設計規範

- **布局**：可展開/收起的側邊欄（桌面）或頂部過濾區（移動設備）
- **組件**：使用自定義的下拉選單、複選框、滑塊等
- **互動**：過濾時即時更新結果，無需頁面重載
- **可見性**：最常用過濾器優先顯示，次要過濾器可折疊

#### 示例結構

```html
<div class="search-layout">
  <aside class="filters-sidebar">
    <div class="filter-section">
      <h3>登山地點</h3>
      <div class="filter-options">
        <!-- 地點過濾選項 -->
      </div>
    </div>
    <!-- 其他過濾區塊 -->
    <button class="btn-primary apply-filters">應用過濾器</button>
  </aside>

  <main class="results-container">
    <!-- 搜尋結果 -->
  </main>
</div>
```

### 結果列表

#### 設計規範

- **布局**：網格式（推薦）或列表式
- **卡片**：統一尺寸，圖片比例一致
- **信息**：每張卡片顯示關鍵信息（地點、難度、價格等）
- **互動**：懸浮效果，點擊整張卡片跳轉到詳情
- **空狀態**：無結果時顯示友好提示和建議

#### 示例結構

```html
<div class="results-controls">
  <div class="results-count">找到 24 個夥伴</div>
  <div class="view-toggle">
    <button class="grid-view active">網格視圖</button>
    <button class="list-view">列表視圖</button>
  </div>
</div>

<div class="results-grid">
  <a href="/companion/1" class="companion-card">
    <!-- 卡片內容 -->
  </a>
  <!-- 更多卡片 -->
</div>

<div class="pagination">
  <!-- 分頁控制 -->
</div>
```

## 詳情頁設計模式

### 頂部圖片區

#### 設計規範

- **布局**：大型主圖展示，可有縮略圖輪播
- **互動**：點擊查看大圖，支持滑動瀏覽
- **比例**：16:9 或 2:1，保持一致
- **佈局**：主圖可占據頁面全寬，或與內容區保持一致寬度

#### 示例結構

```html
<div class="detail-images">
  <div class="main-image">
    <img src="path/to/large-image.jpg" alt="夥伴照片" />
    <button class="fullscreen-btn">查看大圖</button>
  </div>
  <div class="thumbnails">
    <!-- 縮略圖 -->
  </div>
</div>
```

### 詳情信息區

#### 設計規範

- **布局**：左側主要信息，右側預約/聯絡區塊（行動設備上堆疊）
- **分區**：清晰的內容分區，使用卡片或分隔線區分
- **突出**：重要信息如價格、可用日期等需視覺突出
- **補充**：使用圖標輔助文字，增強可讀性

#### 示例結構

```html
<div class="detail-layout">
  <main class="detail-main">
    <div class="detail-header">
      <h1>林志明 - 專業嚮導</h1>
      <div class="tags">
        <span class="tag">北部山區</span>
        <span class="tag">高海拔</span>
      </div>
    </div>

    <section class="detail-section">
      <h2>關於嚮導</h2>
      <p><!-- 詳細介紹 --></p>
    </section>

    <!-- 更多詳情區塊 -->
  </main>

  <aside class="detail-sidebar">
    <div class="booking-card">
      <div class="price-display">NT$2,500 / 日</div>
      <div class="availability">
        <!-- 可預約日期 -->
      </div>
      <button class="btn-primary full-width">立即預約</button>
      <button class="btn-secondary full-width">聯繫嚮導</button>
    </div>
  </aside>
</div>
```

### 評價區塊

#### 設計規範

- **布局**：評分摘要+具體評價列表
- **視覺**：使用星級和評分條形圖
- **內容**：每則評價顯示用戶頭像、姓名、日期和內容
- **互動**：可擴展長評價，可按評分排序

#### 示例結構

```html
<section class="reviews-section">
  <h2>用戶評價</h2>

  <div class="reviews-summary">
    <div class="average-rating">
      <div class="rating-number">4.9</div>
      <div class="stars">★★★★★</div>
      <div class="total-reviews">32 則評價</div>
    </div>
    <div class="rating-bars">
      <!-- 評分分布條形圖 -->
    </div>
  </div>

  <div class="reviews-list">
    <div class="review-card">
      <!-- 單個評價 -->
    </div>
    <!-- 更多評價 -->
  </div>
</section>
```

## 表單頁面設計模式

### 註冊/登入頁

#### 設計規範

- **布局**：簡潔對稱，避免分心元素
- **視覺**：左側表單，右側可放置品牌圖片或插圖
- **交互**：即時表單驗證，清晰的錯誤提示
- **進度**：多步驟表單需顯示進度指示器

#### 示例結構

```html
<div class="auth-layout">
  <div class="auth-form-container">
    <div class="auth-header">
      <h1>加入山伴</h1>
      <p>創建帳戶，開始尋找你的完美登山夥伴</p>
    </div>

    <form class="auth-form">
      <!-- 表單元素 -->
      <button type="submit" class="btn-primary full-width">註冊</button>
    </form>

    <div class="auth-alternatives">
      <p>已有帳戶？ <a href="/login">登入</a></p>
    </div>
  </div>

  <div class="auth-image">
    <img src="path/to/mountain-image.jpg" alt="登山圖片" />
  </div>
</div>
```

### 發布需求頁

#### 設計規範

- **布局**：多步驟流程，每步聚焦一種類型的信息
- **引導**：清晰的步驟指示與幫助文字
- **預覽**：提供最終需求的預覽功能
- **輔助**：適當添加提示和信息框

#### 示例結構

```html
<div class="form-container">
  <div class="form-steps">
    <!-- 步驟指示器 -->
  </div>

  <form class="multi-step-form">
    <div class="form-step active" id="step1">
      <h2>基本信息</h2>
      <!-- 表單元素 -->
      <div class="form-navigation">
        <button type="button" class="btn-primary next-step">下一步</button>
      </div>
    </div>

    <!-- 更多步驟 -->
  </form>
</div>
```

## 響應式設計考量

### 移動設備優化

- 導航轉為漢堡選單
- 卡片從多列變為單列
- 過濾器轉為固定頂部展開式
- 按鈕尺寸增大，確保易於點擊
- 間距適當調整，確保內容易讀

### 平板設備考量

- 導航保留完整性，但可能簡化部分選項
- 網格布局從 3 列調整為 2 列
- 側邊欄可折疊，節省空間
- 確保表單元素適合觸控操作

### 桌面大屏優化

- 增加內容密度，展示更多信息
- 增強視覺效果，如視差滾動
- 添加快捷鍵支持
- 考慮添加懸浮預覽功能

## 通用設計原則

### 視覺層次

- 使用大小、顏色、間距建立清晰的視覺層次
- 重要元素應更大、更明顯或使用強調色
- 相關內容應在視覺上分組
- 使用空白空間創建呼吸和分隔

### 一致性

- 保持元素風格統一（按鈕、卡片、表單等）
- 維持統一的色彩方案和排版
- 交互模式應前後一致
- 在所有設備上保持一致的品牌體驗

### 可訪問性

- 確保文字與背景對比度符合 WCAG 2.1 AA 標準
- 提供足夠大的點擊/觸摸區域
- 支持鍵盤導航
- 考慮色盲用戶的色彩選擇

# 山伴 - 頁面設計模式指南
