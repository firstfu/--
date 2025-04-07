# 山伴 - UI 元素樣式指南

本文檔詳細描述山伴網站 UI 元素的設計規格，作為開發團隊的視覺參考標準。

## 色彩系統

### 主色調

```css
--primary-dark: #1d473c; /* 深森林綠 */
--primary: #2d8b6b; /* 中綠色 */
--primary-light: #55d6a8; /* 淺綠色 */
```

### 中性色調

```css
--text-dark: #333e48; /* 石板灰 - 主要文字 */
--text-medium: #637381; /* 暖灰色 - 次要文字 */
--text-light: #f5f7f9; /* 淺灰色 - 淺色背景上的文字 */
--bg-light: #f5f7f9; /* 淺灰色 - 背景/分割線 */
--bg-white: #ffffff; /* 白色 - 卡片和主要區塊背景 */
```

### 輔助色彩

```css
--accent-blue: #31a8e0; /* 天空藍 */
--accent-orange: #f48c53; /* 日落橙 */
--accent-purple: #8477d6; /* 山脈紫 */
--success: #4caf50; /* 成功綠 */
--warning: #ffbf00; /* 警告黃 */
--danger: #f44336; /* 危險紅 */
```

### 漸變色彩

```css
--gradient-primary: linear-gradient(135deg, #2d8b6b 0%, #1d473c 100%);
--gradient-orange: linear-gradient(135deg, #ff9d6c 0%, #f48c53 100%);
--gradient-purple: linear-gradient(135deg, #9388e0 0%, #8477d6 100%);
--gradient-overlay: linear-gradient(0deg, rgba(29, 71, 60, 0.75) 0%, rgba(29, 71, 60, 0) 100%);
```

## 排版

### 字體

```css
--font-heading: "Montserrat", sans-serif;
--font-body: "Noto Sans TC", sans-serif;
```

### 字體大小

```css
--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem; /* 36px */
--text-5xl: 3rem; /* 48px */
```

### 字重

```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### 標題樣式

```css
h1 {
  font-family: var(--font-heading);
  font-weight: var(--font-bold);
  font-size: var(--text-4xl);
  line-height: 1.2;
  color: var(--text-dark);
}

h2 {
  font-family: var(--font-heading);
  font-weight: var(--font-semibold);
  font-size: var(--text-3xl);
  line-height: 1.3;
  color: var(--text-dark);
}

h3 {
  font-family: var(--font-heading);
  font-weight: var(--font-semibold);
  font-size: var(--text-2xl);
  line-height: 1.4;
  color: var(--text-dark);
}

h4 {
  font-family: var(--font-heading);
  font-weight: var(--font-semibold);
  font-size: var(--text-xl);
  line-height: 1.4;
  color: var(--text-dark);
}
```

### 內文樣式

```css
p {
  font-family: var(--font-body);
  font-weight: var(--font-normal);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--text-medium);
}

.text-small {
  font-size: var(--text-sm);
  line-height: 1.5;
}

.text-large {
  font-size: var(--text-lg);
  line-height: 1.6;
}
```

## 間距系統

```css
--space-xs: 0.25rem; /* 4px */
--space-sm: 0.5rem; /* 8px */
--space-md: 1rem; /* 16px */
--space-lg: 1.5rem; /* 24px */
--space-xl: 2rem; /* 32px */
--space-2xl: 3rem; /* 48px */
--space-3xl: 4rem; /* 64px */
```

## 陰影

```css
--shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.12);
--shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.05);
```

## 圓角

```css
--radius-sm: 0.375rem; /* 6px */
--radius-md: 0.75rem; /* 12px */
--radius-lg: 1.25rem; /* 20px */
--radius-full: 9999px; /* 圓形 */
```

## 轉場與動畫

```css
--transition-fast: 0.15s ease-in-out;
--transition-normal: 0.3s ease-in-out;
--transition-slow: 0.5s ease-in-out;
```

## 元素規格

### 按鈕

#### 主要按鈕

```css
.btn-primary {
  background: var(--gradient-primary);
  color: white;
  font-family: var(--font-body);
  font-weight: var(--font-medium);
  font-size: var(--text-base);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  border: none;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-primary:active {
  transform: translateY(0);
}
```

#### 次要按鈕

```css
.btn-secondary {
  background: transparent;
  color: var(--primary);
  font-family: var(--font-body);
  font-weight: var(--font-medium);
  font-size: var(--text-base);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  border: 1.5px solid var(--primary);
  transition: background var(--transition-fast), color var(--transition-fast);
}

.btn-secondary:hover {
  background: rgba(45, 139, 107, 0.1);
}
```

#### 強調按鈕

```css
.btn-accent {
  background: var(--accent-orange);
  color: white;
  font-family: var(--font-body);
  font-weight: var(--font-medium);
  font-size: var(--text-base);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  border: none;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast), background var(--transition-fast);
}

.btn-accent:hover {
  transform: translateY(-2px);
  background: #ff9d6c;
}
```

### 卡片

#### 基本卡片

```css
.card {
  background: var(--bg-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.card-body {
  padding: var(--space-lg);
}
```

#### 夥伴卡片

```css
.companion-card {
  background: var(--bg-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.companion-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.companion-card .image-container {
  position: relative;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
}

.companion-card .image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.companion-card:hover .image-container img {
  transform: scale(1.05);
}

.companion-card .badge {
  position: absolute;
  top: var(--space-sm);
  right: var(--space-sm);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: white;
}

.companion-card .badge.pro {
  background: var(--gradient-primary);
}

.companion-card .badge.advanced {
  background: var(--gradient-purple);
}

.companion-card .badge.beginner {
  background: var(--gradient-orange);
}

.companion-card .card-body {
  padding: var(--space-lg);
}
```

### 表單元素

#### 輸入框

```css
.form-group {
  position: relative;
  margin-bottom: var(--space-lg);
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--text-dark);
  background: var(--bg-white);
  border: 1.5px solid #e0e3e7;
  border-radius: var(--radius-sm);
  transition: border var(--transition-fast), box-shadow var(--transition-fast);
}

.form-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(45, 139, 107, 0.1);
}

.form-label {
  position: absolute;
  top: 0.75rem;
  left: 1rem;
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--text-medium);
  pointer-events: none;
  transition: transform var(--transition-fast), font-size var(--transition-fast), color var(--transition-fast);
}

.form-input:focus + .form-label,
.form-input:not(:placeholder-shown) + .form-label {
  transform: translateY(-1.4rem);
  font-size: var(--text-xs);
  color: var(--primary);
}
```

#### 下拉選單

```css
.form-select {
  width: 100%;
  padding: 0.75rem 1rem;
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--text-dark);
  background: var(--bg-white);
  border: 1.5px solid #e0e3e7;
  border-radius: var(--radius-sm);
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 7L13 1' stroke='%23637381' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  transition: border var(--transition-fast), box-shadow var(--transition-fast);
}

.form-select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(45, 139, 107, 0.1);
}
```

### 導航元素

#### 頂部導航欄

```css
.navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: var(--space-md) 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow-sm);
  transition: background var(--transition-normal), box-shadow var(--transition-normal);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow-md);
}

.nav-link {
  font-family: var(--font-body);
  font-weight: var(--font-medium);
  font-size: var(--text-base);
  color: var(--text-medium);
  padding: var(--space-sm) var(--space-md);
  transition: color var(--transition-fast);
  position: relative;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link.active {
  color: var(--primary);
  font-weight: var(--font-semibold);
}

.nav-link.active::after {
  content: "";
  position: absolute;
  bottom: -0.25rem;
  left: var(--space-md);
  right: var(--space-md);
  height: 2px;
  background: var(--primary);
}
```

### 互動元素

#### 標籤

```css
.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  background: rgba(45, 139, 107, 0.1);
  color: var(--primary);
  margin-right: var(--space-sm);
  margin-bottom: var(--space-sm);
}

.tag.blue {
  background: rgba(49, 168, 224, 0.1);
  color: var(--accent-blue);
}

.tag.orange {
  background: rgba(244, 140, 83, 0.1);
  color: var(--accent-orange);
}

.tag.purple {
  background: rgba(132, 119, 214, 0.1);
  color: var(--accent-purple);
}
```

#### 評分星星

```css
.rating {
  display: flex;
  align-items: center;
}

.stars {
  display: flex;
  color: var(--warning);
  margin-right: var(--space-sm);
}

.rating-value {
  font-family: var(--font-body);
  font-weight: var(--font-medium);
  font-size: var(--text-sm);
  color: var(--text-dark);
}
```

#### 徽章

```css
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: white;
}

.badge.primary {
  background: var(--gradient-primary);
}

.badge.orange {
  background: var(--gradient-orange);
}

.badge.purple {
  background: var(--gradient-purple);
}

.badge.small {
  padding: 0.125rem 0.5rem;
  font-size: 0.625rem;
}
```

## 響應式斷點

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

## 容器尺寸

```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-md);
  padding-right: var(--space-md);
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
```
