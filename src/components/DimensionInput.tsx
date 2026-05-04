import type React from 'react';
import { DIMENSION_METADATA } from '../const';
import type { Term } from '../types';
import { Minus, Plus } from 'lucide-react';

interface DimensionInputProps {
  activeTerm: Term;
  onUpdateValue: ( id: string, index: number, val: number ) => void;
}

export const DimensionInput: React.FC< DimensionInputProps > = ( { activeTerm, onUpdateValue } ) => {
  return (
    <div className="p-6 space-y-6 border border-black">
      <h2 className="uppercase font-mono font-medium text-sm tracking-wider text-gray-500">Component Values</h2>

      <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
        { DIMENSION_METADATA.map( ( dim ) => (
          <div key={ dim.symbol } className="flex flex-col gap-2">
            <label className="text-center font-mono font-medium text-xs text-gray-400">{ dim.symbol }</label>
            <div className="flex justify-center items-center w-full py-3 text-center font-mono text-lg border border-gray-300">
              { activeTerm.vector[ dim.index ] }
            </div>
            <div className="flex gap-1">
              <button
                onClick={ () => onUpdateValue( activeTerm.id, dim.index, activeTerm.vector[ dim.index ] + 1 ) }
                className="flex-1 flex justify-center items-center h-10 border border-gray-300 hover:text-white hover:bg-black transition-colors"
              ><Plus size={ 14 } /></button>
              <button
                onClick={ () => onUpdateValue( activeTerm.id, dim.index, activeTerm.vector[ dim.index ] - 1 ) }
                className="flex-1 flex justify-center items-center h-10 border border-gray-300 hover:text-white hover:bg-black transition-colors"
              ><Minus size={ 14 } /></button>
            </div>
          </div>
        ) ) }
      </div>
    </div>
  );
};
