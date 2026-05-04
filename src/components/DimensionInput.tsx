import type React from 'react';
import type { Term } from '../types';

interface DimensionInputProps {
  activeTerm: Term;
  onUpdateValue: ( id: string, index: number, val: number ) => void;
}

export const DimensionInput: React.FC< DimensionInputProps > = ( { activeTerm, onUpdateValue } ) => {};
