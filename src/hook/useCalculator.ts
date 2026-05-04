import { useState, useCallback, useMemo } from 'react';
import { INITIAL_VECTOR } from '../const';
import type { DimensionVector, Term } from '../types';
import { Operator, ParenSide } from '../types';
import { calculateVector } from '../utils/calc';

const generateId = () => Math.random().toString( 36 ).substring( 2, 9 );

export function useCalculator () {
  const [ terms, setTerms ] = useState< Term[] >( [ {
    id: generateId(),
    vector: [ 0, 1, 0, 0, 0, 0, 0 ],
    nextOperator: Operator.DIVIDE,
    hasOpenParen: false,
    hasCloseParen: false
  }, {
    id: generateId(),
    vector: [ 1, 0, 0, 0, 0, 0, 0 ],
    nextOperator: Operator.MULTIPLY,
    hasOpenParen: false,
    hasCloseParen: false
  } ] );

  const [ activeTermId, setActiveTermId ] = useState< string | null >( terms[ 0 ]?.id || null );

  const addTerm = useCallback( () => {
    const newId = generateId();

    setTerms( prev => [ ...prev, {
      id: newId,
      vector: [ ...INITIAL_VECTOR ],
      nextOperator: Operator.MULTIPLY,
      hasOpenParen: false,
      hasCloseParen: false
    } ] );

    setActiveTermId( newId );
  }, [] );

  const removeTerm = useCallback( ( id: string ) => {
    setTerms( prev => {
      if ( prev.length <= 1 ) return prev;

      const nextTerms = prev.filter( t => t.id !== id );
      if ( activeTermId === id ) setActiveTermId( nextTerms[ 0 ]?.id || null );
      return nextTerms;
    } );
  }, [ activeTermId ] );

  const toggleParen = useCallback( ( termId: string, side: ParenSide ) => {
    setTerms( prev => prev.map( t => {
      if ( t.id === termId ) {
        if ( side === ParenSide.OPEN ) return { ...t, hasOpenParen: ! t.hasOpenParen };
        return { ...t, hasCloseParen: ! t.hasCloseParen };
      }

      return t;
    } ) );
  }, [] );

  const updateVectorValue = useCallback( ( termId: string, dimIndex: number, value: number ) => {
    setTerms( prev => prev.map( t => {
      if ( t.id === termId ) {
        const nextVector = [ ...t.vector ] as DimensionVector;
        nextVector[ dimIndex ] = value;
        return { ...t, vector: nextVector };
      }

      return t;
    } ) );
  }, [] );

  const updateOperator = useCallback( ( termId: string, op: Operator ) => {
    setTerms( prev => prev.map( t => {
      if ( t.id === termId ) return { ...t, nextOperator: op };
      return t;
    } ) );
  }, [] );

  const activeTerm = useMemo( () => terms.find( t => t.id === activeTermId ) || terms[ 0 ], [ terms, activeTermId ] );
  const resultVector = useMemo( () => calculateVector( terms ), [ terms ] );

  const copyToClipboard = useCallback( ( text: string ) => navigator.clipboard.writeText( text ), [] );

  return {
    terms, activeTermId, setActiveTermId, activeTerm, resultVector, addTerm, removeTerm,
    toggleParen, updateVectorValue, updateOperator, copyToClipboard
  };
}
