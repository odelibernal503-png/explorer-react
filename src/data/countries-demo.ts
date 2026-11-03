import type { Country } from '../types/country';

export const paisUno: Country = {
  names: {
    common: 'Corea del sur',
    official: 'República de Corea',
  },
  population: 51600000,
  region: 'Asia',
  codes: {
    alpha_2: 'KR',
    alpha_3: 'KOR',
  },
  flag: {
    url: '/kr.png',
    url_svg: '/kr.png',
    description: 'Bandera de Corea del Sur',
  },
  capitals: [{ name: 'Seúl' }],
};

export const paisDos: Country = {
  names: {
    common: 'Japón',
    official: 'Japón',
  },
  population: 123700000,
  region: 'Asia',
  codes: {
    alpha_2: 'JP',
    alpha_3: 'JPN',
  },
  flag: {
    url: '/jp.png',
    url_svg: '/jp.png',
    description: 'Bandera de Japón',
  },
  capitals: [{ name: 'Tokio' }],
};

export const paisTres: Country = {
  names: {
    common: 'España',
    official: 'Reino de España',
  },
  population: 48800000,
  region: 'Europa',
  codes: {
    alpha_2: 'ES',
    alpha_3: 'ESP',
  },
  flag: {
    url: '/es.png',
    url_svg: '/es.png',
    description: 'Bandera de España',
  },
  capitals: [{ name: 'Madrid' }],
};

export const paisCuatro: Country = {
  names: {
    common: 'El salvador',
    official: 'República de El Salvador',
  },
  population: 6350000,
  region: 'Centroamérica',
  codes: {
    alpha_2: 'SV',
    alpha_3: 'SLV',
  },
  flag: {
    url: '/sv.png',
    url_svg: '/sv.png',
    description: 'Bandera de El Salvador',
  },
  capitals: [{ name: 'San Salvador' }],
};