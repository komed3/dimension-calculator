import { AlertTriangle, Copy } from 'lucide-react';
import type React from 'react';
import type { DimensionVector } from '../types';
import { PhysicalForm } from './PhysicalForm';

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
        <div className="flex flex-col justify-center items-center h-min-37 py-6 bg-gray-50 border-y border-black overflow-hidden">
          { result ? ( <>
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
          </> ) : (
            <div className="flex flex-col items-center gap-4 py-4 text-red-600">
              <AlertTriangle size={ 24 } />
              <span className="uppercase font-mono font-bold text-sm tracking-widest">Invalid Grouping Structure</span>
            </div>
          ) }
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-center uppercase font-medium text-xs text-gray-500 tracking-wider">Physical Form</label>
        <div className="flex justify-center items-center min-h-35 p-4">
          { result ? (
            <div className="scale-110"><PhysicalForm vector={ result } /></div>
          ) : (
            <span className="uppercase font-mono text-sm text-gray-300">Calculation Blocked</span>
          ) }
        </div>
      </div>
    </div>
  );
};
