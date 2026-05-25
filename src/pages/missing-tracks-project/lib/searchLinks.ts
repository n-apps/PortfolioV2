import type { MissingTrack } from '../types/track';

function buildQuery(artist: string, title: string): string {
  return `${artist} ${title}`.trim();
}

export function spotifySearchUrl(artist: string, title: string): string {
  const q = encodeURIComponent(buildQuery(artist, title));
  return `https://open.spotify.com/search/${q}`;
}

export function youtubeSearchUrl(artist: string, title: string): string {
  const q = encodeURIComponent(buildQuery(artist, title));
  return `https://www.youtube.com/results?search_query=${q}`;
}

export function openSpotifyOrSearch(track: MissingTrack): string {
  const direct = track.spotifyUrl?.trim();
  if (direct && isLikelyUrl(direct)) return direct;
  return spotifySearchUrl(track.artist, track.title);
}

export function openYoutubeOrSearch(track: MissingTrack): string {
  const direct = track.youtubeUrl?.trim();
  if (direct && isLikelyUrl(direct)) return direct;
  return youtubeSearchUrl(track.artist, track.title);
}

export function isLikelyUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}
