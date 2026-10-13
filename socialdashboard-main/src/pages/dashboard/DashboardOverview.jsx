import React from 'react';
import { useApp } from '../../context/AppContext';
import { PERIOD_DATA, RECENT_POSTS, TOP_CONTENT_RANKINGS } from '../../data/mockData';
import {
  Users,
  Heart,
  MessageCircle,
  Eye,
  FileText,
  Percent,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  Info,
  Calendar,
  Share2,
  AlertCircle
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

export const DashboardOverview = () => {
  const { dateRange, setDateRange, accounts, setConnectModalOpen, exportAnalyticsCSV } = useApp();

  const activePeriod = PERIOD_DATA[dateRange] || PERIOD_DATA['30d'];
  const kpis = activePeriod.kpis;
  const growthTimeline = activePeriod.growthTimeline;
  const platformEngagement = activePeriod.platformEngagement;
  const audienceShare = activePeriod.audienceShare;

  const kpiCards = [
    {
      title: 'Total Followers',
      value: kpis.totalFollowers.value.toLocaleString(),
      growth: kpis.totalFollowers.growth,
      diff: kpis.totalFollowers.diff,
      icon: Users,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      title: 'Total Likes',
      value: kpis.totalLikes.value.toLocaleString(),
      growth: kpis.totalLikes.growth,
      diff: kpis.totalLikes.diff,
      icon: Heart,
      color: 'bg-pink-50 text-pink-600 border-pink-100',
    },
    {
      title: 'Total Comments',
      value: kpis.totalComments.value.toLocaleString(),
      growth: kpis.totalComments.growth,
      diff: kpis.totalComments.diff,
      icon: MessageCircle,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      title: 'Total Views / Impressions',
      value: kpis.totalViews.value.toLocaleString(),
      growth: kpis.totalViews.growth,
      diff: kpis.totalViews.diff,
      icon: Eye,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      title: 'Total Posts Published',
      value: kpis.totalPosts.value.toLocaleString(),
      growth: kpis.totalPosts.growth,
      diff: kpis.totalPosts.diff,
      icon: FileText,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      title: 'Avg Engagement Rate',
      value: kpis.avgEngagementRate.value,
      growth: kpis.avgEngagementRate.growth,
      diff: kpis.avgEngagementRate.diff,
      icon: Percent,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
  ];

  const connectedCount = accounts.filter((a) => a.connected).length;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Demo Disclaimer Notice */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-50 via-purple-50 to-indigo-50 border border-brand-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-brand-100 text-brand-700 shrink-0">
            <Info className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-brand-950">
              Unified Social Media Dashboard &bull; Live Demo Environment
            </h4>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Currently visualizing aggregated data across {connectedCount} connected channels. Live production sync requires authorized OAuth developer credentials.
            </p>
          </div>
        </div>

        {/* Date Filter Quick Pills for Mobile */}
        <div className="flex sm:hidden items-center bg-white p-1 rounded-xl border border-slate-200 w-full justify-between">
          {['7d', '30d', '90d'].map((p) => (
            <button
              key={p}
              onClick={() => setDateRange(p)}
              className={`flex-1 py-1 text-center text-xs font-semibold rounded-lg ${
                dateRange === p ? 'bg-brand-50 text-brand-700 font-bold' : 'text-slate-600'
              }`}
            >
              {p.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* 6 KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {kpiCards.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-soft hover:shadow-soft-lg hover:border-brand-200 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-slate-500">{kpi.title}</span>
                <div className={`p-2 rounded-xl border ${kpi.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="text-xl font-extrabold text-slate-900 tracking-tight">
                  {kpi.value}
                </div>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" />
                    {kpi.growth}
                  </span>
                  <span className="text-[10px] text-slate-500 truncate" title={kpi.diff}>
                    {kpi.diff}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Primary Analytics Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Growth Curve (Recharts AreaChart) */}
        <div className="lg:col-span-8 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-900">Follower Growth Timeline</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                  {dateRange.toUpperCase()} View
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Consolidated and channel-by-channel follower trajectory
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400 font-medium">Filter:</span>
              <div className="flex bg-slate-100 p-0.5 rounded-lg text-xs font-semibold">
                {['7d', '30d', '90d'].map((p) => (
                  <button
                    key={p}
                    onClick={() => setDateRange(p)}
                    className={`px-2 py-0.5 rounded-md text-[11px] ${
                      dateRange === p ? 'bg-white text-brand-700 font-bold shadow-xs' : 'text-slate-500'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Recharts Component */}
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthTimeline} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="totalColor" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="tiktokColor" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="5%" stopColor="#0f172a" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#0f172a" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} tickFormatter={(val) => `${(val / 1000).toFixed(0)}k`} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                    fontSize: '12px'
                  }}
                  formatter={(value, name) => [`${value.toLocaleString()} followers`, name]}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Area type="monotone" dataKey="Total" stroke="#7c3aed" strokeWidth={3} fillOpacity={1} fill="url(#totalColor)" />
                <Area type="monotone" dataKey="TikTok" stroke="#0f172a" strokeWidth={1.5} fillOpacity={1} fill="url(#tiktokColor)" />
                <Area type="monotone" dataKey="Instagram" stroke="#ec4899" strokeWidth={1.5} fill="none" />
                <Area type="monotone" dataKey="YouTube" stroke="#ef4444" strokeWidth={1.5} fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Platform Share Donut Chart (Recharts PieChart) */}
        <div className="lg:col-span-4 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-slate-900">Audience Distribution</h3>
              <span className="text-[10px] font-semibold text-slate-400">By Channel</span>
            </div>
            <p className="text-xs text-slate-500 mb-4">Percentage of total 476.3K reach</p>

            <div className="h-52 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={audienceShare}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {audienceShare.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      borderRadius: '10px',
                      border: '1px solid #e2e8f0',
                      fontSize: '12px'
                    }}
                    formatter={(val, name) => [`${val}% of total audience`, name]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
            {audienceShare.map((item) => (
              <div key={item.name} className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-slate-800 truncate">{item.name}</p>
                  <p className="text-[10px] text-slate-500">{item.value}% share</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engagement Comparison Bar Chart & Top Performing Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Engagement Rate Across Platforms (Recharts BarChart) */}
        <div className="lg:col-span-6 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Cross-Platform Engagement Rate</h3>
              <p className="text-xs text-slate-500">Benchmark comparison (% interaction per impression)</p>
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              Avg: 6.4%
            </span>
          </div>

          <div className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={platformEngagement} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="platform" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} tickFormatter={(val) => `${val}%`} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    fontSize: '12px'
                  }}
                  formatter={(val, name, props) => [`${val}% engagement (${props.payload.avgLikes} avg likes)`, 'Rate']}
                />
                <Bar dataKey="rate" radius={[8, 8, 0, 0]}>
                  {platformEngagement.map((entry, index) => (
                    <Cell key={`bar-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Performing Content Section */}
        <div className="lg:col-span-6 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Top-Performing Content Leaders</span>
              </h3>
              <span className="text-[10px] font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-md">
                Ranked by ROI
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Your highest virality and audience acquisition assets
            </p>

            <div className="space-y-3">
              {TOP_CONTENT_RANKINGS.map((item) => (
                <div
                  key={item.rank}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3 hover:bg-slate-100/70 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs ${
                        item.rank === 1
                          ? 'bg-amber-100 text-amber-800'
                          : item.rank === 2
                          ? 'bg-slate-200 text-slate-700'
                          : 'bg-orange-100 text-orange-800'
                      }`}
                    >
                      #{item.rank}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                      <p className="text-[10px] text-slate-500">
                        {item.platform} &bull; {item.views} views
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-extrabold text-emerald-600 block">
                      {item.engagement}
                    </span>
                    <span className="text-[10px] font-medium text-slate-400">
                      Reach: {item.reachRatio}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500 text-[11px]">Formula: (Interactions / Reach) &times; 100</span>
            <button
              onClick={exportAnalyticsCSV}
              className="text-brand-600 font-semibold hover:underline text-[11px]"
            >
              Export full rankings &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Recent Content Across Channels</h3>
            <p className="text-xs text-slate-500">
              Live aggregated feed of latest videos, reels, shorts, and articles
            </p>
          </div>
          <button
            onClick={exportAnalyticsCSV}
            className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors w-fit"
          >
            Download CSV Feed
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="pb-3 pl-2">Post Content</th>
                <th className="pb-3 px-3">Platform</th>
                <th className="pb-3 px-3">Date</th>
                <th className="pb-3 px-3">Views</th>
                <th className="pb-3 px-3">Likes</th>
                <th className="pb-3 px-3">Comments</th>
                <th className="pb-3 pr-2 text-right">Engagement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {RECENT_POSTS.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 pl-2 max-w-xs sm:max-w-md">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.thumbnail}
                        alt="thumbnail"
                        className="w-12 h-12 rounded-xl object-cover shrink-0 border border-slate-200"
                      />
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-900 line-clamp-1">{post.caption}</p>
                        <span className="text-[10px] text-brand-600 font-medium">
                          {post.type} format &bull; {post.status}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700">
                      {post.platform}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-slate-500 text-[11px] whitespace-nowrap">
                    {post.date}
                  </td>
                  <td className="py-3 px-3 font-semibold text-slate-800">
                    {post.views.toLocaleString()}
                  </td>
                  <td className="py-3 px-3 font-semibold text-slate-800">
                    {post.likes.toLocaleString()}
                  </td>
                  <td className="py-3 px-3 font-semibold text-slate-800">
                    {post.comments.toLocaleString()}
                  </td>
                  <td className="py-3 pr-2 text-right">
                    <span className="font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      {post.engagementRate}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
