import { Layout } from './components/Layout';
import { useCalculator } from './hook/useCalculator';

export default function App () {
  const calc = useCalculator();

  return ( <Layout>
    <section className="flex flex-col gap-8 lg:col-span-8"></section>
    <section className="lg:col-span-4 h-full"></section>
  </Layout> );
};
