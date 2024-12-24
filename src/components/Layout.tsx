import React, { ReactNode, useEffect } from 'react';
import AppFooter from './Footer';
import NavbarHeader from './navbar/navbar';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

import './global.scss';
import { AppProvider } from '../Provider/context';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Helmet>
        <title>Get your visa appointment with Easy Slot Booking</title>
      </Helmet>
      <AppProvider>
        <NavbarHeader />
        <main className="main-container">{children}</main>
        {location.pathname !== '/referral/' && <AppFooter />}
      </AppProvider>
    </div>
  );
}
