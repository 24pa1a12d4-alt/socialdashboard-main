import React from 'react';
import { useApp } from '../../context/AppContext';
import { AUDIENCE_DEMOGRAPHICS } from '../../data/mockData';
import {
  TrendingUp,
  MapPin,
  Clock,
  Download,
  Users,
  Compass,
  Sparkles,
  Calendar
} from 'lucide-react';

export const GrowthReportsView = () => {
  const { dateRange, exportAnalyticsCSV } = useApp();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Audience Demographics & Growth Reports</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Geographic penetration, age distribution, and algorithmic posting recommendations
          </p>
        </div>

        <button
          onClick={exportAnalyticsCSV}
          className="gradient-brand text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-md hover:shadow-brand-500/25 transition-all flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download Growth Report CSV</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Geographic Distribution */}
        <div className="lg:col-span-6 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Top Audience Geographic Regions</h3>
              <p className="text-[11px] text-slate-500">Cross-platform audience country origins</p>
            </div>
          </div>

          <div className="space-y-3.5 mt-5">
            {AUDIENCE_DEMOGRAPHICS.topLocations.map((loc, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-2">
                    <span className="text-base">{loc.flag}</span>
                    <span>{loc.country}</span>
                  </span>
                  <span className="text-slate-900 font-bold">{loc.percentage}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-brand-500 h-full rounded-full"
                    style={{ width: `${loc.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Age Groups & Demographics */}
        <div className="lg:col-span-6 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-xl bg-purple-50 text-purple-600">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Audience Age Segments</h3>
                <p className="text-[11px] text-slate-500">Highest demographic engagement groups</p>
              </div>
            </div>

            <div className="space-y-3 mt-5">
              {AUDIENCE_DEMOGRAPHICS.ageGroups.map((group, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-800">{group.label}</span>
                  <span className="text-xs font-black text-brand-700 bg-brand-50 px-2 py-0.5 rounded-md border border-brand-200">
                    {group.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 p-3 rounded-xl bg-brand-50/60 border border-brand-100 text-brand-900 text-[11px]">
            <strong>Strategic Creator Insight:</strong> 84% of your total audience falls between 18-34 years old. High conversion potential for developer tooling, education, and career courses.
          </div>
        </div>
      </div>

      {/* Best Time to Post Recommendations */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft">
        <div className="flex items-center gap-2 mb-5">
          <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Recommended Publishing Windows (Peak Engagement)</h3>
            <p className="text-xs text-slate-500">Calculated from historic interaction velocities</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {AUDIENCE_DEMOGRAPHICS.peakHours.map((slot, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">{slot.day}</span>
                <span className="text-[10px] font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full">
                  Recommended
                </span>
              </div>
              <p className="text-xs font-mono text-brand-600 font-bold">{slot.time}</p>
              <p className="text-[11px] text-slate-500">{slot.score}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
