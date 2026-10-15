import fs from "fs";
import path from "path";

export interface GalleryMediaItem {
  id: string;
  filename: string;
  title: string;
  src: string;
  folder: string;
  category: "all" | "blouses" | "suits" | "bridal" | "embroidery" | "shop";
  alt: string;
  isVideo: boolean;
  isPlaceholder?: boolean;
  isNew?: boolean;
}

export interface GalleryData {
  shopOutside: GalleryMediaItem[];
  shopInside: GalleryMediaItem[];
  designs: GalleryMediaItem[];
  newCollections: GalleryMediaItem[];
  embroidery: GalleryMediaItem[];
  visitingCards: {
    images: GalleryMediaItem[];
    pdfUrl?: string;
  };
  qrCodes: {
    whatsapp?: GalleryMediaItem;
    location?: GalleryMediaItem;
    website?: GalleryMediaItem;
    all: GalleryMediaItem[];
  };
  allGalleryItems: GalleryMediaItem[];
}

const SUPPORTED_IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif", ".avif"]);
const SUPPORTED_VIDEO_EXTS = new Set([".mp4", ".webm", ".mov"]);

/**
 * Format a filename like "bridal_zardosi_blouse_01.jpg" into "Bridal Zardosi Blouse 01"
 */
function formatTitleFromFilename(filename: string): string {
  const nameWithoutExt = path.parse(filename).name;
  return nameWithoutExt
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Infer category from filename or folder context
 */
function inferCategory(filename: string, folderName: string): "all" | "blouses" | "suits" | "bridal" | "embroidery" | "shop" {
  const lower = (filename + " " + folderName).toLowerCase();
  if (lower.includes("bridal") || lower.includes("lehenga") || lower.includes("wedding")) {
    return "bridal";
  }
  if (lower.includes("embroidery") || lower.includes("aari") || lower.includes("zardosi") || lower.includes("thread")) {
    return "embroidery";
  }
  if (lower.includes("blouse") || lower.includes("choli") || lower.includes("katori")) {
    return "blouses";
  }
  if (lower.includes("suit") || lower.includes("salwar") || lower.includes("kurti") || lower.includes("churidar") || lower.includes("palazzo")) {
    return "suits";
  }
  if (folderName.includes("shop")) {
    return "shop";
  }
  return "blouses";
}

/**
 * Safely scan a public subfolder for images and videos
 */
function scanFolder(relativeFolder: string, defaultCategoryFallback?: "all" | "blouses" | "suits" | "bridal" | "embroidery" | "shop"): GalleryMediaItem[] {
  const fullPath = path.join(process.cwd(), "public", "images", relativeFolder);
  
  if (!fs.existsSync(fullPath)) {
    return [];
  }

  try {
    const files = fs.readdirSync(fullPath);
    const items: GalleryMediaItem[] = [];

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      const isImg = SUPPORTED_IMAGE_EXTS.has(ext);
      const isVid = SUPPORTED_VIDEO_EXTS.has(ext);

      if (!isImg && !isVid) continue;

      const title = formatTitleFromFilename(file);
      const category = defaultCategoryFallback || inferCategory(file, relativeFolder);
      const isNew = relativeFolder.includes("new-collections") || file.toLowerCase().includes("new");

      items.push({
        id: `${relativeFolder}-${file}`.replace(/[^a-zA-Z0-9-_]/g, "_"),
        filename: file,
        title,
        src: `/images/${relativeFolder}/${file}`,
        folder: relativeFolder,
        category,
        alt: `${title} - Tailoring & embroidery works by Hiba Ladies Tailor, Raichur`,
        isVideo: isVid,
        isPlaceholder: false,
        isNew,
      });
    }

    return items;
  } catch (err) {
    console.error(`Error scanning folder ${relativeFolder}:`, err);
    return [];
  }
}

/**
 * Fallback placeholders if folders are empty so the layout never breaks
 */
function getPlaceholdersForFolder(folder: string): GalleryMediaItem[] {
  switch (folder) {
    case "shop-outside":
      return [
        {
          id: "placeholder-shop-outside-1",
          filename: "shop-front-facade.svg",
          title: "Hiba Ladies Tailor Shop Exterior",
          src: "/images/placeholders/shop-outside.svg",
          folder: "shop-outside",
          category: "shop",
          alt: "Hiba Ladies Tailor shop exterior in Mavinakere, Raichur",
          isVideo: false,
          isPlaceholder: true,
        },
      ];

    case "shop-inside":
      return [
        {
          id: "placeholder-shop-inside-1",
          filename: "cutting-counter-interior.svg",
          title: "Fitting & Cutting Counter",
          src: "/images/placeholders/shop-inside-1.svg",
          folder: "shop-inside",
          category: "shop",
          alt: "Clean cutting counter and measurement area at Hiba Ladies Tailor",
          isVideo: false,
          isPlaceholder: true,
        },
        {
          id: "placeholder-shop-inside-2",
          filename: "embroidery-machines.svg",
          title: "Computer Embroidery Setup",
          src: "/images/placeholders/shop-inside-2.svg",
          folder: "shop-inside",
          category: "shop",
          alt: "Precision multi-thread computer embroidery machines at Hiba Ladies Tailor",
          isVideo: false,
          isPlaceholder: true,
        },
      ];

    case "new-collections":
      return [
        {
          id: "placeholder-new-1",
          filename: "royal-plum-bridal-blouse.svg",
          title: "Royal Plum Bridal Aari Blouse",
          src: "/images/placeholders/new-1.svg",
          folder: "new-collections",
          category: "bridal",
          alt: "Royal plum bridal blouse with heavy golden thread aari embroidery",
          isVideo: false,
          isPlaceholder: true,
          isNew: true,
        },
        {
          id: "placeholder-new-2",
          filename: "peacock-computer-embroidery.svg",
          title: "Peacock Motif Computer Embroidery",
          src: "/images/placeholders/new-2.svg",
          folder: "new-collections",
          category: "embroidery",
          alt: "Intricate computer embroidery featuring traditional peacock and floral designs",
          isVideo: false,
          isPlaceholder: true,
          isNew: true,
        },
        {
          id: "placeholder-new-3",
          filename: "maroon-flared-anarkali-suit.svg",
          title: "Maroon Flared Designer Anarkali",
          src: "/images/placeholders/new-3.svg",
          folder: "new-collections",
          category: "suits",
          alt: "Flared silk Anarkali suit with embellished neckline and churidar",
          isVideo: false,
          isPlaceholder: true,
          isNew: true,
        },
        {
          id: "placeholder-new-4",
          filename: "gold-tissue-princess-cut-blouse.svg",
          title: "Gold Tissue Princess Cut Blouse",
          src: "/images/placeholders/new-4.svg",
          folder: "new-collections",
          category: "blouses",
          alt: "Gold tissue festive blouse with designer boat neck and custom back dori",
          isVideo: false,
          isPlaceholder: true,
          isNew: true,
        },
      ];

    case "designs":
      return [
        {
          id: "placeholder-design-1",
          filename: "designer-bridal-blouse.svg",
          title: "Heavy Bridal Maggam & Aari Work Blouse",
          src: "/images/placeholders/design-1.svg",
          folder: "designs",
          category: "bridal",
          alt: "Designer bridal blouse with rich beadwork and zari borders",
          isVideo: false,
          isPlaceholder: true,
        },
        {
          id: "placeholder-design-2",
          filename: "contemporary-boat-neck-blouse.svg",
          title: "Contemporary Boat Neck Blouse",
          src: "/images/placeholders/design-2.svg",
          folder: "designs",
          category: "blouses",
          alt: "Modern boat neck blouse with elbow length sleeves",
          isVideo: false,
          isPlaceholder: true,
        },
        {
          id: "placeholder-design-3",
          filename: "straight-cut-salwar-suit.svg",
          title: "Straight Cut Designer Salwar Suit",
          src: "/images/placeholders/design-3.svg",
          folder: "designs",
          category: "suits",
          alt: "Graceful straight cut suit with delicate neck embroidery and matching pant",
          isVideo: false,
          isPlaceholder: true,
        },
        {
          id: "placeholder-design-4",
          filename: "full-circle-bridal-lehenga.svg",
          title: "Full Circle Bridal Lehenga Set",
          src: "/images/placeholders/design-4.svg",
          folder: "designs",
          category: "bridal",
          alt: "Magnificent bridal lehenga with layered can-can and contrast blouse",
          isVideo: false,
          isPlaceholder: true,
        },
        {
          id: "placeholder-design-5",
          filename: "katori-cut-daily-silk-blouse.svg",
          title: "Perfect Fitting Katori Silk Blouse",
          src: "/images/placeholders/design-5.svg",
          folder: "designs",
          category: "blouses",
          alt: "Classic South Indian silk saree blouse tailored to exact measurements",
          isVideo: false,
          isPlaceholder: true,
        },
        {
          id: "placeholder-design-6",
          filename: "festive-kurti-with-palazzo.svg",
          title: "Festive Silk Kurti with Palazzo",
          src: "/images/placeholders/design-6.svg",
          folder: "designs",
          category: "suits",
          alt: "Chic festive kurti set with comfortable side slits and matching dupatta",
          isVideo: false,
          isPlaceholder: true,
        },
      ];

    case "embroidery":
      return [
        {
          id: "placeholder-embroidery-1",
          filename: "multi-color-floral-computer-work.svg",
          title: "Multi-Color Floral Computer Work",
          src: "/images/placeholders/embroidery-1.svg",
          folder: "embroidery",
          category: "embroidery",
          alt: "Computer embroidery close up showing dense thread stitches and metallic zari",
          isVideo: false,
          isPlaceholder: true,
        },
        {
          id: "placeholder-embroidery-2",
          filename: "temple-border-sleeve-embroidery.svg",
          title: "Temple Border Sleeve Embroidery",
          src: "/images/placeholders/embroidery-2.svg",
          folder: "embroidery",
          category: "embroidery",
          alt: "Traditional temple border machine embroidery on deep silk sleeve",
          isVideo: false,
          isPlaceholder: true,
        },
        {
          id: "placeholder-embroidery-3",
          filename: "peacock-zardosi-back-neck.svg",
          title: "Twin Peacock Back Neck Embroidery",
          src: "/images/placeholders/embroidery-3.svg",
          folder: "embroidery",
          category: "embroidery",
          alt: "Twin peacock motif computer embroidery on back neck with stone accents",
          isVideo: false,
          isPlaceholder: true,
        },
      ];

    default:
      return [];
  }
}

/**
 * Main server-side loader for all assets across folders
 */
export function getGalleryData(): GalleryData {
  const shopOutsideScanned = scanFolder("shop-outside", "shop");
  const shopInsideScanned = scanFolder("shop-inside", "shop");
  const designsScanned = scanFolder("designs");
  const newCollectionsScanned = scanFolder("new-collections");
  const embroideryScanned = scanFolder("embroidery", "embroidery");
  const visitingCardsScanned = scanFolder("visiting-cards");
  const qrScanned = scanFolder("qr");

  // Fallbacks if empty
  const shopOutside = shopOutsideScanned.length > 0 ? shopOutsideScanned : getPlaceholdersForFolder("shop-outside");
  const shopInside = shopInsideScanned.length > 0 ? shopInsideScanned : getPlaceholdersForFolder("shop-inside");
  const designs = designsScanned.length > 0 ? designsScanned : getPlaceholdersForFolder("designs");
  const newCollections = newCollectionsScanned.length > 0 ? newCollectionsScanned : getPlaceholdersForFolder("new-collections");
  const embroidery = embroideryScanned.length > 0 ? embroideryScanned : getPlaceholdersForFolder("embroidery");

  // Visiting card images & PDF
  const visitingCardPdfPath = path.join(process.cwd(), "public", "images", "visiting-cards");
  let visitingPdfUrl: string | undefined = undefined;
  if (fs.existsSync(visitingCardPdfPath)) {
    const files = fs.readdirSync(visitingCardPdfPath);
    const pdfFile = files.find((f) => f.toLowerCase().endsWith(".pdf"));
    if (pdfFile) {
      visitingPdfUrl = `/images/visiting-cards/${pdfFile}`;
    }
  }

  // QR Codes mapping
  let waQr = qrScanned.find((q) => q.filename.toLowerCase().includes("whatsapp") || q.filename.toLowerCase().includes("wa"));
  let locQr = qrScanned.find((q) => q.filename.toLowerCase().includes("loc") || q.filename.toLowerCase().includes("map"));
  let webQr = qrScanned.find((q) => q.filename.toLowerCase().includes("web") || q.filename.toLowerCase().includes("site"));

  // Combined gallery for masonry grid & lightbox (designs + embroidery + collections)
  const allGalleryItems = [...newCollections, ...designs, ...embroidery];

  return {
    shopOutside,
    shopInside,
    designs,
    newCollections,
    embroidery,
    visitingCards: {
      images: visitingCardsScanned,
      pdfUrl: visitingPdfUrl,
    },
    qrCodes: {
      whatsapp: waQr,
      location: locQr,
      website: webQr,
      all: qrScanned,
    },
    allGalleryItems,
  };
}
