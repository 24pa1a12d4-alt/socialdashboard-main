import React from 'react';
import { Link2, LineChart, Rocket, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const HowItWorksSection = () => {
  const { setCurrentView, setConnectModalOpen } = useApp();

  const steps = [
    {
      step: '01',
      title: 'Connect Accounts',
      subtitle: 'Instant & Secure Setup',
      icon: Link2,
      description:
        'Link Instagram, YouTube, TikTok, LinkedIn, and Facebook in seconds. Authorize read-only analytics permissions without ever sharing passwords.',
      badge: 'Step 1'
    },
    {
      step: '02',
      title: 'Track Performance',
      subtitle: 'Consolidated Real-Time View',
      icon: LineChart,
      description:
        'SocialSync automatically synchronizes followers, reach, views, likes, and comments into unified KPI cards and interactive charts.',
      badge: 'Step 2'
    },
    {
      step: '03',
      title: 'Grow Smarter',
      subtitle: 'Actionable Creator Intelligence',
      icon: Rocket,
      description:
        'Discover which video lengths, hashtags, and posting hours produce maximum engagement. Export professional CSV reports for clients and brand deals.',
      badge: 'Step 3'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-brand-50/40 border-t border-brand-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-brand-200 shadow-xs">
            3-Step Workflow
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How SocialSync Works in <span className="gradient-text">Three Simple Steps</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            From setup to actionable insights in under two minutes. No steep learning curve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-brand-300 font-mono">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl gradient-brand text-white flex items-center justify-center mb-5 shadow-md shadow-brand-500/20">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs font-semibold text-brand-600 mb-3">{item.subtitle}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Secure read-only access</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-bold text-sm shadow-md shadow-brand-500/20 hover:shadow-brand-500/35 hover:-translate-y-0.5 transition-all"
          >
            <span>Test the 3-Step Demo in Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
