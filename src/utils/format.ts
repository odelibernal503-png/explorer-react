import type { Country } from '../types/country';

export function formatPopulation(population: number): string {
  return new Intl.NumberFormat('en-US').format(population);
}

export function getCapital(country: Country): string {
  if (country.capital && country.capital.length > 0) {
    return country.capital[0];
  }
  return 'Sin capital';
}


export function getFlagDescription(flag: any): string {
  return flag?.description ?? 'Bandera';
}