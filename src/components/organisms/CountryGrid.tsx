import type { JSX } from 'react';
import type { Country } from '../../types/country';
import { CountryCard } from '../molecules/CountryCard';

export interface CountryGridProps {
  countries: Country[];
  onSelect: (code: string) => void;
}

export function CountryGrid({ countries, onSelect }: CountryGridProps): JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {countries.map((country) => {
        // Usamos country.codes (plural) que es lo que acepta la interface
        const uniqueKey = country.codes?.alpha_2 ?? country.names.common;
        
        return (
          <CountryCard 
            key={uniqueKey} 
            country={country} 
            onSelect={onSelect} 
          />
        );
      })}
    </div>
  );
}