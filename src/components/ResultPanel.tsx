import type React from 'react';
import type { DimensionVector } from '../types';

interface ResultPanelProps {
  result: DimensionVector | null;
  onCopy: ( text: string ) => void;
}

export const ResultPanel: React.FC< ResultPanelProps > = ( { result, onCopy } ) => {
  const formatVectorString = ( v: DimensionVector ) => `[ ${ v.join( ', ' ) } ]`;
};
