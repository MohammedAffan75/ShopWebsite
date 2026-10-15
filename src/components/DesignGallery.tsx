"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site.config";
import { useLanguage } from "@/context/LanguageContext";
import { GalleryMediaItem } from "@/lib/gallery-server";
import {
  Sparkles,
  Eye,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Download,
  Filter,
} from "lucide-react";

interface DesignGalleryProps {
  items: GalleryMediaItem[];
  activeLightboxItem?: GalleryMediaItem | null;
  setActiveLightboxItem?: (item: GalleryMediaItem | null) => void;
}

type CategoryTab = "all" | "blouses" | "suits" | "bridal" | "embroidery";

export function DesignGallery({
  items,
  activeLightboxItem,
  setActiveLightboxItem,
}: DesignGalleryProps) {
  const { lang, isKannada } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CategoryTab>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryMediaItem | null>(null);

  // Sync external lightbox if passed
  useEffect(() => {
    if (activeLightboxItem !== undefined) {
      setLightboxItem(activeLightboxItem);
    }
  }, [activeLightboxItem]);

  const handleCloseLightbox = () => {
    setLightboxItem(null);
    if (setActiveLightboxItem) setActiveLightboxItem(null);
  };

  const handleOpenLightbox = (item: GalleryMediaItem) => {
    setLightboxItem(item);
    if (setActiveLightboxItem) setActiveLightboxItem(item);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxItem) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxItem, selectedCategory, items]);

  const filteredItems = items.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  const currentIndex = lightboxItem
    ? filteredItems.findIndex((it) => it.id === lightboxItem.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex <= 0) {
      setLightboxItem(filteredItems[filteredItems.length - 1]);
    } else {
      setLightboxItem(filteredItems[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex >= filteredItems.length - 1) {
      setLightboxItem(filteredItems[0]);
    } else {
      setLightboxItem(filteredItems[currentIndex + 1]);
    }
  };

  const tabs: { key: CategoryTab; label: { en: string; kn: string } }[] = [
    { key: "all", label: { en: "All Works", kn: "ಎಲ್ಲವೂ" } },
    { key: "blouses", label: { en: "Blouses", kn: "ಬ್ಲೌಸ್‌ಗಳು" } },
    { key: "embroidery", label: { en: "Computer Embroidery", kn: "ಕಂಪ್ಯೂಟರ್ ಎಂಬ್ರಾಯ್ಡರಿ" } },
    { key: "bridal", label: { en: "Bridal & Lehengas", kn: "ಬ್ರೈಡಲ್ ಮತ್ತು ಲೆಹೆಂಗಾ" } },
    { key: "suits", label: { en: "Salwar Suits & Kurtis", kn: "ಸಲ್ವಾರ್ ಸೂಟ್ಸ್ ಮತ್ತು ಕುರ್ತಿ" } },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF1F6] border border-[#7A1950]/20 text-[#5C123B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 fill-[#5C123B]" />
            <span>{isKannada ? "ನಮ್ಮ ಕೆಲಸದ ಗ್ಯಾಲರಿ" : "Design & Embroidery Showcase"}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#2C061B] tracking-tight">
            {isKannada ? "ವಿನ್ಯಾಸಗಳ ಗ್ಯಾಲರಿ" : "Our Tailoring & Embroidery Gallery"}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600">
            {isKannada
              ? "ಕಂಪ್ಯೂಟರ್ ಎಂಬ್ರಾಯ್ಡರಿ, ಬ್ರೈಡಲ್ ಮಗ್ಗಂ ವರ್ಕ್, ಕಟೋರಿ ಬ್ಲೌಸ್ ಮತ್ತು ಸಲ್ವಾರ್ ಸೂಟ್ಸ್ ವಿನ್ಯಾಸಗಳನ್ನು ವೀಕ್ಷಿಸಿ."
              : "Browse real work samples. Click any item for fullscreen view or to enquire directly on WhatsApp."}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10">
          {tabs.map((tab) => {
            const isActive = selectedCategory === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setSelectedCategory(tab.key)}
                className={`btn-touch px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                  isActive
                    ? "bg-[#2C061B] text-[#F3E5AB] border border-[#D4AF37] shadow-md"
                    : "bg-[#FAF6F0] text-gray-700 hover:bg-[#FAF1F6] hover:text-[#5C123B] border border-[#EAE0D3]"
                }`}
              >
                {lang === "kn" ? tab.label.kn : tab.label.en}
              </button>
            );
          })}
        </div>

        {/* Masonry / Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#FAF6F0] rounded-2xl overflow-hidden border border-[#EAE0D3] hover:border-[#D4AF37] transition-all hover:shadow-xl flex flex-col justify-between"
            >
              {/* Media Container */}
              <div
                className="relative aspect-[4/5] bg-[#2C061B] cursor-pointer overflow-hidden"
                onClick={() => handleOpenLightbox(item)}
              >
                {item.isVideo ? (
                  <div className="w-full h-full relative flex items-center justify-center bg-black">
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="w-14 h-14 rounded-full bg-[#D4AF37] text-[#2C061B] flex items-center justify-center shadow-lg">
                        <Play className="w-6 h-6 fill-[#2C061B] ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold uppercase px-2.5 py-1 rounded-md">
                  {item.category}
                </div>

                {/* View Overlay on Hover */}
                <div className="btn-touch absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-medium text-xs backdrop-blur-[2px]">
                  <div className="w-10 h-10 rounded-full bg-[#2C061B]/90 border border-[#D4AF37] flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5 text-[#F3E5AB]" />
                  </div>
                  <span className="font-semibold">{isKannada ? "ದೊಡ್ಡದಾಗಿ ನೋಡಿ" : "View Details"}</span>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-display text-base font-bold text-[#2C061B] line-clamp-1 group-hover:text-[#5C123B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 font-mono mt-0.5 truncate">
                    Ref: {item.filename}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200">
                  <a
                    href={`https://wa.me/${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Hiba Ladies Tailor, I am interested in this design: "${item.title}" (File: ${item.filename}). Please let me know how much time it takes and pricing estimate.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-touch w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white hover:bg-[#25D366] text-[#2C061B] hover:text-white font-semibold text-xs border border-[#D4AF37]/40 hover:border-[#25D366] transition-all shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>
                      {isKannada ? "WhatsApp ನಲ್ಲಿ ವಿಚಾರಿಸಿ" : "WhatsApp Enquiry"}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state safeguard */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#FAF6F0] rounded-2xl border border-dashed border-[#D4AF37]">
            <p className="text-sm font-semibold text-[#2C061B]">
              No designs found in this category.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Add photos to /public/images/designs/ or /public/images/embroidery/
            </p>
          </div>
        )}

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar: Title & Close Button */}
          <div className="w-full max-w-5xl flex items-center justify-between text-white pb-3 border-b border-white/10">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                Category: {lightboxItem.category}
              </span>
              <h3 className="font-display text-base sm:text-xl font-bold text-white truncate max-w-xs sm:max-w-md">
                {lightboxItem.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCloseLightbox}
                className="btn-touch p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close fullscreen modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Center Stage: Media Preview & Nav Controls */}
          <div className="relative w-full max-w-4xl flex-grow flex items-center justify-center my-4 overflow-hidden">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="btn-touch absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/60 hover:bg-[#D4AF37] hover:text-[#2C061B] text-white transition-colors border border-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Media: Image or Video */}
            <div className="max-h-[70vh] max-w-full flex items-center justify-center">
              {lightboxItem.isVideo ? (
                <video
                  src={lightboxItem.src}
                  controls
                  autoPlay
                  className="max-h-[70vh] max-w-full rounded-xl shadow-2xl"
                />
              ) : (
                <img
                  src={lightboxItem.src}
                  alt={lightboxItem.alt}
                  className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl"
                />
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="btn-touch absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/60 hover:bg-[#D4AF37] hover:text-[#2C061B] text-white transition-colors border border-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Controls Bar */}
          <div className="w-full max-w-xl flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10">
            <span className="text-xs text-white/70 font-mono">
              Ref: {lightboxItem.filename}
            </span>

            <a
              href={`https://wa.me/${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
                `Hello Hiba Ladies Tailor, I am viewing "${lightboxItem.title}" (${lightboxItem.filename}) in your gallery. I would like to enquire about getting this tailored/embroidered.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-touch w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>{isKannada ? "ಈ ಡಿಸೈನ್ ಬಗ್ಗೆ WhatsApp ನಲ್ಲಿ ವಿಚಾರಿಸಿ" : "Enquire on WhatsApp"}</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
