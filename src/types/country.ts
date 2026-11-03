export interface Capital {
  name: string;
  lat?: number;
  lng?: number;
}

export interface CountryFlag {
  description?: string;
  url_svg?: string;
  url?: string;
}

export interface CountryNames {
  common: string;
  official?: string;
}

export interface CountryCodes {
  alpha_2: string;
  alpha_3?: string;
}

export interface Country {
  names: CountryNames;
  region: string;
  subregion?: string;
  population: number;
  codes: CountryCodes;
  flag: CountryFlag;
  capitals?: Capital[];
  borders?: string[];
  currencies?: Record<string, unknown>;
}