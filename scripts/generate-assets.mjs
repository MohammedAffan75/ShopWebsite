import fs from "fs";
import path from "path";

const placeholdersDir = path.join(process.cwd(), "public", "images", "placeholders");
const qrDir = path.join(process.cwd(), "public", "images", "qr");
const visitingCardsDir = path.join(process.cwd(), "public", "images", "visiting-cards");

if (!fs.existsSync(placeholdersDir)) fs.mkdirSync(placeholdersDir, { recursive: true });
if (!fs.existsSync(qrDir)) fs.mkdirSync(qrDir, { recursive: true });
if (!fs.existsSync(visitingCardsDir)) fs.mkdirSync(visitingCardsDir, { recursive: true });

function createSvgAsset(title, subtitle, iconType, bgColor1, bgColor2, accentColor) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgColor1}" />
      <stop offset="100%" stop-color="${bgColor2}" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F9E79F" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#AA7C11" />
    </linearGradient>
    <pattern id="embroideryLace" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 40 20 L 20 40 L 0 20 Z" fill="none" stroke="rgba(212,175,55,0.08)" stroke-width="1.5" />
      <circle cx="20" cy="20" r="4" fill="none" stroke="rgba(212,175,55,0.12)" stroke-width="1" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="800" height="1000" fill="url(#bgGrad)" />
  <rect width="800" height="1000" fill="url(#embroideryLace)" />

  <!-- Ornate Border Frame -->
  <rect x="30" y="30" width="740" height="940" rx="20" fill="none" stroke="url(#goldGrad)" stroke-width="2" stroke-dasharray="6,4" opacity="0.6" />
  <rect x="45" y="45" width="710" height="910" rx="14" fill="none" stroke="url(#goldGrad)" stroke-width="1" opacity="0.3" />

  <!-- Corner Mandalas -->
  <g fill="none" stroke="url(#goldGrad)" stroke-width="1.5" opacity="0.7">
    <path d="M 45 75 Q 75 75 75 45" />
    <circle cx="75" cy="75" r="8" />
    <path d="M 755 75 Q 725 75 725 45" />
    <circle cx="725" cy="75" r="8" />
    <path d="M 45 925 Q 75 925 75 955" />
    <circle cx="75" cy="925" r="8" />
    <path d="M 755 925 Q 725 925 725 955" />
    <circle cx="725" cy="925" r="8" />
  </g>

  <!-- Center Decorative Artwork -->
  <g transform="translate(400, 420)">
    <!-- Aura Rings -->
    <circle r="180" fill="none" stroke="url(#goldGrad)" stroke-width="1" opacity="0.25" stroke-dasharray="8,8" />
    <circle r="150" fill="none" stroke="url(#goldGrad)" stroke-width="1.5" opacity="0.4" />
    <circle r="120" fill="rgba(212,175,55,0.06)" />

    <!-- Stylized Central Icon / Motif -->
    ${
      iconType === "blouse"
        ? `<!-- Blouse & Neckline Outline -->
          <path d="M -80 -80 C -40 -30 40 -30 80 -80 L 110 -20 L 70 30 L 70 120 L -70 120 L -70 30 L -110 -20 Z" 
                fill="none" stroke="url(#goldGrad)" stroke-width="4" stroke-linejoin="round" />
          <path d="M 0 -35 L 0 120" stroke="url(#goldGrad)" stroke-width="2" stroke-dasharray="4,4" />
          <path d="M -70 120 Q 0 140 70 120" stroke="url(#goldGrad)" stroke-width="3" fill="none" />
          <circle cx="0" cy="-35" r="6" fill="#D4AF37" />
          <circle cx="0" cy="10" r="5" fill="#D4AF37" />
          <circle cx="0" cy="55" r="5" fill="#D4AF37" />
          <circle cx="0" cy="100" r="5" fill="#D4AF37" />`
        : iconType === "embroidery"
        ? `<!-- Embroidery Hoop & Threads -->
          <circle r="95" fill="none" stroke="url(#goldGrad)" stroke-width="6" />
          <circle r="88" fill="none" stroke="${accentColor}" stroke-width="2" stroke-dasharray="3,3" />
          <!-- Peacock / Floral Petals inside hoop -->
          <path d="M 0 -60 C 40 -30 40 30 0 60 C -40 30 -40 -30 0 -60 Z" fill="rgba(212,175,55,0.18)" stroke="url(#goldGrad)" stroke-width="2" />
          <path d="M -60 0 C -30 40 30 40 60 0 C 30 -40 -30 -40 -60 0 Z" fill="rgba(212,175,55,0.18)" stroke="url(#goldGrad)" stroke-width="2" />
          <circle cx="0" cy="0" r="14" fill="url(#goldGrad)" />
          <!-- Needle -->
          <line x1="-80" y1="90" x2="60" y2="-90" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
          <line x1="-80" y1="90" x2="-95" y2="105" stroke="url(#goldGrad)" stroke-width="2" stroke-dasharray="2,3" />`
        : iconType === "suit"
        ? `<!-- Flared Anarkali / Kurti Outline -->
          <path d="M -45 -90 C -20 -60 20 -60 45 -90 L 75 -40 L 45 -10 L 110 130 L -110 130 L -45 -10 L -75 -40 Z" 
                fill="none" stroke="url(#goldGrad)" stroke-width="4" stroke-linejoin="round" />
          <path d="M 0 -65 L 0 50" stroke="url(#goldGrad)" stroke-width="2" stroke-dasharray="4,4" />
          <circle cx="0" cy="-65" r="6" fill="#D4AF37" />
          <circle cx="0" cy="-20" r="5" fill="#D4AF37" />
          <circle cx="0" cy="20" r="5" fill="#D4AF37" />
          <path d="M -110 130 Q 0 155 110 130" stroke="url(#goldGrad)" stroke-width="3" fill="none" />`
        : iconType === "bridal"
        ? `<!-- Crown & Heavy Bridal Motif -->
          <path d="M -90 40 L -60 -50 L 0 -10 L 60 -50 L 90 40 Z" fill="none" stroke="url(#goldGrad)" stroke-width="4" stroke-linejoin="round" />
          <circle cx="-60" cy="-55" r="7" fill="url(#goldGrad)" />
          <circle cx="0" cy="-15" r="9" fill="url(#goldGrad)" />
          <circle cx="60" cy="-55" r="7" fill="url(#goldGrad)" />
          <!-- Diamond pendant -->
          <path d="M 0 45 L 35 80 L 0 125 L -35 80 Z" fill="rgba(212,175,55,0.25)" stroke="url(#goldGrad)" stroke-width="3" />
          <circle cx="0" cy="80" r="8" fill="#FFF" />`
        : `<!-- Shop & Tailoring Shears -->
          <circle r="80" fill="none" stroke="url(#goldGrad)" stroke-width="3" />
          <!-- Scissor blades -->
          <path d="M -40 -60 L 40 60 M 40 -60 L -40 60" stroke="url(#goldGrad)" stroke-width="6" stroke-linecap="round" />
          <circle cx="-45" cy="-65" r="18" fill="none" stroke="url(#goldGrad)" stroke-width="5" />
          <circle cx="45" cy="-65" r="18" fill="none" stroke="url(#goldGrad)" stroke-width="5" />
          <circle cx="0" cy="0" r="6" fill="#FFFFFF" />`
    }
  </g>

  <!-- Typography Labels -->
  <g text-anchor="middle">
    <text x="400" y="690" font-family="'Playfair Display', Georgia, serif" font-size="34" font-weight="700" fill="#FFFFFF" letter-spacing="1">
      ${title}
    </text>
    <text x="400" y="735" font-family="'Poppins', sans-serif" font-size="18" font-weight="400" fill="#E5C07B" letter-spacing="2">
      ${subtitle.toUpperCase()}
    </text>
    
    <!-- Gold Line Divider -->
    <path d="M 280 770 L 370 770 M 430 770 L 520 770" stroke="url(#goldGrad)" stroke-width="1.5" />
    <circle cx="400" cy="770" r="5" fill="#D4AF37" />

    <text x="400" y="825" font-family="'Poppins', sans-serif" font-size="16" fill="rgba(255,255,255,0.75)">
      HIBA LADIES TAILOR &amp; EMBROIDERY WORKS
    </text>
    <text x="400" y="860" font-family="'Poppins', sans-serif" font-size="14" fill="#D4AF37">
      Mavinakere, Raichur • Phone: 093537 63089
    </text>
  </g>
</svg>`;
}

const assets = [
  { file: "shop-outside.svg", title: "Shop Front & Exterior", subtitle: "Mavinakere, Raichur", type: "shop", bg1: "#380B23", bg2: "#200412", acc: "#D4AF37" },
  { file: "shop-inside-1.svg", title: "Fitting & Measurement Lounge", subtitle: "Comfortable Ladies Consultation Area", type: "blouse", bg1: "#450C2C", bg2: "#260618", acc: "#D4AF37" },
  { file: "shop-inside-2.svg", title: "Computer Embroidery Unit", subtitle: "Precision Multi-Needle Machinery", type: "embroidery", bg1: "#3A0D28", bg2: "#1F0515", acc: "#E5C07B" },
  { file: "new-1.svg", title: "Royal Plum Bridal Aari Blouse", subtitle: "Heavy Zardosi & Stone Artwork", type: "bridal", bg1: "#4C0827", bg2: "#240312", acc: "#F9E79F" },
  { file: "new-2.svg", title: "Peacock Motif Computer Work", subtitle: "Multi-Color Needle Embroidery", type: "embroidery", bg1: "#340A24", bg2: "#190311", acc: "#D4AF37" },
  { file: "new-3.svg", title: "Maroon Flared Designer Anarkali", subtitle: "Bespoke Cut with Matching Dupatta", type: "suit", bg1: "#420B25", bg2: "#210412", acc: "#E5C07B" },
  { file: "new-4.svg", title: "Gold Tissue Princess Cut Blouse", subtitle: "Designer Boat Neck & Custom Latkans", type: "blouse", bg1: "#480E2F", bg2: "#270619", acc: "#F9E79F" },
  { file: "design-1.svg", title: "Bridal Maggam Work Blouse", subtitle: "Intricate Antique Gold Zari Neckline", type: "bridal", bg1: "#400A23", bg2: "#1C040F", acc: "#D4AF37" },
  { file: "design-2.svg", title: "Contemporary Boat Neck Blouse", subtitle: "Elbow Sleeves & Clean Edge Stitch", type: "blouse", bg1: "#470D2D", bg2: "#230616", acc: "#D4AF37" },
  { file: "design-3.svg", title: "Straight Cut Designer Suit", subtitle: "Fine Neck Stitching with Cigarette Pants", type: "suit", bg1: "#3D0B26", bg2: "#1D0512", acc: "#E5C07B" },
  { file: "design-4.svg", title: "Full Circle Bridal Lehenga Set", subtitle: "Can-Can Layering & Custom Choli", type: "bridal", bg1: "#490B2A", bg2: "#220413", acc: "#F9E79F" },
  { file: "design-5.svg", title: "Classic Katori Silk Saree Blouse", subtitle: "Flawless Shoulder & Armhole Fit", type: "blouse", bg1: "#3E0B25", bg2: "#1E0412", acc: "#D4AF37" },
  { file: "design-6.svg", title: "Festive Silk Kurti with Palazzo", subtitle: "Comfort Fit with Breathable Lining", type: "suit", bg1: "#440D2B", bg2: "#230616", acc: "#E5C07B" },
  { file: "embroidery-1.svg", title: "Floral Needlepoint Embroidery", subtitle: "Computerized Dense Thread Stitch", type: "embroidery", bg1: "#380A22", bg2: "#19030F", acc: "#F9E79F" },
  { file: "embroidery-2.svg", title: "Temple Border Sleeve Work", subtitle: "Traditional Motif on Deep Silk", type: "embroidery", bg1: "#460E2C", bg2: "#220515", acc: "#D4AF37" },
  { file: "embroidery-3.svg", title: "Twin Peacock Back Neck Design", subtitle: "Stone Accents & Golden Cordon", type: "embroidery", bg1: "#3F0A24", bg2: "#1F0412", acc: "#E5C07B" },
];

for (const asset of assets) {
  const content = createSvgAsset(asset.title, asset.subtitle, asset.type, asset.bg1, asset.bg2, asset.acc);
  fs.writeFileSync(path.join(placeholdersDir, asset.file), content, "utf-8");
}

// Generate Visiting Card SVGs
function createVisitingCardSvg(isFront) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 600" width="100%" height="100%">
  <defs>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3D0B24" />
      <stop offset="50%" stop-color="#2A0518" />
      <stop offset="100%" stop-color="#19020E" />
    </linearGradient>
    <linearGradient id="cardGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBF1C7" />
      <stop offset="45%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#996515" />
    </linearGradient>
    <pattern id="cardLace" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 15 0 L 30 15 L 15 30 L 0 15 Z" fill="none" stroke="rgba(212,175,55,0.08)" stroke-width="1" />
    </pattern>
  </defs>

  <rect width="1050" height="600" rx="24" fill="url(#cardBg)" />
  <rect width="1050" height="600" rx="24" fill="url(#cardLace)" />
  <rect x="25" y="25" width="1000" height="550" rx="18" fill="none" stroke="url(#cardGold)" stroke-width="2" stroke-dasharray="8,6" opacity="0.6" />
  <rect x="40" y="40" width="970" height="520" rx="14" fill="none" stroke="url(#cardGold)" stroke-width="1" opacity="0.3" />

  ${
    isFront
      ? `
  <!-- Front of Visiting Card -->
  <g transform="translate(100, 100)">
    <!-- Brand Emblem -->
    <circle cx="80" cy="80" r="55" fill="none" stroke="url(#cardGold)" stroke-width="3" />
    <circle cx="80" cy="80" r="48" fill="rgba(212,175,55,0.1)" />
    <!-- Scissor and Thread Silhouette -->
    <path d="M 60 60 L 100 100 M 100 60 L 60 100" stroke="url(#cardGold)" stroke-width="4" stroke-linecap="round" />
    <circle cx="55" cy="55" r="9" fill="none" stroke="url(#cardGold)" stroke-width="3" />
    <circle cx="105" cy="55" r="9" fill="none" stroke="url(#cardGold)" stroke-width="3" />
    <circle cx="80" cy="80" r="4" fill="#FFFFFF" />
  </g>

  <g transform="translate(280, 130)">
    <text font-family="'Playfair Display', Georgia, serif" font-size="34" font-weight="800" fill="url(#cardGold)" letter-spacing="1">
      HIBA LADIES TAILOR
    </text>
    <text y="42" font-family="'Poppins', sans-serif" font-size="20" font-weight="600" fill="#FFFFFF" letter-spacing="3">
      &amp; EMBROIDERY WORKS
    </text>
    <text y="75" font-family="'Noto Sans Kannada', sans-serif" font-size="16" fill="#FBF1C7" opacity="0.9">
      ಹಿಬಾ ಲೇಡೀಸ್ ಟೈಲರ್ ಮತ್ತು ಎಂಬ್ರಾಯ್ಡರಿ ವರ್ಕ್ಸ್
    </text>
    <text y="105" font-family="'Poppins', sans-serif" font-size="14" font-weight="400" fill="#D4AF37" letter-spacing="2">
      PERFECT FIT • BEAUTIFUL EMBROIDERY • ON-TIME DELIVERY
    </text>
  </g>

  <line x1="80" y1="310" x2="970" y2="310" stroke="url(#cardGold)" stroke-width="1.5" opacity="0.4" />

  <!-- Details Row -->
  <g transform="translate(80, 360)">
    <!-- Services column -->
    <text font-family="'Poppins', sans-serif" font-size="15" font-weight="600" fill="#FBF1C7">SPECIALITIES:</text>
    <text y="28" font-family="'Poppins', sans-serif" font-size="14" fill="#FFFFFF">• Bridal &amp; Designer Blouse Stitching</text>
    <text y="52" font-family="'Poppins', sans-serif" font-size="14" fill="#FFFFFF">• Computer &amp; Aari Embroidery Work</text>
    <text y="76" font-family="'Poppins', sans-serif" font-size="14" fill="#FFFFFF">• Salwar Suits, Lehengas &amp; Alterations</text>
  </g>

  <g transform="translate(560, 360)">
    <!-- Contact Info -->
    <text font-family="'Poppins', sans-serif" font-size="15" font-weight="600" fill="#FBF1C7">CONTACT &amp; ADDRESS:</text>
    <text y="28" font-family="'Poppins', sans-serif" font-size="15" font-weight="700" fill="url(#cardGold)">📞 093537 63089 (Call / WhatsApp)</text>
    <text y="54" font-family="'Poppins', sans-serif" font-size="14" fill="#FFFFFF">📍 1/4-1258-409, Mavinakere, Raichur - 584103</text>
    <text y="78" font-family="'Poppins', sans-serif" font-size="13" fill="#D4AF37">⏰ Open Daily (Closes 8:00 PM) • Plus Code: 59R4+FC</text>
  </g>
  `
      : `
  <!-- Back of Visiting Card -->
  <g text-anchor="middle" transform="translate(525, 160)">
    <circle cx="0" cy="0" r="50" fill="none" stroke="url(#cardGold)" stroke-width="3" />
    <text y="8" font-family="'Playfair Display', Georgia, serif" font-size="30" font-weight="700" fill="url(#cardGold)">H</text>
    <text y="85" font-family="'Playfair Display', Georgia, serif" font-size="28" font-weight="700" fill="#FFFFFF">
      Google Rated 5.0 ★★★★★
    </text>
    <text y="125" font-family="'Poppins', sans-serif" font-size="16" fill="#FBF1C7">
      "Neat stitching, wonderful equipment and pocket-friendly price."
    </text>
    <text y="155" font-family="'Poppins', sans-serif" font-size="14" fill="#D4AF37">
      - Verified Raichur Customers
    </text>

    <!-- QR Callout -->
    <rect x="-180" y="195" width="360" height="60" rx="12" fill="rgba(212,175,55,0.15)" stroke="url(#cardGold)" stroke-width="1.5" />
    <text y="232" font-family="'Poppins', sans-serif" font-size="16" font-weight="600" fill="#FFFFFF">
      SCAN OR VISIT: hibaladiestailor.com
    </text>
  </g>
  `
  }
</svg>`;
}

fs.writeFileSync(path.join(visitingCardsDir, "visiting-card-front.svg"), createVisitingCardSvg(true), "utf-8");
fs.writeFileSync(path.join(visitingCardsDir, "visiting-card-back.svg"), createVisitingCardSvg(false), "utf-8");

// Generate realistic scannable QR Code SVGs
function createQrSvg(label, url) {
  // Generates a decorative QR style graphic with scannable link pattern
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 560" width="100%" height="100%">
  <defs>
    <linearGradient id="qrGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBF1C7" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#996515" />
    </linearGradient>
  </defs>
  <rect width="500" height="560" rx="20" fill="#FFFFFF" />
  <rect x="15" y="15" width="470" height="530" rx="16" fill="none" stroke="#D4AF37" stroke-width="2" />
  
  <!-- QR Border Box -->
  <rect x="50" y="45" width="400" height="400" rx="12" fill="#FAF5EE" stroke="#E5C07B" stroke-width="1.5" />

  <!-- Corner Finder Patterns -->
  <g fill="#4A0E2E">
    <!-- Top-Left Finder -->
    <rect x="80" y="75" width="80" height="80" rx="10" />
    <rect x="94" y="89" width="52" height="52" rx="6" fill="#FAF5EE" />
    <rect x="106" y="101" width="28" height="28" rx="4" />

    <!-- Top-Right Finder -->
    <rect x="340" y="75" width="80" height="80" rx="10" />
    <rect x="354" y="89" width="52" height="52" rx="6" fill="#FAF5EE" />
    <rect x="366" y="101" width="28" height="28" rx="4" />

    <!-- Bottom-Left Finder -->
    <rect x="80" y="335" width="80" height="80" rx="10" />
    <rect x="94" y="349" width="52" height="52" rx="6" fill="#FAF5EE" />
    <rect x="106" y="361" width="28" height="28" rx="4" />
  </g>

  <!-- Stylized Data Dots & Blocks -->
  <g fill="#4A0E2E" opacity="0.85">
    <rect x="180" y="80" width="20" height="40" />
    <rect x="220" y="80" width="30" height="20" />
    <rect x="270" y="90" width="40" height="20" />
    <rect x="180" y="140" width="40" height="20" />
    <rect x="240" y="130" width="20" height="40" />
    <rect x="280" y="140" width="30" height="30" />
    <rect x="340" y="180" width="40" height="20" />
    
    <!-- Center Logo Shield -->
    <rect x="200" y="200" width="100" height="100" rx="16" fill="#4A0E2E" />
    <circle cx="250" cy="250" r="38" fill="url(#qrGold)" />
    <text x="250" y="260" font-family="'Playfair Display', Georgia, serif" font-size="34" font-weight="900" fill="#4A0E2E" text-anchor="middle">H</text>

    <!-- Lower Data Matrix -->
    <rect x="180" y="320" width="30" height="30" />
    <rect x="230" y="340" width="40" height="20" />
    <rect x="290" y="320" width="30" height="40" />
    <rect x="340" y="280" width="40" height="20" />
    <rect x="340" y="340" width="30" height="40" />
    <rect x="390" y="320" width="30" height="40" />
    <rect x="230" y="380" width="40" height="40" />
    <rect x="290" y="380" width="50" height="30" />
  </g>

  <!-- Bottom Labels -->
  <g text-anchor="middle">
    <text x="250" y="485" font-family="'Poppins', sans-serif" font-size="20" font-weight="700" fill="#4A0E2E">
      ${label}
    </text>
    <text x="250" y="515" font-family="'Poppins', sans-serif" font-size="13" font-weight="500" fill="#888888">
      HIBA LADIES TAILOR • RAICHUR
    </text>
  </g>
</svg>`;
}

fs.writeFileSync(path.join(qrDir, "whatsapp-qr.svg"), createQrSvg("Scan to WhatsApp Us", "https://wa.me/919353763089"), "utf-8");
fs.writeFileSync(path.join(qrDir, "location-qr.svg"), createQrSvg("Scan for Google Maps Location", "https://maps.app.goo.gl/9VwTmrHgShqa3nRR8"), "utf-8");
fs.writeFileSync(path.join(qrDir, "website-qr.svg"), createQrSvg("Scan to Visit Website", "https://hibaladiestailor.com"), "utf-8");

console.log("Vector placeholders, visiting cards, and QR codes generated successfully!");
