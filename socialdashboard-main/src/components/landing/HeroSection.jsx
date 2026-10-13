import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  ArrowRight,
  TrendingUp,
  Users,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Sparkles,
  ShieldCheck,
  Play
} from 'lucide-react';

export const HeroSection = () => {
  const { setCurrentView } = useApp();

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-brand-200/40 via-violet-100/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline Pill */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-200/80 shadow-soft text-brand-700 text-xs font-semibold mb-6 animate-fade-in hover:border-brand-300 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>All Your Socials. One Smart Dashboard.</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl leading-[1.15]">
            Manage All Your Social Media in{' '}
            <span className="gradient-text">One Place.</span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Stop switching between five different creator studios. SocialSync unites your{' '}
            <span className="font-semibold text-slate-800">Instagram, YouTube, TikTok, LinkedIn,</span> and{' '}
            <span className="font-semibold text-slate-800">Facebook</span> metrics into one unified, actionable view so you can track your growth and maximize engagement effortlessly.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => setCurrentView('dashboard')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl gradient-brand text-white font-bold text-sm shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore Dashboard</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToHowItWorks}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm shadow-soft hover:shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-brand-600 fill-brand-600/20" />
              <span>See How It Works</span>
            </button>
          </div>

          {/* Supported Platforms Strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-semibold text-slate-600">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mr-1">
              Supports:
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-pink-500" /> Instagram
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500" /> YouTube
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-900" /> TikTok
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600" /> LinkedIn
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500" /> Facebook
            </span>
          </div>
        </div>

        {/* Dashboard Preview Section (Card & Graphic) */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Floating Feature Badges */}
          <div className="hidden lg:flex absolute -top-6 -left-6 z-20 items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-soft-lg border border-brand-100 animate-pulse-subtle">
            <div className="w-8 h-8 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-xs">
              IG
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-800">Instagram Sync Active</p>
              <p className="text-[10px] text-emerald-600 font-semibold">+4.8% Followers this week</p>
            </div>
          </div>

          <div className="hidden lg:flex absolute -bottom-6 -right-6 z-20 items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-soft-lg border border-brand-100">
            <div className="w-8 h-8 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-800">Avg Engagement Rate</p>
              <p className="text-xs font-extrabold text-brand-700">6.4% across 4 channels</p>
            </div>
          </div>

          {/* Main Dashboard Mockup Window */}
          <div
            onClick={() => setCurrentView('dashboard')}
            className="cursor-pointer group relative rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300 hover:border-brand-300/80 hover:shadow-glow"
          >
            {/* Window title bar */}
            <div className="h-11 bg-slate-100/90 border-b border-slate-200 px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-[11px] font-medium text-slate-500 font-mono hidden sm:inline">
                  https://app.socialsync.io/dashboard/overview
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-brand-700 group-hover:text-brand-900">
                <span>Click anywhere to launch dashboard</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Dashboard Content Mock */}
            <div className="p-4 sm:p-6 bg-slate-50/60">
              {/* Mini KPI Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-5">
                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                  <span className="text-[10px] text-slate-500 font-medium block">Total Followers</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-sm font-bold text-slate-900">476.3K</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">+8.6%</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                  <span className="text-[10px] text-slate-500 font-medium block">Total Likes</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-sm font-bold text-slate-900">685K</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">+24.1%</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                  <span className="text-[10px] text-slate-500 font-medium block">Total Comments</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-sm font-bold text-slate-900">42.1K</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">+12.5%</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                  <span className="text-[10px] text-slate-500 font-medium block">Total Views</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-sm font-bold text-slate-900">5.78M</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">+31.4%</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                  <span className="text-[10px] text-slate-500 font-medium block">Total Posts</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-sm font-bold text-slate-900">74</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">+15.6%</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-xs">
                  <span className="text-[10px] text-slate-500 font-medium block">Avg Engagement</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-sm font-bold text-brand-700">6.4%</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">+0.7%</span>
                  </div>
                </div>
              </div>

              {/* Chart Mockup Graphic */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">Consolidated Audience Growth</h4>
                      <p className="text-[10px] text-slate-500">Cross-network follower expansion over time</p>
                    </div>
                    <span className="text-[10px] font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md">
                      30 Days View
                    </span>
                  </div>
                  {/* Visual SVG curve */}
                  <div className="h-32 sm:h-44 w-full flex items-end pt-4">
                    <svg viewBox="0 0 500 160" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="heroGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,130 C70,115 130,120 200,90 C270,60 340,75 420,35 C460,15 480,20 500,10 L500,160 L0,160 Z"
                        fill="url(#heroGradient)"
                      />
                      <path
                        d="M0,130 C70,115 130,120 200,90 C270,60 340,75 420,35 C460,15 480,20 500,10"
                        fill="none"
                        stroke="#7c3aed"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      {/* Interactive nodes */}
                      <circle cx="200" cy="90" r="5" fill="#ffffff" stroke="#7c3aed" strokeWidth="3" />
                      <circle cx="420" cy="35" r="5" fill="#ffffff" stroke="#7c3aed" strokeWidth="3" />
                      <circle cx="500" cy="10" r="6" fill="#7c3aed" stroke="#ffffff" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Platform Distribution</h4>
                    <p className="text-[10px] text-slate-500 mb-3">Audience share by channel</p>
                    <div className="space-y-2.5">
                      <div>
                        <div className="flex justify-between text-[11px] font-semibold text-slate-700 mb-1">
                          <span>TikTok</span>
                          <span>45% (215K)</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-slate-900 h-full w-[45%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] font-semibold text-slate-700 mb-1">
                          <span>Instagram</span>
                          <span>30% (142K)</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-pink-500 h-full w-[30%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] font-semibold text-slate-700 mb-1">
                          <span>YouTube</span>
                          <span>18% (86K)</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-red-500 h-full w-[18%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] font-semibold text-slate-700 mb-1">
                          <span>LinkedIn</span>
                          <span>7% (32K)</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-600 h-full w-[7%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                    <span className="text-[11px] text-brand-600 font-semibold inline-flex items-center gap-1 group-hover:underline">
                      Explore detailed deep-dives in Dashboard &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
