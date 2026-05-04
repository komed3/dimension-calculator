export type DimensionVector = [ number, number, number, number, number, number, number ];

export enum Operator {
  MULTIPLY = 'MULTIPLY',
  DIVIDE = 'DIVIDE'
}

export enum ParenSide {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE'
}

export interface Term {
  id: string;
  vector: DimensionVector;
  nextOperator: Operator;
  hasOpenParen?: boolean;
  hasCloseParen?: boolean;
}
