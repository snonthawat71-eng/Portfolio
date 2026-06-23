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
  var w = 0, h = 0, particles = [], raf = 0;
  var originX = 0, originY = 0;

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
    computeOrigin();
  }

  // จุดกำเนิดฝุ่น = กลางรูปคน (ถ้าไม่เจอรูป ใช้ฝั่งขวา)
  function computeOrigin() {
    var img = hero.querySelector(".hero-visual img");
    var hrect = hero.getBoundingClientRect();
    if (img && img.getBoundingClientRect().width > 0) {
      var r = img.getBoundingClientRect();
      originX = r.left - hrect.left + r.width / 2;
      originY = r.top - hrect.top + r.height * 0.42;
    } else {
      originX = w * 0.72;
      originY = h * 0.45;
    }
  }

  function spawn(p) {
    var ang = Math.random() * Math.PI * 2;
    var spd = rand(0.06, 0.32);                 // ช้า
    p.x = originX + rand(-14, 14);
    p.y = originY + rand(-14, 14);
    p.vx = Math.cos(ang) * spd;
    p.vy = Math.sin(ang) * spd;
    p.r = rand(0.7, 2.4);
    p.life = 0;
    p.maxLife = rand(320, 760);                 // อยู่นาน (ลอยช้า)
    p.base = rand(0.4, 0.95);
    p.c = COLORS[(Math.random() * COLORS.length) | 0];
  }

  function makeParticles() {
    var count = Math.round((w * h) / 34000);    // น้อยลง
    count = Math.max(18, Math.min(46, count));
    particles = [];
    for (var i = 0; i < count; i++) {
      var p = {};
      spawn(p);
      p.life = Math.random() * p.maxLife;       // กระจายช่วงชีวิตตอนเริ่ม
      particles.push(p);
    }
  }

  function draw(p) {
    var prog = p.life / p.maxLife;
    var alpha = Math.sin(prog * Math.PI) * p.base;   // จาง-เข้ม-จาง
    if (alpha <= 0) return;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(" + p.c + "," + alpha.toFixed(3) + ")";
    ctx.fill();
  }

  function frame() {
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
