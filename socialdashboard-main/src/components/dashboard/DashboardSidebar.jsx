import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  Users2,
  LineChart,
  TrendingUp,
  Settings,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Zap,
  PlusCircle
} from 'lucide-react';

export const DashboardSidebar = ({ mobileOpen, setMobileOpen }) => {
  const { dashboardTab, setDashboardTab, setCurrentView, currentUser, setConnectModalOpen, accounts } = useApp();

  const connectedCount = accounts.filter((a) => a.connected).length;

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'accounts', label: 'My Accounts', icon: Users2, badge: `${connectedCount}/${accounts.length}` },
    { id: 'analytics', label: 'Analytics Deep-Dive', icon: LineChart },
    { id: 'growth', label: 'Growth Reports', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleNav = (id) => {
    setDashboardTab(id);
    if (setMobileOpen) setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Brand Logo Header */}
          <div className="h-18 px-6 flex items-center justify-between border-b border-slate-100">
            <div
              onClick={() => setCurrentView('landing')}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center text-white font-extrabold text-base shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
                S
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-slate-900">
                  SocialSync
                </span>
                <p className="text-[10px] text-slate-400 font-medium">Dashboard Suite</p>
              </div>
            </div>
          </div>

          {/* User Preview Mini-card */}
          <div className="p-4 mx-3 my-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-xs"
            />
            <div className="min-w-0 flex-1">
              <h4 className="text-xs font-bold text-slate-900 truncate">{currentUser.name}</h4>
              <p className="text-[10px] text-slate-500 truncate">{currentUser.email}</p>
              <span className="inline-block mt-0.5 text-[9px] font-bold px-1.5 py-0.2 rounded bg-brand-100 text-brand-700">
                {currentUser.plan}
              </span>
            </div>
          </div>

          {/* Quick Connect CTA */}
          <div className="px-3 mb-2">
            <button
              onClick={() => setConnectModalOpen(true)}
              className="w-full py-2 px-3 text-xs font-semibold rounded-xl gradient-brand text-white shadow-sm hover:shadow-brand-500/25 transition-all flex items-center justify-center gap-1.5"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Connect Channel</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 block">
              Menu
            </span>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = dashboardTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 shadow-xs border border-brand-200/70 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-brand-600' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-brand-200/70 text-brand-800'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-100 space-y-2">
          {/* Return to website */}
          <button
            onClick={() => setCurrentView('landing')}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Landing Page</span>
          </button>

          {/* Sandbox Info */}
          <div className="p-2.5 rounded-xl bg-violet-50/70 border border-violet-100 text-violet-950 text-[10px] flex items-start gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-brand-900">Demo Environment Active</p>
              <p className="text-slate-500">All analytics metrics are pre-loaded sample data.</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
