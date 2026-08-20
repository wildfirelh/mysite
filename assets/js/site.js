const tips = [
  "灵感便签：试着在同一个地点停留十分钟，让光线决定下一张照片。",
  "灵感便签：先寻找画面里的明暗关系，再决定主体放在哪里。",
  "灵感便签：阴天不是没有光，而是光变得更柔软了。",
  "灵感便签：拍完别急着离开，回头往往会遇到第二个画面。",
  "灵感便签：整理照片时，连续三张能够讲清楚的故事，比十张相似照片更有力量。"
];

function setupHeaderAndParallax() {
  const header = document.querySelector(".site-header");
  const hero = document.querySelector(".hero");
  const layers = [...document.querySelectorAll("[data-depth]")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let ticking = false;

  const render = () => {
    const y = window.scrollY;
    header?.classList.toggle("is-compact", y > 48);

    if (!reducedMotion && hero && y < hero.offsetHeight * 1.25) {
      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth) || 0;
        layer.style.setProperty("--parallax-y", `${Math.min(110, y * depth)}px`);
      });
    }
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(render);
  }, { passive: true });
  render();
}

function setupPhotoReveal() {
  const targets = document.querySelectorAll("[data-reveal-photo]");
  if (!targets.length || window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 640px)").matches) return;

  document.documentElement.classList.add("motion-ready");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -6%" });

  targets.forEach((target) => observer.observe(target));
}

function setupStatusDialog() {
  const dialog = document.querySelector("#status-dialog");
  const openButton = document.querySelector("#status-button");
  const navButton = document.querySelector("#nav-playlist");
  const closeButton = document.querySelector("#close-status");
  if (!dialog || !openButton || !closeButton) return;
  let lastOpener = openButton;

  const setOpenState = (open) => {
    openButton.setAttribute("aria-expanded", String(open));
    navButton?.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("dialog-open", open);
  };

  const openDialog = (opener = openButton) => {
    lastOpener = opener;
    if (!dialog.open) dialog.showModal();
    setOpenState(true);
    closeButton.focus({ preventScroll: true });
  };

  const closeDialog = () => {
    if (dialog.open) dialog.close();
  };

  openButton.addEventListener("click", () => dialog.open ? closeDialog() : openDialog(openButton));
  navButton?.addEventListener("click", () => openDialog(navButton));
  closeButton.addEventListener("click", closeDialog);
  dialog.addEventListener("close", () => {
    setOpenState(false);
    lastOpener?.focus({ preventScroll: true });
  });
  dialog.addEventListener("pointerdown", (event) => {
    if (event.target === dialog) closeDialog();
  });
}

function setupActiveNavigation() {
  const links = [...document.querySelectorAll(".site-nav a[href^='#']")];
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
  }, { rootMargin: "-18% 0px -70%", threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}

function setupPhotonGame() {
  const field = document.querySelector("#photon-field");
  const target = document.querySelector("#photon-target");
  const startButton = document.querySelector("#game-start");
  const scoreNode = document.querySelector("#game-score");
  const comboNode = document.querySelector("#game-combo");
  const timeNode = document.querySelector("#game-time");
  const message = document.querySelector("#game-message");
  const floatingStatus = document.querySelector("#status-button");
  if (!field || !target || !startButton || !scoreNode || !comboNode || !timeNode || !message) return;

  const duration = 20000;
  let score = 0;
  let combo = 0;
  let running = false;
  let deadline = 0;
  let photonShownAt = 0;
  let clock = 0;
  let highScore = 0;

  try {
    highScore = Number.parseInt(localStorage.getItem("photon-high-score"), 10) || 0;
  } catch (error) {
    highScore = 0;
  }

  const updateReadout = () => {
    scoreNode.textContent = String(score);
    comboNode.textContent = String(combo);
  };

  const placePhoton = () => {
    const x = 9 + Math.random() * 82;
    const y = 13 + Math.random() * 72;
    field.style.setProperty("--photon-x", `${x}%`);
    field.style.setProperty("--photon-y", `${y}%`);
    photonShownAt = performance.now();
  };

  const finishGame = () => {
    running = false;
    window.clearInterval(clock);
    target.hidden = true;
    startButton.disabled = false;
    startButton.textContent = "再玩一次";
    floatingStatus?.classList.remove("is-game-hidden");

    const isRecord = score > highScore;
    if (isRecord) {
      highScore = score;
      try {
        localStorage.setItem("photon-high-score", String(highScore));
      } catch (error) {
        // Storage can be unavailable in private browsing; gameplay still works.
      }
    }
    message.textContent = isRecord ? `校准完成：${score} 分，新纪录。` : `校准完成：${score} 分，当前最高 ${highScore} 分。`;
  };

  const startGame = () => {
    score = 0;
    combo = 0;
    running = true;
    deadline = performance.now() + duration;
    updateReadout();
    timeNode.textContent = "20.0";
    startButton.disabled = true;
    startButton.textContent = "校准中";
    floatingStatus?.classList.add("is-game-hidden");
    target.hidden = false;
    message.textContent = highScore ? `本机最高 ${highScore} 分。保持连击。` : "光子已进入观测场。";
    placePhoton();
    target.focus({ preventScroll: true });

    window.clearInterval(clock);
    clock = window.setInterval(() => {
      const remaining = Math.max(0, deadline - performance.now());
      timeNode.textContent = (remaining / 1000).toFixed(1);
      if (remaining <= 0) finishGame();
    }, 100);
  };

  target.addEventListener("click", (event) => {
    if (!running) return;
    event.stopPropagation();
    const reaction = performance.now() - photonShownAt;
    combo += 1;
    score += 100 + combo * 12 + Math.max(0, 100 - Math.floor(reaction / 10));
    updateReadout();
    target.classList.remove("is-hit");
    void target.offsetWidth;
    target.classList.add("is-hit");
    placePhoton();
  });

  field.addEventListener("pointerdown", (event) => {
    if (!running || event.target !== field) return;
    combo = 0;
    updateReadout();
    field.classList.add("is-missed");
    window.setTimeout(() => field.classList.remove("is-missed"), 180);
  });

  startButton.addEventListener("click", startGame);
}

function setPageDetails() {
  const tip = document.querySelector("#daily-tip");
  const year = document.querySelector("#year");
  if (tip) tip.textContent = tips[Math.floor(Math.random() * tips.length)];
  if (year) year.textContent = String(new Date().getFullYear());
}

setupHeaderAndParallax();
setupPhotoReveal();
setupStatusDialog();
setupActiveNavigation();
setupPhotonGame();
setPageDetails();
