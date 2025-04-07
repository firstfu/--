// 山伴 - 主應用程序JS
document.addEventListener("DOMContentLoaded", function () {
  // 初始化應用
  initApp();
});

/**
 * 初始化應用
 */
function initApp() {
  // 初始化移動端菜單
  initMobileMenu();

  // 初始化頁面過渡效果
  initPageTransitions();

  // 初始化當前頁面高亮
  highlightCurrentPage();

  // 初始化動畫效果
  initAnimations();

  // 初始化圖片懶加載
  initLazyLoading();
}

/**
 * 初始化移動端菜單
 */
function initMobileMenu() {
  const menuButton = document.querySelector("nav button");
  if (!menuButton) return;

  const mobileMenu = document.querySelector("nav .md\\:flex");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("mobile-menu-open");
  });

  // 點擊外部關閉菜單
  document.addEventListener("click", function (event) {
    if (!event.target.closest("nav") && mobileMenu.classList.contains("mobile-menu-open")) {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("mobile-menu-open");
    }
  });
}

/**
 * 初始化頁面過渡效果
 */
function initPageTransitions() {
  document.body.classList.add("page-transition");

  // 為所有內部鏈接添加過渡效果
  document.querySelectorAll('a[href^="/"]:not([target]), a[href^="./"], a[href^="../"], a[href^="pages/"]').forEach(link => {
    link.addEventListener("click", function (e) {
      // 如果是同一個頁面的錨點，不做處理
      if (link.getAttribute("href").startsWith("#")) return;

      e.preventDefault();
      const target = link.getAttribute("href");

      document.body.classList.remove("page-transition");

      setTimeout(() => {
        window.location.href = target;
      }, 300);
    });
  });
}

/**
 * 高亮當前頁面的導航項
 */
function highlightCurrentPage() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath || (currentPath.includes(linkPath) && linkPath !== "#" && linkPath !== "/")) {
      link.classList.add("nav-active");
    }
  });
}

/**
 * 初始化動畫效果
 */
function initAnimations() {
  // 為按鈕添加懸停效果
  document.querySelectorAll(".btn-hover-effect").forEach(btn => {
    btn.addEventListener("mouseenter", function () {
      this.classList.add("transform", "scale-105");
    });

    btn.addEventListener("mouseleave", function () {
      this.classList.remove("transform", "scale-105");
    });
  });

  // 為卡片添加懸停效果
  document.querySelectorAll(".card-hover").forEach(card => {
    card.addEventListener("mouseenter", function () {
      this.classList.add("transform", "translateY(-5px)", "shadow-lg");
    });

    card.addEventListener("mouseleave", function () {
      this.classList.remove("transform", "translateY(-5px)", "shadow-lg");
    });
  });
}

/**
 * 初始化圖片懶加載
 */
function initLazyLoading() {
  // 如果瀏覽器支持 IntersectionObserver
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          imageObserver.unobserve(lazyImage);
        }
      });
    });

    document.querySelectorAll("img.lazy").forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // 回退到傳統懶加載實現
    let lazyLoadThrottleTimeout;

    function lazyLoad() {
      if (lazyLoadThrottleTimeout) {
        clearTimeout(lazyLoadThrottleTimeout);
      }

      lazyLoadThrottleTimeout = setTimeout(function () {
        const scrollTop = window.pageYOffset;
        document.querySelectorAll("img.lazy").forEach(img => {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          }
        });

        if (document.querySelectorAll("img.lazy").length === 0) {
          document.removeEventListener("scroll", lazyLoad);
          window.removeEventListener("resize", lazyLoad);
          window.removeEventListener("orientationChange", lazyLoad);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationChange", lazyLoad);
  }
}

/**
 * 模擬身份驗證功能（僅用於 MVP 演示）
 */
const authModule = {
  // 檢查用戶是否已登入
  isLoggedIn: function () {
    return localStorage.getItem("mountain_buddy_auth") !== null;
  },

  // 模擬登入
  login: function (email, password) {
    // 僅作為 MVP 演示，實際應用需要真正的身份驗證
    const mockUser = {
      id: Math.random().toString(36).substring(2, 15),
      email: email,
      name: email.split("@")[0],
      token: Math.random().toString(36).substring(2),
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("mountain_buddy_auth", JSON.stringify(mockUser));
    return mockUser;
  },

  // 模擬註冊
  register: function (name, email, password) {
    // 僅作為 MVP 演示，實際應用需要真正的用戶註冊
    const mockUser = {
      id: Math.random().toString(36).substring(2, 15),
      name: name,
      email: email,
      token: Math.random().toString(36).substring(2),
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("mountain_buddy_auth", JSON.stringify(mockUser));
    return mockUser;
  },

  // 登出
  logout: function () {
    localStorage.removeItem("mountain_buddy_auth");
    window.location.href = "/index.html";
  },

  // 獲取當前用戶
  getCurrentUser: function () {
    const userData = localStorage.getItem("mountain_buddy_auth");
    return userData ? JSON.parse(userData) : null;
  },
};

/**
 * 資料存儲處理（使用 localStorage，僅用於 MVP）
 */
const storageModule = {
  // 儲存數據
  setItem: function (key, value) {
    localStorage.setItem(`mountain_buddy_${key}`, JSON.stringify(value));
  },

  // 獲取數據
  getItem: function (key) {
    const data = localStorage.getItem(`mountain_buddy_${key}`);
    return data ? JSON.parse(data) : null;
  },

  // 刪除數據
  removeItem: function (key) {
    localStorage.removeItem(`mountain_buddy_${key}`);
  },

  // 儲存需求
  saveRequest: function (request) {
    const requests = this.getRequests() || {};
    request.id = request.id || Math.random().toString(36).substring(2, 15);
    request.createdAt = request.createdAt || new Date().toISOString();
    requests[request.id] = request;
    this.setItem("requests", requests);
    return request;
  },

  // 獲取所有需求
  getRequests: function () {
    return this.getItem("requests") || {};
  },

  // 獲取特定需求
  getRequest: function (id) {
    const requests = this.getRequests();
    return requests ? requests[id] : null;
  },

  // 儲存用戶檔案
  saveProfile: function (profile) {
    const profiles = this.getProfiles() || {};
    profile.id = profile.id || Math.random().toString(36).substring(2, 15);
    profile.updatedAt = new Date().toISOString();
    profiles[profile.id] = profile;
    this.setItem("profiles", profiles);
    return profile;
  },

  // 獲取所有用戶檔案
  getProfiles: function () {
    return this.getItem("profiles") || {};
  },

  // 獲取特定用戶檔案
  getProfile: function (id) {
    const profiles = this.getProfiles();
    return profiles ? profiles[id] : null;
  },
};

// 將模組掛載到全局作用域，方便其他頁面腳本調用
window.authModule = authModule;
window.storageModule = storageModule;
