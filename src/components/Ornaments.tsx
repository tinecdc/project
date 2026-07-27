type OrnamentProps = {
  className?: string;
};

export function FloralDivider({ className = '' }: OrnamentProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-blush-400/70 sm:w-24" />
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        className="text-blush-500"
        aria-hidden="true"
      >
        <path
          d="M21 4c2.5 4 2.5 8 0 12-2.5-4-2.5-8 0-12z"
          fill="currentColor"
          opacity="0.8"
        />
        <path
          d="M21 38c2.5-4 2.5-8 0-12-2.5 4-2.5 8 0 12z"
          fill="currentColor"
          opacity="0.8"
        />
        <path
          d="M4 21c4-2.5 8-2.5 12 0-4 2.5-8 2.5-12 0z"
          fill="currentColor"
          opacity="0.8"
        />
        <path
          d="M38 21c-4-2.5-8-2.5-12 0 4 2.5 8 2.5 12 0z"
          fill="currentColor"
          opacity="0.8"
        />
        <circle cx="21" cy="21" r="2.5" fill="currentColor" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-blush-400/70 sm:w-24" />
    </div>
  );
}

export function CornerFlourish({ className = '' }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`text-blush-400/60 ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 10c20 0 40 10 40 30 0-20 10-40 30-40"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M16 16c14 2 26 10 30 22"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="50" cy="40" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="40" cy="50" r="2.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function SmallDivider({ className = '' }: OrnamentProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-12 bg-blush-400/50" />
      <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
        <circle cx="4" cy="4" r="3" className="fill-blush-500" />
      </svg>
      <span className="h-px w-12 bg-blush-400/50" />
    </div>
  );
}
