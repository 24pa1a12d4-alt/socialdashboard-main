import React, { useState } from 'react';
import { PRICING_PLANS } from '../../data/mockData';
import { useApp } from '../../context/AppContext';
import { Check, Sparkles, Shield, Zap } from 'lucide-react';

export const PricingSection = () => {
  const { setPlanModalOpen, setSelectedPlan } = useApp();
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'

  const handleSelectPlan = (plan) => {
    setSelectedPlan({
      ...plan,
      billingCycle
    });
    setPlanModalOpen(true);
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-surface-light border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            Demo Plans & Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent, Predictable <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Try every feature risk-free. All prices below are sample demo tiers for testing and evaluation.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1 bg-slate-200/60 rounded-2xl border border-slate-200">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-brand-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                billingCycle === 'yearly'
                  ? 'bg-white text-brand-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
            const isPro = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPro
                    ? 'bg-white border-2 border-brand-500 shadow-soft-lg scale-105 z-10'
                    : 'bg-white border border-slate-200/90 shadow-soft hover:shadow-soft-lg'
                }`}
              >
                {/* Popular Pill */}
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-brand text-white text-[11px] font-bold shadow-md tracking-wider uppercase">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {plan.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 font-medium">Demo Tier</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[36px] leading-relaxed">
                    {plan.tagline}
                  </p>

                  <div className="my-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-slate-900">
                        ${price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        / month {billingCycle === 'yearly' && price > 0 ? '(billed annually)' : ''}
                      </span>
                    </div>
                    <p className="text-[11px] text-brand-600 font-semibold mt-1">
                      {plan.demoNote}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                      Features Included:
                    </p>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isPro ? 'bg-brand-100 text-brand-700' : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 ${
                      isPro
                        ? 'gradient-brand text-white hover:shadow-brand-500/25 hover:shadow-md'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>{plan.cta}</span>
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    Simulated Demo Subscription &bull; No credit card
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
