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
    </div>
  );
};
