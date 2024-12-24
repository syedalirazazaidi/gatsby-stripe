import React, { ReactNode } from 'react';
import AppFooter from './Footer';
import Navbar from './Header/navbar';
import './global.css';
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main >{children}</main>
      <AppFooter />
    </div>
  );
}
