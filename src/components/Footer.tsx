import type React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center mt-12 pt-6 font-mono uppercase text-xs text-gray-500 tracking-widest border-t border-gray-300">
      <span>&copy; 2026 komed3 (Paul Köhler)</span>
      <div className="flex items-center gap-4">
        <a
          href="https://en.wikipedia.org/wiki/Dimensional_analysis"
          target="_blank" rel="noopener noreferrer"
          className="hover:underline"
        >Reference Documentation</a>
        <span className="self-stretch border-l border-gray-300"></span>
        <a
          href="https://github.com/komed3/dimension-calculator"
          target="_blank" rel="noopener noreferrer"
          className="hover:underline"
        >GitHub</a>
      </div>
    </footer>
  );
};
