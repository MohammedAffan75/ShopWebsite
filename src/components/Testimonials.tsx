"use client";

import React from "react";
import { siteConfig } from "@/data/site.config";
import { useLanguage } from "@/context/LanguageContext";
import { Star, ExternalLink, ShieldCheck, Quote } from "lucide-react";

export function Testimonials() {
  const { lang, isKannada } = useLanguage();
  const { testimonials, business } = siteConfig;

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF1F6] border border-[#7A1950]/20 text-[#5C123B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
            <span>{isKannada ? "ನಿಜವಾದ ಗ್ರಾಹಕರ ವಿಮರ್ಶೆಗಳು" : "Real Google Customer Reviews"}</span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#2C061B] tracking-tight">
            {isKannada
              ? "ನಮ್ಮ ಗ್ರಾಹಕರ ಸಂತೃಪ್ತ ಅಭಿಪ್ರಾಯಗಳು"
              : "What Ladies in Raichur Say About Us"}
          </h2>

          {/* 5.0 Rating Badge Bar */}
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-3 p-3 sm:px-6 rounded-2xl bg-[#FAF6F0] border border-[#D4AF37]/50 shadow-sm">
            <div className="flex items-center gap-1 text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#F59E0B]" />
              ))}
            </div>
            <span className="font-bold text-lg text-[#2C061B]">5.0 / 5.0</span>
            <span className="text-xs sm:text-sm text-gray-600">
              ({business.rating.reviewCount} {isKannada ? "ಪರಿಶೀಲಿಸಿದ ಗೂಗಲ್ ವಿಮರ್ಶೆಗಳು" : "Verified Google Reviews"})
            </span>
            <span className="h-4 w-px bg-gray-300 hidden sm:inline" />
            <span className="text-xs font-semibold text-[#5C123B]">
              {isKannada ? "100% ಧನಾತ್ಮಕ ಪ್ರತಿಕ್ರಿಯೆ" : "100% Positive Feedback"}
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#FAF6F0] border border-[#EAE0D3] hover:border-[#D4AF37] transition-all hover:shadow-lg flex flex-col justify-between relative group"
            >
              <div>
                {/* Header: Name, Badge, Stars */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#2C061B]">
                      {review.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      {review.isLocalGuide && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#F59E0B] bg-[#FFFBEB] px-2 py-0.5 rounded border border-[#F59E0B]/30">
                          ★ Google Local Guide
                        </span>
                      )}
                      {!review.isLocalGuide && (
                        <span className="text-[11px] text-gray-500">
                          {isKannada ? "ಪರಿಶೀಲಿಸಿದ ಗ್ರಾಹಕರು" : "Verified Customer"}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center text-[#F59E0B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-4">
                  &ldquo;{isKannada ? review.comment.kn : review.comment.en}&rdquo;
                </p>
              </div>

              {/* Highlight Tag */}
              {review.highlight && (
                <div className="pt-3 border-t border-[#EAE0D3] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#5C123B] font-medium bg-[#FAF1F6] px-2.5 py-1 rounded-md">
                    ✓ {review.highlight}
                  </span>
                  <span className="text-[10px] text-gray-400">Google Review</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Callout: See all reviews on Google button */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={business.links.googleMapsListing}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-touch inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2C061B] text-[#F3E5AB] hover:bg-[#420A29] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all border border-[#D4AF37]/50"
            id="see-all-google-reviews-btn"
          >
            <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
            <span>{isKannada ? "ಗೂಗಲ್‌ನಲ್ಲಿ ಎಲ್ಲಾ ವಿಮರ್ಶೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ" : "See All 10 Reviews on Google Maps"}</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>

          <a
            href={business.links.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-touch inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#2C061B] hover:bg-[#FAF6F0] font-bold text-xs sm:text-sm shadow-xs border border-gray-300 transition-all"
          >
            <span>{isKannada ? "ನಿಮ್ಮ ಅನುಭವ ಹಂಚಿಕೊಳ್ಳಿ" : "Write a Review on Google"}</span>
            <ExternalLink className="w-4 h-4 ml-1 text-gray-500" />
          </a>
        </div>

      </div>
    </section>
  );
}
