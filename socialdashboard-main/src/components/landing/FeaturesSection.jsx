import React from 'react';
import {
  BarChart3,
  Share2,
  PieChart,
  Calendar,
  FileSpreadsheet,
  Zap,
  Flame,
  Shield,
  ArrowUpRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const FeaturesSection = () => {
  const { setCurrentView } = useApp();

  const features = [
    {
      icon: Share2,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      title: 'Unified Multi-Platform Sync',
      description: 'Aggregate Instagram, YouTube, TikTok, LinkedIn, and Facebook in one screen. No more tab overload or separate logins.'
    },
    {
      icon: BarChart3,
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      title: 'Cross-Network Engagement Normalization',
      description: 'Standardized formulas that equate TikTok views, Instagram saves, and YouTube watch times so you can truly compare platform ROI.'
    },
    {
      icon: PieChart,
      color: 'bg-pink-50 text-pink-600 border-pink-200',
      title: 'Audience & Platform Share',
      description: 'Interactive donut breakdown reveals where your most engaged followers live and how your community expands across channels.'
    },
    {
      icon: Calendar,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      title: 'Dynamic Date Range Drilldowns',
      description: 'Instantly toggle between 7-day sprint checks, 30-day monthly reviews, and 90-day quarterly strategic assessments.'
    },
    {
      icon: Flame,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      title: 'Top-Performing Content Matrix',
      description: 'Spotlight your viral posts, highest-converting reels, and trending discussions ranked by calculated reach multiplier.'
    },
    {
      icon: FileSpreadsheet,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      title: '1-Click CSV Analytics Export',
      description: 'Generate production-ready spreadsheets formatted for brand deal submissions, client reviews, or investor pitches in seconds.'
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            Engineered For Creators & Teams
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need To Grow Your <br className="hidden sm:inline" />
            <span className="gradient-text">Social Media Presence</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Powerful analytics stripped of enterprise bloat. Clean, responsive, and ready to use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-brand-300/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${feature.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-brand-600">Explore in Dashboard</span>
                  <button
                    onClick={() => setCurrentView('dashboard')}
                    className="p-1 rounded-lg text-slate-400 group-hover:text-brand-600 group-hover:bg-brand-50 transition-colors"
                    aria-label="View feature in dashboard"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
