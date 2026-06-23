/* =========================================================================
   particles.js  —  ฝุ่นจุดเล็ก ๆ "พุ่งออกจากหลังรูป" บนหน้า Landing (canvas)
   จุดกำเนิด = ตำแหน่งรูปคน แล้วกระจายออกช้า ๆ จางหายไป
   ปรับ จำนวน/ความเร็ว ได้ที่ค่าในฟังก์ชัน makeParticles / spawn ด้านล่าง
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
  var originX = 0, originY = 0;

  // สีจุด (รูปแบบ R,G,B) — เน้นขาว/สว่าง ให้เห็นชัดทั้งบนพื้นมืดและแสงส้ม
  var COLORS = ["255,255,255", "255,240,220", "255,214,160", "255,170,90"];

  function rand(a, b) { return a + Math.random() * (b - a); }

  function resize() {
    var rect = hero.getBoundingClientRect();
    w = rect.width; h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    computeOrigin();
  }

  // จุดกำเนิดฝุ่น = กลางรูปคน (ถ้าไม่เจอรูป ใช้ฝั่งขวา)
  function computeOrigin() {
    var img = hero.querySelector(".hero-visual img");
    var hrect = hero.getBoundingClientRect();
    if (img && img.getBoundingClientRect().width > 0) {
      var r = img.getBoundingClientRect();
      originX = r.left - hrect.left + r.width * 0.30;   // ขอบซ้ายของรูป
      originY = r.top - hrect.top + r.height * 0.45;
    } else {
      originX = w * 0.72;
      originY = h * 0.45;
    }
  }

  function spawn(p) {
    // แผ่ออกจากหลังรูปเข้าหาโซนที่มองเห็น (ซ้าย/บน/ล่าง) กระจายเต็มจอเหมือน v1
    var ang = Math.PI * 0.45 + Math.random() * Math.PI * 1.1;
    var spd = rand(0.18, 0.68);
    p.x = originX + rand(-8, 8);
    p.y = originY + rand(-8, 8);
    p.vx = Math.cos(ang) * spd;
    p.vy = Math.sin(ang) * spd;
    p.r = rand(0.8, 2.6);
    p.life = 0;
    p.maxLife = rand(600, 1500);                // อยู่นาน + ไปได้ไกล
    p.base = rand(0.55, 1);
    p.tw = rand(0.012, 0.045);                  // ความเร็วกะพริบ
    p.seed = Math.random() * 1000;
    p.c = COLORS[(Math.random() * COLORS.length) | 0];
  }

  function makeParticles() {
    var count = Math.round((w * h) / 9000);     // เยอะแบบ v1
    count = Math.max(90, Math.min(200, count));
    particles = [];
    for (var i = 0; i < count; i++) {
      var p = {};
      spawn(p);
      p.life = Math.random() * p.maxLife;       // กระจายช่วงชีวิตตอนเริ่ม
      p.x += p.vx * p.life;                      // กระจายตำแหน่งให้เต็มตั้งแต่แรก
      p.y += p.vy * p.life;
      particles.push(p);
    }
  }

  function draw(p) {
    var prog = p.life / p.maxLife;
    var fade = Math.min(prog / 0.12, (1 - prog) / 0.3, 1);     // จางเข้า/ออกตอนปลาย
    var twinkle = 0.5 + 0.5 * Math.sin(t * p.tw + p.seed);     // กะพริบระยิบ
    var alpha = Math.max(0, fade) * p.base * (0.35 + 0.65 * twinkle);
    if (alpha <= 0.01) return;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.shadowColor = "rgba(" + p.c + ",1)";         // เรืองแสง
    ctx.shadowBlur = p.r * 3;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(" + p.c + ",1)";
    ctx.fill();
    ctx.restore();
  }

  function frame() {
    t += 1;
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.life++;
      p.x += p.vx;
      p.y += p.vy;
      if (p.life >= p.maxLife) spawn(p);        // เกิดใหม่ที่จุดกำเนิด
      draw(p);
    }
    raf = requestAnimationFrame(frame);
  }

  function startStatic() {
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < particles.length; i++) draw(particles[i]);
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
