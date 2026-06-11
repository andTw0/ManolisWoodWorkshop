import type { ReactNode } from 'react';

type BrushButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function BrushButton({ href, children, className = '', external = false }: BrushButtonProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`group relative inline-flex min-h-12 items-center justify-center px-8 py-3 font-display uppercase tracking-[0.08em] text-ink transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orangeBurnt ${className}`}
    >
      <span className="absolute inset-0 -z-10 bg-orangeBurnt transition-transform group-hover:scale-x-105" />
      <span className="relative">{children}</span>
      <span aria-hidden="true" className="ml-4 transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}
