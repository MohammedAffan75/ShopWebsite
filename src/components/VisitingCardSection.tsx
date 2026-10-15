"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site.config";
import { useLanguage } from "@/context/LanguageContext";
import { GalleryMediaItem } from "@/lib/gallery-server";
import { downloadVCard } from "@/lib/vcard";
import {
  CreditCard,
  Download,
  UserPlus,
  QrCode,
  Share2,
  Check,
  ExternalLink,
  Phone,
  Sparkles,
} from "lucide-react";

interface VisitingCardSectionProps {
  cardImages: GalleryMediaItem[];
  cardPdfUrl?: string;
  qrCodes: {
    whatsapp?: GalleryMediaItem;
    location?: GalleryMediaItem;
    website?: GalleryMediaItem;
    all: GalleryMediaItem[];
  };
}

export function VisitingCardSection({
  cardImages,
  cardPdfUrl,
  qrCodes,
}: VisitingCardSectionProps) {
  const { lang, isKannada } = useLanguage();
  const [activeSide, setActiveSide] = useState<"front" | "back">("front");
  const [savedContactState, setSavedContactState] = useState(false);

  // Determine front and back card images
  const frontCard =
    cardImages.find((c) => c.filename.toLowerCase().includes("front")) ||
    cardImages[0] || {
      src: "/images/visiting-cards/visiting-card-front.svg",
      title: "Hiba Ladies Tailor Visiting Card Front",
    };

  const backCard =
    cardImages.find((c) => c.filename.toLowerCase().includes("back")) ||
    cardImages[1] || {
      src: "/images/visiting-cards/visiting-card-back.svg",
      title: "Hiba Ladies Tailor Visiting Card Back",
    };

  const currentDisplayCard = activeSide === "front" ? frontCard : backCard;

  const handleSaveContact = () => {
    downloadVCard();
    setSavedContactState(true);
    setTimeout(() => setSavedContactState(false), 3000);
  };

  const qrItems = [
    {
      id: "qr-wa",
      label: { en: "Scan to WhatsApp", kn: "WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ" },
      subtitle: "+91 93537 63089",
      src: qrCodes.whatsapp?.src || "/images/qr/whatsapp-qr.svg",
      link: `https://wa.me/${siteConfig.business.whatsappNumber}`,
      filename: "Hiba_Tailor_WhatsApp_QR.svg",
    },
    {
      id: "qr-map",
      label: { en: "Scan for Google Maps", kn: "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ಹುಡುಕಿ" },
      subtitle: "59R4+FC Raichur",
      src: qrCodes.location?.src || "/images/qr/location-qr.svg",
      link: siteConfig.business.links.googleMapsListing,
      filename: "Hiba_Tailor_Location_QR.svg",
    },
    {
      id: "qr-web",
      label: { en: "Scan to Visit Website", kn: "ವೆಬ್‌ಸೈಟ್‌ಗೆ ಭೇಟಿ ನೀಡಿ" },
      subtitle: "hibaladiestailor.com",
      src: qrCodes.website?.src || "/images/qr/website-qr.svg",
      link: siteConfig.business.links.websiteUrl,
      filename: "Hiba_Tailor_Website_QR.svg",
    },
  ];

  return (
    <section id="visiting-card" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF1F6] border border-[#7A1950]/20 text-[#5C123B] text-xs font-semibold uppercase tracking-wider mb-3">
            <CreditCard className="w-3.5 h-3.5 text-[#7A1950]" />
            <span>{isKannada ? "ಡಿಜಿಟಲ್ ವಿಸಿಟಿಂಗ್ ಕಾರ್ಡ್ & ಕ್ಯೂಆರ್" : "Digital Visiting Card & QR Codes"}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#2C061B] tracking-tight">
            {isKannada
              ? "ನಮ್ಮ ವಿಸಿಟಿಂಗ್ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ"
              : "Save Our Contact & Download Visiting Card"}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600">
            {isKannada
              ? "ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಫೋನ್‌ಗೆ ಕಾಂಟ್ಯಾಕ್ಟ್ ಸೇವ್ ಮಾಡಿಕೊಳ್ಳಿ ಅಥವಾ ಕ್ಯೂಆರ್ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ."
              : "Save our official contact directly to your phone's address book or scan the QR codes below."}
          </p>
        </div>

        {/* Visiting Card Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Visual Card Display */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Front / Back Toggle Pill */}
            <div className="inline-flex p-1 rounded-xl bg-[#FAF6F0] border border-[#EAE0D3] mb-4">
              <button
                onClick={() => setActiveSide("front")}
                className={`btn-touch px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeSide === "front"
                    ? "bg-[#2C061B] text-[#F3E5AB] shadow-sm"
                    : "text-gray-600 hover:text-[#2C061B]"
                }`}
              >
                {isKannada ? "ಮುಂಭಾಗ (Front)" : "Card Front"}
              </button>
              <button
                onClick={() => setActiveSide("back")}
                className={`btn-touch px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeSide === "back"
                    ? "bg-[#2C061B] text-[#F3E5AB] shadow-sm"
                    : "text-gray-600 hover:text-[#2C061B]"
                }`}
              >
                {isKannada ? "ಹಿಂಭಾಗ (Back)" : "Card Back"}
              </button>
            </div>

            {/* Visiting Card Canvas Frame */}
            <div className="w-full max-w-xl aspect-[1.75/1] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37] bg-[#2C061B] relative transition-transform duration-300 hover:scale-[1.01]">
              <img
                src={currentDisplayCard.src}
                alt={currentDisplayCard.title || "Hiba Ladies Tailor Visiting Card"}
                className="w-full h-full object-contain bg-[#1F0413]"
              />
            </div>

            <p className="text-[11px] text-gray-500 mt-3 italic text-center">
              {isKannada
                ? "ಫೈಲ್‌ಗಳನ್ನು /public/images/visiting-cards/ ಫೋಲ್ಡರ್‌ಗೆ ಸೇರಿಸಬಹುದು"
                : "Visiting card files are loaded automatically from /public/images/visiting-cards/"}
            </p>
          </div>

          {/* Right Column: Actions & Contact Download */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF6F0] border border-[#EAE0D3] space-y-4 shadow-sm">
              <h3 className="font-display text-lg font-bold text-[#2C061B]">
                {isKannada ? "ತ್ವರಿತ ಡೌನ್‌ಲೋಡ್ ಮತ್ತು ಕಾಂಟ್ಯಾಕ್ಟ್ ಸೇವ್" : "Quick Actions"}
              </h3>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {isKannada
                  ? "ವಿಸಿಟಿಂಗ್ ಕಾರ್ಡ್ ಚಿತ್ರವನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ಅಥವಾ ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ನಮ್ಮ ಫೋನ್ ನಂಬರ್, ವಿಳಾಸವನ್ನು ನಿಮ್ಮ ಮೊಬೈಲ್ ಕಾಂಟ್ಯಾಕ್ಟ್‌ಗೆ ಸೇವ್ ಮಾಡಿ."
                  : "Keep our details handy whenever you need blouse stitching, bridal lehengas, or computer embroidery in Raichur."}
              </p>

              {/* Action 1: Save Contact (.vcf) */}
              <button
                onClick={handleSaveContact}
                className="btn-touch w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#2C061B] font-bold text-sm shadow-md hover:brightness-105 active:scale-[0.98] transition-all"
                id="save-contact-vcf-btn"
              >
                {savedContactState ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-900" />
                    <span className="text-emerald-950">
                      {isKannada ? "ಕಾಂಟ್ಯಾಕ್ಟ್ ಡೌನ್‌ಲೋಡ್ ಆಗಿದೆ!" : "Contact (.vcf) Downloaded!"}
                    </span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5 fill-[#2C061B]" />
                    <span>
                      {isKannada
                        ? "ಕಾಂಟ್ಯಾಕ್ಟ್ ಸೇವ್ ಮಾಡಿ (Save to Phone)"
                        : "Save Contact to Phone (.vcf)"}
                    </span>
                  </>
                )}
              </button>

              {/* Action 2: Download Card Image / PDF */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={currentDisplayCard.src}
                  download="Hiba_Ladies_Tailor_Visiting_Card.svg"
                  className="btn-touch inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-gray-50 text-[#2C061B] text-xs font-semibold border border-gray-300 transition-colors shadow-2xs"
                >
                  <Download className="w-4 h-4 text-[#996515]" />
                  <span>{isKannada ? "ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್" : "Download Card"}</span>
                </a>

                {cardPdfUrl ? (
                  <a
                    href={cardPdfUrl}
                    download
                    className="btn-touch inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-gray-50 text-[#2C061B] text-xs font-semibold border border-gray-300 transition-colors shadow-2xs"
                  >
                    <Download className="w-4 h-4 text-[#996515]" />
                    <span>PDF Download</span>
                  </a>
                ) : (
                  <button
                    onClick={() => window.print()}
                    className="btn-touch inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-gray-50 text-[#2C061B] text-xs font-semibold border border-gray-300 transition-colors shadow-2xs"
                  >
                    <Share2 className="w-4 h-4 text-[#996515]" />
                    <span>{isKannada ? "ಪ್ರಿಂಟ್ ಮಾಡಿ" : "Print Card"}</span>
                  </button>
                )}
              </div>

              {/* Quick Contact Info */}
              <div className="pt-3 border-t border-gray-200/80 text-xs text-gray-600 space-y-1">
                <p>
                  <strong className="text-[#2C061B]">Phone:</strong> 093537 63089
                </p>
                <p>
                  <strong className="text-[#2C061B]">Address:</strong> 1/4-1258-409, Mavinakere, Raichur 584103
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* QR Codes Grid */}
        <div className="pt-8 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#2C061B]">
              {isKannada ? "ಕ್ಯೂಆರ್ ಕೋಡ್‌ಗಳನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ" : "Instant QR Codes"}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              {isKannada
                ? "ನಿಮ್ಮ ಮೊಬೈಲ್ ಕ್ಯಾಮೆರಾದಿಂದ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ ಸ್ನೇಹಿತರಿಗೆ ಶೇರ್ ಮಾಡಲು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ."
                : "Scan with your phone camera or download to share with family and friends."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {qrItems.map((qr) => (
              <div
                key={qr.id}
                className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#EAE0D3] hover:border-[#D4AF37] transition-all hover:shadow-md flex flex-col items-center text-center justify-between"
              >
                <div className="flex flex-col items-center">
                  {/* QR Image Box */}
                  <div className="w-44 h-44 rounded-xl overflow-hidden bg-white p-2 border border-gray-200 shadow-inner mb-3">
                    <img
                      src={qr.src}
                      alt={qr.label.en}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <h4 className="font-display text-sm font-bold text-[#2C061B]">
                    {isKannada ? qr.label.kn : qr.label.en}
                  </h4>
                  <p className="text-xs text-gray-500 font-mono mt-0.5">
                    {qr.subtitle}
                  </p>
                </div>

                {/* QR Actions */}
                <div className="w-full pt-4 mt-3 border-t border-gray-200 flex items-center justify-center gap-2">
                  <a
                    href={qr.src}
                    download={qr.filename}
                    className="btn-touch px-3 py-1.5 rounded-lg bg-white hover:bg-[#D4AF37] hover:text-[#2C061B] text-xs font-semibold text-gray-700 border border-gray-300 transition-colors inline-flex items-center gap-1 shadow-2xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>

                  <a
                    href={qr.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-touch px-3 py-1.5 rounded-lg bg-[#2C061B] hover:bg-[#420A29] text-xs font-semibold text-[#F3E5AB] transition-colors inline-flex items-center gap-1 shadow-2xs"
                  >
                    <span>Open</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-[11px] text-gray-500 italic mt-6">
            {isKannada
              ? "ಕಸ್ಟಮ್ ಕ್ಯೂಆರ್ ಕೋಡ್‌ಗಳನ್ನು /public/images/qr/ ಫೋಲ್ಡರ್‌ಗೆ ಸೇರಿಸಬಹುದು"
              : "QR code images auto-read from /public/images/qr/"}
          </div>
        </div>

      </div>
    </section>
  );
}
