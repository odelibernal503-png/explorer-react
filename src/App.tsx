import type { JSX } from 'react';
import { Header } from './components/organisms/Header';
import { CountryGrid } from './components/organisms/CountryGrid';
import { RegionFilter } from './components/organisms/RegionFilter';
import { countriesDemo } from './data/countries-demo';

export function App(): JSX.Element {
  const handleSelectCountry = (code: string) => {
    console.log(`Código seleccionado: ${code}`);
  };

  return (
    <div className="min-h-screen bg-[#fdf2f2] font-sans text-neutral-900 dark:bg-slate-900 dark:text-white">
      <Header>
        <h1 className="text-base font-bold">Where in the world?</h1>
      </Header>

      <main className="py-8">
        <div className="container mx-auto px-4 md:px-8">
          {/* Sección superior de filtros */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold">Explora países del mundo</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Busca un país o filtra por región para consultar su información
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full sm:w-96">
                <input
                  type="text"
                  placeholder="Escriba el nombre del país..."
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 pl-11 text-sm text-neutral-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-orange-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  disabled
                />
                <span className="absolute left-4 top-3.5 text-neutral-400">🔍</span>
              </div>
              
              <RegionFilter />
            </div>
          </section>

          {/* Sección de la cuadrícula de países */}
          <section>
            <h2 className="mb-6 text-xl font-bold">Países recomendados</h2>
            <CountryGrid 
              countries={countriesDemo} 
              onSelect={handleSelectCountry} 
            />
          </section>
        </div>
      </main>
    </div>
  );
}