import type { JSX } from 'react';

export interface BadgeProps {
  region: string;
}

export function Badge({ region }: BadgeProps): JSX.Element {
  return (
    <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
      <span className="font-semibold">Región:</span> {region}
    </p>
  );
}