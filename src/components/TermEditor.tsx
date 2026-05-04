import { Divide, Plus, Trash, X } from 'lucide-react';
import type React from 'react';
import type { Term } from '../types';
import { Operator, ParenSide } from '../types';

interface TermEditorProps {
  terms: Term[];
  activeTermId: string | null;
  onSetActive: ( id: string ) => void;
  onAdd: () => void;
  onRemove: ( id: string ) => void;
  onToggleParen: ( id: string, side: ParenSide ) => void;
  onUpdateOperator: ( id: string, op: Operator ) => void;
}

export const TermEditor: React.FC< TermEditorProps > = ( {
  terms, activeTermId, onSetActive, onAdd, onRemove, onToggleParen, onUpdateOperator
} ) => {
  const formatVectorString = ( v: number[] ) => `[ ${ v.join( ', ' ) } ]`;

  return (
    <div className="p-6 space-y-6 border border-black">
      <h2 className="uppercase font-mono font-medium text-sm tracking-wider text-gray-500">Formula Sequence</h2>

      <div className="flex flex-col gap-4">
        { terms.map( ( term, idx ) => (
          <div key={ term.id } className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <button onClick={ () => onToggleParen( term.id, ParenSide.OPEN ) } className={
                `flex justify-center items-center w-8 h-8 font-mono text-xl border transition-colors ${
                  term.hasOpenParen
                    ? 'text-white bg-black border-black'
                    : 'text-gray-400 border-gray-200 hover:text-black hover:border-black'
                }`
              }>(</button>

              <div onClick={ () => onSetActive( term.id ) } className={
                `flex-1 flex items-center gap-4 border p-3 cursor-pointer transition-colors ${
                  activeTermId === term.id
                  ? 'bg-gray-50 border-black'
                  : 'bg-white border-gray-200 hover:border-gray-400'
                }`
              }>
                <div className="flex-1 flex flex-col items-center min-w-0">
                  <span className={
                    `uppercase font-mono text-[9px] tracking-widest ${
                      activeTermId === term.id ? 'font-medium text-black' : 'text-gray-400'
                    }`
                  }>Term { idx + 1 }</span>
                  <div className="mt-0.5 w-full text-center truncate font-mono text-md tracking-tight text-black">
                    { formatVectorString( term.vector ) }
                  </div>
                </div>

                { terms.length > 1 && (
                  <button onClick={ ( e ) => { e.stopPropagation(); onRemove( term.id ); } }
                    className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                  ><Trash size={ 14 } /></button>
                ) }
              </div>

              <button onClick={ () => onToggleParen( term.id, ParenSide.CLOSE ) } className={
                `flex justify-center items-center w-8 h-8 font-mono text-xl border transition-colors ${
                  term.hasCloseParen
                    ? 'text-white bg-black border-black'
                    : 'text-gray-400 border-gray-200 hover:text-black hover:border-black'
                }`
              }>)</button>
            </div>

            { idx < terms.length - 1 && (
              <div className="flex items-center gap-4 px-10 py-2">
                <div className="grow h-px bg-gray-200" />
                <div className="flex shrink-0 border border-black">
                  <button onClick={ () => onUpdateOperator( term.id, Operator.MULTIPLY ) } className={
                    `flex justify-center items-center w-14 h-10 font-mono transition-colors ${
                      term.nextOperator === Operator.MULTIPLY ? 'text-white bg-black' : 'hover:bg-gray-50'
                    }`
                  }><X size={ 18 } /></button>
                  <button onClick={ () => onUpdateOperator( term.id, Operator.DIVIDE ) } className={
                    `flex justify-center items-center w-14 h-10 font-mono transition-colors ${
                      term.nextOperator === Operator.DIVIDE ? 'text-white bg-black' : 'hover:bg-gray-50'
                    }`
                  }><Divide size={ 18 } /></button>
                </div>
                <div className="grow h-px bg-gray-200" />
              </div>
            ) }
          </div>
        ) ) }

        <button id="add-term-btn" onClick={ onAdd } className="
          flex justify-center items-center gap-2 mt-2 py-3 uppercase font-mono text-xs tracking-widest text-gray-500
          border border-dashed border-gray-300 hover:text-black hover:bg-gray-50 hover:border-black transition-all
        "><Plus size={12} /> Append Quantity</button>
      </div>
    </div>
  );
};
