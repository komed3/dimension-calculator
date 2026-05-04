import { Dot } from 'lucide-react';
import type React from 'react';
import { DIMENSION_METADATA } from '../const';
import type { DimensionVector } from '../types';

interface PhysicalFormProps {
  vector: DimensionVector;
}

export const PhysicalForm: React.FC< PhysicalFormProps > = ( { vector } ) => {
  const positive: React.ReactNode[] = [], negative: React.ReactNode[] = [];

  const renderSymbol = ( s: string, pow: number ) => (
    <span key={ s } className="inline-flex items-start relative">
      <span className="leading-none text-[1em] min-w-[0.5em] text-center">{ s }</span>
      { pow !== 1 && <span className="text-[0.6em] font-serif ml-0.5 mt-[-0.1em]">{ pow }</span> }
    </span>
  );

  const joinWithDots = ( elements: React.ReactNode[] ) => {
    return elements.reduce( ( prev, curr, i ) =>
      i === 0 ? [ curr ] : [ ...prev, <Dot size={ 28 } key={ `dot-${ i }` } />, curr ],
      [] as any
    );
  };

  DIMENSION_METADATA.forEach( ( meta, idx ) => {
    const val = vector[ idx ];

    if ( val ) ( val > 0 ? positive : negative ).push(
      renderSymbol( meta.symbol, Math.abs( val ) )
    );
  } );

  return (
    <div className="flex flex-col items-center gap-1 font-serif text-3xl">
      <div className="flex justify-center items-center px-5">
        { positive.length ? joinWithDots( positive ) : '1' }
      </div>
      { negative.length ? ( <>
        <div className="self-stretch border-t"></div>
        <div className="flex justify-center items-center px-5">
          { joinWithDots( negative ) }
        </div>
      </> ) : '' }
    </div>
  );
};
