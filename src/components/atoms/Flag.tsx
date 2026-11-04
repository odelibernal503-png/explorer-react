import type { JSX } from 'react';

export interface FlagProps {
  src: string;
  alt: string;
}

export function Flag({ src, alt }: FlagProps): JSX.Element {
  return (
    <div className="aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-slate-700">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  );
}