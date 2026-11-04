import type { Country } from '../types/country';

export const paisUno: Country = {
  names: { common: 'El Salvador' },
  population: 6314000,
  region: 'Americas',
  capital: ['San Salvador'],
  flag: { url: 'https://flagcdn.com/w320/sv.png', url_svg: 'https://flagcdn.com/sv.svg' },
  codes: { alpha_2: 'SV' }
};

export const paisDos: Country = {
  names: { common: 'Costa Rica' },
  population: 5154000,
  region: 'Americas',
  capital: ['San José'],
  flag: { url: 'https://flagcdn.com/w320/cr.png', url_svg: 'https://flagcdn.com/cr.svg' },
  codes: { alpha_2: 'CR' }
};

export const paisTres: Country = {
  names: { common: 'Japón' },
  population: 125500000,
  region: 'Asia',
  capital: ['Tokio'],
  flag: { url: 'https://flagcdn.com/w320/jp.png', url_svg: 'https://flagcdn.com/jp.svg' },
  codes: { alpha_2: 'JP' }
};

//el cuarto país temporal
export const paisCuatro: Country = {
  names: { common: 'Brasil' },
  population: 212559409,
  region: 'Americas',
  capital: ['Brasilia'],
  flag: { url: 'https://flagcdn.com/w320/br.png', url_svg: 'https://flagcdn.com/br.svg' },
  codes: { alpha_2: 'BR' }
};


export const countriesDemo: Country[] = [paisUno, paisDos, paisTres, paisCuatro];