/* =========================================================================
   particles.js  —  ฝุ่นจุดเล็ก ๆ ลอยวิ่งบนหน้า Landing (วาดด้วย canvas)
   ปรับจำนวน/ความเร็ว/สี ได้ที่ค่าในฟังก์ชัน makeParticles ด้านล่าง
   ========================================================================= */

(function () {
  "use strict";

  var canvas = document.getElementById("heroDust");
  if (!canvas || !canvas.getContext) return;

  var ctx = canvas.getContext("2d");
  var hero = canvas.closest(".hero") || canvas.parentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var w = 0, h = 0, particles = [], raf = 0, t = 0;

  // สีจุด (รูปแบบ R,G,B) — ส้ม/ขาว
  var COLORS = ["255,176,96", "255,122,24", "255,255,255", "255,96,32"];

  function rand(a, b) { return a + Math.random() * (b - a); }

  function resize() {
    var rect = hero.getBoundingClientRect();
    w = rect.width; h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function makeParticles() {
    var count = Math.round((w * h) / 11000);     // ความหนาแน่น
    count = Math.max(50, Math.min(150, count));
    particles = [];
    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: rand(0.5, 2.4),
        vx: rand(-0.5, 0.5),
        vy: rand(-1.4, -0.4),                     // ลอยขึ้น (เร็วขึ้น)
        a: rand(0.18, 0.85),
        tw: rand(0.01, 0.04),                     // ความเร็วกะพริบ
        c: COLORS[(Math.random() * COLORS.length) | 0]
      });
    }
  }

  function drawParticle(p, alpha) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(" + p.c + "," + alpha.toFixed(3) + ")";
    ctx.fill();
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -6) { p.y = h + 6; p.x = Math.random() * w; }   // วนกลับลงล่าง
      if (p.x < -6) p.x = w + 6;
      if (p.x > w + 6) p.x = -6;
      var alpha = p.a * (0.55 + 0.45 * Math.sin(t * p.tw + i));
      drawParticle(p, Math.max(0, alpha));
    }
    t += 1;
    raf = requestAnimationFrame(frame);
  }

  function startStatic() {
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < particles.length; i++) drawParticle(particles[i], particles[i].a);
  }

  function start() {
    resize();
    makeParticles();
    if (reduce) { startStatic(); return; }
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(frame);
  }

  window.addEventListener("resize", function () {
    resize();
    makeParticles();
  });

  document.addEventListener("visibilitychange", function () {
    if (reduce) return;
    if (document.hidden) { cancelAnimationFrame(raf); }
    else { cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); }
  });

  if (document.readyState !== "loading") start();
  else document.addEventListener("DOMContentLoaded", start);
})();
