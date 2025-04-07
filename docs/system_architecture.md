# 花錢找人一起爬山系統 - 系統架構

## 1. 系統架構總覽

本系統是一個 MVP (最小可行產品) 版本，旨在驗證「使用者願意付費尋找爬山夥伴」的核心假設。MVP 階段採用前端為主的架構，利用純 HTML、JavaScript 和 CSS (結合 Tailwind CSS) 實現，資料暫時存儲於瀏覽器的 localStorage 中。

### 1.1 架構圖

```
+----------------------------------+
|            使用者界面            |
|  +----------------------------+  |
|  |        頁面組件            |  |
|  |  +--------------------+    |  |
|  |  |  - 首頁            |    |  |
|  |  |  - 註冊/登入頁     |    |  |
|  |  |  - 需求發佈頁      |    |  |
|  |  |  - 夥伴瀏覽頁      |    |  |
|  |  |  - 個人檔案頁      |    |  |
|  |  |  - 需求詳情頁      |    |  |
|  |  |  - 夥伴詳情頁      |    |  |
|  |  +--------------------+    |  |
|  +----------------------------+  |
+----------------------------------+
               |
               v
+----------------------------------+
|            業務邏輯              |
|  +----------------------------+  |
|  |       模組                 |  |
|  |  +--------------------+    |  |
|  |  |  - 使用者管理      |    |  |
|  |  |  - 需求管理        |    |  |
|  |  |  - 夥伴配對        |    |  |
|  |  |  - 狀態追蹤        |    |  |
|  |  |  - 基礎通訊        |    |  |
|  |  +--------------------+    |  |
|  +----------------------------+  |
+----------------------------------+
               |
               v
+----------------------------------+
|            數據管理              |
|  +----------------------------+  |
|  |   localStorage 存儲        |  |
|  |  +--------------------+    |  |
|  |  |  - 使用者資料      |    |  |
|  |  |  - 需求資料        |    |  |
|  |  |  - 配對記錄        |    |  |
|  |  |  - 通訊記錄        |    |  |
|  |  +--------------------+    |  |
|  +----------------------------+  |
+----------------------------------+
```

## 2. 前端架構

### 2.1 技術棧

- **HTML5**: 提供頁面結構
- **CSS3 + Tailwind CSS**: 負責頁面樣式和響應式設計
- **JavaScript (ES6+)**: 實現互動功能和業務邏輯
- **localStorage API**: 在客戶端存儲使用者資料和應用狀態

### 2.2 文件結構

```
/
├── index.html              # 主頁
├── pages/                  # 各功能頁面
│   ├── login.html          # 登入頁
│   ├── register.html       # 註冊頁
│   ├── profile.html        # 個人檔案頁
│   ├── create-request.html # 發佈需求頁
│   ├── companions.html     # 夥伴瀏覽頁
│   ├── request-detail.html # 需求詳情頁
│   ├── companion-detail.html # 夥伴詳情頁
│   └── my-requests.html    # 我的需求/申請列表
├── css/
│   ├── styles.css          # 自定義樣式
│   └── tailwind.css        # Tailwind 輸出
├── js/
│   ├── app.js              # 主應用邏輯
│   ├── auth.js             # 認證相關功能
│   ├── request.js          # 需求管理功能
│   ├── companion.js        # 夥伴配對功能
│   ├── profile.js          # 個人檔案功能
│   └── storage.js          # 資料存儲功能
├── img/                    # 圖片資源
└── data/                   # 靜態資料 (如預設山區列表)
```

### 2.3 頁面組件關係

- **首頁 (index.html)**: 平台介紹、引導註冊、展示熱門需求和夥伴
- **登入/註冊**: 用戶認證入口
- **個人檔案**: 顯示和編輯個人資訊
- **需求相關頁面**:
  - 發佈需求
  - 瀏覽需求列表
  - 需求詳情頁
- **夥伴相關頁面**:
  - 瀏覽夥伴列表
  - 夥伴詳情頁
- **個人中心**:
  - 我發佈的需求
  - 我申請的需求
  - 基本通訊功能

## 3. 資料模型

### 3.1 使用者資料模型

```javascript
{
  userId: "唯一識別碼",
  username: "用戶名",
  email: "電子郵件",
  password: "雜湊後的密碼",
  profileType: "hiker" | "guide", // 使用者類型：一般登山者或嚮導
  profile: {
    fullName: "真實姓名",
    age: 25,
    gender: "性別",
    experience: "登山經驗描述",
    skillLevel: "初級" | "中級" | "高級",
    specialties: ["特長1", "特長2"], // 如高山、溯溪、攀岩等
    certifications: ["證照1"], // 專業證照，如救護證等
    contactInfo: {
      phone: "電話號碼",
      line: "Line ID"
    },
    bio: "自我介紹"
  },
  preferences: {
    preferredRoutes: ["路線1", "路線2"],
    availableDates: ["日期1", "日期2"]
  },
  registrationDate: "註冊日期"
}
```

### 3.2 爬山需求資料模型

```javascript
{
  requestId: "唯一識別碼",
  creatorId: "創建者ID",
  title: "需求標題",
  route: {
    name: "路線名稱",
    difficulty: "路線難度",
    region: "所在地區"
  },
  date: {
    startDate: "開始日期",
    endDate: "結束日期",
    startTime: "開始時間"
  },
  duration: "預計持續時間（小時）",
  description: "詳細描述",
  requirements: {
    experienceLevel: "所需經驗水平",
    specialSkills: ["特殊技能1", "特殊技能2"],
    equipment: ["裝備1", "裝備2"]
  },
  participants: {
    minRequired: 1,
    maxRequired: 5,
    current: 0
  },
  budget: {
    minAmount: 1000,
    maxAmount: 2000,
    currency: "TWD"
  },
  status: "開放中" | "已配對" | "已完成" | "已取消",
  applicants: [
    {
      userId: "申請者ID",
      applicationDate: "申請日期",
      message: "申請訊息",
      status: "待審核" | "已接受" | "已拒絕"
    }
  ],
  creationDate: "創建日期",
  lastUpdateDate: "最後更新日期"
}
```

### 3.3 配對記錄資料模型

```javascript
{
  matchId: "唯一識別碼",
  requestId: "關聯的需求ID",
  hikerId: "登山者ID",
  guideId: "嚮導ID",
  matchDate: "配對日期",
  status: "待確認" | "已確認" | "已完成" | "已取消",
  details: {
    agreedPrice: 1500,
    agreedDate: "確認的日期",
    meetingPoint: "集合地點",
    notes: "備註事項"
  },
  messages: [
    {
      senderId: "發送者ID",
      content: "訊息內容",
      timestamp: "發送時間"
    }
  ],
  completionDetails: {
    completionDate: "完成日期",
    feedback: "反饋內容",
    rating: 4.5 // 評價（星級）
  }
}
```

## 4. 功能模組

### 4.1 使用者管理模組

- **功能**:

  - 使用者註冊與登入
  - 個人資料管理
  - 身份驗證 (基於 localStorage token)
  - 使用者偏好設定

- **實現方式**:
  - 使用 localStorage 存儲使用者資訊
  - 簡單的 token 機制模擬身份驗證
  - 表單驗證確保資料完整性

### 4.2 需求管理模組

- **功能**:

  - 創建與編輯爬山需求
  - 需求狀態管理
  - 需求搜尋與篩選
  - 需求詳情展示

- **實現方式**:
  - 表單收集需求資訊
  - localStorage 存儲需求資料
  - 基於 JavaScript 的篩選和排序功能

### 4.3 夥伴配對模組

- **功能**:

  - 瀏覽可用夥伴
  - 發送/接受配對申請
  - 配對狀態追蹤
  - 基本的推薦功能

- **實現方式**:
  - 根據需求條件篩選合適夥伴
  - 簡單的申請-接受流程
  - localStorage 存儲配對記錄

### 4.4 基礎通訊模組

- **功能**:

  - 簡單的消息發送功能
  - 通知系統
  - 聯絡資訊交換

- **實現方式**:
  - 基於 localStorage 的簡易消息存儲
  - 頁面刷新時檢查新消息

## 5. 資料存儲策略

MVP 階段使用瀏覽器的 localStorage 作為主要資料存儲方式，主要考量如下：

- **優點**:

  - 無需後端伺服器，降低開發複雜度
  - 快速實現原型，驗證業務假設
  - 無需考慮資料庫設計和 API 開發

- **限制**:

  - 存儲容量有限（一般為 5-10MB）
  - 僅限單一設備使用，不支持跨裝置同步
  - 資料持久性較弱，可能被使用者清除

- **資料結構設計**:
  - 使用 JSON 格式存儲複雜資料結構
  - 設計合理的資料索引方式
  - 實現簡單的 CRUD 操作封裝

### 5.1 資料存取封裝

```javascript
// storage.js 示例
const Storage = {
  // 使用者相關
  saveUser: user => {
    const users = Storage.getUsers();
    users[user.userId] = user;
    localStorage.setItem("users", JSON.stringify(users));
  },

  getUsers: () => {
    return JSON.parse(localStorage.getItem("users") || "{}");
  },

  // 需求相關
  saveRequest: request => {
    const requests = Storage.getRequests();
    requests[request.requestId] = request;
    localStorage.setItem("requests", JSON.stringify(requests));
  },

  getRequests: () => {
    return JSON.parse(localStorage.getItem("requests") || "{}");
  },

  // 配對相關
  saveMatch: match => {
    const matches = Storage.getMatches();
    matches[match.matchId] = match;
    localStorage.setItem("matches", JSON.stringify(matches));
  },

  getMatches: () => {
    return JSON.parse(localStorage.getItem("matches") || "{}");
  },
};
```

## 6. 安全性考量

即使是 MVP 階段，仍需考慮一些基本的安全措施：

- **密碼處理**:

  - 密碼不應明文存儲，即使在 localStorage 中
  - 使用簡單的雜湊函數進行處理

- **資料驗證**:

  - 前端輸入驗證以防止無效資料
  - 敏感資訊（如聯絡方式）應在適當時機才顯示

- **使用者授權**:
  - 簡單的角色控制，確保用戶只能訪問授權內容
  - 防止未登入用戶訪問受保護頁面

## 7. MVP 擴展考量

完成 MVP 驗證後，系統將考慮以下擴展方向：

- **後端開發**:

  - 開發 REST API 實現真正的資料持久化
  - 使用合適的後端框架和資料庫

- **認證系統強化**:

  - 實現完整的註冊/登入系統
  - 考慮整合第三方登入（Google、Facebook 等）

- **支付整合**:

  - 對接支付服務提供商
  - 實現交易管理和資金流轉

- **進階功能**:
  - 評價與評論系統
  - 詳細的搜尋與篩選
  - 社群功能
  - 地圖整合

---

此架構文件描述了 MVP 階段的系統設計，將隨著產品發展持續更新和完善。
