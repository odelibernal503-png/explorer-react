import type { JSX } from 'react';

interface RegionFilterProps {
  value: string;
  onChange: (region: string) => void;
}

export function RegionFilter({ value, onChange }: RegionFilterProps): JSX.Element {
  return (
    <div className="w-full sm:w-72">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-orange-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      >
        <option value="">Todas las regiones</option>
        <option value="Africa">África</option>
        <option value="Americas">América</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceanía</option>
      </select>
    </div>
  );
}