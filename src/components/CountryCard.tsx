import type { JSX } from 'react';
import type { Country } from '../types/country';
import {
  formatPopulation,
  getCapital,
  getFlagDescription,
} from '../utils/format';

interface CountryCardProps {
  country: Country;
}

export function CountryCard({ country }: CountryCardProps): JSX.Element {
  const capital: string = getCapital(country);
  const flagDescription: string = getFlagDescription(country);
  const formattedPopulation: string = formatPopulation(country.population);
  const code: string = country.codes.alpha_2;
  const detailUrl: string = `#/country/${encodeURIComponent(code)}`;

  return (
    <article className="flex w-full flex-col overflow-hidden rounded-lg bg-white shadow-sm border border-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-slate-800 dark:border-slate-700">
      <div className="aspect-3/2 w-full overflow-hidden bg-neutral-100 border-b border-neutral-100 dark:bg-slate-900 dark:border-slate-700">
        <img
          className="h-full w-full object-cover"
          src={country.flag.url_svg || country.flag.url || '/placeholder.png'}
          alt={flagDescription}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = '/placeholder.png';
          }}
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h2 className="text-base font-bold text-neutral-900 dark:text-white">
          {code ? (
            <a
              href={detailUrl}
              className="hover:text-orange-500 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              {country.names.common}
            </a>
          ) : (
            country.names.common
          )}
        </h2>

        <dl className="mt-3 space-y-1.5 text-xs text-neutral-700 dark:text-slate-200">
          <div className="flex gap-1.5">
            <dt className="font-semibold text-neutral-900 dark:text-white">Población:</dt>
            <dd>{formattedPopulation}</dd>
          </div>

          <div className="flex gap-1.5">
            <dt className="font-semibold text-neutral-900 dark:text-white">Región:</dt>
            <dd>{country.region}</dd>
          </div>

          <div className="flex gap-1.5">
            <dt className="font-semibold text-neutral-900 dark:text-white">Capital:</dt>
            <dd>{capital}</dd>
          </div>
        </dl>

        <div className="mt-4 pt-2">
          {code ? (
            <a
              href={detailUrl}
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-orange-600 active:scale-95"
              aria-label={`Ver detalles de ${country.names.common}`}
            >
              Ver detalles
            </a>
          ) : (
            <p className="text-xs text-neutral-500">Detalle no disponible.</p>
          )}
        </div>
      </div>
    </article>
  );
}