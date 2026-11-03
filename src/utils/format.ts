export function formatPopulation(population: number): string {
  return new Intl.NumberFormat('es-SV').format(population);
}

export function getCapital(country: any): string {
  return country.capitals?.[0]?.name ?? 'Sin capital';
}

export function getFlagDescription(country: any): string {
  return country.flag?.description ?? `Bandera de ${country.names?.common ?? 'país'}`;
}