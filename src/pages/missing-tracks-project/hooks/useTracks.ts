import { useCallback, useEffect, useRef, useState } from 'react';
import { newId } from '../lib/id';
import { loadTracks, saveTracks } from '../lib/storage';
import type { MissingTrack, TrackDraft, TrackStatus } from '../types/track';

export interface UseTracksApi {
  tracks: MissingTrack[];
  addTrack: (input: TrackDraft) => MissingTrack;
  updateTrack: (id: string, patch: Partial<TrackDraft>) => void;
  deleteTrack: (id: string) => void;
  setStatus: (id: string, status: TrackStatus) => void;
  markChecked: (id: string) => void;
}

function normalizeDraft(input: TrackDraft): TrackDraft {
  return {
    artist: input.artist.trim(),
    title: input.title.trim(),
    spotifyUrl: input.spotifyUrl?.trim() || undefined,
    youtubeUrl: input.youtubeUrl?.trim() || undefined,
    notes: input.notes?.trim() || undefined,
  };
}

export function useTracks(): UseTracksApi {
  const [tracks, setTracks] = useState<MissingTrack[]>(() => loadTracks());
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    saveTracks(tracks);
  }, [tracks]);

  const addTrack = useCallback((input: TrackDraft): MissingTrack => {
    const clean = normalizeDraft(input);
    const track: MissingTrack = {
      id: newId(),
      ...clean,
      status: 'unknown',
      addedAt: new Date().toISOString(),
      lastCheckedAt: null,
    };
    setTracks((prev) => [track, ...prev]);
    return track;
  }, []);

  const updateTrack = useCallback(
    (id: string, patch: Partial<TrackDraft>) => {
      const clean = normalizeDraft({
        artist: patch.artist ?? '',
        title: patch.title ?? '',
        spotifyUrl: patch.spotifyUrl,
        youtubeUrl: patch.youtubeUrl,
        notes: patch.notes,
      });
      setTracks((prev) =>
        prev.map((t) => {
          if (t.id !== id) return t;
          return {
            ...t,
            ...(patch.artist !== undefined ? { artist: clean.artist } : {}),
            ...(patch.title !== undefined ? { title: clean.title } : {}),
            ...(patch.spotifyUrl !== undefined
              ? { spotifyUrl: clean.spotifyUrl }
              : {}),
            ...(patch.youtubeUrl !== undefined
              ? { youtubeUrl: clean.youtubeUrl }
              : {}),
            ...(patch.notes !== undefined ? { notes: clean.notes } : {}),
          };
        }),
      );
    },
    [],
  );

  const deleteTrack = useCallback((id: string) => {
    setTracks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const setStatus = useCallback((id: string, status: TrackStatus) => {
    const now = new Date().toISOString();
    setTracks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status, lastCheckedAt: now } : t,
      ),
    );
  }, []);

  const markChecked = useCallback((id: string) => {
    const now = new Date().toISOString();
    setTracks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, lastCheckedAt: now } : t)),
    );
  }, []);

  return { tracks, addTrack, updateTrack, deleteTrack, setStatus, markChecked };
}
