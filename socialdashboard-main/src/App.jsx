import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { LandingPage } from './pages/LandingPage';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { AuthModal } from './components/modals/AuthModal';
import { ConnectAccountModal } from './components/modals/ConnectAccountModal';
import { PlanModal } from './components/modals/PlanModal';
import { ToastContainer } from './components/common/ToastContainer';

const MainApp = () => {
  const { currentView } = useApp();

  return (
    <>
      {currentView === 'landing' ? <LandingPage /> : <DashboardLayout />}

      {/* Global Interactive Modals & Notification Toasts */}
      <AuthModal />
      <ConnectAccountModal />
      <PlanModal />
      <ToastContainer />
    </>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}
