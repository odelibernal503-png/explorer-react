import type { JSX } from 'react';

export function RegionFilter(): JSX.Element {
  return (
    <div className="w-full sm:w-72">
      <select
        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-orange-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        disabled
        defaultValue=""
      >
        <option value="" disabled>Busque por región</option>
        <option value="Asia">Asia</option>
        <option value="Americas">América</option>
        <option value="Europe">Europa</option>
        <option value="Africa">África</option>
      </select>
    </div>
  );
}