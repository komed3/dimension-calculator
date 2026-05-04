import type React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-end shrink-0 mb-8 pb-6 border-b border-gray-300">
      <div>
        <h1 className="uppercase font-mono font-medium text-2xl tracking-tight text-black">Dimension Calculator</h1>
        <p className="mt-1 uppercase font-mono text-[10px] tracking-widest text-gray-500">[ T, L, M, I, Θ, N, J ] Vector</p>
      </div>
    </header>
  );
};
