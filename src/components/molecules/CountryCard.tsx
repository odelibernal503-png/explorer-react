import type { JSX } from 'react';
import type { Country } from '../../types/country';
import { formatPopulation, getCapital } from '../../utils/format';
import { Flag } from '../atoms/Flag';
import { Badge } from '../atoms/Badge';

export interface CountryCardProps {
  country: Country;
  onSelect: (code: string) => void;
}

export function CountryCard({ country, onSelect }: CountryCardProps): JSX.Element {
  const flagUrl = country.flag?.url ?? country.flag?.url_svg ?? '';
  const code = country.codes?.alpha_2 ?? country.names.common;

  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl dark:bg-slate-800">
      <Flag src={flagUrl} alt={`Bandera de ${country.names.common}`} />
      
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
          {country.names.common}
        </h3>
        
        <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
          <span className="font-semibold">Población:</span> {formatPopulation(country.population)}
        </p>
        
        <Badge region={country.region} />
        
        <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
          {/* Aquí es importante que use getCapital */}
          <span className="font-semibold">Capital:</span> {getCapital(country)}
        </p>
        
        <div className="mt-5">
          <button 
            type="button"
            onClick={() => onSelect(code)}
            className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600"
          >
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
}