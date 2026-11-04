import type { JSX } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (query: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps): JSX.Element {
  return (
    <div className="relative w-full sm:w-96">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Escriba el nombre del país..."
        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 pl-11 text-sm text-neutral-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-orange-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />
      <span className="absolute left-4 top-3.5 text-neutral-400">🔍</span>
    </div>
  );
}