import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Check, ShieldCheck, ArrowRight, RefreshCw, AlertTriangle, Layers } from 'lucide-react';

const PLATFORM_OPTIONS = [
  {
    name: 'Instagram',
    color: '#E1306C',
    gradient: 'from-pink-500 via-rose-500 to-purple-600',
    defaultHandle: '@alexcreativestudio',
    apiType: 'Instagram Graph API v19.0',
    scopes: ['instagram_basic', 'instagram_manage_insights', 'pages_read_engagement']
  },
  {
    name: 'YouTube',
    color: '#FF0000',
    gradient: 'from-red-600 to-rose-600',
    defaultHandle: 'Alex Morgan Tech',
    apiType: 'YouTube Data API v3 & Analytics API',
    scopes: ['youtube.readonly', 'yt-analytics.readonly']
  },
  {
    name: 'TikTok',
    color: '#000000',
    gradient: 'from-slate-900 to-slate-800',
    defaultHandle: '@alexmorgan_dev',
    apiType: 'TikTok for Developers Login Kit & Display API',
    scopes: ['user.info.basic', 'video.list', 'video.insights']
  },
  {
    name: 'LinkedIn',
    color: '#0A66C2',
    gradient: 'from-blue-700 to-sky-600',
    defaultHandle: 'alex-morgan-creator',
    apiType: 'LinkedIn Community Management API',
    scopes: ['r_liteprofile', 'r_organization_social', 'rw_organization_admin']
  },
  {
    name: 'Facebook',
    color: '#1877F2',
    gradient: 'from-blue-600 to-indigo-600',
    defaultHandle: 'Alex Morgan Official',
    apiType: 'Meta Graph API & Pages API',
    scopes: ['pages_show_list', 'pages_read_engagement', 'read_insights']
  }
];

export const ConnectAccountModal = () => {
  const {
    connectModalOpen,
    setConnectModalOpen,
    selectedPlatformToConnect,
    setSelectedPlatformToConnect,
    saveAccountConnection
  } = useApp();

  const [platform, setPlatform] = useState(selectedPlatformToConnect || 'Instagram');
  const [handle, setHandle] = useState('');
  const [category, setCategory] = useState('Tech & Content Creator');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);

  if (!connectModalOpen) return null;

  const currentPlatformInfo = PLATFORM_OPTIONS.find((p) => p.name === platform) || PLATFORM_OPTIONS[0];

  const handleConnectSimulate = (e) => {
    e.preventDefault();
    setIsSimulating(true);
    setSimulationStep(1); // Authorizing OAuth token

    setTimeout(() => {
      setSimulationStep(2); // Fetching follower schemas

      setTimeout(() => {
        setSimulationStep(3); // Normalizing analytics data

        setTimeout(() => {
          setIsSimulating(false);
          setSimulationStep(0);
          saveAccountConnection(
            platform,
            handle.trim() || currentPlatformInfo.defaultHandle,
            category
          );
        }, 600);
      }, 700);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-slide-up">
        {/* Top Header */}
        <div className={`h-2.5 bg-gradient-to-r ${currentPlatformInfo.gradient}`} />

        <button
          onClick={() => {
            if (!isSimulating) setConnectModalOpen(false);
          }}
          disabled={isSimulating}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors disabled:opacity-40"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-7">
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${currentPlatformInfo.gradient} flex items-center justify-center text-white font-bold shadow-md`}
            >
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Connect {platform} Account
              </h3>
              <p className="text-xs text-slate-500">
                Simulated OAuth 2.0 Connection for Demo Preview
              </p>
            </div>
          </div>

          {/* Transparent API Notice Banner */}
          <div className="mb-5 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-950 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <div className="text-[11px] leading-relaxed">
              <strong className="font-semibold text-amber-900">Demo Mode Notice:</strong>{' '}
              Official live API metrics require authorized platform credentials and registered App IDs.
              This interactive flow demonstrates token granting, permission scope mapping, and dashboard synchronization.
            </div>
          </div>

          {/* Platform Selector Tabs */}
          <div className="mb-5">
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Select Social Platform
            </label>
            <div className="grid grid-cols-5 gap-2">
              {PLATFORM_OPTIONS.map((opt) => {
                const isSelected = opt.name === platform;
                return (
                  <button
                    key={opt.name}
                    type="button"
                    disabled={isSimulating}
                    onClick={() => {
                      setPlatform(opt.name);
                      setSelectedPlatformToConnect(opt.name);
                      setHandle('');
                    }}
                    className={`py-2 px-1 text-[11px] font-medium rounded-xl border text-center transition-all ${
                      isSelected
                        ? 'border-brand-500 bg-brand-50 text-brand-700 font-semibold shadow-sm'
                        : 'border-slate-200 bg-slate-50/50 text-slate-600 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {opt.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleConnectSimulate} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Account Handle or Channel Name
              </label>
              <input
                type="text"
                disabled={isSimulating}
                placeholder={currentPlatformInfo.defaultHandle}
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-900"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Leave empty to use sample default: <span className="font-mono text-slate-600">{currentPlatformInfo.defaultHandle}</span>
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Creator Category / Niche
              </label>
              <select
                value={category}
                disabled={isSimulating}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-900"
              >
                <option value="Tech & Content Creator">Tech & Content Creator</option>
                <option value="Student & Personal Brand">Student & Personal Brand</option>
                <option value="Small Business & E-Commerce">Small Business & E-Commerce</option>
                <option value="Agency & Marketing Client">Agency & Marketing Client</option>
                <option value="Lifestyle & Vlog">Lifestyle & Vlog</option>
              </select>
            </div>

            {/* Scope info */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Simulated API Protocol:</span>
                <span className="font-mono font-normal text-slate-500 text-[10px]">{currentPlatformInfo.apiType}</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-1">
                {currentPlatformInfo.scopes.map((scope) => (
                  <span
                    key={scope}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] text-slate-600 font-mono"
                  >
                    <Check className="w-2.5 h-2.5 text-emerald-500" />
                    {scope}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Simulation Progress */}
            {isSimulating && (
              <div className="p-3.5 bg-brand-50 border border-brand-200 rounded-xl space-y-2 animate-fade-in">
                <div className="flex items-center justify-between text-xs font-medium text-brand-900">
                  <span className="flex items-center gap-2">
                    <RefreshCw className="w-3.5 h-3.5 text-brand-600 animate-spin" />
                    {simulationStep === 1 && 'Authorizing simulated OAuth 2.0 grant...'}
                    {simulationStep === 2 && 'Mapping follower counts and post metrics...'}
                    {simulationStep === 3 && 'Syncing analytics data to SocialSync dashboard...'}
                  </span>
                  <span className="text-[10px] font-bold text-brand-700">{simulationStep * 33}%</span>
                </div>
                <div className="w-full bg-brand-200/50 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-brand-600 h-full transition-all duration-500"
                    style={{ width: `${simulationStep * 33.3}%` }}
                  />
                </div>
              </div>
            )}

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                disabled={isSimulating}
                onClick={() => setConnectModalOpen(false)}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSimulating}
                className="flex-1 py-2.5 px-4 gradient-brand text-white font-semibold text-xs rounded-xl shadow-md hover:shadow-brand-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSimulating ? (
                  <span>Connecting...</span>
                ) : (
                  <>
                    <span>Confirm & Sync Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
