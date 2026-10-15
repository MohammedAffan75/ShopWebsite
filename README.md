# HIBA LADIES TAILOR & EMBROIDERY WORKS — Official Website

A production-ready, mobile-first website crafted specifically for **Hiba Ladies Tailor & Embroidery Works** in Mavinakere, Raichur, Karnataka.

Designed for high-speed mobile performance (Google Maps, WhatsApp, and Instagram traffic), featuring a regal plum & warm gold aesthetic, English & ಕನ್ನಡ (Kannada) bilingual support, automatic gallery folder loading, and zero-backend WhatsApp enquiry integrations.

---

## 🌟 Business Overview (Included in Code)

- **Name:** HIBA LADIES TAILOR & EMBROIDERY WORKS
- **Category:** Ladies Tailor & Computer Embroidery Shop
- **Google Rating:** 5.0 ★★★★★ (10 Verified Reviews)
- **Address:** 1/4-1258-409, Mavinakere, Karnataka 584103 (Raichur)
- **Plus Code:** 59R4+FC Raichur, Karnataka
- **Phone / WhatsApp:** 093537 63089 (`+91 93537 63089`)
- **Google Maps Listing:** [View on Google Maps](https://maps.app.goo.gl/9VwTmrHgShqa3nRR8)
- **Tagline:** *"Perfect Fit. Beautiful Embroidery. Stitched with love, delivered on time."*

---

## ⚙️ How to Edit Business Details, Phone, and Timings

All business details, phone numbers, addresses, timings, services, reviews, and text are stored in **ONE central configuration file**:

📁 `src/data/site.config.ts`

### Clearly Marked Placeholders:
| Placeholder | Current Default | How to Edit |
| :--- | :--- | :--- |
| **Opening Time** | `10:00 AM` | In `business.hours.openingTime` & `business.hours.openingHour24` |
| **Weekly Off** | `No Weekly Off (Open All 7 Days)` | In `business.hours.weeklyOffText` |
| **Owner / Master Tailor** | `[Proprietor / Master Tailor]` | In `business.owner.namePlaceholder` |
| **Instagram Link** | `https://instagram.com/[PLACEHOLDER]` | In `business.links.instagramUrl` |
| **Facebook Link** | `https://facebook.com/[PLACEHOLDER]` | In `business.links.facebookUrl` |

Any change made to `site.config.ts` automatically updates everywhere: Header, Hero, Schema SEO, Footer, vCard download, and WhatsApp links.

---

## 📸 How to Add Your Real Photos & Videos (Automatic Gallery)

You **never need to edit code** to add new photos. Simply drop your image or video files directly into the folders inside `/public/images/`:

| Folder Path | Purpose | What Happens When You Drop Files |
| :--- | :--- | :--- |
| `/public/images/shop-outside/` | Exterior storefront photos | Displays on Hero, "Visit Us" storefront identifier, and SEO meta tags. |
| `/public/images/shop-inside/` | Interior, counter, & embroidery machines | Displays in "About Us" and equipment showcase. |
| `/public/images/designs/` | Blouses, suits, lehengas, kurtis | Automatically appears in the Design Gallery with category filtering. |
| `/public/images/new-collections/`| Latest arrivals | Appears in "New Collections" with a gold "NEW" badge & WhatsApp enquiry button. |
| `/public/images/embroidery/` | Computer & aari embroidery work | Displays in gallery with the "Computer Embroidery" tab. |
| `/public/images/visiting-cards/` | Visiting card images or `.pdf` | Shown in the Visiting Card interactive card viewer and download button. |
| `/public/images/qr/` | Custom QR codes | Displayed with labels and individual download buttons. |

### 💡 Pro-Tips for Naming Your Files:
- The website turns file names into beautiful titles and alt text automatically:
  - `peacock-bridal-blouse.jpg` ➔ **"Peacock Bridal Blouse"**
  - `maroon-anarkali-suit.webp` ➔ **"Maroon Anarkali Suit"**
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`, `.avif`, `.mp4`, `.webm`, `.mov`.
- If a folder is empty, graceful, elegant gold-and-plum vector placeholders appear automatically so your layout never breaks.

---

## 🌐 Kannada (ಕನ್ನಡ) Language Review Guide

The website features an instant language toggle button (**EN / ಕನ್ನಡ**) in the top header that remembers the visitor's choice in `localStorage`.

All Kannada text is neatly organized alongside the English text in `src/data/site.config.ts`:
```typescript
title: {
  en: "Designer & Bridal Blouse Stitching",
  kn: "ಡಿಸೈನರ್ ಮತ್ತು ಬ್ರೈಡಲ್ ಬ್ಲೌಸ್ ಹೊಲಿಗೆ",
}
```
You can review and refine any Kannada word directly in `site.config.ts`.

---

## 🚀 How to Deploy for Free

### Option 1: Deploy to Vercel (Recommended — 2 Minutes)
1. Push this repository to your **GitHub** account.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your GitHub repository.
4. Click **Deploy**. Vercel will automatically build and assign you a free `https://your-site.vercel.app` URL with free SSL.

### Option 2: Deploy to Netlify
1. Go to [netlify.com](https://www.netlify.com).
2. Click **"Import an existing project"** ➔ **GitHub**.
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Click **Deploy Site**.

### Option 3: Deploy as Pure Static HTML (GitHub Pages)
1. In `next.config.ts`, set:
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     images: { unoptimized: true }
   };
   ```
2. Run `npm run build`. The pure static output will be generated in `/out`.
3. Upload the `/out` folder to GitHub Pages or any static web host.

---

## 🔗 How to Connect a Custom Domain (e.g. `hibaladiestailor.com`)

1. Purchase your domain from GoDaddy, Namecheap, Google Domains, or Hostinger.
2. In Vercel or Netlify, go to **Project Settings** ➔ **Domains**.
3. Type your domain (e.g., `hibaladiestailor.com`).
4. Update your Domain Provider's DNS records as shown on screen:
   - **Type:** `A` | **Name:** `@` | **Value:** `76.76.21.21` (for Vercel)
   - **Type:** `CNAME` | **Name:** `www` | **Value:** `cname.vercel-dns.com`
5. Your domain will be live with automatic HTTPS within 10-30 minutes.

---

## ✅ Implemented Feature Checklist

- [x] **Mobile-First Responsive Layout:** Tested and optimized for 360px (mobile), 768px (tablet), and 1280px+ (desktop).
- [x] **One Central Config:** All details consolidated in `src/data/site.config.ts`.
- [x] **5.0 Google Badge:** 10 reviews with direct links to Google Maps listing.
- [x] **Real Customer Reviews:** Quotes from Sukrutha B, Vinutha Shivprasad, Shama Shaikh, and Mohammed Affan.
- [x] **7 Detailed Tailoring Services:** Blouses, suits, kurtis, bridal lehengas, computer embroidery, alterations, and custom fitting.
- [x] **Automatic Folder Gallery:** Live file reading with zero code updates needed when adding photos.
- [x] **Fullscreen Lightbox:** Swipe, next/prev navigation, category tabs, and video playback.
- [x] **Live Open/Closed Status:** Automatically computes against 8:00 PM closing time based on IST.
- [x] **Embedded Google Map & Directions:** Direct navigation to Plus Code `59R4+FC Raichur, Karnataka`.
- [x] **Interactive Digital Visiting Card:** Front/Back view, printable card, and SVG download.
- [x] **vCard (.vcf) Generator:** One-click contact save directly to phone contact books.
- [x] **Scannable QR Codes:** WhatsApp, Google Maps, and Website with download buttons.
- [x] **WhatsApp Enquiry Form:** Formats all customer inputs directly into a WhatsApp chat without any backend.
- [x] **Sticky Mobile Action Bar:** Fixed [Call Now] | [WhatsApp] | [Directions] at bottom on phones.
- [x] **Bilingual English & Kannada:** Switchable anytime, persisted in `localStorage`.
- [x] **Local SEO & Schema:** LocalBusiness / TailorShop JSON-LD schema, Open Graph, meta tags, sitemap.xml, robots.txt.
