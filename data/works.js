/* =========================================================================
   works.js  —  รายการผลงานทั้งหมดของเว็บ
   -------------------------------------------------------------------------
   ★ ที่เดียวที่คุณต้องมาแก้เวลา "เพิ่มงานใหม่" หรือ "เปลี่ยนรูป" ★

   วิธีเพิ่มงาน 1 ชิ้น: ก๊อปบล็อก { ... } หนึ่งก้อนด้านล่าง วางต่อท้าย
   แล้วแก้ค่าข้างใน (ดูคำอธิบายแต่ละบรรทัด) อย่าลืมมีเครื่องหมาย , คั่นแต่ละก้อน

   - id          : ชื่อเรียกสั้น ๆ ห้ามซ้ำ ใช้ตัวอักษรอังกฤษ/ตัวเลข/ขีด -
   - title       : ชื่อผลงาน (en = อังกฤษ, th = ไทย)
   - category    : หมวดงาน เช่น Branding, Poster, Illustration
   - year        : ปีของผลงาน
   - cover       : รูปหน้าปกที่โชว์ในแกลเลอรี (ใส่ที่อยู่ไฟล์รูป)
   - images      : รูปทั้งหมดในหน้ารายละเอียด (ใส่ได้หลายรูป)
   - description : คำอธิบายผลงาน (en/th)
   ========================================================================= */

const WORKS = [
  {
    id: "neon-brand",
    title: { en: "Neon Brand Identity", th: "อัตลักษณ์แบรนด์ Neon" },
    category: { en: "Branding", th: "งานแบรนด์" },
    year: "2025",
    cover: "assets/works/work-1.svg",
    images: ["assets/works/work-1.svg", "assets/works/work-2.svg"],
    description: {
      en: "A complete visual identity for a fictional tech startup — logo system, color palette, and typography crafted to feel modern and energetic.",
      th: "งานออกแบบอัตลักษณ์ภาพรวมให้สตาร์ทอัพสายเทคโนโลยี (ตัวอย่าง) ครบทั้งระบบโลโก้ ชุดสี และฟอนต์ ให้ดูทันสมัยและมีพลัง"
    }
  },
  {
    id: "poster-series",
    title: { en: "Festival Poster Series", th: "ชุดโปสเตอร์เทศกาล" },
    category: { en: "Poster", th: "โปสเตอร์" },
    year: "2025",
    cover: "assets/works/work-2.svg",
    images: ["assets/works/work-2.svg", "assets/works/work-3.svg"],
    description: {
      en: "A set of three event posters exploring bold typography and layered gradients to capture the energy of live music.",
      th: "ชุดโปสเตอร์อีเวนต์ 3 ชิ้น เล่นกับตัวอักษรขนาดใหญ่และไล่เฉดสีซ้อนชั้น เพื่อสื่ออารมณ์ของดนตรีสด"
    }
  },
  {
    id: "editorial-layout",
    title: { en: "Editorial Layout", th: "เลย์เอาต์นิตยสาร" },
    category: { en: "Print", th: "งานสิ่งพิมพ์" },
    year: "2024",
    cover: "assets/works/work-3.svg",
    images: ["assets/works/work-3.svg", "assets/works/work-4.svg"],
    description: {
      en: "Magazine spread design focused on a clean grid, generous whitespace, and a refined hierarchy between image and text.",
      th: "งานออกแบบหน้าคู่ของนิตยสาร เน้นกริดที่สะอาด เว้นช่องว่างเยอะ และจัดลำดับความสำคัญระหว่างรูปกับข้อความอย่างประณีต"
    }
  },
  {
    id: "icon-set",
    title: { en: "Minimal Icon Set", th: "ชุดไอคอนมินิมอล" },
    category: { en: "Illustration", th: "ภาพประกอบ" },
    year: "2024",
    cover: "assets/works/work-4.svg",
    images: ["assets/works/work-4.svg", "assets/works/work-5.svg"],
    description: {
      en: "A cohesive set of line icons designed on a consistent grid for use across a product interface.",
      th: "ชุดไอคอนเส้นที่ออกแบบบนกริดเดียวกันให้กลมกลืน สำหรับใช้ในหน้าจอผลิตภัณฑ์"
    }
  },
  {
    id: "packaging",
    title: { en: "Product Packaging", th: "แพ็กเกจจิ้งสินค้า" },
    category: { en: "Packaging", th: "บรรจุภัณฑ์" },
    year: "2024",
    cover: "assets/works/work-5.svg",
    images: ["assets/works/work-5.svg", "assets/works/work-6.svg"],
    description: {
      en: "Packaging concept balancing playful color with a premium, tactile finish for a boutique coffee brand.",
      th: "คอนเซ็ปต์บรรจุภัณฑ์ที่สมดุลระหว่างสีสันสนุก ๆ กับสัมผัสพรีเมียม สำหรับแบรนด์กาแฟบูทีก"
    }
  },
  {
    id: "social-campaign",
    title: { en: "Social Media Campaign", th: "แคมเปญโซเชียลมีเดีย" },
    category: { en: "Digital", th: "งานดิจิทัล" },
    year: "2025",
    cover: "assets/works/work-6.svg",
    images: ["assets/works/work-6.svg", "assets/works/work-1.svg"],
    description: {
      en: "A series of social templates with a flexible system that keeps the brand consistent across every post.",
      th: "ชุดเทมเพลตโซเชียลที่ออกแบบเป็นระบบยืดหยุ่น ช่วยให้ทุกโพสต์ดูเป็นแบรนด์เดียวกัน"
    }
  }
];
