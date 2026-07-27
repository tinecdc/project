import { useEffect, useRef, useState } from 'react';

export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number;
  once?: boolean;
}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options?.once !== false) {
            observer.unobserve(entry.target);
          }
        } else if (options?.once === false) {
          setInView(false);
        }
      },
      { threshold: options?.threshold ?? 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.once]);

  return { ref, inView };
}
