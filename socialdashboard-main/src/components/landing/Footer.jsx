import React from 'react';
import { useApp } from '../../context/AppContext';
import { Heart, Sparkles, ExternalLink, ShieldAlert } from 'lucide-react';

export const Footer = () => {
  const { setCurrentView } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center text-white font-bold text-lg shadow-md shadow-brand-500/20">
                S
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">SocialSync</span>
                <span className="text-[10px] ml-2 font-bold px-1.5 py-0.5 rounded-full bg-brand-900/80 text-brand-300 border border-brand-700/60 uppercase">
                  Startup Demo
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              All Your Socials. One Smart Dashboard. Built to empower creators, influencers, students, and businesses with unified analytics intelligence.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#hero"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors text-xs font-bold"
                aria-label="X Twitter"
              >
                𝕏
              </a>
              <a
                href="#hero"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors text-xs font-bold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="#hero"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors text-xs font-bold"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="#hero"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-red-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors text-xs font-bold"
                aria-label="YouTube"
              >
                YT
              </a>
            </div>
          </div>

          {/* Links Column 1: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Key Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className="hover:text-brand-400 transition-colors font-medium text-brand-300"
                >
                  Live Analytics Dashboard &rarr;
                </button>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Supported Channels */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Integrations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span>Instagram Graph API</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>YouTube Data API v3</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <span>TikTok Login Kit</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>LinkedIn Community API</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Facebook Pages API</span>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Legal & Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Support &amp; Trust
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ &amp; Help Center
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <span className="text-slate-500">Privacy Policy (Demo)</span>
              </li>
              <li>
                <span className="text-slate-500">Terms of Service (Demo)</span>
              </li>
              <li>
                <span className="text-slate-500">Security Whitepaper</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Clear Disclaimer Banner */}
        <div className="pt-6 pb-6 border-t border-slate-800 text-[11px] text-slate-500 leading-relaxed">
          <div className="flex items-start gap-2 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
            <ShieldAlert className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
            <div>
              <strong className="text-slate-300 font-semibold">Important Transparency Notice:</strong>{' '}
              SocialSync is an independent startup project for social media analytics visualization. All platform names and logos (Instagram, YouTube, TikTok, LinkedIn, Facebook) belong to their respective trademark holders. In this demonstration environment, metrics and charts utilize simulated data models. Live synchronizations require official registered developer API keys.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>&copy; {new Date().getFullYear()} SocialSync Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with modern React 19, Tailwind CSS &amp; Recharts
          </p>
        </div>
      </div>
    </footer>
  );
};
