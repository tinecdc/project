import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: 'up' | 'fade' | 'scale';
  delay?: number;
  threshold?: number;
};

const variantClass = {
  up: 'reveal',
  fade: 'reveal-fade',
  scale: 'reveal-scale',
};

export function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  threshold,
}: RevealProps) {
  const { ref, inView } = useReveal<HTMLDivElement>({ threshold });
  return (
    <div
      ref={ref}
      className={`${variantClass[variant]} ${inView ? 'in-view' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
