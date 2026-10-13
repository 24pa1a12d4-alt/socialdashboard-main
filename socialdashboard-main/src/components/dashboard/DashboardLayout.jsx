import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardHeader } from './DashboardHeader';
import { DashboardOverview } from '../../pages/dashboard/DashboardOverview';
import { MyAccountsView } from '../../pages/dashboard/MyAccountsView';
import { AnalyticsDeepDive } from '../../pages/dashboard/AnalyticsDeepDive';
import { GrowthReportsView } from '../../pages/dashboard/GrowthReportsView';
import { SettingsView } from '../../pages/dashboard/SettingsView';

export const DashboardLayout = () => {
  const { dashboardTab } = useApp();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const renderActiveTab = () => {
    switch (dashboardTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'accounts':
        return <MyAccountsView />;
      case 'analytics':
        return <AnalyticsDeepDive />;
      case 'growth':
        return <GrowthReportsView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9fe] text-slate-800 flex">
      {/* Sidebar (Desktop fixed & Mobile Drawer) */}
      <DashboardSidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        <DashboardHeader setMobileOpen={setMobileSidebarOpen} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {renderActiveTab()}
        </main>
      </div>
    </div>
  );
};
