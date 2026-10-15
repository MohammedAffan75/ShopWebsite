"use client";

import React from "react";
import { siteConfig } from "@/data/site.config";
import { useLanguage } from "@/context/LanguageContext";
import { GalleryMediaItem } from "@/lib/gallery-server";
import { Scissors, Sparkles, Heart, CheckCircle2 } from "lucide-react";

interface AboutUsProps {
  interiorPhotos: GalleryMediaItem[];
}

export function AboutUs({ interiorPhotos }: AboutUsProps) {
  const { lang, isKannada } = useLanguage();
  const { about, business } = siteConfig;

  const displayPhotos = interiorPhotos.length > 0
    ? interiorPhotos.slice(0, 3)
    : [
        {
          id: "about-ph-1",
          src: "/images/placeholders/shop-inside-1.svg",
          alt: "Cutting & Measurement Lounge at Hiba Ladies Tailor",
          title: "Fitting & Measurement Lounge",
        },
        {
          id: "about-ph-2",
          src: "/images/placeholders/shop-inside-2.svg",
          alt: "Computer Embroidery Setup at Hiba Ladies Tailor",
          title: "Computer Embroidery Unit",
        },
      ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF6F0] relative overflow-hidden">
      
      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-1 border-thread" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Story & Principles */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#380B23]/10 border border-[#D4AF37]/40 text-[#5C123B] text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-[#5C123B]" />
              <span>{isKannada ? "ನಮ್ಮ ಪರಿಚಯ ಮತ್ತು ಕರಕುಶಲತೆ" : "Our Craft & Heritage"}</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#2C061B] tracking-tight">
              {isKannada
                ? "ಪ್ರೀತಿಯಿಂದ ಹೊಲಿಗೆ, ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಡೆಲಿವರಿ"
                : "Stitched with Love, Delivered on Time in Raichur"}
            </h2>

            {/* Story Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              {(isKannada ? about.storyParagraphs.kn : about.storyParagraphs.en).map(
                (paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                )
              )}
            </div>

            {/* Key commitments */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#2C061B]">
              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-[#EAE0D3]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="font-medium">
                  {isKannada ? "ಮಹಿಳೆಯರ ಆರಾಮಕ್ಕೆ ಪ್ರಥಮ ಆದ್ಯತೆ" : "Women's Comfort First"}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-[#EAE0D3]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="font-medium">
                  {isKannada ? "ಅತ್ಯಾಧುನಿಕ ಕಂಪ್ಯೂಟರ್ ಯಂತ್ರಗಳು" : "Multi-Needle Computer Embroidery"}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-[#EAE0D3]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="font-medium">
                  {isKannada ? "ನ್ಯಾಯಯುತ ಹಾಗೂ ಕೈಗೆಟುಕುವ ದರಗಳು" : "Reasonable & Pocket-Friendly"}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-[#EAE0D3]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="font-medium">
                  {isKannada ? "ಹಬ್ಬ ಮತ್ತು ಮದುವೆಗಳಿಗೆ ನಿಖರ ಡೆಲಿವರಿ" : "Guaranteed Festival Delivery"}
                </span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-xl bg-white border border-[#D4AF37]/30 text-center shadow-xs"
                >
                  <p className="font-display text-lg sm:text-xl font-bold text-[#5C123B]">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-gray-600 mt-0.5">
                    {isKannada ? stat.label.kn : stat.label.en}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interior Shop Photos Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl p-2 bg-gradient-to-tr from-[#996515] via-[#D4AF37] to-[#F3E5AB] shadow-xl">
              <div className="rounded-xl overflow-hidden bg-[#2C061B]">
                <img
                  src={displayPhotos[0].src}
                  alt={displayPhotos[0].alt}
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="p-3 bg-[#2C061B] text-white flex items-center justify-between">
                  <span className="text-xs font-bold text-[#F3E5AB]">
                    {displayPhotos[0].title}
                  </span>
                  <span className="text-[10px] text-gray-400">Shop Interior</span>
                </div>
              </div>
            </div>

            {displayPhotos.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {displayPhotos.slice(1, 3).map((photo, i) => (
                  <div
                    key={photo.id || i}
                    className="relative rounded-xl overflow-hidden border border-[#D4AF37]/50 shadow-md group bg-[#2C061B]"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-36 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/70 p-2 text-white">
                      <p className="text-[11px] font-semibold truncate text-[#F3E5AB]">
                        {photo.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="text-center text-[11px] text-gray-500 italic">
              {isKannada
                ? "ಫೋಟೋಗಳನ್ನು /public/images/shop-inside/ ಗೆ ಸೇರಿಸಬಹುದು"
                : "Photos loaded from /public/images/shop-inside/"}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
