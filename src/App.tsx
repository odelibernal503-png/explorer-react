import type { JSX } from 'react';
import { CountryCard } from './components/CountryCard';
import { paisUno, paisDos, paisTres, paisCuatro } from './data/countries-demo';

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-[#fdf2f2] text-neutral-900 dark:bg-slate-950 dark:text-white font-sans">
      <div>
        {/* Barra superior blanca */}
        <header className="bg-white border-b border-neutral-200 dark:bg-slate-900 dark:border-slate-800 px-6 py-4">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <span className="text-base font-bold text-neutral-900 dark:text-white">
              Where in the world?
            </span>
            <nav className="flex gap-6 text-xs font-medium text-neutral-700 dark:text-slate-300">
              <a href="#" className="hover:text-orange-500">Inicio</a>
              <a href="#" className="hover:text-orange-500">Explorar países</a>
              <a href="#" className="hover:text-orange-500">Acerca de</a>
            </nav>
          </div>
        </header>

        {/* Contenido principal */}
        <main className="mx-auto max-w-6xl px-6 py-8">
          <section className="mb-8">
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Explora países del mundo
            </h1>
            <p className="mt-1 text-xs text-neutral-600 dark:text-slate-400">
              Busca un país o filtra por región para consultar su información
            </p>

            {/* Controles de búsqueda y filtro */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="🔍 Escriba el nombre del país..."
                  className="w-full rounded-md border border-neutral-300 bg-white px-4 py-2.5 text-xs text-neutral-800 shadow-xs focus:border-orange-500 focus:outline-none dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  readOnly
                />
              </div>
              <div className="w-full sm:w-56">
                <select
                  aria-label="Filtrar por región"
                  className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2.5 text-xs text-neutral-700 shadow-xs focus:border-orange-500 focus:outline-none dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  defaultValue=""
                >
                  <option value="" disabled>Busque por región</option>
                  <option value="Africa">África</option>
                  <option value="Americas">América</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europa</option>
                  <option value="Oceania">Oceanía</option>
                </select>
              </div>
            </div>
          </section>

          {/* Cuadrícula de países recomendados */}
          <section aria-label="Países recomendados">
            <h2 className="mb-4 text-base font-bold text-neutral-900 dark:text-white">
              Países recomendados
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <CountryCard country={paisUno} />
              <CountryCard country={paisDos} />
              <CountryCard country={paisTres} />
              <CountryCard country={paisCuatro} />
            </div>
          </section>
        </main>
      </div>

      {/* Pie de página blanco */}
      <footer className="bg-white border-t border-neutral-200 dark:bg-slate-900 dark:border-slate-800 px-6 py-4 text-[11px] text-neutral-600 dark:text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <p className="font-bold text-neutral-800 dark:text-white">Explorer App</p>
            <p>© 2026 Explorer App. Data provided by Rest Countries.</p>
          </div>
          <div className="flex gap-3">
            <a href="#" className="hover:underline">Documentation</a>
            <span>·</span>
            <a href="#" className="hover:underline">Source Code</a>
            <span>·</span>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}