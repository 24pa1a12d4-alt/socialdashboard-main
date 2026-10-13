import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Check, Sparkles, Shield, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PlanModal = () => {
  const { planModalOpen, setPlanModalOpen, selectedPlan, setCurrentUser, addToast, setCurrentView } = useApp();
  const [isProcessing, setIsProcessing] = useState(false);

  if (!planModalOpen || !selectedPlan) return null;

  const handleConfirmPlan = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentUser((prev) => ({
        ...prev,
        plan: selectedPlan.name
      }));
      setPlanModalOpen(false);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Safe fallback
      }

      addToast(
        `Plan Updated to ${selectedPlan.name}!`,
        'Your demo workspace quota and features have been upgraded immediately.',
        'success'
      );
      setCurrentView('dashboard');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-slide-up">
        {/* Header Ribbon */}
        <div className="h-2 gradient-brand" />

        <button
          onClick={() => setPlanModalOpen(false)}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-7">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{selectedPlan.badge || 'Demo Tier'}</span>
          </div>

          <h3 className="text-xl font-bold text-slate-900">{selectedPlan.name}</h3>
          <p className="text-xs text-slate-500 mt-1">{selectedPlan.tagline}</p>

          <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-baseline justify-between">
            <div>
              <span className="text-3xl font-extrabold text-slate-900">
                ${selectedPlan.priceMonthly}
              </span>
              <span className="text-xs text-slate-500 font-medium"> / month (Demo Price)</span>
            </div>
            <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              Instant Activation
            </span>
          </div>

          <div className="space-y-2.5 mb-6">
            <p className="text-xs font-semibold text-slate-700">Included in this plan:</p>
            {selectedPlan.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                <div className="w-4 h-4 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-violet-50/70 border border-violet-100 text-violet-950 text-[11px] flex items-center gap-2 mb-5">
            <Shield className="w-4 h-4 text-violet-600 shrink-0" />
            <span>
              <strong>Demo Environment:</strong> No credit card or billing details required. Click below to simulate instant activation.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPlanModalOpen(false)}
              className="flex-1 py-2.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={isProcessing}
              onClick={handleConfirmPlan}
              className="flex-1 py-2.5 gradient-brand text-white font-semibold text-xs rounded-xl shadow-md hover:shadow-brand-500/25 transition-all flex items-center justify-center gap-1.5 disabled:opacity-60"
            >
              {isProcessing ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  <span>Activate Demo Plan</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
