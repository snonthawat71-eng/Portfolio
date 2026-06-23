/* =========================================================================
   main.js  —  ตัวควบคุมการทำงานของเว็บ
   ปกติไม่ต้องแก้ไฟล์นี้ (เนื้อหาทั้งหมดอยู่ใน data/works.js และ i18n.js)
   ========================================================================= */

(function () {
  "use strict";

  /* ---------- ภาษา: จำค่าที่เลือกไว้ใน localStorage ---------- */
  const STORAGE_KEY = "portfolio-lang";
  let currentLang = localStorage.getItem(STORAGE_KEY) || "en";

  function t(key) {
    const dict = I18N[currentLang] || I18N.en;
    return dict[key] != null ? dict[key] : key;
  }

  function applyLanguage() {
    document.documentElement.lang = currentLang;

    // แทนข้อความทุกจุดที่มี data-i18n
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    // ข้อความ/หัวข้อที่มาจากข้อมูลผลงาน (ต้องสลับภาษาด้วย)
    document.querySelectorAll("[data-i18n-en]").forEach(function (el) {
      el.textContent =
        currentLang === "th"
          ? el.getAttribute("data-i18n-th")
          : el.getAttribute("data-i18n-en");
    });
  }

  function toggleLanguage() {
    currentLang = currentLang === "en" ? "th" : "en";
    localStorage.setItem(STORAGE_KEY, currentLang);
    applyLanguage();
  }

  /* ---------- ป้ายข้อความสองภาษาแบบสั้น (ใช้กับเนื้อหาที่ js สร้าง) ---------- */
  function biText(obj) {
    // คืน element <span> ที่สลับภาษาได้ จากข้อมูล { en, th }
    const span = document.createElement("span");
    span.setAttribute("data-i18n-en", obj.en);
    span.setAttribute("data-i18n-th", obj.th);
    span.textContent = currentLang === "th" ? obj.th : obj.en;
    return span;
  }

  /* ---------- แกลเลอรีผลงานบนหน้าแรก ---------- */
  function buildWorkGrid() {
    const grid = document.getElementById("workGrid");
    if (!grid || typeof WORKS === "undefined") return;

    WORKS.forEach(function (work, i) {
      const card = document.createElement("a");
      card.className = "card reveal";
      card.href = "work.html?id=" + encodeURIComponent(work.id);
      card.style.setProperty("--delay", (i % 3) * 80 + "ms");

      const media = document.createElement("div");
      media.className = "card__media";
      const img = document.createElement("img");
      img.src = work.cover;
      img.alt = work.title.en;
      img.loading = "lazy";
      media.appendChild(img);

      const body = document.createElement("div");
      body.className = "card__body";

      const title = document.createElement("h3");
      title.className = "card__title";
      title.appendChild(biText(work.title));

      const meta = document.createElement("p");
      meta.className = "card__meta";
      meta.appendChild(biText(work.category));
      meta.appendChild(document.createTextNode(" · " + work.year));

      body.appendChild(title);
      body.appendChild(meta);
      card.appendChild(media);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  /* ---------- หน้ารายละเอียดผลงาน (work.html) ---------- */
  function buildDetail() {
    const root = document.getElementById("detail");
    if (!root || typeof WORKS === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const work = WORKS.find(function (w) { return w.id === id; });

    if (!work) {
      const msg = document.createElement("p");
      msg.className = "detail__notfound";
      msg.setAttribute("data-i18n", "detail.notFound");
      msg.textContent = t("detail.notFound");
      root.appendChild(msg);
      return;
    }

    document.title = work.title.en + " — Your Name";

    const back = document.createElement("a");
    back.className = "detail__back";
    back.href = "index.html#work";
    back.setAttribute("data-i18n", "detail.back");
    back.textContent = t("detail.back");

    const header = document.createElement("div");
    header.className = "detail__header reveal";
    const kicker = document.createElement("p");
    kicker.className = "kicker";
    kicker.appendChild(biText(work.category));
    const h1 = document.createElement("h1");
    h1.className = "detail__title";
    h1.appendChild(biText(work.title));
    const meta = document.createElement("p");
    meta.className = "detail__meta";
    meta.appendChild(biText({ en: "Year", th: "ปี" }));
    meta.appendChild(document.createTextNode(": " + work.year));
    header.appendChild(kicker);
    header.appendChild(h1);
    header.appendChild(meta);

    const desc = document.createElement("p");
    desc.className = "detail__desc reveal";
    desc.appendChild(biText(work.description));

    const gallery = document.createElement("div");
    gallery.className = "detail__gallery";
    (work.images || [work.cover]).forEach(function (src) {
      const fig = document.createElement("figure");
      fig.className = "detail__figure reveal";
      const img = document.createElement("img");
      img.src = src;
      img.alt = work.title.en;
      img.loading = "lazy";
      fig.appendChild(img);
      gallery.appendChild(fig);
    });

    root.appendChild(back);
    root.appendChild(header);
    root.appendChild(desc);
    root.appendChild(gallery);
  }

  /* ---------- ลูกเล่น: เลื่อนถึงแล้วค่อย ๆ ปรากฏ ---------- */
  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- แถบเมนูเปลี่ยนสไตล์เมื่อเลื่อนหน้าจอ ---------- */
  function setupNavScroll() {
    const nav = document.getElementById("nav");
    if (!nav || nav.classList.contains("nav--solid")) return;
    const onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- เริ่มทำงานเมื่อหน้าโหลดเสร็จ ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    buildWorkGrid();
    buildDetail();
    applyLanguage();
    setupReveal();
    setupNavScroll();

    const langBtn = document.getElementById("langToggle");
    if (langBtn) langBtn.addEventListener("click", toggleLanguage);
  });
})();
