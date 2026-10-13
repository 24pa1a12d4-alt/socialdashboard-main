import React from 'react';
import { XCircle, CheckCircle2, Clock, Layers, Shuffle, Sparkles, TrendingUp, Download } from 'lucide-react';

export const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-white border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            Why SocialSync Exists
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Problem: Creator Fragmentation. <br />
            <span className="gradient-text">Our Solution: Unified Clarity.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Content creators, students, and businesses shouldn't have to keep 7 browser tabs open or spend Sunday afternoons copy-pasting numbers into spreadsheets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* The Pain: Before SocialSync */}
          <div className="p-8 rounded-3xl bg-rose-50/50 border border-rose-200/80 flex flex-col justify-between shadow-soft">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Before SocialSync</h3>
                  <p className="text-xs text-rose-600 font-semibold">Fragmented, Clunky & Exhausting</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-rose-200/60 text-rose-700 shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">5+ Studio Logins Every Day</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Instagram Insights, YouTube Studio, TikTok Analytics, LinkedIn Pages... constant password logins and 2FA interruptions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-rose-200/60 text-rose-700 shrink-0 mt-0.5">
                    <Shuffle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Incomparable Metrics</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Each platform calculates reach, impressions, and engagement differently. You never know your true cross-channel performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-rose-200/60 text-rose-700 shrink-0 mt-0.5">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Messy Manual Spreadsheets</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Hours spent manually typing stats into Google Sheets before presenting reports to brands, mentors, or clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-200/60 text-xs font-semibold text-rose-700 flex items-center gap-2">
              <span>Result:</span>
              <span className="font-normal text-slate-600">Decision paralysis, lost momentum, and missed growth opportunities.</span>
            </div>
          </div>

          {/* The Solution: With SocialSync */}
          <div className="p-8 rounded-3xl bg-brand-50/50 border border-brand-200/90 flex flex-col justify-between shadow-soft-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-300/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl gradient-brand text-white flex items-center justify-center font-bold shadow-md shadow-brand-500/20">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">With SocialSync</h3>
                  <p className="text-xs text-brand-700 font-semibold">Unified, Automated & Smart</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-brand-200/60 text-brand-700 shrink-0 mt-0.5">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Single Smart Dashboard</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      View total followers, total likes, total views, and overall reach across all 5 platforms on one crystal-clear screen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-brand-200/60 text-brand-700 shrink-0 mt-0.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Standardized Engagement Math</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Applies consistent formulas across Reels, Shorts, Posts, and Long-Form videos so you can fairly compare platform ROI.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-brand-200/60 text-brand-700 shrink-0 mt-0.5">
                    <Download className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">1-Click CSV & PDF Export</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Download clean spreadsheets ready for sponsor pitch decks, client check-ins, or academic presentations in seconds.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-200/60 text-xs font-semibold text-brand-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-600 shrink-0" />
              <span>Result: Focus 100% on creating high-performing content that resonates.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
