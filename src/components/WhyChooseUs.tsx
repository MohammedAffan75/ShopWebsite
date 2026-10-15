"use client";

import React from "react";
import { siteConfig } from "@/data/site.config";
import { useLanguage } from "@/context/LanguageContext";
import { LucideIcon } from "@/components/LucideIcon";
import { Star, ShieldCheck, Heart } from "lucide-react";

export function WhyChooseUs() {
  const { lang, isKannada } = useLanguage();
  const reasons = siteConfig.whyChooseUs;

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF1F6] border border-[#7A1950]/20 text-[#5C123B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-[#5C123B]" />
            <span>{isKannada ? "ನಮ್ಮ ಹೆಮ್ಮೆಯ ವೈಶಿಷ್ಟ್ಯಗಳು" : "Trusted by Raichur Ladies"}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#2C061B] tracking-tight">
            {isKannada
              ? "ಗ್ರಾಹಕರು ನಮ್ಮನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡುತ್ತಾರೆ?"
              : "Why Ladies in Raichur Choose Hiba"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            {isKannada
              ? "ನಮ್ಮ ರಿಯಲ್ ಗೂಗಲ್ ವಿಮರ್ಶೆಗಳಲ್ಲಿ ಗ್ರಾಹಕರು ಪ್ರಶಂಸಿಸಿದ 6 ಪ್ರಮುಖ ಗುಣಗಳು."
              : "Every reason below is rooted in real Google customer feedback, delivered every single day."}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#FAF6F0] border border-[#EAE0D3] hover:border-[#D4AF37] transition-all hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2C061B] text-[#D4AF37] flex items-center justify-center shadow-md">
                    <LucideIcon name={item.icon} className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div className="flex items-center text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#F59E0B]" />
                    ))}
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-[#2C061B] mb-2">
                  {isKannada ? item.title.kn : item.title.en}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {isKannada ? item.description.kn : item.description.en}
                </p>
              </div>

              {/* Review Quote Highlight */}
              {item.fromReviewQuote && (
                <div className="pt-3 border-t border-[#EAE0D3]/80 mt-2">
                  <p className="text-[11px] text-[#7A1950] font-medium italic">
                    &ldquo;{item.fromReviewQuote}&rdquo;
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 5.0 Star Summary Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#FAF1F6] border border-[#D4AF37] shadow-sm">
            <ShieldCheck className="w-5 h-5 text-[#996515]" />
            <span className="text-xs sm:text-sm font-semibold text-[#2C061B]">
              {isKannada
                ? "100% ಫಿಟ್ಟಿಂಗ್ ಭರವಸೆ • ಹಬ್ಬ ಮತ್ತು ಮದುವೆಗಳಿಗೆ ನಿಗದಿತ ದಿನವೇ ಡೆಲಿವರಿ"
                : "100% Fit Guarantee • On-time delivery for weddings, festivals & special occasions"}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
