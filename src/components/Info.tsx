import type React from 'react';
import { InfoIcon } from 'lucide-react';

export const Info : React.FC = () => {
  return (
    <div className="flex flex-row gap-3 p-4 text-gray-500 bg-gray-50 border border-dashed border-gray-300">
      <div><InfoIcon size={ 18 } /></div>
      <p className="text-xs">
        The dimension vector represents the SI base dimensions: length (L), mass (M), time (T), electric current (I),
        thermodynamic temperature (Θ), amount of substance (N), and luminous intensity (J).
      </p>
    </div>
  );
};
