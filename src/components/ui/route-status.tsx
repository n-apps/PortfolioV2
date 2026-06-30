import { useEffect, useState } from 'react';
import { fluidBase, fluidSmall } from '@/lib/typography';

type RouteLoadingProps = {
  fullPage?: boolean;
};

export function RouteLoading({ fullPage = false }: RouteLoadingProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsVisible(true), 180);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`flex items-center justify-center ${fullPage ? 'min-h-screen' : 'min-h-48'}`}
      aria-live='polite'
      aria-busy='true'>
      {isVisible && (
        <p
          role='status'
          className='flex items-center gap-2 text-muted-foreground'
          style={{ fontSize: fluidSmall, lineHeight: 1.4 }}>
          <span
            aria-hidden='true'
            className='size-1.5 rounded-full bg-accent animate-pulse motion-reduce:animate-none'
          />
          Loading project…
        </p>
      )}
    </div>
  );
}

export function RouteLoadError() {
  return (
    <section
      role='alert'
      className='flex min-h-48 flex-col items-start justify-center gap-3'>
      <div className='flex flex-col gap-1'>
        <h1 style={{ fontSize: fluidBase, lineHeight: 1.4 }}>
          Couldn’t load this project
        </h1>
        <p
          className='text-muted-foreground'
          style={{ fontSize: fluidSmall, lineHeight: 1.5 }}>
          The page may be out of date, or the connection was interrupted.
        </p>
      </div>
      <button
        type='button'
        onClick={() => window.location.reload()}
        className='inline-flex min-h-10 items-center text-accent underline-offset-2 hover:underline focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
        style={{ fontSize: fluidSmall, lineHeight: 1.2 }}>
        Reload page
      </button>
    </section>
  );
}
