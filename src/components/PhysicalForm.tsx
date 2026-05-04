import type React from 'react';
import { DIMENSION_METADATA } from '../const';
import type { DimensionVector } from '../types';

interface PhysicalFormProps {
  vector: DimensionVector;
}

export const PhysicalForm: React.FC< PhysicalFormProps > = ( { vector } ) => {
  const positive: { symbol: string, value: number }[] = [];
  const negative: { symbol: string, value: number }[] = [];

  DIMENSION_METADATA.forEach( ( meta, idx ) => {
    const val = vector[ idx ];

    if ( val === 0 ) return;
    else if ( val > 0 ) positive.push( { symbol: meta.symbol, value: val } );
    else negative.push( { symbol: meta.symbol, value: Math.abs( val ) } );
  } );
};
