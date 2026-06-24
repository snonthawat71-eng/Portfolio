/* =========================================================================
   i18n.js  —  ข้อความสองภาษาของเว็บ (EN / TH)
   -------------------------------------------------------------------------
   ในหน้า HTML ข้อความที่ต้องแปลจะมีป้ายกำกับ data-i18n="คีย์"
   เวลาสลับภาษา โค้ดจะหยิบข้อความตามคีย์ในตารางนี้ไปแสดง

   แก้ข้อความ = แก้ค่าในตารางนี้ (en = อังกฤษ, th = ไทย)
   ========================================================================= */

const I18N = {
  en: {
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.resume": "Resume",

    "hero.kicker": "Graphic Designer · Portfolio",
    "hero.title": "Crafting bold",
    "hero.titleAccent": "visual stories.",
    "hero.tagline": "I’m a graphic designer turning ideas into striking visuals — branding, posters, and everything in between.",
    "hero.cta": "View Work",
    "hero.scroll": "Scroll",
    "hero.stat1n": "120+", "hero.stat1l": "Projects done",
    "hero.stat2n": "6+", "hero.stat2l": "Years experience",
    "hero.stat3n": "40+", "hero.stat3l": "Happy clients",
    "hero.trusted": "Trusted by brands & studios",

    "marquee.label": "Tools I work with",

    "services.kicker": "What I Do",
    "services.title": "Services",
    "svc1.t": "Brand Identity", "svc1.d": "Logos, color systems and guidelines that make a brand feel unmistakably its own.",
    "svc2.t": "Poster & Print", "svc2.d": "Bold layouts for posters, editorial and packaging — crafted down to the last detail.",
    "svc3.t": "Illustration", "svc3.d": "Custom illustration and icon sets that add personality to any product.",
    "svc4.t": "Social & Digital", "svc4.d": "Flexible templates and campaigns that keep brands consistent everywhere.",
    "services.more": "Learn more",

    "feature.kicker": "Featured Project",
    "feature.title": "A complete rebrand, end to end",
    "feature.desc": "From research to final delivery — a visual identity built to feel modern, energetic and timeless.",
    "feature.author": "Your Name",
    "feature.role": "Graphic Designer",

    "testi.kicker": "Testimonials",
    "testi.title": "What clients say",
    "testi.q1": "“Turned our rough idea into a brand we’re genuinely proud of. Fast, thoughtful and incredibly talented.”",
    "testi.n1": "Alex Carter", "testi.r1": "Founder, Studio North",
    "testi.q2": "“Every detail was considered. The posters got more attention than anything we’ve put out before.”",
    "testi.n2": "Mia Chen", "testi.r2": "Marketing Lead, Bloom",
    "testi.q3": "“A rare designer who balances bold creativity with real clarity. Highly recommended.”",
    "testi.n3": "Daniel Reed", "testi.r3": "Creative Director, Form&Co",

    "cta.title": "Let’s create something bold",
    "cta.body": "Have a project in mind? I’d love to hear about it.",
    "cta.btn": "Start a project",

    "work.kicker": "Selected Work",
    "work.title": "Things I’ve made",
    "work.view": "View project",

    "about.kicker": "About",
    "about.title": "A little about me",
    "about.body": "I’m a graphic designer who loves turning ideas into clear, beautiful visuals. I work across branding, print, illustration, and digital — always aiming for design that feels both simple and memorable.",
    "about.skills": "Tools & Skills",

    "contact.kicker": "Contact",
    "contact.title": "Let’s work together",
    "contact.body": "Open to freelance projects and full-time roles. Feel free to reach out.",
    "contact.emailLabel": "Email",
    "contact.cta": "Say hello",

    "resume.cta": "Download Resume (PDF)",

    "footer.rights": "All rights reserved.",
    "lang.toggle": "TH",

    "detail.back": "Back to work",
    "detail.category": "Category",
    "detail.year": "Year",
    "detail.notFound": "Project not found."
  },

  th: {
    "nav.work": "ผลงาน",
    "nav.about": "เกี่ยวกับ",
    "nav.contact": "ติดต่อ",
    "nav.resume": "เรซูเม่",

    "hero.kicker": "กราฟิกดีไซเนอร์ · พอร์ตโฟลิโอ",
    "hero.title": "ออกแบบงานภาพ",
    "hero.titleAccent": "ที่เล่าเรื่องได้",
    "hero.tagline": "ฉันเป็นกราฟิกดีไซเนอร์ที่เปลี่ยนไอเดียให้กลายเป็นงานภาพที่สะดุดตา — ทั้งงานแบรนด์ โปสเตอร์ และอื่น ๆ อีกมากมาย",
    "hero.cta": "ดูผลงาน",
    "hero.scroll": "เลื่อนลง",
    "hero.stat1n": "120+", "hero.stat1l": "ผลงานที่ทำ",
    "hero.stat2n": "6+", "hero.stat2l": "ปีประสบการณ์",
    "hero.stat3n": "40+", "hero.stat3l": "ลูกค้าที่ไว้ใจ",
    "hero.trusted": "ได้รับความไว้วางใจจากแบรนด์และสตูดิโอ",

    "marquee.label": "เครื่องมือที่ใช้",

    "services.kicker": "สิ่งที่ฉันทำ",
    "services.title": "บริการ",
    "svc1.t": "อัตลักษณ์แบรนด์", "svc1.d": "โลโก้ ระบบสี และไกด์ไลน์ที่ทำให้แบรนด์มีเอกลักษณ์เป็นของตัวเอง",
    "svc2.t": "โปสเตอร์ & สิ่งพิมพ์", "svc2.d": "เลย์เอาต์เด่น ๆ สำหรับโปสเตอร์ นิตยสาร และแพ็กเกจ ใส่ใจทุกรายละเอียด",
    "svc3.t": "ภาพประกอบ", "svc3.d": "ภาพประกอบและชุดไอคอนเฉพาะตัว เพิ่มคาแร็กเตอร์ให้ทุกผลิตภัณฑ์",
    "svc4.t": "โซเชียล & ดิจิทัล", "svc4.d": "เทมเพลตและแคมเปญที่ยืดหยุ่น ช่วยให้แบรนด์ดูเป็นชุดเดียวกันทุกที่",
    "services.more": "ดูเพิ่ม",

    "feature.kicker": "ผลงานเด่น",
    "feature.title": "รีแบรนด์ครบวงจร ตั้งแต่ต้นจนจบ",
    "feature.desc": "ตั้งแต่การค้นคว้าจนถึงงานส่งมอบสุดท้าย — อัตลักษณ์ภาพที่ดูทันสมัย มีพลัง และอยู่ได้นาน",
    "feature.author": "ชื่อของคุณ",
    "feature.role": "กราฟิกดีไซเนอร์",

    "testi.kicker": "รีวิว",
    "testi.title": "ลูกค้าพูดถึงเรา",
    "testi.q1": "“เปลี่ยนไอเดียคร่าว ๆ ของเราให้เป็นแบรนด์ที่เราภูมิใจจริง ๆ ทำงานไว คิดละเอียด และเก่งมาก”",
    "testi.n1": "Alex Carter", "testi.r1": "ผู้ก่อตั้ง Studio North",
    "testi.q2": "“ใส่ใจทุกดีเทล โปสเตอร์ได้รับความสนใจมากกว่าทุกชิ้นที่เราเคยทำมา”",
    "testi.n2": "Mia Chen", "testi.r2": "หัวหน้าการตลาด Bloom",
    "testi.q3": "“ดีไซเนอร์หายากที่สมดุลความครีเอทีฟกับความชัดเจนได้ แนะนำเลย”",
    "testi.n3": "Daniel Reed", "testi.r3": "ครีเอทีฟไดเรกเตอร์ Form&Co",

    "cta.title": "มาสร้างอะไรเจ๋ง ๆ ด้วยกัน",
    "cta.body": "มีโปรเจกต์ในใจอยู่แล้วใช่ไหม? เล่าให้ฟังได้เลย",
    "cta.btn": "เริ่มโปรเจกต์",

    "work.kicker": "ผลงานคัดสรร",
    "work.title": "งานที่ฉันทำ",
    "work.view": "ดูรายละเอียด",

    "about.kicker": "เกี่ยวกับ",
    "about.title": "เกี่ยวกับฉันสักหน่อย",
    "about.body": "ฉันเป็นกราฟิกดีไซเนอร์ที่ชอบเปลี่ยนไอเดียให้กลายเป็นงานภาพที่สวยและสื่อสารชัดเจน ทำงานหลากหลายทั้งงานแบรนด์ สิ่งพิมพ์ ภาพประกอบ และงานดิจิทัล โดยตั้งใจให้งานดูเรียบง่ายแต่จดจำได้",
    "about.skills": "เครื่องมือและทักษะ",

    "contact.kicker": "ติดต่อ",
    "contact.title": "มาร่วมงานกันนะ",
    "contact.body": "รับงานฟรีแลนซ์และพร้อมร่วมงานประจำ ติดต่อมาได้เลย",
    "contact.emailLabel": "อีเมล",
    "contact.cta": "ทักทายกัน",

    "resume.cta": "ดาวน์โหลดเรซูเม่ (PDF)",

    "footer.rights": "สงวนลิขสิทธิ์",
    "lang.toggle": "EN",

    "detail.back": "กลับไปหน้าผลงาน",
    "detail.category": "หมวดงาน",
    "detail.year": "ปี",
    "detail.notFound": "ไม่พบผลงานนี้"
  }
};
