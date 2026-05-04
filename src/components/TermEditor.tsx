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
        <button id="add-term-btn" onClick={ onAdd } className="
          flex justify-center items-center gap-2 mt-2 py-3 uppercase font-mono text-xs tracking-widest text-gray-500
          border border-dashed border-gray-300 hover:text-black hover:bg-gray-50 hover:border-black transition-all
        "><Plus size={12} /> Append Quantity</button>
      </div>
    </div>
  );
};
