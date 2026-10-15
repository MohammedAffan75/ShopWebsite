/**
 * HIBA LADIES TAILOR & EMBROIDERY WORKS
 * Central Business Configuration & Content File
 * 
 * Edit this single file to update contact info, address, timings,
 * services, reviews, social links, and English/Kannada text across the entire site.
 */

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  isLocalGuide?: boolean;
  rating: number;
  comment: {
    en: string;
    kn: string;
  };
  highlight?: string;
}

export interface ServiceItem {
  id: string;
  icon: string; // Lucide icon name
  title: {
    en: string;
    kn: string;
  };
  description: {
    en: string;
    kn: string;
  };
  category: "blouses" | "suits" | "bridal" | "embroidery" | "alterations";
  features: {
    en: string[];
    kn: string[];
  };
  badge?: {
    en: string;
    kn: string;
  };
}

export interface SiteConfig {
  business: {
    name: string;
    nameKannada: string;
    category: string;
    categoryKannada: string;
    tagline: {
      en: string;
      kn: string;
    };
    phone: string;
    phoneDisplay: string;
    phoneIntl: string;
    whatsappNumber: string;
    whatsappPreFilledMessage: {
      en: string;
      kn: string;
    };
    address: {
      doorNo: string;
      street: string;
      area: string;
      city: string;
      state: string;
      pincode: string;
      fullAddress: string;
      fullAddressKannada: string;
      plusCode: string;
    };
    hours: {
      openingTime: string; // [Editable placeholder e.g. "10:00 AM"]
      closingTime: string; // "8:00 PM"
      closingHour24: number; // 20 for 8 PM
      openingHour24: number; // 10 for 10 AM
      daysOpenText: {
        en: string;
        kn: string;
      };
      weeklyOffText: { // [Editable placeholder: "Open all 7 days" or "Sunday"]
        en: string;
        kn: string;
      };
      isAlwaysOpenDaily: boolean;
    };
    rating: {
      score: number;
      reviewCount: number;
      googleSummary: {
        en: string;
        kn: string;
      };
    };
    links: {
      googleMapsListing: string;
      googleDirectionsUrl: string;
      googleReviewUrl: string;
      instagramUrl?: string; // [Placeholder: e.g. https://instagram.com/hibaladiestailor]
      facebookUrl?: string;  // [Placeholder: e.g. https://facebook.com/hibaladiestailor]
      websiteUrl: string;
    };
    owner: {
      namePlaceholder: string; // [Owner / Master Tailor name placeholder]
      titlePlaceholder: string;
    };
  };
  seo: {
    title: string;
    titleKannada: string;
    description: string;
    keywords: string[];
    siteUrl: string;
    ogImage: string;
  };
  services: ServiceItem[];
  whyChooseUs: {
    id: string;
    icon: string;
    title: {
      en: string;
      kn: string;
    };
    description: {
      en: string;
      kn: string;
    };
    fromReviewQuote?: string;
  }[];
  testimonials: Testimonial[];
  about: {
    storyParagraphs: {
      en: string[];
      kn: string[];
    };
    stats: {
      label: { en: string; kn: string };
      value: string;
    }[];
  };
  navigation: {
    id: string;
    label: { en: string; kn: string };
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  business: {
    name: "HIBA LADIES TAILOR & EMBROIDERY WORKS",
    nameKannada: "ಹಿಬಾ ಲೇಡೀಸ್ ಟೈಲರ್ ಮತ್ತು ಎಂಬ್ರಾಯ್ಡರಿ ವರ್ಕ್ಸ್",
    category: "Ladies Tailor & Computer Embroidery Shop",
    categoryKannada: "ಲೇಡೀಸ್ ಟೈಲರ್ ಮತ್ತು ಕಂಪ್ಯೂಟರ್ ಎಂಬ್ರಾಯ್ಡರಿ ಶಾಪ್",
    tagline: {
      en: "Perfect Fit. Beautiful Embroidery. Stitched with love, delivered on time.",
      kn: "ಪರ್ಫೆಕ್ಟ್ ಫಿಟ್ಟಿಂಗ್. ಸುಂದರ ಎಂಬ್ರಾಯ್ಡರಿ. ಪ್ರೀತಿಯಿಂದ ಹೊಲಿಗೆ, ಸಮಯಕ್ಕೆ ಡೆಲಿವರಿ.",
    },
    phone: "09353763089",
    phoneDisplay: "093537 63089",
    phoneIntl: "+91 93537 63089",
    whatsappNumber: "919353763089",
    whatsappPreFilledMessage: {
      en: "Hello, I would like to enquire about stitching/embroidery at Hiba Ladies Tailor.",
      kn: "ನಮಸ್ಕಾರ, ಹಿಬಾ ಲೇಡೀಸ್ ಟೈಲರ್‌ನಲ್ಲಿ ಹೊಲಿಗೆ ಮತ್ತು ಎಂಬ್ರಾಯ್ಡರಿ ಕೆಲಸದ ಬಗ್ಗೆ ವಿಚಾರಿಸಲು ಬಯಸುತ್ತೇನೆ.",
    },
    address: {
      doorNo: "1/4-1258-409",
      street: "Mavinakere",
      area: "Mavinakere",
      city: "Raichur",
      state: "Karnataka",
      pincode: "584103",
      fullAddress: "1/4-1258-409, Mavinakere, Raichur, Karnataka 584103",
      fullAddressKannada: "1/4-1258-409, ಮಾವಿನಕೆರೆ, ರಾಯಚೂರು, ಕರ್ನಾಟಕ 584103",
      plusCode: "59R4+FC Raichur, Karnataka",
    },
    hours: {
      openingTime: "10:00 AM", // [PLACEHOLDER - edit if actual opening time is different]
      closingTime: "8:00 PM",
      openingHour24: 10,
      closingHour24: 20,
      daysOpenText: {
        en: "Open Daily (Mon - Sun)",
        kn: "ಪ್ರತಿದಿನ ತೆರೆದಿರುತ್ತದೆ (ಸೋಮ - ಭಾನು)",
      },
      weeklyOffText: {
        en: "No Weekly Off (Open All 7 Days)", // [PLACEHOLDER - set to e.g. "Sunday" if closed]
        kn: "ಪ್ರತಿದಿನ ಸೇವೆ ಲಭ್ಯವಿದೆ (ವಾರವಿಡೀ)",
      },
      isAlwaysOpenDaily: true,
    },
    rating: {
      score: 5.0,
      reviewCount: 10,
      googleSummary: {
        en: "Nice design work, on-time delivery & friendly customer service.",
        kn: "ಉತ್ತಮ ಡಿಸೈನ್ ಕೆಲಸ, ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಡೆಲಿವರಿ ಮತ್ತು ಗ್ರಾಹಕಸ್ನೇಹಿ ಸೇವೆ.",
      },
    },
    links: {
      googleMapsListing: "https://maps.app.goo.gl/9VwTmrHgShqa3nRR8",
      googleDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=59R4%2BFC+Raichur,+Karnataka",
      googleReviewUrl: "https://maps.app.goo.gl/9VwTmrHgShqa3nRR8",
      instagramUrl: "https://instagram.com/[PLACEHOLDER_INSTAGRAM_HANDLE]",
      facebookUrl: "https://facebook.com/[PLACEHOLDER_FACEBOOK_PAGE]",
      websiteUrl: "https://hibaladiestailor.com",
    },
    owner: {
      namePlaceholder: "[Proprietor / Master Tailor]", // [PLACEHOLDER: Add owner's name here]
      titlePlaceholder: "Master Ladies Designer & Embroidery Specialist",
    },
  },

  seo: {
    title: "Hiba Ladies Tailor & Embroidery Works | Ladies Tailor in Raichur",
    titleKannada: "ಹಿಬಾ ಲೇಡೀಸ್ ಟೈಲರ್ ಮತ್ತು ಎಂಬ್ರಾಯ್ಡರಿ ವರ್ಕ್ಸ್ | ರಾಯಚೂರಿನಲ್ಲಿ ಪ್ರಸಿದ್ಧ ಲೇಡೀಸ್ ಟೈಲರ್",
    description: "Top-rated ladies tailor & computer embroidery specialist in Raichur, Karnataka. Perfect fitting blouses, designer lehengas, salwar suits, kurtis & intricate embroidery. Rated 5.0 on Google.",
    keywords: [
      "ladies tailor Raichur",
      "blouse stitching Raichur",
      "embroidery shop Raichur",
      "computer embroidery Raichur",
      "aari work blouse Raichur",
      "Mavinakere tailor",
      "bridal blouse tailor Raichur",
      "designer suits Raichur",
      "Hiba Ladies Tailor",
    ],
    siteUrl: "https://hibaladiestailor.com",
    ogImage: "/images/og-banner.jpg",
  },

  navigation: [
    { id: "home", label: { en: "Home", kn: "ಮುಖಪುಟ" }, href: "#hero" },
    { id: "services", label: { en: "Services", kn: "ಸೇವೆಗಳು" }, href: "#services" },
    { id: "why-us", label: { en: "Why Choose Us", kn: "ನಮ್ಮ ವಿಶೇಷತೆ" }, href: "#why-us" },
    { id: "collections", label: { en: "New Collections", kn: "ಹೊಸ ಸಂಗ್ರಹ" }, href: "#collections" },
    { id: "gallery", label: { en: "Design Gallery", kn: "ಗ್ಯಾಲರಿ" }, href: "#gallery" },
    { id: "about", label: { en: "About Us", kn: "ನಮ್ಮ ಬಗ್ಗೆ" }, href: "#about" },
    { id: "reviews", label: { en: "Reviews", kn: "ಅಭಿಪ್ರಾಯಗಳು" }, href: "#reviews" },
    { id: "visiting-card", label: { en: "Visiting Card", kn: "ವಿಸಿಟಿಂಗ್ ಕಾರ್ಡ್" }, href: "#visiting-card" },
    { id: "visit-us", label: { en: "Visit Us", kn: "ಭೇಟಿ ನೀಡಿ" }, href: "#visit-us" },
    { id: "contact", label: { en: "Contact", kn: "ಸಂಪರ್ಕ" }, href: "#contact" },
  ],

  services: [
    {
      id: "blouse-stitching",
      icon: "Scissors",
      title: {
        en: "Designer & Bridal Blouse Stitching",
        kn: "ಡಿಸೈನರ್ ಮತ್ತು ಬ್ರೈಡಲ್ ಬ್ಲೌಸ್ ಹೊಲಿಗೆ",
      },
      description: {
        en: "Specialist in bridal cuts, princess cut, boat necks, deep backs, padded blouses, and designer necklines with meticulous measurement fitting.",
        kn: "ಬ್ರೈಡಲ್ ಕಟ್, ಪ್ರಿನ್ಸಸ್ ಕಟ್, ಬೋಟ್ ನೆಕ್, ಪ್ಯಾಡೆಡ್ ಬ್ಲೌಸ್ ಮತ್ತು ಅತ್ಯುತ್ತಮ ಫಿಟ್ಟಿಂಗ್ ಹೊಂದಿರುವ ಡಿಸೈನರ್ ಬ್ಲೌಸ್ ಹೊಲಿಗೆ.",
      },
      category: "blouses",
      features: {
        en: ["Princess Cut & Katori Cut", "Padded & Semi-Padded", "Dori & Designer Latkan Work", "Perfect Armhole & Shoulder Fit"],
        kn: ["ಪ್ರಿನ್ಸಸ್ ಮತ್ತು ಕಟೋರಿ ಕಟ್", "ಪ್ಯಾಡೆಡ್ ಫಿನಿಶಿಂಗ್", "ಡೋರಿ ಮತ್ತು ಲಟ್ಕನ್ ವರ್ಕ್", "ಪರ್ಫೆಕ್ಟ್ ಭುಜ ಮತ್ತು ಆರ್ಮ್‌ಹೋಲ್ ಫಿಟ್ಟಿಂಗ್"],
      },
      badge: { en: "Most Popular", kn: "ಗ್ರಾಹಕರ ಮೆಚ್ಚಿನದು" },
    },
    {
      id: "computer-embroidery",
      icon: "Sparkles",
      title: {
        en: "Computer Embroidery & Aari Work",
        kn: "ಕಂಪ್ಯೂಟರ್ ಎಂಬ್ರಾಯ್ಡರಿ ಮತ್ತು ಆರಿ ವರ್ಕ್",
      },
      description: {
        en: "Modern computer embroidery machinery for ultra-precise floral motifs, peacock patterns, bridal neck designs, zardosi, and thread embroidery.",
        kn: "ಅತ್ಯಾಧುನಿಕ ಕಂಪ್ಯೂಟರ್ ಯಂತ್ರಗಳಿಂದ ನಿಖರವಾದ ಹೂವಿನ ಡಿಸೈನ್, ನವಿಲು ಪ್ಯಾಟರ್ನ್, ಜರ್ದೋಸಿ ಮತ್ತು ದಾರದ ಎಂಬ್ರಾಯ್ಡರಿ ಕೆಲಸ.",
      },
      category: "embroidery",
      features: {
        en: ["High Precision Computer Machines", "Bridal Neck & Sleeve Patterns", "Custom Color Matching Threads", "Fast & Neat Execution"],
        kn: ["ಹೈ ಪ್ರಿಸಿಶನ್ ಕಂಪ್ಯೂಟರ್ ಮೆಷಿನ್", "ಬ್ರೈಡಲ್ ನೆಕ್ ಮತ್ತು ಸ್ಲೀವ್ ಪ್ಯಾಟರ್ನ್", "ಮ್ಯಾಚಿಂಗ್ ಕಲರ್ ಥ್ರೆಡ್ಸ್", "ತ್ವರಿತ ಮತ್ತು ಅಚ್ಚುಕಟ್ಟಾದ ಕೆಲಸ"],
      },
      badge: { en: "In-House Tech", kn: "ಸ್ವಂತ ಯಂತ್ರಗಳು" },
    },
    {
      id: "salwar-suits",
      icon: "Shirt",
      title: {
        en: "Salwar Suits & Churidar Sets",
        kn: "ಸಲ್ವಾರ್ ಸೂಟ್ಸ್ ಮತ್ತು ಚೂಡಿದಾರ್",
      },
      description: {
        en: "Punjabi suits, straight cut suits, Anarkali gowns, palazzo sets, and patiyala trousers tailored for day-long comfort and graceful drape.",
        kn: "ಪಂಜಾಬಿ ಸೂಟ್, ಸ್ಟ್ರೈಟ್ ಕಟ್, ಅನಾರ್ಕಲಿ ಗೌನ್ ಮತ್ತು ಪಲಾಜೋ ಸೆಟ್‌ಗಳು ನಿಮ್ಮ ಆರಾಮದಾಯಕತೆಗೆ ತಕ್ಕಂತೆ ಹೊಲಿಯಲಾಗುತ್ತದೆ.",
      },
      category: "suits",
      features: {
        en: ["Anarkali & Umbrella Flare", "Straight Cut & Pakistani Suits", "Palazzo & Cigarette Pants", "High Quality Inner Lining Included"],
        kn: ["ಅನಾರ್ಕಲಿ ಮತ್ತು ಅಂಬ್ರೆಲ್ಲಾ ಫ್ಲೇರ್", "ಸ್ಟ್ರೈಟ್ ಕಟ್ ಮತ್ತು ಪಾಕಿಸ್ತಾನಿ ಸೂಟ್", "ಪಲಾಜೋ ಪ್ಯಾಂಟ್ಸ್", "ಉತ್ತಮ ಕ್ವಾಲಿಟಿ ಲೈನಿಂಗ್"],
      },
    },
    {
      id: "kurtis",
      icon: "Layers",
      title: {
        en: "Custom Kurtis & Daily Ethnic Wear",
        kn: "ಕಸ್ಟಮ್ ಕುರ್ತಿ ಮತ್ತು ದೈನಂದಿನ ಉಡುಪುಗಳು",
      },
      description: {
        en: "A-line kurtis, office wear tunics, side slit kurtis, and festive tops crafted to your exact shoulder and bust specifications.",
        kn: "ಆಫೀಸ್ ಮತ್ತು ದೈನಂದಿನ ಬಳಕೆಯ ಕುರ್ತಿಗಳು, ಎ-ಲೈನ್ ಹಾಗೂ ಫೆಸ್ಟಿವ್ ಟಾಪ್‌ಗಳು ನಿಮ್ಮ ಅಳತೆಗೆ ತಕ್ಕಂತೆ ಹೊಲಿಯಲಾಗುತ್ತದೆ.",
      },
      category: "suits",
      features: {
        en: ["Office & College Wear", "Side Slit & Front Slit Styles", "Comfortable Breathable Fitting", "Pocket Additions on Request"],
        kn: ["ಕಾಲೇಜು ಮತ್ತು ಆಫೀಸ್ ಕುರ್ತಿಗಳು", "ಆರಾಮದಾಯಕ ಫಿಟ್ಟಿಂಗ್", "ಕಸ್ಟಮ್ ಪಾಕೆಟ್ಸ್ ಲಭ್ಯ"],
      },
    },
    {
      id: "lehenga-bridal",
      icon: "Crown",
      title: {
        en: "Lehenga & Bridal Ensembles",
        kn: "ಲೆಹೆಂಗಾ ಮತ್ತು ಮದುವೆ ಉಡುಪುಗಳು",
      },
      description: {
        en: "Heavy bridal lehenga stitching with double can-can flare, customized choli blouses, and ornate dupatta border finishing.",
        kn: "ಕ್ಯಾನ್-ಕ್ಯಾನ್ ಫ್ಲೇರ್ ಹೊಂದಿದ ಬ್ರೈಡಲ್ ಲೆಹೆಂಗಾ, ಕಸ್ಟಮ್ ಚೋಲಿ ಬ್ಲೌಸ್ ಮತ್ತು ದುಪಟ್ಟಾ ಬಾರ್ಡರ್ ಫಿನಿಶಿಂಗ್.",
      },
      category: "bridal",
      features: {
        en: ["Double Can-Can Layering", "Full Circle Flare (Ghera)", "Custom Bridal Blouse Matching", "Latkan & Tassel Attachment"],
        kn: ["ಕ್ಯಾನ್-ಕ್ಯಾನ್ ಲೇಯರಿಂಗ್", "ದೊಡ್ಡ ಸುತ್ತಳತೆಯ ಘೇರಾ", "ಬ್ರೈಡಲ್ ಮ್ಯಾಚಿಂಗ್", "ಲಟ್ಕನ್ ಮತ್ತು ಕುಚ್ಚು ಕೆಲಸ"],
      },
      badge: { en: "Bridal Special", kn: "ಮದುವೆ ವಿಶೇಷ" },
    },
    {
      id: "alterations",
      icon: "Wrench",
      title: {
        en: "Alterations, Fitting & Restyling",
        kn: "ಆಲ್ಟರೇಷನ್, ಮರು-ಫಿಟ್ಟಿಂಗ್ ಮತ್ತು ರೀಸ್ಟೈಲಿಂಗ್",
      },
      description: {
        en: "Purchased ready-made dresses, blouses, or kurtis that don't fit right? We adjust size, sleeve length, shoulder fit, and add darts seamlessly.",
        kn: "ರೆಡಿಮೇಡ್ ಡ್ರೆಸ್, ಬ್ಲೌಸ್ ಅಥವಾ ಕುರ್ತಿ ಫಿಟ್ ಆಗಿಲ್ಲವೇ? ಸೈಜ್ ಸರಿಪಡಿಸುವುದು, ಉದ್ದ ಹೊಂದಿಸುವುದು ಹಾಗೂ ಆಲ್ಟರೇಷನ್ ಸೇವೆ.",
      },
      category: "alterations",
      features: {
        en: ["Waist & Chest Sizing", "Sleeve Length Adjustment", "Zip Replacement & Hooks", "Quick Turnaround Time"],
        kn: ["ಸೊಂಟ ಮತ್ತು ಎದೆಯಳತೆ ಫಿಟ್ಟಿಂಗ್", "ಸ್ಲೀವ್ ಅಡ್ಜಸ್ಟ್‌ಮೆಂಟ್", "ಜಿಪ್ ಮತ್ತು ಹುಕ್ ಬದಲಾವಣೆ", "ತ್ವರಿತ ಸೇವೆ"],
      },
    },
    {
      id: "custom-pattern-fitting",
      icon: "HeartHandshake",
      title: {
        en: "Bespoke Fitting & Measurement Consultation",
        kn: "ನಿಖರ ಅಳತೆ ಮತ್ತು ಕಸ್ಟಮ್ ಡಿಸೈನಿಂಗ್",
      },
      description: {
        en: "In-shop personal measurements taken with care and patience so you never have to deal with tight sleeves or gaping necklines.",
        kn: "ಗ್ರಾಹಕರ ಆರಾಮದಾಯಕತೆಗೆ ಆದ್ಯತೆ ನೀಡಿ ಅತ್ಯಂತ ಕಾಳಜಿಯಿಂದ ಅಳತೆ ತೆಗೆದುಕೊಳ್ಳಲಾಗುತ್ತದೆ.",
      },
      category: "blouses",
      features: {
        en: ["Personal Fitting Guidance", "Style Suggestions based on Body Type", "Comfort-First Stitching", "Trial & Touch-up Support"],
        kn: ["ವೈಯಕ್ತಿಕ ಅಳತೆ ಮಾರ್ಗದರ್ಶನ", "ಬಾಡಿ ಟೈಪ್‌ಗೆ ತಕ್ಕ ವಿನ್ಯಾಸ", "ಟ್ರಯಲ್ ಸೌಲಭ್ಯ"],
      },
    },
  ],

  whyChooseUs: [
    {
      id: "careful-measurements",
      icon: "Ruler",
      title: {
        en: "Careful & Patient Measurements",
        kn: "ಕಾಳಜಿಯ ನಿಖರ ಅಳತೆ",
      },
      description: {
        en: "We spend time understanding your posture and comfort preferences, ensuring your outfits fit like a second skin.",
        kn: "ನಿಮ್ಮ ಆರಾಮದಾಯಕತೆಯನ್ನು ಗಮನದಲ್ಲಿಟ್ಟುಕೊಂಡು ಸೂಕ್ತ ಅಳತೆ ತೆಗೆದುಕೊಳ್ಳಲಾಗುತ್ತದೆ.",
      },
      fromReviewQuote: "Careful measurements & designs made for your comfort.",
    },
    {
      id: "neat-stitching",
      icon: "CheckCircle2",
      title: {
        en: "Neat Stitching & Clean Finishing",
        kn: "ಅಚ್ಚುಕಟ್ಟಾದ ಹೊಲಿಗೆ ಮತ್ತು ಫಿನಿಶಿಂಗ್",
      },
      description: {
        en: "Flawless seams, clean interlock edging, sturdy hems, and zero messy threads inside out.",
        kn: "ಒಳಗೆ ಮತ್ತು ಹೊರಗೆ ಶುದ್ಧ ಇಂಟರ್‌ಲಾಕ್ ಹಾಗೂ ಗಟ್ಟಿಯಾದ ಹೊಲಿಗೆ.",
      },
      fromReviewQuote: "Neat stitching and perfect fitting like a designer tailor.",
    },
    {
      id: "computer-embroidery-tech",
      icon: "Cpu",
      title: {
        en: "Advanced Computer Embroidery",
        kn: "ಉತ್ತಮ ಕಂಪ್ಯೂಟರ್ ಎಂಬ್ರಾಯ್ಡರಿ ಸಲಕರಣೆಗಳು",
      },
      description: {
        en: "High-speed multi-needle computer embroidery machines bring intricate temple, floral, and contemporary motifs to life with pin-point precision.",
        kn: "ಆಧುನಿಕ ಕಂಪ್ಯೂಟರ್ ಎಂಬ್ರಾಯ್ಡರಿ ಯಂತ್ರಗಳ ಮೂಲಕ ನಿಖರವಾದ ಹಾಗೂ ಆಕರ್ಷಕ ವಿನ್ಯಾಸಗಳು.",
      },
      fromReviewQuote: "Good computer work and wonderful equipment.",
    },
    {
      id: "on-time-delivery",
      icon: "Clock",
      title: {
        en: "Strictly On-Time Delivery",
        kn: "ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಡೆಲಿವರಿ",
      },
      description: {
        en: "We respect your wedding schedules, festival dates, and travel plans. Your order is delivered on the promised day without excuses.",
        kn: "ಹಬ್ಬ ಹರಿದಿನಗಳು ಮತ್ತು ಮದುವೆ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ವಾಗ್ದಾನ ಮಾಡಿದ ದಿನದಂದೇ ಡೆಲಿವರಿ.",
      },
      fromReviewQuote: "Nice design work, on-time delivery.",
    },
    {
      id: "pocket-friendly",
      icon: "BadgePercent",
      title: {
        en: "Pocket-Friendly & Reasonable Price",
        kn: "ಕೈಗೆಟುಕುವ ನ್ಯಾಯಯುತ ಬೆಲೆ",
      },
      description: {
        en: "Transparent, honest rates for standard stitching, intricate embroidery, and bridal designs. Premium craftsmanship without designer price gouging.",
        kn: "ಯಾವುದೇ ಹೆಚ್ಚಿನ ಹೊರೆಯಿಲ್ಲದೆ ಕೈಗೆಟುಕುವ ದರದಲ್ಲಿ ಗುಣಮಟ್ಟದ ಹೊಲಿಗೆ.",
      },
      fromReviewQuote: "Pocket-friendly & reasonable price for wonderful stitching.",
    },
    {
      id: "friendly-staff",
      icon: "Smile",
      title: {
        en: "Customer-Friendly Service",
        kn: "ಗ್ರಾಹಕಸ್ನೇಹಿ ಸಿಬ್ಬಂದಿ",
      },
      description: {
        en: "Warm, respectful, and accommodating environment for ladies and families. We listen to your wishes and give honest styling advice.",
        kn: "ಮಹಿಳೆಯರಿಗೆ ಮತ್ತು ಕುಟುಂಬಗಳಿಗೆ ಆತ್ಮೀಯ ಹಾಗೂ ಗೌರವಯುತ ವಾತಾವರಣ.",
      },
      fromReviewQuote: "Friendly staff, designs made for your comfort.",
    },
  ],

  testimonials: [
    {
      id: "review-sukrutha",
      name: "Sukrutha B",
      role: "Local Guide",
      isLocalGuide: true,
      rating: 5,
      comment: {
        en: "Friendly staff, designs made for your comfort, pocket-friendly, and careful measurements.",
        kn: "ಸ್ನೇಹಪರ ಸಿಬ್ಬಂದಿ, ನಮ್ಮ ಆರಾಮಕ್ಕೆ ತಕ್ಕ ವಿನ್ಯಾಸಗಳು, ಕೈಗೆಟುಕುವ ಬೆಲೆ ಮತ್ತು ಅತ್ಯಂತ ಜಾಗರೂಕ ಅಳತೆಗಳು.",
      },
      highlight: "Designs made for comfort & careful measurements",
    },
    {
      id: "review-vinutha",
      name: "Vinutha Shivprasad",
      role: "Verified Customer",
      isLocalGuide: false,
      rating: 5,
      comment: {
        en: "Neat stitching and good computer work.",
        kn: "ಅಚ್ಚುಕಟ್ಟಾದ ಹೊಲಿಗೆ ಮತ್ತು ಉತ್ತಮ ಕಂಪ್ಯೂಟರ್ ಕೆಲಸ.",
      },
      highlight: "Neat stitching & good computer work",
    },
    {
      id: "review-shama",
      name: "Shama Shaikh",
      role: "Verified Customer",
      isLocalGuide: false,
      rating: 5,
      comment: {
        en: "Perfect stitching and perfect fitting like a designer tailor.",
        kn: "ಪರ್ಫೆಕ್ಟ್ ಹೊಲಿಗೆ ಮತ್ತು ಡಿಸೈನರ್ ಟೈಲರ್‌ನಂತೆಯೇ ನಿಖರವಾದ ಫಿಟ್ಟಿಂಗ್.",
      },
      highlight: "Perfect fitting like a designer tailor",
    },
    {
      id: "review-affan",
      name: "Mohammed Affan",
      role: "Local Guide",
      isLocalGuide: true,
      rating: 5,
      comment: {
        en: "Wonderful stitching, good equipment and reasonable price.",
        kn: "ಅದ್ಭುತ ಹೊಲಿಗೆ, ಅತ್ಯುತ್ತಮ ಸಲಕರಣೆಗಳು ಮತ್ತು ನ್ಯಾಯಯುತ ಬೆಲೆ.",
      },
      highlight: "Wonderful stitching & reasonable price",
    },
  ],

  about: {
    storyParagraphs: {
      en: [
        "Welcome to Hiba Ladies Tailor & Embroidery Works in Mavinakere, Raichur. We are dedicated to the art of feminine fashion, delivering personalized tailoring and computer-guided embroidery for women across Raichur and nearby regions.",
        "From exquisite bridal blouses and traditional sarees to contemporary salwar suits and delicate daily kurtis, every garment is measured with patience, cut with mathematical accuracy, and sewn with reinforced stitching.",
        "Equipped with modern computer embroidery machines and experienced tailors, we blend time-tested tailoring traditions with modern precision. We believe great fashion begins with an uncompromising fit and reliable on-time delivery.",
      ],
      kn: [
        "ರಾಯಚೂರಿನ ಮಾವಿನಕೆರೆಯಲ್ಲಿರುವ ಹಿಬಾ ಲೇಡೀಸ್ ಟೈಲರ್ ಮತ್ತು ಎಂಬ್ರಾಯ್ಡರಿ ವರ್ಕ್ಸ್‌ಗೆ ಆತ್ಮೀಯ ಸ್ವಾಗತ. ರಾಯಚೂರಿನ ಮಹಿಳೆಯರಿಗಾಗಿ ನಾವು ವಿಶಿಷ್ಟ ಹಾಗೂ ಆಕರ್ಷಕ ಹೊಲಿಗೆ ಮತ್ತು ಕಂಪ್ಯೂಟರ್ ಎಂಬ್ರಾಯ್ಡರಿ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತಿದ್ದೇವೆ.",
        "ಮದುವೆ ಬ್ರೈಡಲ್ ಬ್ಲೌಸ್, ಸಾಂಪ್ರದಾಯಿಕ ಸೀರೆಗಳು, ಆಧುನಿಕ ಸಲ್ವಾರ್ ಸೂಟ್‌ಗಳು ಮತ್ತು ಕುರ್ತಿಗಳವರೆಗೆ ಪ್ರತಿಯೊಂದು ಉಡುಪನ್ನು ಅತ್ಯಂತ ಕಾಳಜಿಯಿಂದ ಅಳೆದು, ಅಚ್ಚುಕಟ್ಟಾಗಿ ಹೊಲಿಯಲಾಗುತ್ತದೆ.",
        "ಆಧುನಿಕ ಕಂಪ್ಯೂಟರ್ ಎಂಬ್ರಾಯ್ಡರಿ ಯಂತ್ರೋಪಕರಣಗಳೊಂದಿಗೆ, ಅತ್ಯುತ್ತಮ ಫಿಟ್ಟಿಂಗ್ ಮತ್ತು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಡೆಲಿವರಿ ನೀಡುವುದು ನಮ್ಮ ಮುಖ್ಯ ಗುರಿಯಾಗಿದೆ.",
      ],
    },
    stats: [
      { label: { en: "Google Rating", kn: "ಗೂಗಲ್ ರೇಟಿಂಗ್" }, value: "5.0 ★" },
      { label: { en: "Customer Reviews", kn: "ಗ್ರಾಹಕರ ವಿಮರ್ಶೆಗಳು" }, value: "10/10 Positive" },
      { label: { en: "Daily Hours", kn: "ಕೆಲಸದ ಸಮಯ" }, value: "Until 8 PM" },
      { label: { en: "Quality Promise", kn: "ಗುಣಮಟ್ಟದ ಭರವಸೆ" }, value: "100% Fit Guarantee" },
    ],
  },
};
