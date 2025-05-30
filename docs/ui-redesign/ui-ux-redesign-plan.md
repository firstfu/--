# 山伴 - UI/UX 重新設計計劃文檔

## 目錄

1. [現有設計分析](#現有設計分析)
2. [設計參考與靈感](#設計參考與靈感)
3. [視覺風格指南](#視覺風格指南)
4. [UI 元素更新](#UI元素更新)
5. [頁面佈局重設計](#頁面佈局重設計)
6. [導航體驗優化](#導航體驗優化)
7. [響應式設計改進](#響應式設計改進)
8. [互動及動畫](#互動及動畫)
9. [實施計劃](#實施計劃)

## 現有設計分析

### 優點

- 使用 Tailwind CSS 作為基礎，便於維護和擴展
- 清晰的資訊架構和用戶流程
- 綠色主題與登山主題契合
- 良好的基本元素排版

### 待改進之處

- 視覺風格較為基礎，缺乏獨特性和深度
- 色彩方案較為單一，主要依賴綠色調
- 卡片和組件設計相對扁平，缺乏層次感
- 頁面間視覺一致性有待加強
- 缺乏現代化的互動效果和過渡動畫
- 響應式設計在小型設備上的體驗有待優化

## 設計參考與靈感

以下是 Dribbble 上精選的戶外/登山相關設計參考：

1. **Nomad - 登山應用概念**

   - 特點：深色背景搭配自然色調，高品質的戶外攝影圖片
   - 風格：簡約但有深度，強調自然元素與深色背景的對比
   - 靈感應用：可採用類似的色彩對比和高品質圖片展示

2. **HikeDrive - 移動應用概念**

   - 特點：使用大膽的色彩和漸變，圓角設計元素
   - 風格：現代、友好且直觀的介面
   - 靈感應用：可借鑒其漸變按鈕和圓角卡片設計

3. **Fjords Guide - 挪威峽灣旅行應用**

   - 特點：獨特的色彩方案（深綠、灰藍與珊瑚色），優雅的排版
   - 風格：高級且具有地域特色
   - 靈感應用：可採用其色彩配對和精緻的排版風格

4. **Adventropia - 冒險平台**
   - 特點：大膽的字體配對，全幅圖片，引人注目的行動召喚按鈕
   - 風格：沉浸式且具有故事性
   - 靈感應用：可參考其英雄區塊設計和圖文排版方式

## 視覺風格指南

### 色彩方案

**主要色彩**

- 深森林綠（主色）: `#1D473C`
- 中綠色（輔助色）: `#2D8B6B`
- 淺綠色（強調色）: `#55D6A8`

**中性色調**

- 石板灰（主要文字）: `#333E48`
- 暖灰色（次要文字）: `#637381`
- 淺灰色（背景/分割線）: `#F5F7F9`

**輔助色彩**

- 天空藍（輔助）: `#31A8E0`
- 日落橙（強調/行動按鈕）: `#F48C53`
- 山脈紫（強調/標籤）: `#8477D6`

### 排版系統

**標題系統**

- 大標題：`Montserrat`, 700 權重, 2.5-3rem
- 中標題：`Montserrat`, 600 權重, 1.8-2.2rem
- 小標題：`Montserrat`, 600 權重, 1.25-1.5rem

**內文系統**

- 主要內文：`Noto Sans TC`, 400 權重, 1rem
- 次要內文：`Noto Sans TC`, 400 權重, 0.875rem
- 強調文字：`Noto Sans TC`, 500 權重, 1rem

### 陰影系統

- 輕微陰影（卡片）: `0 2px 5px rgba(0, 0, 0, 0.05)`
- 中等陰影（懸浮元素）: `0 4px 12px rgba(0, 0, 0, 0.08)`
- 強調陰影（模態窗口）: `0 10px 25px rgba(0, 0, 0, 0.12)`

### 圓角系統

- 小圓角（按鈕、輸入框）: `0.375rem (6px)`
- 中圓角（卡片、模塊）: `0.75rem (12px)`
- 大圓角（突出模塊）: `1.25rem (20px)`

## UI 元素更新

### 按鈕設計

1. **主要按鈕**

   - 背景：漸變色 `#2D8B6B → #1D473C`
   - 文字：白色
   - 懸浮效果：輕微放大 + 陰影增強
   - 圓角：8px

2. **次要按鈕**

   - 背景：透明
   - 邊框：`#2D8B6B` 1.5px
   - 文字：`#2D8B6B`
   - 懸浮效果：背景輕微填充色彩

3. **強調按鈕**
   - 背景：`#F48C53`
   - 文字：白色
   - 懸浮效果：輕微放大 + 顏色變亮

### 卡片設計

1. **夥伴卡片**

   - 添加輕微立體陰影
   - 增加圖片懸浮縮放效果
   - 添加漸變色標籤（根據夥伴類型）
   - 圖片比例優化，改為 16:9

2. **行程卡片**
   - 增加圖片蒙版效果，底部漸變疊加文字
   - 添加動態效果，懸浮時輕微上移並增強陰影
   - 增加互動性指標（如收藏、分享按鈕）

### 表單元素

1. **輸入框**

   - 增加焦點狀態的動畫過渡
   - 標籤從內部上移的動效
   - 添加輕微的邊框陰影

2. **下拉選單**

   - 自定義樣式，與整體設計統一
   - 添加圖標指示和過渡動畫
   - 選項懸浮狀態優化

3. **複選框和單選按鈕**
   - 自定義樣式，增加品牌辨識度
   - 動態選中效果

## 頁面佈局重設計

### 首頁

1. **英雄區塊**

   - 更換為全屏視差滾動效果
   - 添加動態山脈剪影背景
   - 改用更吸引人的標題和副標題
   - 行動召喚按鈕更為突出，使用強調色

2. **特色區塊**

   - 採用分隔式卡片設計，增加層次感
   - 添加輕微傾斜的分隔線
   - 增加微互動元素
   - 圖標使用半插畫風格

3. **夥伴類型展示**

   - 改為橫向滑動卡片
   - 增加互動性，允許用戶直接從卡片操作
   - 背景添加輕微的地形圖案

4. **用戶故事**
   - 改為輪播式設計
   - 添加用戶照片及活動場景
   - 增加引述符號和背景效果

### 搜尋頁面

1. **搜尋過濾器**

   - 改為可展開/收起的側邊欄
   - 添加視覺化的過濾選項（如難度星級）
   - 價格範圍使用滑塊控制

2. **結果列表**
   - 提供網格和列表兩種查看模式
   - 添加地圖視圖選項
   - 增加懸浮時的詳細信息預覽

### 詳情頁面

1. **頂部圖片區**

   - 改為圖片輪播，展示多個角度
   - 添加沉浸式全屏查看選項
   - 整合地圖位置預覽

2. **資訊區塊**
   - 更清晰的分類標籤
   - 關鍵信息使用圖標+數字展示
   - 用戶評價部分增加互動元素

## 導航體驗優化

### 主導航

1. **頂部導航欄**

   - 添加滾動時的背景模糊效果
   - 當前頁面指示更為明顯
   - 登入/註冊按鈕改為統一風格

2. **移動端導航**
   - 改為從底部彈出的抽屜式導航
   - 添加過渡動畫
   - 增加常用功能快速訪問

### 次級導航

1. **麵包屑導航**

   - 添加簡潔的麵包屑，便於回溯
   - 視覺風格與整體設計統一

2. **頁內導航**
   - 對於長頁面，添加固定的側邊導航
   - 滾動時高亮當前查看區塊

## 響應式設計改進

### 移動端優化

1. **觸控友好**

   - 增大可點擊區域
   - 優化按鈕和輸入框的尺寸
   - 簡化部分複雜操作

2. **排版調整**
   - 單列佈局
   - 減少不必要的元素
   - 增加內容之間的間距

### 平板設備優化

1. **佈局靈活性**
   - 混合式網格佈局
   - 根據方向動態調整內容

### 大屏幕體驗

1. **空間利用**
   - 多列內容展示
   - 增加輔助功能面板
   - 快捷鍵支持

## 互動及動畫

### 微互動

1. **按鈕狀態**

   - 懸浮/點擊/加載狀態動畫
   - 成功/錯誤反饋動畫

2. **過渡效果**

   - 頁面間平滑過渡
   - 元素加載時的漸顯動畫

3. **滾動效果**
   - 視差滾動背景
   - 元素進入視窗時的動畫

### 功能性動畫

1. **引導動畫**

   - 新用戶功能引導
   - 首次使用提示

2. **狀態指示**
   - 加載狀態動畫
   - 確認/錯誤反饋動畫

## 實施計劃

### 第一階段：基礎視覺風格更新（1-2 週）

1. 更新色彩系統和排版
2. 基礎 UI 元素重設計（按鈕、卡片、表單元素）
3. 圖標系統更新

### 第二階段：關鍵頁面改版（2-3 週）

1. 首頁重設計
2. 夥伴列表頁面改版
3. 詳情頁面改版

### 第三階段：次要頁面與功能優化（2-3 週）

1. 用戶資料頁面改版
2. 搜尋和過濾功能優化
3. 導航體驗優化

### 第四階段：互動效果與動畫（1-2 週）

1. 添加頁面過渡動畫
2. 實現微互動效果
3. 優化用戶反饋動畫

### 第五階段：測試與調整（1 週）

1. 多設備兼容性測試
2. 性能優化
3. 用戶反饋收集與調整
