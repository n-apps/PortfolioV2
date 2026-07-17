export function EmptyBrandsIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Soft background disc */}
      <circle cx="80" cy="80" r="72" fill="var(--color-surface-field)" />

      {/* Back card (offset, lighter) */}
      <rect
        x="38"
        y="44"
        width="80"
        height="56"
        rx="8"
        fill="var(--color-surface-page)"
        stroke="var(--color-line)"
        strokeWidth="1.5"
      />
      <rect x="50" y="58" width="34" height="6" rx="3" fill="var(--color-line)" />
      <rect x="50" y="72" width="22" height="4" rx="2" fill="var(--color-line)" />

      {/* Front card */}
      <rect
        x="30"
        y="62"
        width="100"
        height="62"
        rx="10"
        fill="var(--color-surface-page)"
        stroke="var(--color-line)"
        strokeWidth="1.5"
      />

      {/* Color swatch */}
      <rect x="42" y="78" width="28" height="28" rx="6" fill="var(--color-demo-accent)" />
      <circle cx="56" cy="92" r="6" fill="var(--color-surface-page)" fillOpacity="0.9" />

      {/* Text lines */}
      <rect x="78" y="80" width="44" height="6" rx="3" fill="var(--color-ink-900)" />
      <rect x="78" y="92" width="34" height="4" rx="2" fill="var(--color-line)" />
      <rect x="78" y="102" width="28" height="4" rx="2" fill="var(--color-line)" />

      {/* Plus badge */}
      <circle
        cx="120"
        cy="50"
        r="13"
        fill="var(--color-demo-accent)"
        stroke="var(--color-surface-page)"
        strokeWidth="3"
      />
      <path
        d="M120 44.5v11M114.5 50h11"
        stroke="var(--color-surface-page)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
