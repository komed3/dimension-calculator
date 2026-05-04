import type { DimensionVector } from './types';

export const INITIAL_VECTOR: DimensionVector = [ 0, 0, 0, 0, 0, 0, 0 ];

export const DIMENSION_METADATA = [
  { name: 'Time', symbol: 'T', index: 0 },
  { name: 'Length', symbol: 'L', index: 1 },
  { name: 'Mass', symbol: 'M', index: 2 },
  { name: 'Current', symbol: 'I', index: 3 },
  { name: 'Temperature', symbol: 'Θ', index: 4 },
  { name: 'Amount', symbol: 'N', index: 5 },
  { name: 'Intensity', symbol: 'J', index: 6 },
] as const;
