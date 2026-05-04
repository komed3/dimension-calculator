import type React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC< LayoutProps > = ( { children } ) => {
  return (
    <div className="flex flex-col w-full min-h-screen max-w-350 mx-auto p-6 md:p-12 font-sans text-black">
      <Header />
      <main className="grow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        { children }
      </main>
      <Footer />
    </div>
  );
};
