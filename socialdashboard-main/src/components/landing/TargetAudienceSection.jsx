import React from 'react';
import { Palette, GraduationCap, Star, Store, Check, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const TargetAudienceSection = () => {
  const { setCurrentView } = useApp();

  const audiences = [
    {
      title: 'Content Creators',
      tagline: 'YouTubers, Podcasters & Streamers',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      description: 'Find out whether long-form videos or 30-second shorts generate higher audience retention and subscriber conversions.',
      bullets: [
        'Compare YouTube watch-time vs TikTok reach',
        'Identify top viral thumbnails & hooks',
        'Export media kits for sponsorship deals'
      ]
    },
    {
      title: 'Students & Learners',
      tagline: 'Aspiring Devs & Personal Brands',
      icon: GraduationCap,
      color: 'from-blue-600 to-indigo-600',
      description: 'Build your personal developer brand, showcase portfolio progress, and track your growing LinkedIn and Twitter/X network for free.',
      bullets: [
        'Free tier forever for personal learning',
        'Track LinkedIn thought-leadership impressions',
        'Learn data-driven marketing with zero budget'
      ]
    },
    {
      title: 'Social Influencers',
      tagline: 'Multi-Channel Brand Ambassadors',
      icon: Star,
      color: 'from-purple-600 to-brand-500',
      description: 'Deliver transparent, verifiable engagement decks to brands. Show aggregated reach across Instagram Reels, TikTok, and YouTube.',
      bullets: [
        'Instant CSV reports for brand contracts',
        'Normalized engagement metrics proof',
        'Audience age & geography breakdown'
      ]
    },
    {
      title: 'Small Businesses & Startups',
      tagline: 'Founders, E-Commerce & Local Brands',
      icon: Store,
      color: 'from-emerald-600 to-teal-600',
      description: 'Eliminate expensive marketing software subscriptions. Monitor your social brand presence across all customer channels easily.',
      bullets: [
        'Centralize Facebook, Instagram & LinkedIn',
        'No monthly per-seat enterprise surcharges',
        'Share clean PDF & CSV updates with team'
      ]
    }
  ];

  return (
    <section id="audience" className="py-20 md:py-28 bg-white border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            Tailored For You
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built For Anyone Building An <br className="hidden sm:inline" />
            <span className="gradient-text">Audience Online</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Whether you are a solo student coding in public or a small business scaling multi-channel campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-3xl bg-surface-light border border-slate-200 hover:border-brand-300 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-5 shadow-md`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-brand-600 font-semibold mb-3">{item.tagline}</p>
                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-200/70">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <div className="p-0.5 rounded-full bg-brand-100 text-brand-700 shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4">
                  <button
                    onClick={() => setCurrentView('dashboard')}
                    className="w-full py-2 px-3 text-xs font-semibold text-slate-700 bg-white group-hover:bg-brand-50 group-hover:text-brand-700 border border-slate-200 group-hover:border-brand-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Demo Analytics</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
