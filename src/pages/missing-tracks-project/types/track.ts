export type TrackStatus =
  | 'unknown'
  | 'unavailable'
  | 'possibly_available'
  | 'available';

export const TRACK_STATUSES: TrackStatus[] = [
  'unknown',
  'unavailable',
  'possibly_available',
  'available',
];

export interface MissingTrack {
  id: string;
  artist: string;
  title: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
  notes?: string;
  status: TrackStatus;
  addedAt: string;
  lastCheckedAt: string | null;
}

export type TrackDraft = Pick<
  MissingTrack,
  'artist' | 'title' | 'spotifyUrl' | 'youtubeUrl' | 'notes'
>;

export interface StorageSchema {
  version: 1;
  tracks: MissingTrack[];
}

export const CURRENT_STORAGE_VERSION = 1 as const;
