export interface Country {
  names: {
    common: string;
  };
  population: number;
  region: string;
  capital?: string[];
  flag: {
    url: string;
    url_svg?: string;
    description?: string;
  };
  codes?: {
    alpha_2: string;
  };
}