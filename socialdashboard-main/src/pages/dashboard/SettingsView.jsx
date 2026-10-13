import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  User,
  Key,
  Bell,
  RefreshCw,
  ShieldCheck,
  CheckCircle2,
  Trash2,
  Save,
  Sliders,
  Sparkles
} from 'lucide-react';

export const SettingsView = () => {
  const { currentUser, setCurrentUser, resetDemoData, addToast, accounts } = useApp();

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [handle, setHandle] = useState(currentUser.handle || '@alexcreativestudio');
  const [creatorNiche, setCreatorNiche] = useState('Tech Education & Coding');
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setCurrentUser((prev) => ({
      ...prev,
      name,
      email,
      handle
    }));
    addToast('Profile Updated', 'Creator profile preferences saved successfully.', 'success');
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Workspace &amp; Account Settings</h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Manage your creator profile, simulated developer credentials, and demo configurations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Profile Card Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-soft">
          <div className="flex items-center gap-3 mb-6">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-14 h-14 rounded-2xl object-cover border-2 border-slate-100 shadow-xs"
            />
            <div>
              <h3 className="text-sm font-bold text-slate-900">{name}</h3>
              <p className="text-xs text-slate-500">{email}</p>
              <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                {currentUser.plan}
              </span>
            </div>
          </div>

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Creator Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Handle
                </label>
                <input
                  type="text"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Creator Niche
                </label>
                <input
                  type="text"
                  value={creatorNiche}
                  onChange={(e) => setCreatorNiche(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-900"
                />
              </div>
            </div>

            {/* Notification checkboxes */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailAlerts}
                  onChange={(e) => setEmailAlerts(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500/20"
                />
                <span>Email alerts when a post spikes in virality (+3x normal views)</span>
              </label>

              <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={weeklyDigest}
                  onChange={(e) => setWeeklyDigest(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500/20"
                />
                <span>Receive weekly cross-platform summary report via email</span>
              </label>
            </div>

            <button
              type="submit"
              className="py-2.5 px-4 gradient-brand text-white font-semibold text-xs rounded-xl shadow-md hover:shadow-brand-500/25 transition-all flex items-center justify-center gap-2"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Preferences</span>
            </button>
          </form>
        </div>

        {/* Right Column: Platform API Tokens & Reset Box */}
        <div className="lg:col-span-5 space-y-6">
          {/* Simulated API Status */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-brand-50 text-brand-600">
                <Key className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Developer API Integrations</h4>
                <p className="text-[10px] text-slate-500">Official platform OAuth tokens status</p>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              {accounts.map((acc) => (
                <div
                  key={acc.id}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <span className="font-semibold text-slate-800">{acc.platform}</span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      acc.connected
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-slate-200/70 text-slate-600'
                    }`}
                  >
                    {acc.connected ? 'OAuth Token Active (Demo)' : 'Unlinked'}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-slate-400 leading-relaxed">
              In production, backend server endpoints securely exchange authorization codes for long-lived OAuth refresh tokens via environment variables.
            </p>
          </div>

          {/* Reset Demo State Box */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft">
            <div className="flex items-center gap-2 mb-2 text-rose-600">
              <Trash2 className="w-4 h-4" />
              <h4 className="text-xs font-bold text-slate-900">Reset Demo Data</h4>
            </div>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Want to restore the dashboard back to its original sample state? Click below to clear custom handles and reset local storage.
            </p>
            <button
              type="button"
              onClick={resetDemoData}
              className="w-full py-2 px-3 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Restore Default Sample Data</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
