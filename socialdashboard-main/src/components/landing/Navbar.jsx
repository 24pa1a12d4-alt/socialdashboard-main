import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Menu, X, LayoutDashboard, ArrowRight, Sparkles, LogIn, ExternalLink } from 'lucide-react';

export const Navbar = () => {
  const { setCurrentView, setAuthModalOpen, setAuthMode, isLoggedIn, currentUser } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-nav border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => setCurrentView('landing')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-brand-500/25 group-hover:scale-105 transition-transform">
            S
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-brand-700 transition-colors">
                SocialSync
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-brand-100 text-brand-700 border border-brand-200 uppercase tracking-wider">
                Demo
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block -mt-0.5">
              All Your Socials. One Smart Dashboard.
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-600">
          <button
            onClick={() => scrollTo('hero')}
            className="hover:text-brand-600 transition-colors py-1"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('features')}
            className="hover:text-brand-600 transition-colors py-1"
          >
            Features
          </button>
          <button
            onClick={() => scrollTo('how-it-works')}
            className="hover:text-brand-600 transition-colors py-1"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollTo('audience')}
            className="hover:text-brand-600 transition-colors py-1"
          >
            Who It's For
          </button>
          <button
            onClick={() => scrollTo('pricing')}
            className="hover:text-brand-600 transition-colors py-1"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-brand-600 transition-colors py-1"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-brand-600 transition-colors py-1"
          >
            Contact
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 rounded-xl transition-all"
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Open Dashboard</span>
          </button>

          {isLoggedIn ? (
            <button
              onClick={() => setCurrentView('dashboard')}
              className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-semibold text-slate-800 transition-all"
            >
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="hidden lg:inline">{currentUser.name}</span>
            </button>
          ) : (
            <button
              onClick={() => {
                setAuthMode('login');
                setAuthModalOpen(true);
              }}
              className="flex items-center gap-1 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Login</span>
            </button>
          )}

          <button
            onClick={() => {
              setAuthMode('signup');
              setAuthModalOpen(true);
            }}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white gradient-brand rounded-xl shadow-md shadow-brand-500/20 hover:shadow-brand-500/35 transition-all group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="p-2 text-brand-700 bg-brand-50 rounded-xl border border-brand-200"
            aria-label="Open Dashboard"
          >
            <LayoutDashboard className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-lg px-4 pt-4 pb-6 space-y-3 animate-fade-in shadow-xl">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
            <button
              onClick={() => scrollTo('hero')}
              className="p-2 text-left hover:bg-slate-50 rounded-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('features')}
              className="p-2 text-left hover:bg-slate-50 rounded-lg"
            >
              Features
            </button>
            <button
              onClick={() => scrollTo('how-it-works')}
              className="p-2 text-left hover:bg-slate-50 rounded-lg"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo('audience')}
              className="p-2 text-left hover:bg-slate-50 rounded-lg"
            >
              Who It's For
            </button>
            <button
              onClick={() => scrollTo('pricing')}
              className="p-2 text-left hover:bg-slate-50 rounded-lg"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="p-2 text-left hover:bg-slate-50 rounded-lg"
            >
              Contact
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setCurrentView('dashboard');
              }}
              className="w-full py-2.5 gradient-brand text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Launch Live Dashboard</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setAuthMode('login');
                setAuthModalOpen(true);
              }}
              className="w-full py-2 bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl"
            >
              Sign In to Account
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
