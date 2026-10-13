import React from 'react';
import { useApp } from '../../context/AppContext';
import { PERIOD_DATA, RECENT_POSTS } from '../../data/mockData';
import {
  BarChart2,
  TrendingUp,
  Layers,
  Sparkles,
  PieChart as PieIcon,
  Video,
  FileImage,
  MessageSquare,
  Clock,
  Download
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

export const AnalyticsDeepDive = () => {
  const { dateRange, exportAnalyticsCSV } = useApp();
  const activePeriod = PERIOD_DATA[dateRange] || PERIOD_DATA['30d'];

  const formatPerformance = [
    { format: 'Shorts & Reels', viewsAvg: '210,000', saveRate: '6.4%', engagement: '10.2%', score: '94/100', color: '#ec4899' },
    { format: 'Long-Form Video', viewsAvg: '120,000', saveRate: '8.8%', engagement: '8.7%', score: '91/100', color: '#ef4444' },
    { format: 'Carousel Decks', viewsAvg: '64,000', saveRate: '12.1%', engagement: '7.4%', score: '88/100', color: '#8b5cf6' },
    { format: 'Text & Polls', viewsAvg: '28,000', saveRate: '2.5%', engagement: '4.8%', score: '72/100', color: '#3b82f6' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Analytics Deep-Dive & Format Benchmarks</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Cross-format content velocity, save rates, and platform ROI breakdown ({dateRange.toUpperCase()})
          </p>
        </div>

        <button
          onClick={exportAnalyticsCSV}
          className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Download className="w-3.5 h-3.5 text-brand-600" />
          <span>Export Analytics Matrix</span>
        </button>
      </div>

      {/* Format Comparison Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {formatPerformance.map((item, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-800">{item.format}</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700">
                Score: {item.score}
              </span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Avg. Views:</span>
                <span className="font-bold text-slate-900">{item.viewsAvg}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Engagement:</span>
                <span className="font-bold text-emerald-600">{item.engagement}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Save Rate:</span>
                <span className="font-bold text-slate-900">{item.saveRate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Platform Breakdown Matrix Table */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft">
        <h3 className="text-sm font-bold text-slate-900 mb-1">Standardized Platform Metrics Table</h3>
        <p className="text-xs text-slate-500 mb-5">
          Calculated using SocialSync normalized engagement coefficient
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[11px] tracking-wider">
                <th className="pb-3 pl-2">Platform</th>
                <th className="pb-3 px-3">Followers</th>
                <th className="pb-3 px-3">Avg Views</th>
                <th className="pb-3 px-3">Likes / Post</th>
                <th className="pb-3 px-3">Comments / Post</th>
                <th className="pb-3 px-3">Standard Engagement</th>
                <th className="pb-3 pr-2 text-right">Virality Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 pl-2 font-bold text-slate-900">TikTok</td>
                <td className="py-3 px-3">215,000</td>
                <td className="py-3 px-3">340,000</td>
                <td className="py-3 px-3">34.2K</td>
                <td className="py-3 px-3">1,120</td>
                <td className="py-3 px-3 text-emerald-600 font-bold">9.4%</td>
                <td className="py-3 pr-2 text-right font-extrabold text-brand-600">96 / 100</td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 pl-2 font-bold text-slate-900">YouTube</td>
                <td className="py-3 px-3">86,400</td>
                <td className="py-3 px-3">145,000</td>
                <td className="py-3 px-3">12.8K</td>
                <td className="py-3 px-3">940</td>
                <td className="py-3 px-3 text-emerald-600 font-bold">7.8%</td>
                <td className="py-3 pr-2 text-right font-extrabold text-brand-600">92 / 100</td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 pl-2 font-bold text-slate-900">Instagram</td>
                <td className="py-3 px-3">142,800</td>
                <td className="py-3 px-3">94,500</td>
                <td className="py-3 px-3">8.4K</td>
                <td className="py-3 px-3">412</td>
                <td className="py-3 px-3 text-emerald-600 font-bold">5.2%</td>
                <td className="py-3 pr-2 text-right font-extrabold text-brand-600">85 / 100</td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 pl-2 font-bold text-slate-900">LinkedIn</td>
                <td className="py-3 px-3">32,100</td>
                <td className="py-3 px-3">32,000</td>
                <td className="py-3 px-3">1.8K</td>
                <td className="py-3 px-3">230</td>
                <td className="py-3 px-3 text-emerald-600 font-bold">4.6%</td>
                <td className="py-3 pr-2 text-right font-extrabold text-brand-600">81 / 100</td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 pl-2 font-bold text-slate-900">Facebook</td>
                <td className="py-3 px-3">18,500</td>
                <td className="py-3 px-3">12,000</td>
                <td className="py-3 px-3">420</td>
                <td className="py-3 px-3">58</td>
                <td className="py-3 px-3 text-emerald-600 font-bold">2.8%</td>
                <td className="py-3 pr-2 text-right font-extrabold text-brand-600">68 / 100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
