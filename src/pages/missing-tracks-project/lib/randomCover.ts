/**
 * Easter-egg data seam: pull a random real album cover from the open
 * MusicBrainz + Cover Art Archive APIs (no auth, no key). Kept separate from
 * `searchLinks.ts` (the future Spotify-availability seam) — different service,
 * different concern. Components never touch these URLs directly.
 */

interface MbRelease {
  id: string;
}

export interface CoverCandidate {
  coverUrl: string;
  musicBrainzId: string;
}

const MUSICBRAINZ_ENDPOINT = 'https://musicbrainz.org/ws/2/release';
const COVER_ART_BASE = 'https://coverartarchive.org/release';

/** Broad Lucene filter so a random offset can land anywhere in MusicBrainz's
 *  official album releases. No free-text term is needed for a valid query. */
const QUERY = 'primarytype:album AND status:official';
const BATCH_SIZE = 25;
const MAX_OFFSET = 1000;

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Fetch a random page of official album releases and return shuffled Cover Art
 * Archive front-image URLs (500px variant — plenty for the small hero card).
 * Not every release has art, so callers should try candidates in order via
 * `preloadImage` and stop at the first that loads.
 *
 * No custom headers on purpose: browsers forbid overriding `User-Agent`, and any
 * non-safelisted header would trigger a CORS preflight. `fmt=json` is enough,
 * and MusicBrainz responds with `Access-Control-Allow-Origin: *`.
 */
export async function fetchCoverCandidates(
  signal?: AbortSignal,
): Promise<CoverCandidate[]> {
  const offset = Math.floor(Math.random() * MAX_OFFSET);
  const params = new URLSearchParams({
    query: QUERY,
    fmt: 'json',
    limit: String(BATCH_SIZE),
    offset: String(offset),
  });

  const res = await fetch(`${MUSICBRAINZ_ENDPOINT}?${params}`, { signal });
  if (!res.ok) {
    throw new Error(`MusicBrainz request failed: ${res.status}`);
  }

  const data = (await res.json()) as { releases?: MbRelease[] };
  const releases = Array.isArray(data.releases) ? data.releases : [];

  const candidates = releases
    .filter((r) => typeof r?.id === 'string')
    .map((r) => ({
      coverUrl: `${COVER_ART_BASE}/${r.id}/front-500`,
      musicBrainzId: r.id,
    }));

  return shuffle(candidates);
}

/**
 * Resolve once the image at `url` has loaded; reject on error (e.g. a 404 from
 * Cover Art Archive when a release has no front cover) or when aborted. The
 * browser keeps the decoded image cached, so swapping it into a visible
 * `<img src>` afterwards is instant and flash-free.
 */
export function preloadImage(url: string, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException('Aborted', 'AbortError'));
      return;
    }

    const img = new Image();

    const onAbort = () => {
      finish();
      img.src = '';
      reject(new DOMException('Aborted', 'AbortError'));
    };

    function finish() {
      img.onload = null;
      img.onerror = null;
      signal?.removeEventListener('abort', onAbort);
    }

    img.onload = () => {
      finish();
      resolve();
    };
    img.onerror = () => {
      finish();
      reject(new Error(`Cover image failed to load: ${url}`));
    };

    signal?.addEventListener('abort', onAbort);
    img.src = url;
  });
}
