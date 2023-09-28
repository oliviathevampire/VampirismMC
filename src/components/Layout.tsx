import React, { ReactNode } from 'react';
import Navbar from '@components/Navbar'

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
  </div>
);

export default Layout;