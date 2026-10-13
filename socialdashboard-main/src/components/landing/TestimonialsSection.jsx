import React from 'react';
import { TESTIMONIALS } from '../../data/mockData';
import { Star, Quote, Sparkles } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            Creator Feedback
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved By Modern Creators & <span className="gradient-text">Growth Teams</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Hear from sample digital creators, student builders, and agency managers using SocialSync.
          </p>
          <div className="mt-2 text-[11px] text-slate-400 font-medium">
            (Identified as sample feedback from early product testing cohorts)
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-surface-light border border-slate-200 hover:border-brand-200 hover:shadow-soft-lg transition-all flex flex-col justify-between relative"
            >
              <div className="mb-6">
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-brand-200 mb-2" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{item.author}</h4>
                  <p className="text-[11px] text-slate-500 font-medium">{item.role}</p>
                  <span className="text-[10px] text-brand-600 font-semibold">{item.platform}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
