import { useState, type JSX } from 'react';
import { Header } from './components/organisms/Header';
import { CountryGrid } from './components/organisms/CountryGrid';
import { SearchBar } from './components/organisms/SearchBar';
import { RegionFilter } from './components/organisms/RegionFilter';
import { countriesDemo } from './data/countries-demo';
import { filterCountries } from './utils/filter';
import type { Country } from './types/country';

export function App(): JSX.Element {
  const [query, setQuery] = useState<string>('');
  const [region, setRegion] = useState<string>('');

  const filteredCountries: Country[] = filterCountries(
    countriesDemo,
    query,
    region,
  );

  const handleSelectCountry = (code: string) => {
    console.log(`Código seleccionado: ${code}`);
  };

  const handleClearFilters = () => {
    setQuery('');
    setRegion('');
  };

  return (
    <div className="min-h-screen bg-[#fdf2f2] font-sans text-neutral-900 dark:bg-slate-900 dark:text-white">
      <Header>
        <h1 className="text-base font-bold">Where in the world?</h1>
      </Header>

      <main className="py-8">
        <div className="container mx-auto px-4 md:px-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold">Explora países del mundo</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Busca un país o filtra por región para consultar su información
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <SearchBar value={query} onChange={setQuery} />
              <RegionFilter value={region} onChange={setRegion} />
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
              <span>Resultados encontrados: {filteredCountries.length} país(es)</span>
              {(query !== '' || region !== '') && (
                <button
                  onClick={handleClearFilters}
                  className="font-medium text-orange-600 hover:underline dark:text-orange-400"
                >
                  Limpiar filtros
                </button>
              )}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-xl font-bold">Países recomendados</h2>
            {filteredCountries.length > 0 ? (
              <CountryGrid 
                countries={filteredCountries} 
                onSelect={handleSelectCountry} 
              />
            ) : (
              <div className="rounded-xl border border-dashed border-neutral-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-800">
                <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
                  Mensaje sin coincidencias
                </p>
                <p className="mt-1 text-sm text-neutral-500">
                  La muestra no contiene países que cumplan con los criterios de búsqueda seleccionados.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-600"
                >
                  Restablecer filtros
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}