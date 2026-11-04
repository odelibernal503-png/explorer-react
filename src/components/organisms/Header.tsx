import type { JSX, ReactNode } from 'react';

export interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps): JSX.Element {
  return (
    <header className="border-b border-neutral-200 bg-white px-6 py-4 shadow-xs dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {children}
        <nav className="flex gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          <a href="#" className="hover:text-orange-500">Inicio</a>
          <a href="#" className="hover:text-orange-500">Explorar países</a>
          <a href="#" className="hover:text-orange-500">Acerca de</a>
        </nav>
      </div>
    </header>
  );
}