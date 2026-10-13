import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  PlusCircle,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  RefreshCw,
  ExternalLink,
  SlidersHorizontal,
  Flame,
  Users,
  Eye,
  Heart,
  TrendingUp,
  Share2
} from 'lucide-react';

export const MyAccountsView = () => {
  const {
    accounts,
    toggleAccountConnection,
    setConnectModalOpen,
    setSelectedPlatformToConnect,
    addToast
  } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'connected' | 'disconnected'

  const filteredAccounts = accounts.filter((acc) => {
    const matchesSearch =
      acc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      acc.handle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      acc.platform.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'all'
        ? true
        : statusFilter === 'connected'
        ? acc.connected
        : !acc.connected;

    return matchesSearch && matchesStatus;
  });

  const handleOpenConnect = (platformName) => {
    setSelectedPlatformToConnect(platformName);
    setConnectModalOpen(true);
  };

  const handleSyncNow = (acc) => {
    addToast(
      'Account Resynced!',
      `Refreshed follower metrics and post telemetry for ${acc.name}.`,
      'success'
    );
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Banner and Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Connected Social Media Accounts</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage authorized channels, credentials, and individual synchronization status
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedPlatformToConnect('Instagram');
            setConnectModalOpen(true);
          }}
          className="gradient-brand text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-md hover:shadow-brand-500/25 transition-all flex items-center justify-center gap-2 self-start sm:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Connect New Channel</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Filter accounts by name or @handle..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1 rounded-lg transition-all ${
                statusFilter === 'all'
                  ? 'bg-white text-brand-700 shadow-xs font-bold'
                  : 'text-slate-600'
              }`}
            >
              All ({accounts.length})
            </button>
            <button
              onClick={() => setStatusFilter('connected')}
              className={`px-3 py-1 rounded-lg transition-all ${
                statusFilter === 'connected'
                  ? 'bg-white text-emerald-700 shadow-xs font-bold'
                  : 'text-slate-600'
              }`}
            >
              Connected ({accounts.filter((a) => a.connected).length})
            </button>
            <button
              onClick={() => setStatusFilter('disconnected')}
              className={`px-3 py-1 rounded-lg transition-all ${
                statusFilter === 'disconnected'
                  ? 'bg-white text-rose-700 shadow-xs font-bold'
                  : 'text-slate-600'
              }`}
            >
              Ready to Connect ({accounts.filter((a) => !a.connected).length})
            </button>
          </div>
        </div>
      </div>

      {/* Account Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAccounts.map((acc) => {
          const isConn = acc.connected;

          return (
            <div
              key={acc.id}
              className={`p-6 rounded-3xl bg-white border transition-all duration-300 shadow-soft flex flex-col justify-between ${
                isConn
                  ? 'border-slate-200/80 hover:shadow-soft-lg hover:border-brand-200'
                  : 'border-dashed border-slate-300 bg-slate-50/40 opacity-85'
              }`}
            >
              <div>
                {/* Header: Platform pill & connection status */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[11px] font-bold px-3 py-1 rounded-full text-white shadow-xs"
                    style={{ backgroundColor: acc.color }}
                  >
                    {acc.platform}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {isConn ? (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Connected
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        Not Connected
                      </span>
                    )}
                  </div>
                </div>

                {/* Account info */}
                <div className="flex items-center gap-3 mb-5">
                  <img
                    src={acc.avatar}
                    alt={acc.name}
                    className="w-12 h-12 rounded-2xl object-cover border-2 border-slate-100 shadow-xs"
                  />
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-900 truncate">{acc.name}</h3>
                    <p className="text-xs font-mono text-slate-500 truncate">{acc.handle}</p>
                    <span className="text-[10px] text-brand-600 font-medium">
                      {acc.category}
                    </span>
                  </div>
                </div>

                {/* Metrics 3-Col Box */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-100 mb-5 text-center">
                  <div>
                    <span className="text-[10px] text-slate-400 font-medium block">Followers</span>
                    <span className="text-xs font-bold text-slate-900">
                      {acc.followers.toLocaleString()}
                    </span>
                    <span className="text-[9px] text-emerald-600 font-bold block">
                      {acc.followersGrowth}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-medium block">Engagement</span>
                    <span className="text-xs font-bold text-brand-700">
                      {acc.engagementRate}
                    </span>
                    <span className="text-[9px] text-slate-400 block">Rate</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-medium block">Mo. Views</span>
                    <span className="text-xs font-bold text-slate-900">
                      {(acc.monthlyViews / 1000).toFixed(0)}K
                    </span>
                    <span className="text-[9px] text-slate-400 block">{acc.postsCount} posts</span>
                  </div>
                </div>

                {/* Recent Activity Strip */}
                <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100/80 mb-5">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium mb-1">
                    <span>Recent Post:</span>
                    <span>{acc.recentPost.date}</span>
                  </div>
                  <p className="text-xs text-slate-700 font-medium line-clamp-1">
                    "{acc.recentPost.title}"
                  </p>
                  <div className="mt-1 flex items-center gap-3 text-[10px] text-slate-500">
                    <span>❤️ {acc.recentPost.likes}</span>
                    <span>💬 {acc.recentPost.comments}</span>
                    <span>🔗 {acc.recentPost.shares} shares</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                {isConn ? (
                  <>
                    <button
                      onClick={() => handleSyncNow(acc)}
                      className="flex-1 py-2 px-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center justify-center gap-1"
                      title="Simulate refreshing account statistics"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
                      <span>Sync</span>
                    </button>
                    <button
                      onClick={() => toggleAccountConnection(acc.id)}
                      className="py-2 px-3 text-xs font-semibold rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 transition-colors"
                    >
                      Disconnect
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleOpenConnect(acc.platform)}
                    className="w-full py-2.5 px-3 gradient-brand text-white text-xs font-bold rounded-xl shadow-xs hover:shadow-brand-500/25 transition-all flex items-center justify-center gap-1.5"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Connect {acc.platform}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredAccounts.length === 0 && (
        <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 shadow-soft">
          <p className="text-sm font-semibold text-slate-700">No accounts match your current search.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setStatusFilter('all');
            }}
            className="mt-3 text-xs text-brand-600 font-bold hover:underline"
          >
            Clear filters and reset &rarr;
          </button>
        </div>
      )}
    </div>
  );
};
