"use client";

import React from "react";
import { siteConfig, ServiceItem } from "@/data/site.config";
import { useLanguage } from "@/context/LanguageContext";
import { LucideIcon } from "@/components/LucideIcon";
import { MessageCircle, Check, Sparkles } from "lucide-react";

export function ServicesSection() {
  const { lang, isKannada } = useLanguage();
  const services = siteConfig.services;

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FAF6F0] relative overflow-hidden">
      
      {/* Subtle stitched line decorative top border */}
      <div className="absolute top-0 inset-x-0 h-1 border-thread" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#380B23]/10 border border-[#D4AF37]/40 text-[#420A29] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{isKannada ? "ನಮ್ಮ ಹೊಲಿಗೆ ಸೇವೆಗಳು" : "Tailoring & Embroidery Services"}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#2C061B] tracking-tight">
            {isKannada
              ? "ಮಹಿಳೆಯರ ಎಲ್ಲಾ ಹೊಲಿಗೆ ಮತ್ತು ಎಂಬ್ರಾಯ್ಡರಿ ಕೆಲಸಗಳು"
              : "Crafted for Elegance, Stitched for Comfort"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            {isKannada
              ? "ಬ್ರೈಡಲ್ ಬ್ಲೌಸ್, ಸಲ್ವಾರ್ ಸೂಟ್ಸ್, ಲೆಹೆಂಗಾ ಹಾಗೂ ಕಂಪ್ಯೂಟರ್ ಎಂಬ್ರಾಯ್ಡರಿ ಕೆಲಸಗಳನ್ನು ನಿಮ್ಮ ಅಳತೆಗೆ ತಕ್ಕಂತೆ ಅಚ್ಚುಕಟ್ಟಾಗಿ ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತದೆ."
              : "From designer bridal blouses and silk sarees to salwar suits, lehengas, and computer embroidery, every stitch is measured to perfection."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-[#EAE0D3] hover:border-[#D4AF37] flex flex-col justify-between"
            >
              {/* Badge if present */}
              {service.badge && (
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#FAF1F6] text-[#7A1950] border border-[#D4AF37]/50 shadow-xs">
                    {isKannada ? service.badge.kn : service.badge.en}
                  </span>
                </div>
              )}

              <div>
                {/* Service Icon inside Plum & Gold Emblem */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#380B23] to-[#5C123B] text-[#F3E5AB] flex items-center justify-center shadow-md mb-5 group-hover:scale-110 transition-transform">
                  <LucideIcon name={service.icon} className="w-6 h-6 text-[#F3E5AB]" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#2C061B] mb-2 group-hover:text-[#5C123B] transition-colors">
                  {isKannada ? service.title.kn : service.title.en}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {isKannada ? service.description.kn : service.description.en}
                </p>

                {/* Bulleted Feature Highlights */}
                <ul className="space-y-1.5 mb-6 text-xs text-gray-700">
                  {(isKannada ? service.features.kn : service.features.en).map(
                    (feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Direct WhatsApp Action for this specific service */}
              <div className="pt-4 border-t border-gray-100 mt-auto">
                <a
                  href={`https://wa.me/${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Hiba Ladies Tailor, I would like to enquire about ${service.title.en} (${service.title.kn}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-touch w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FAF6F0] hover:bg-[#25D366] text-[#2C061B] hover:text-white font-semibold text-xs sm:text-sm border border-[#D4AF37]/40 hover:border-[#25D366] transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>
                    {isKannada ? "ಈ ಸೇವೆಯ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ" : "Enquire on WhatsApp"}
                  </span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner with Fitting Assurance */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#2C061B] via-[#420A29] to-[#2C061B] text-white flex flex-col md:flex-row items-center justify-between gap-4 border border-[#D4AF37]/40 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center flex-shrink-0 text-[#F3E5AB]">
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="font-display text-base sm:text-lg font-bold text-[#F3E5AB]">
                {isKannada
                  ? "ವಿಶೇಷ ಡಿಸೈನ್ ಅಥವಾ ಸ್ವಂತ ಬಟ್ಟೆ ತರುತ್ತಿದ್ದೀರಾ?"
                  : "Have a unique design or bringing your own fabric?"}
              </h4>
              <p className="text-xs sm:text-sm text-white/80">
                {isKannada
                  ? "ಯಾವುದೇ ಇಂಟರ್ನೆಟ್ ಅಥವಾ ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್ ಫೋಟೋ ತಂದು ತೋರಿಸಿ, ಅದೇ ರೀತಿ ಹೊಲಿದು ಕೊಡುತ್ತೇವೆ."
                  : "Bring any reference photo from Instagram or Pinterest. We can replicate the cut & embroidery."}
              </p>
            </div>
          </div>

          <a
            href={`tel:${siteConfig.business.phone}`}
            className="btn-touch px-6 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#2C061B] font-bold text-xs sm:text-sm whitespace-nowrap shadow-md transition-all"
          >
            {isKannada ? "ಮಾತನಾಡಲು ಕರೆ ಮಾಡಿ" : "Speak to Master Tailor"}
          </a>
        </div>

      </div>
    </section>
  );
}
