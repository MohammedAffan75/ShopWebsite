"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site.config";
import { useLanguage } from "@/context/LanguageContext";
import { GalleryMediaItem } from "@/lib/gallery-server";
import { MessageCircle, Sparkles, ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface NewCollectionsProps {
  items: GalleryMediaItem[];
  onOpenLightbox?: (item: GalleryMediaItem) => void;
}

export function NewCollections({ items, onOpenLightbox }: NewCollectionsProps) {
  const { lang, isKannada } = useLanguage();
  const [scrollIndex, setScrollIndex] = useState(0);

  if (!items || items.length === 0) return null;

  return (
    <section id="collections" className="py-16 sm:py-24 bg-[#FAF6F0] relative overflow-hidden">
      
      {/* Thread decorative top border */}
      <div className="absolute top-0 inset-x-0 h-1 border-thread" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#996515] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{isKannada ? "ಹೊಸ ವಿನ್ಯಾಸಗಳ ಸಂಗ್ರಹ" : "Fresh Arrivals & Trending Cuts"}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#2C061B] tracking-tight">
              {isKannada ? "ಇತ್ತೀಚಿನ ಕಲೆಕ್ಷನ್" : "New Collections"}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-xl">
              {isKannada
                ? "ರಾಯಚೂರಿನ ನಮ್ಮ ವರ್ಕ್‌ಶಾಪ್‌ನಲ್ಲಿ ಹೊಸದಾಗಿ ಹೊಲಿದ ಬ್ಲೌಸ್, ಗೌನ್ ಮತ್ತು ಎಂಬ್ರಾಯ್ಡರಿ ವಿನ್ಯಾಸಗಳು."
                : "Explore our latest handcrafted bridal blouses, festive suits, and computerized embroidery creations."}
            </p>
          </div>

          <div className="text-xs text-gray-500 italic">
            {isKannada
              ? "ಫೋಟೋಗಳನ್ನು /public/images/new-collections/ ಗೆ ಸೇರಿಸಿ"
              : "Auto-loaded from /public/images/new-collections/"}
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#EAE0D3] hover:border-[#D4AF37] flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] bg-[#2C061B] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* NEW Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#2C061B] text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                  NEW
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md">
                  {item.category}
                </div>

                {/* Lightbox Trigger Overlay Button */}
                {onOpenLightbox && (
                  <button
                    onClick={() => onOpenLightbox(item)}
                    className="btn-touch absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-medium text-xs backdrop-blur-[2px]"
                    aria-label={`View fullscreen image of ${item.title}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#2C061B]/90 border border-[#D4AF37] flex items-center justify-center shadow-lg">
                      <Eye className="w-5 h-5 text-[#F3E5AB]" />
                    </div>
                  </button>
                )}
              </div>

              {/* Card Footer Details */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-display text-base font-bold text-[#2C061B] line-clamp-1 group-hover:text-[#7A1950] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 font-mono mt-0.5 truncate">
                    Ref: {item.filename}
                  </p>
                </div>

                {/* Direct WhatsApp Enquiry with design filename pre-filled */}
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <a
                    href={`https://wa.me/${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Hiba Ladies Tailor, I am interested in this design from your New Collections: "${item.title}" (File: ${item.filename}). Could you tell me more about stitching time and details?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-touch w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white font-semibold text-xs transition-all border border-[#25D366]/30 hover:border-[#25D366]"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>
                      {isKannada ? "ಈ ಡಿಸೈನ್ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ" : "Enquire on WhatsApp"}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
