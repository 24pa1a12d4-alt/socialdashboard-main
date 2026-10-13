import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_ACCOUNTS, PERIOD_DATA, RECENT_POSTS } from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Navigation & View State
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'dashboard'
  const [dashboardTab, setDashboardTab] = useState('overview'); // 'overview' | 'accounts' | 'analytics' | 'growth' | 'settings'
  const [dateRange, setDateRange] = useState('30d'); // '7d' | '30d' | '90d'
  const [searchQuery, setSearchQuery] = useState('');

  // Authentication & Demo User
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    name: 'Alex Morgan',
    email: 'alex@socialsync.demo',
    handle: '@alexcreativestudio',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    plan: 'Creator Pro',
    joined: 'Jan 2026',
    role: 'Verified Creator'
  });

  // Accounts state with LocalStorage
  const [accounts, setAccounts] = useState(() => {
    try {
      const saved = localStorage.getItem('socialsync_accounts');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed reading accounts from localStorage', e);
    }
    return INITIAL_ACCOUNTS;
  });

  // Modals state
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [selectedPlatformToConnect, setSelectedPlatformToConnect] = useState('Instagram');
  const [planModalOpen, setPlanModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Notifications / Toasts
  const [toasts, setToasts] = useState([]);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Audience Spike Detected! 🚀',
      message: 'Your TikTok short received +45K views in the last 4 hours.',
      time: '12m ago',
      read: false,
      type: 'success'
    },
    {
      id: 2,
      title: 'Weekly Summary Ready 📊',
      message: 'Your overall engagement rate increased by +0.8% across 4 channels.',
      time: '2h ago',
      read: false,
      type: 'info'
    },
    {
      id: 3,
      title: 'Facebook Page Token Expiring',
      message: 'Simulated token refresh recommended for Facebook Page.',
      time: '1d ago',
      read: true,
      type: 'warning'
    }
  ]);

  // Persist accounts
  useEffect(() => {
    try {
      localStorage.setItem('socialsync_accounts', JSON.stringify(accounts));
    } catch (e) {
      console.error('Failed saving accounts to localStorage', e);
    }
  }, [accounts]);

  // Toast Helper
  const addToast = (title, message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Toggle Account Connection
  const toggleAccountConnection = (accountId) => {
    setAccounts((prev) =>
      prev.map((acc) => {
        if (acc.id === accountId) {
          const nextState = !acc.connected;
          addToast(
            nextState ? `${acc.platform} Connected!` : `${acc.platform} Disconnected`,
            nextState
              ? `Demo sync enabled for ${acc.name}. Metrics are now included in aggregate totals.`
              : `${acc.name} has been paused from dashboard metrics.`,
            nextState ? 'success' : 'info'
          );
          return {
            ...acc,
            connected: nextState,
            apiStatus: nextState ? 'Connected (OAuth Demo)' : 'Disconnected'
          };
        }
        return acc;
      })
    );
  };

  // Connect or Update an Account via Modal
  const saveAccountConnection = (platformName, handle, category = 'Creator') => {
    setAccounts((prev) => {
      const existing = prev.find(
        (a) => a.platform.toLowerCase() === platformName.toLowerCase()
      );
      if (existing) {
        return prev.map((a) =>
          a.id === existing.id
            ? {
                ...a,
                connected: true,
                handle: handle || a.handle,
                category: category || a.category,
                apiStatus: 'Connected (OAuth Demo)',
                lastActivity: 'Just now'
              }
            : a
        );
      } else {
        const newAcc = {
          id: platformName.toLowerCase().replace(/\s+/g, '-'),
          platform: platformName,
          handle: handle || `@${platformName.toLowerCase()}_creator`,
          name: handle || `${platformName} Channel`,
          category: category || 'Social Creator',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          color: '#8b5cf6',
          gradient: 'from-violet-600 to-indigo-600',
          connected: true,
          followers: 45000,
          followersGrowth: '+5.0%',
          engagementRate: '5.8%',
          monthlyViews: 320000,
          postsCount: 42,
          lastActivity: 'Just now',
          apiStatus: 'Connected (OAuth Demo)'
        };
        return [...prev, newAcc];
      }
    });
    addToast(
      'Account Connected Successfully!',
      `${platformName} account (${handle}) linked via simulated OAuth credentials.`,
      'success'
    );
    setConnectModalOpen(false);
  };

  // Reset to default sample data
  const resetDemoData = () => {
    setAccounts(INITIAL_ACCOUNTS);
    localStorage.removeItem('socialsync_accounts');
    addToast('Demo Data Reset', 'All accounts and sample metrics restored to defaults.', 'info');
  };

  // CSV Report Generator
  const exportAnalyticsCSV = () => {
    const activePeriod = PERIOD_DATA[dateRange] || PERIOD_DATA['30d'];
    const kpis = activePeriod.kpis;

    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += 'SocialSync Analytics Report (Demo Export)\n';
    csvContent += `Generated At: ${new Date().toLocaleString()}\n`;
    csvContent += `Selected Period: ${dateRange.toUpperCase()}\n`;
    csvContent += 'Note: Sample demonstration data for preview and planning purposes\n\n';

    csvContent += 'SUMMARY KEY PERFORMANCE INDICATORS\n';
    csvContent += 'Metric,Value,Growth vs Previous Period,Change Details\n';
    csvContent += `Total Followers,${kpis.totalFollowers.value},${kpis.totalFollowers.growth},${kpis.totalFollowers.diff}\n`;
    csvContent += `Total Likes,${kpis.totalLikes.value},${kpis.totalLikes.growth},${kpis.totalLikes.diff}\n`;
    csvContent += `Total Comments,${kpis.totalComments.value},${kpis.totalComments.growth},${kpis.totalComments.diff}\n`;
    csvContent += `Total Views / Impressions,${kpis.totalViews.value},${kpis.totalViews.growth},${kpis.totalViews.diff}\n`;
    csvContent += `Total Posts Published,${kpis.totalPosts.value},${kpis.totalPosts.growth},${kpis.totalPosts.diff}\n`;
    csvContent += `Average Engagement Rate,${kpis.avgEngagementRate.value},${kpis.avgEngagementRate.growth},${kpis.avgEngagementRate.diff}\n\n`;

    csvContent += 'CONNECTED SOCIAL ACCOUNTS STATUS\n';
    csvContent += 'Platform,Account Handle,Followers,Engagement Rate,Connection Status,API Status,Last Activity\n';
    accounts.forEach((acc) => {
      csvContent += `"${acc.platform}","${acc.handle}",${acc.followers},"${acc.engagementRate}","${acc.connected ? 'Connected' : 'Disconnected'}","${acc.apiStatus}","${acc.lastActivity}"\n`;
    });

    csvContent += '\nRECENT TOP POSTS PERFORMANCE\n';
    csvContent += 'Platform,Caption / Title,Date,Likes,Comments,Views,Engagement Rate\n';
    RECENT_POSTS.forEach((post) => {
      const sanitizedCaption = post.caption.replace(/"/g, '""');
      csvContent += `"${post.platform}","${sanitizedCaption}","${post.date}",${post.likes},${post.comments},${post.views},"${post.engagementRate}"\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `SocialSync_Analytics_Report_${dateRange}_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    addToast(
      'Report Downloaded!',
      `SocialSync_Analytics_Report_${dateRange}.csv has been generated and downloaded.`,
      'success'
    );
  };

  const markNotificationRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const clearAllNotifications = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    addToast('Notifications Cleared', 'All notifications marked as read', 'info');
  };

  const value = {
    currentView,
    setCurrentView,
    dashboardTab,
    setDashboardTab,
    dateRange,
    setDateRange,
    searchQuery,
    setSearchQuery,
    isLoggedIn,
    setIsLoggedIn,
    currentUser,
    setCurrentUser,
    accounts,
    toggleAccountConnection,
    saveAccountConnection,
    resetDemoData,
    authModalOpen,
    setAuthModalOpen,
    authMode,
    setAuthMode,
    connectModalOpen,
    setConnectModalOpen,
    selectedPlatformToConnect,
    setSelectedPlatformToConnect,
    planModalOpen,
    setPlanModalOpen,
    selectedPlan,
    setSelectedPlan,
    toasts,
    addToast,
    removeToast,
    notifications,
    markNotificationRead,
    clearAllNotifications,
    exportAnalyticsCSV
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
