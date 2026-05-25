import {
  CURRENT_STORAGE_VERSION,
  TRACK_STATUSES,
  type MissingTrack,
  type StorageSchema,
  type TrackStatus,
} from '../types/track';

const STORAGE_KEY = 'missing-tracks:v1';

function isStatus(value: unknown): value is TrackStatus {
  return typeof value === 'string' && (TRACK_STATUSES as string[]).includes(value);
}

function isTrack(value: unknown): value is MissingTrack {
  if (!value || typeof value !== 'object') return false;
  const t = value as Record<string, unknown>;
  return (
    typeof t.id === 'string' &&
    typeof t.artist === 'string' &&
    typeof t.title === 'string' &&
    isStatus(t.status) &&
    typeof t.addedAt === 'string' &&
    (t.lastCheckedAt === null || typeof t.lastCheckedAt === 'string') &&
    (t.spotifyUrl === undefined || typeof t.spotifyUrl === 'string') &&
    (t.youtubeUrl === undefined || typeof t.youtubeUrl === 'string') &&
    (t.notes === undefined || typeof t.notes === 'string')
  );
}

export function loadTracks(): MissingTrack[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== 'object') return [];
    const envelope = parsed as Partial<StorageSchema>;
    if (envelope.version !== CURRENT_STORAGE_VERSION) return [];
    if (!Array.isArray(envelope.tracks)) return [];
    return envelope.tracks.filter(isTrack);
  } catch {
    return [];
  }
}

export function saveTracks(tracks: MissingTrack[]): void {
  if (typeof window === 'undefined') return;
  try {
    const envelope: StorageSchema = {
      version: CURRENT_STORAGE_VERSION,
      tracks,
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(envelope));
  } catch {
    /* quota or serialization errors are swallowed silently in MVP */
  }
}

export function clearTracks(): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
