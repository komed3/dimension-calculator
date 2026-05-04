import { Copy } from 'lucide-react';
import type React from 'react';
import type { DimensionVector } from '../types';

interface ResultPanelProps {
  result: DimensionVector | null;
  onCopy: ( text: string ) => void;
}

export const ResultPanel: React.FC< ResultPanelProps > = ( { result, onCopy } ) => {
  const formatVectorString = ( v: DimensionVector ) => `[ ${ v.join( ', ' ) } ]`;

  return (
    <div className="lg:sticky lg:top-8 h-fit p-6 space-y-10 border border-black">
      <h2 className="uppercase font-mono font-medium text-sm tracking-wider text-gray-500">Analysis Result</h2>

      <div className="flex flex-col gap-3">
        <label className="text-center uppercase font-medium text-xs text-gray-500 tracking-wider">Resultant Vector</label>
        <div className="flex flex-col justify-center items-center py-6 bg-gray-50/30 border-y border-black overflow-hidden">
          { result ? (
            <>
                <div className="flex justify-center items-center w-full h-12 px-4">
                  <svg viewBox="0 0 1000 60" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                    <text x="500" y="45" textAnchor="middle" className="font-mono font-bold text-6xl fill-current text-black">
                      { formatVectorString( result ) }
                    </text>
                  </svg>
                </div>
                <button
                  onClick={ () => onCopy( formatVectorString( result ) ) } title="Copy Result"
                  className="mt-4 p-2 text-gray-500 hover:text-black transition-colors"
                ><Copy size={ 18 } /></button>
              </>
          ) : '' }
        </div>
      </div>
    </div>
  );
};
