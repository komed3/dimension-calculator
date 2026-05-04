import { INITIAL_VECTOR } from '../const';
import type { DimensionVector, Term } from '../types';
import { Operator } from '../types';

export const validateNesting = ( terms: Term[] ) : boolean => {
  let depth = 0;

  for ( const term of terms ) {
    if ( term.hasOpenParen ) depth++;
    if ( term.hasCloseParen ) depth--;
    if ( depth < 0 ) return false;
  }

  return depth === 0;
};

export const calculateVector = ( terms: Term[] ) : DimensionVector | null => {
  if ( ! validateNesting( terms ) ) return null;

  const res = [ ...INITIAL_VECTOR ] as DimensionVector;
  const invertStack: number[] = [ 1 ];

  terms.forEach( ( term, idx ) => {
    if ( term.hasOpenParen ) {
      const prevOp = idx > 0 ? terms[ idx - 1 ].nextOperator : Operator.MULTIPLY;
      const groupInversion = prevOp === Operator.DIVIDE ? -1 : 1;
      invertStack.push( invertStack[ invertStack.length - 1 ] * groupInversion );
    }

    const currentInversion = invertStack[ invertStack.length - 1 ];
    let localSign = 1;

    if ( idx > 0 && ! term.hasOpenParen ) localSign = terms[ idx - 1 ].nextOperator === Operator.DIVIDE ? -1 : 1;

    const totalSign = localSign * currentInversion;
    for ( let j = 0; j < 7; j++ ) res[ j ] += term.vector[ j ] * totalSign;
    if ( term.hasCloseParen && invertStack.length > 1 )invertStack.pop();
  } );

  return res;
};
