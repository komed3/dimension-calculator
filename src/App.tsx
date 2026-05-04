import { DimensionInput } from './components/DimensionInput';
import { Layout } from './components/Layout';
import { TermEditor } from './components/TermEditor';
import { useCalculator } from './hook/useCalculator';

export default function App () {
  const calc = useCalculator();

  return ( <Layout>
    <section className="flex flex-col gap-8 lg:col-span-8">
      <TermEditor
        terms={ calc.terms } activeTermId={ calc.activeTermId } onSetActive={ calc.setActiveTermId }
        onAdd={ calc.addTerm } onRemove={ calc.removeTerm } onToggleParen={ calc.toggleParen }
        onUpdateOperator={ calc.updateOperator }
      />
      { calc.activeTerm && <DimensionInput activeTerm={ calc.activeTerm } onUpdateValue={ calc.updateVectorValue } /> }
    </section>
    <section className="lg:col-span-4 h-full"></section>
  </Layout> );
};
