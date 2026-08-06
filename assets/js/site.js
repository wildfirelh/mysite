const skills = {
  photography: {
    label: "摄影",
    description: "关注街头与风光摄影，用镜头记录光影、空间和日常瞬间。"
  },
  ai: {
    label: "AI 应用",
    description: "正在探索 Stable Diffusion、ComfyUI 等图像创作工作流，以及 AI 工具在学习和创作中的应用。"
  },
  coding: {
    label: "编程",
    description: "持续学习编程基础，并把它作为连接想法、自动化工具和 AI 应用的能力。"
  },
  optoelectronics: {
    label: "光电技术",
    description: "就读光电信息工程技术专业，关注光学成像与智能算法的交叉方向。"
  },
  digital: {
    label: "数码评测",
    description: "喜欢研究硬件、新设备与实用软件工具，重视真实使用场景中的体验。"
  },
  post: {
    label: "后期",
    description: "学习图像后期与色彩表达，让照片和 AI 创作更接近想要传达的氛围。"
  }
};

const tips = [
  "试试用 Stable Diffusion 的 ControlNet Canny 模式，把照片转成线稿再创作。",
  "ComfyUI 的节点工作流可以把复杂的图像创作步骤拆得更清晰。",
  "摄影技巧：三角构图加引导线，能让画面更有纵深感。",
  "Lightroom 中按住 Alt 拖动滑块，可以更直观地查看过曝和欠曝区域。",
  "尝试用 whisper.cpp 在本地完成语音转文字，速度快且无需上传素材。",
  "用视觉模型分析照片前，先明确你希望它评价构图、色彩还是主体表达。"
];

const bingImages = [
  "/th?id=OHR.EggDad_JA-JP1066785458_1920x1080.jpg",
  "/th?id=OHR.ArchedIceberg_JA-JP0865478817_1920x1080.jpg",
  "/th?id=OHR.GrandPlace_JA-JP0571812680_1920x1080.jpg",
  "/th?id=OHR.Saqsaywaman_JA-JP0282514779_1920x1080.jpg",
  "/th?id=OHR.TremolaRoad_JA-JP0031183332_1920x1080.jpg",
  "/th?id=OHR.SevenMileTurtle_JA-JP9577560353_1920x1080.jpg",
  "/th?id=OHR.ParkEstd_JA-JP9205724491_1920x1080.jpg",
  "/th?id=OHR.BadSunset_JA-JP5960860484_1920x1080.jpg"
];

const weatherDescriptions = {
  0: "晴朗",
  1: "大致晴朗",
  2: "局部多云",
  3: "阴天",
  45: "有雾",
  48: "雾凇",
  51: "毛毛雨",
  53: "毛毛雨",
  55: "强毛毛雨",
  56: "冻毛毛雨",
  57: "强冻毛毛雨",
  61: "小雨",
  63: "中雨",
  65: "大雨",
  66: "冻雨",
  67: "强冻雨",
  71: "小雪",
  73: "中雪",
  75: "大雪",
  77: "雪粒",
  80: "阵雨",
  81: "强阵雨",
  82: "暴雨",
  85: "阵雪",
  86: "强阵雪",
  95: "雷暴",
  96: "雷暴伴小冰雹",
  99: "雷暴伴强冰雹"
};

function activateTab(name) {
  document.querySelectorAll(".section-tab").forEach((tab) => {
    const selected = tab.dataset.tab === name;
    tab.setAttribute("aria-selected", String(selected));
  });

  document.querySelectorAll(".tab-panel").forEach((panel) => {
    const selected = panel.id === `tab-${name}`;
    panel.classList.toggle("is-active", selected);
    panel.hidden = !selected;
  });
}

function setupTabs() {
  document.querySelectorAll(".section-tab").forEach((tab) => {
    tab.addEventListener("click", () => activateTab(tab.dataset.tab));
  });
}

function setupSkills() {
  const detail = document.querySelector("#skill-detail");
  const skillButtons = document.querySelectorAll(".skill-chip");

  skillButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const skill = skills[button.dataset.skill];
      if (!skill || !detail) return;

      skillButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle("is-selected", selected);
        item.setAttribute("aria-pressed", String(selected));
      });

      detail.innerHTML = `<strong>${skill.label}</strong>：${skill.description}`;
    });
  });
}

function setupStatusDialog() {
  const dialog = document.querySelector("#status-dialog");
  const openButton = document.querySelector("#status-button");
  const closeButton = document.querySelector("#close-status");

  if (!dialog || !openButton || !closeButton) return;

  openButton.addEventListener("click", () => {
    dialog.showModal();
    updateWeather();
  });
  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

async function updateWeather() {
  const card = document.querySelector(".weather-card");
  const location = document.querySelector("#weather-location");
  const info = document.querySelector("#weather-info");
  const refreshButton = document.querySelector("#weather-refresh");
  if (!card || !location || !info || !refreshButton) return;

  card.setAttribute("aria-busy", "true");
  refreshButton.disabled = true;
  location.textContent = "正在定位…";
  info.textContent = "正在获取基于公网 IP 的近似天气…";

  try {
    const ipResponse = await fetch("https://ipwho.is/");
    if (!ipResponse.ok) throw new Error("无法获取近似位置");
    const ipData = await ipResponse.json();
    if (!ipData.success || !Number.isFinite(ipData.latitude) || !Number.isFinite(ipData.longitude)) {
      throw new Error("无法解析近似位置");
    }

    const weatherUrl = new URL("https://api.open-meteo.com/v1/forecast");
    weatherUrl.search = new URLSearchParams({
      latitude: String(ipData.latitude),
      longitude: String(ipData.longitude),
      current: "temperature_2m,apparent_temperature,weather_code,wind_speed_10m",
      timezone: "auto"
    });
    const weatherResponse = await fetch(weatherUrl);
    if (!weatherResponse.ok) throw new Error("无法获取天气");
    const weatherData = await weatherResponse.json();
    const current = weatherData.current;
    if (!current) throw new Error("天气数据不完整");

    const area = [ipData.city, ipData.region].filter(Boolean).join(" · ") || ipData.country || "近似位置";
    const description = weatherDescriptions[current.weather_code] || "天气未知";
    location.textContent = `📍 ${area}`;
    info.textContent = `${description} · ${Math.round(current.temperature_2m)}°C · 体感 ${Math.round(current.apparent_temperature)}°C · 风速 ${Math.round(current.wind_speed_10m)} km/h`;
  } catch (error) {
    location.textContent = "天气暂时不可用";
    info.textContent = "无法根据当前网络获取天气，请稍后点击刷新重试。";
  } finally {
    card.setAttribute("aria-busy", "false");
    refreshButton.disabled = false;
  }
}

function setBackground() {
  const panel = document.querySelector("#site-shell");
  const info = document.querySelector("#wallpaper-info");
  if (!panel) return;

  const previous = Number.parseInt(sessionStorage.getItem("bing-wallpaper-index"), 10);
  const index = Number.isInteger(previous) ? previous % bingImages.length : 0;
  panel.style.backgroundImage = `url("https://www.bing.com${bingImages[index]}")`;
  sessionStorage.setItem("bing-wallpaper-index", String((index + 1) % bingImages.length));

  if (info) info.textContent = `🖼 当前为第 ${index + 1} 张 Bing 壁纸`;
}

function setTip() {
  const tip = document.querySelector("#daily-tip");
  if (tip) tip.textContent = `💡 ${tips[Math.floor(Math.random() * tips.length)]}`;
}

setupTabs();
setupSkills();
setupStatusDialog();
setBackground();
setTip();
document.querySelector("#weather-refresh")?.addEventListener("click", updateWeather);
