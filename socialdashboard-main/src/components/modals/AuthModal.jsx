import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Lock, Mail, User, Sparkles, CheckCircle2 } from 'lucide-react';

export const AuthModal = () => {
  const { authModalOpen, setAuthModalOpen, authMode, setAuthMode, setIsLoggedIn, setCurrentUser, addToast, setCurrentView } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  if (!authModalOpen) return null;

  const validate = () => {
    const errs = {};
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!password.trim()) {
      errs.password = 'Password is required';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }

    if (authMode === 'signup' && !fullName.trim()) {
      errs.fullName = 'Full name is required';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
      setCurrentUser((prev) => ({
        ...prev,
        name: fullName || (email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)),
        email: email
      }));
      setAuthModalOpen(false);
      addToast(
        authMode === 'login' ? 'Welcome back!' : 'Account Created!',
        `Successfully signed in as ${email}. Demo session active.`,
        'success'
      );
      setCurrentView('dashboard');
    }, 700);
  };

  const handleDemoSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
      setCurrentUser({
        name: 'Alex Morgan',
        email: 'alex@creatorlab.io',
        handle: '@alexcreativestudio',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        plan: 'Creator Pro',
        joined: 'Jan 2026',
        role: 'Verified Creator'
      });
      setAuthModalOpen(false);
      addToast('Demo Creator Activated', 'Logged in as Alex Morgan with 5 sample connected channels.', 'success');
      setCurrentView('dashboard');
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-slide-up">
        {/* Header background glow */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        {/* Close Button */}
        <button
          onClick={() => setAuthModalOpen(false)}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Brand header */}
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center text-white font-bold shadow-md shadow-brand-500/20">
              S
            </div>
            <div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">SocialSync</span>
              <p className="text-xs text-slate-500">All Your Socials. One Smart Dashboard.</p>
            </div>
          </div>

          {/* Mode Switch Tabs */}
          <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
            <button
              type="button"
              onClick={() => {
                setAuthMode('login');
                setErrors({});
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                authMode === 'login'
                  ? 'bg-white text-brand-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setAuthMode('signup');
                setErrors({});
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                authMode === 'signup'
                  ? 'bg-white text-brand-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Fast Demo Bypass Button */}
          <button
            type="button"
            onClick={handleDemoSignIn}
            className="w-full mb-5 flex items-center justify-center gap-2 py-2.5 px-4 bg-brand-50 hover:bg-brand-100 border border-brand-200 text-brand-700 rounded-xl font-medium text-xs transition-colors group"
          >
            <Sparkles className="w-4 h-4 text-brand-600 group-hover:rotate-12 transition-transform" />
            <span>Instant Demo Sign In (1-Click)</span>
          </button>

          <div className="relative flex items-center justify-center mb-5">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider absolute">
              or with email
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {authMode === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Elena Rostova"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900"
                  />
                </div>
                {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="email"
                  placeholder="name@creator.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900"
                />
              </div>
              {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-slate-700">Password</label>
                {authMode === 'login' && (
                  <button
                    type="button"
                    onClick={() => addToast('Password Reset', 'In demo mode, any password works or use 1-click login.', 'info')}
                    className="text-[11px] text-brand-600 hover:text-brand-800"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900"
                />
              </div>
              {errors.password && <p className="text-[11px] text-rose-500 mt-1">{errors.password}</p>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 px-4 gradient-brand text-white font-semibold text-xs rounded-xl shadow-md hover:shadow-brand-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{authMode === 'login' ? 'Sign In to Dashboard' : 'Create Free Demo Account'}</span>
                </>
              )}
            </button>
          </form>

          {/* Transparent demo note */}
          <div className="mt-5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
            <p className="text-[11px] text-slate-500 leading-relaxed">
              <strong className="text-slate-700 font-semibold">Demo Sandbox:</strong> No live credentials are stored. Form validation and demo sessions run safely in-browser.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
