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
  "三角构图加引导线，能让画面更有纵深感。",
  "Lightroom 中按住 Alt 拖动滑块，可以更直观地查看过曝和欠曝区域。",
  "尝试用 whisper.cpp 在本地完成语音转文字，速度快且无需上传素材。",
  "用视觉模型分析照片前，先明确希望它评价构图、色彩还是主体表达。"
];

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

      detail.replaceChildren();
      const label = document.createElement("strong");
      label.textContent = skill.label;
      detail.append(label, document.createTextNode(`：${skill.description}`));
    });
  });
}

function setupStatusDialog() {
  const dialog = document.querySelector("#status-dialog");
  const openButton = document.querySelector("#status-button");
  const closeButton = document.querySelector("#close-status");
  if (!dialog || !openButton || !closeButton) return;

  const setOpenState = (open) => {
    openButton.setAttribute("aria-expanded", String(open));
    openButton.textContent = open ? "收起今日状态" : "打开今日状态";
  };

  openButton.addEventListener("click", () => {
    if (dialog.open) dialog.close();
    else {
      dialog.show();
      setOpenState(true);
    }
  });
  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => setOpenState(false));
  document.addEventListener("pointerdown", (event) => {
    if (dialog.open && !dialog.contains(event.target) && event.target !== openButton) dialog.close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dialog.open) dialog.close();
  });
}

function setupHeroMotion() {
  const hero = document.querySelector(".hero");
  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let frame = 0;
  hero.addEventListener("pointermove", (event) => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const rect = hero.getBoundingClientRect();
      const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
      const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
      hero.style.setProperty("--pointer-x", `${x * 100}%`);
      hero.style.setProperty("--pointer-y", `${y * 100}%`);
      hero.style.setProperty("--tilt-x", `${(0.5 - y) * 2.5}deg`);
      hero.style.setProperty("--tilt-y", `${(x - 0.5) * 3.5}deg`);
      hero.style.setProperty("--lens-x", `${(x - 0.5) * 14}px`);
      hero.style.setProperty("--lens-y", `${(y - 0.5) * 12}px`);
    });
  });
}

function setupScrollReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.documentElement.classList.add("motion-enabled");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8%" });

  targets.forEach((target) => observer.observe(target));
}

function setupActiveNavigation() {
  const links = [...document.querySelectorAll(".section-nav a")];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if (!links.length || !sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        if (active) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-20% 0px -68%", threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}

function setupPointerFields() {
  document.querySelectorAll(".pointer-field").forEach((field) => {
    field.addEventListener("pointermove", (event) => {
      const rect = field.getBoundingClientRect();
      field.style.setProperty("--field-x", `${event.clientX - rect.left}px`);
      field.style.setProperty("--field-y", `${event.clientY - rect.top}px`);
    });
  });
}

function setupMagneticControls() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.querySelectorAll(".magnetic").forEach((control) => {
    control.addEventListener("pointermove", (event) => {
      const rect = control.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
      control.style.setProperty("--mag-x", `${x}px`);
      control.style.setProperty("--mag-y", `${y}px`);
    });
    control.addEventListener("pointerleave", () => {
      control.style.setProperty("--mag-x", "0px");
      control.style.setProperty("--mag-y", "0px");
    });
  });
}

function setTip() {
  const tip = document.querySelector("#daily-tip");
  if (tip) tip.textContent = `灵感便签：${tips[Math.floor(Math.random() * tips.length)]}`;
}

setupSkills();
setupStatusDialog();
setupHeroMotion();
setupScrollReveal();
setupActiveNavigation();
setupPointerFields();
setupMagneticControls();
setTip();
