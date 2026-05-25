import { RiArrowRightUpLine } from '@remixicon/react';

export function Footer() {
  return (
    <footer className="border-t border-mt-border/40 pt-8 pb-12">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="text-xs leading-relaxed text-mt-text-secondary">
          An experimental side project. Your watchlist is stored only in this
          browser, so nothing leaves your device.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-mt-label text-mt-text-secondary transition-colors duration-150 hover:text-mt-text"
        >
          <span>Back to portfolio</span>
          <RiArrowRightUpLine className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
