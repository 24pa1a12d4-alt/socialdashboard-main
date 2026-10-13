import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Bell,
  Calendar,
  Download,
  Menu,
  Search,
  Check,
  CheckCircle2,
  Trash2,
  User,
  LogOut,
  ChevronDown,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const DashboardHeader = ({ setMobileOpen }) => {
  const {
    dateRange,
    setDateRange,
    searchQuery,
    setSearchQuery,
    notifications,
    markNotificationRead,
    clearAllNotifications,
    currentUser,
    setCurrentUser,
    setCurrentView,
    exportAnalyticsCSV,
    addToast
  } = useApp();

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="sticky top-0 z-30 h-18 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 flex items-center justify-between gap-4">
      {/* Left section: mobile hamburger & search bar */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Search Input */}
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search channels, metrics, posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-900 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Right section: Date range filter, CSV export, Notifications, Profile avatar */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Date Range Selector (7d, 30d, 90d) */}
        <div className="hidden sm:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/60">
          <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 pl-2 pr-1">
            <Calendar className="w-3.5 h-3.5 text-brand-600" />
          </span>
          {[
            { id: '7d', label: '7 Days' },
            { id: '30d', label: '30 Days' },
            { id: '90d', label: '90 Days' },
          ].map((period) => (
            <button
              key={period.id}
              onClick={() => {
                setDateRange(period.id);
                addToast('Time Filter Applied', `Showing analytics aggregated for the past ${period.label}.`, 'info');
              }}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                dateRange === period.id
                  ? 'bg-white text-brand-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>

        {/* Export CSV Button */}
        <button
          onClick={exportAnalyticsCSV}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs hover:border-brand-300 transition-all group"
          title="Download CSV report of current view"
        >
          <Download className="w-3.5 h-3.5 text-brand-600 group-hover:-translate-y-0.5 transition-transform" />
          <span className="hidden md:inline">Export CSV</span>
        </button>

        {/* Notifications Popover */}
        <div className="relative">
          <button
            onClick={() => {
              setNotificationsOpen(!notificationsOpen);
              setProfileDropdownOpen(false);
            }}
            className="relative p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            aria-label="View notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-600 ring-2 ring-white animate-pulse" />
            )}
          </button>

          {/* Notifications Dropdown Drawer */}
          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50 animate-slide-up">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-slate-900">Notifications</h4>
                  {unreadCount > 0 && (
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-brand-100 text-brand-700">
                      {unreadCount} new
                    </span>
                  )}
                </div>
                <button
                  onClick={clearAllNotifications}
                  className="text-[11px] text-slate-400 hover:text-slate-700 flex items-center gap-1"
                >
                  <Check className="w-3 h-3" />
                  <span>Mark all read</span>
                </button>
              </div>

              <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto my-2">
                {notifications.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => markNotificationRead(item.id)}
                    className={`py-3 px-2 rounded-xl transition-colors cursor-pointer ${
                      item.read ? 'opacity-60 hover:opacity-100' : 'bg-brand-50/40 hover:bg-brand-50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="text-xs font-bold text-slate-800">{item.title}</h5>
                      <span className="text-[10px] text-slate-400 shrink-0">{item.time}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                      {item.message}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center border-t border-slate-100">
                <span className="text-[10px] text-slate-400">
                  Simulated real-time social webhooks
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Profile Avatar Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setProfileDropdownOpen(!profileDropdownOpen);
              setNotificationsOpen(false);
            }}
            className="flex items-center gap-2 p-1 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-8 h-8 rounded-full object-cover border border-slate-200"
            />
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
          </button>

          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-slide-up">
              <div className="p-3 border-b border-slate-100">
                <p className="text-xs font-bold text-slate-900">{currentUser.name}</p>
                <p className="text-[11px] text-slate-500 truncate">{currentUser.email}</p>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-semibold text-emerald-700">{currentUser.role}</span>
                </div>
              </div>

              <div className="p-1 space-y-1 text-xs text-slate-700">
                <button
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    setCurrentView('landing');
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-left font-medium"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  <span>Public Landing Page</span>
                </button>
                <button
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    addToast('Demo Session', 'Logged out of demo session. Re-enter any time.', 'info');
                    setCurrentView('landing');
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-rose-50 text-rose-600 text-left font-medium"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out (Demo)</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
