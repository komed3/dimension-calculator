export type DimensionVector = [ number, number, number, number, number, number, number ];

export enum Operator {
  MULTIPLY = 'MULTIPLY',
  DIVIDE = 'DIVIDE'
}

export interface Term {
  id: string;
  vector: DimensionVector;
  nextOperator: Operator;
  hasOpenParen?: boolean;
  hasCloseParen?: boolean;
}
