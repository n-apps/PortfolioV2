import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchCoverCandidates, preloadImage } from '../lib/randomCover';

/** Try at most this many releases per fetch before giving up (most have art). */
const MAX_ATTEMPTS = 6;

export interface UseRandomCover {
  /** URL of a cover whose image has already loaded, or null if none is ready. */
  cover: string | null;
  /** Abort any in-flight request and fetch the next random cover. */
  prefetchNext: () => void;
}

/**
 * Hero easter egg: fetches a random album cover and keeps the next one ready.
 * `cover` is only ever set to a URL whose image has finished loading, so a
 * consumer can drop it into an <img> with no flash. Any failure (offline, bad
 * response, every candidate missing art) leaves `cover` untouched, so the caller
 * keeps showing its fallback. Only one request runs at a time.
 */
export function useRandomCover(): UseRandomCover {
  const [cover, setCover] = useState<string | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  const prefetchNext = useCallback(() => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    void (async () => {
      try {
        const candidates = await fetchCoverCandidates(controller.signal);
        for (const candidate of candidates.slice(0, MAX_ATTEMPTS)) {
          if (controller.signal.aborted) return;
          try {
            await preloadImage(candidate.coverUrl, controller.signal);
            setCover(candidate.coverUrl);
            return;
          } catch {
            // No front art / failed load — fall through to the next candidate.
          }
        }
      } catch {
        // Aborted, offline, or bad response — keep the current cover.
      }
    })();
  }, []);

  // No fetch on mount: the only consumer is the desktop-only hero flip card
  // (hidden on mobile), and most visitors never hover it. The caller kicks off
  // the first fetch on first interaction. Abort any in-flight request on unmount.
  useEffect(() => () => controllerRef.current?.abort(), []);

  return { cover, prefetchNext };
}
