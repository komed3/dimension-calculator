import type React from 'react';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  onReset: () => void;
}

export const Layout: React.FC< LayoutProps > = ( { children, onReset } ) => {
  return (
    <div className="flex flex-col w-full min-h-screen max-w-[1400px] mx-auto p-6 md:p-12 font-sans text-black">
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        { children }
      </main>
      <Footer />
    </div>
  );
};
