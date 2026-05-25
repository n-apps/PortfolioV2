import { useState, type FormEvent } from 'react';
import { RiMagicLine } from '@remixicon/react';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Button } from './ui/Button';
import { isLikelyUrl } from '../lib/searchLinks';
import type { TrackDraft } from '../types/track';

const NOTES_MAX = 500;

export interface TrackFormFieldsProps {
  initial?: TrackDraft;
  submitLabel: string;
  cancelLabel?: string;
  onSubmit: (draft: TrackDraft) => void;
  onCancel?: () => void;
  layout?: 'page' | 'dialog';
  /** When set, renders a secondary button that fills the form with this draft. */
  sample?: TrackDraft;
}

interface FieldErrors {
  artist?: string;
  title?: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
}

function validate(draft: TrackDraft): FieldErrors {
  const errors: FieldErrors = {};
  if (!draft.artist.trim()) errors.artist = 'Artist is required.';
  if (!draft.title.trim()) errors.title = 'Track title is required.';
  if (draft.spotifyUrl && !isLikelyUrl(draft.spotifyUrl)) {
    errors.spotifyUrl = 'Enter a valid URL (https://…)';
  }
  if (draft.youtubeUrl && !isLikelyUrl(draft.youtubeUrl)) {
    errors.youtubeUrl = 'Enter a valid URL (https://…)';
  }
  return errors;
}

export function TrackFormFields({
  initial,
  submitLabel,
  cancelLabel,
  onSubmit,
  onCancel,
  layout = 'page',
  sample,
}: TrackFormFieldsProps) {
  const [artist, setArtist] = useState(initial?.artist ?? '');
  const [title, setTitle] = useState(initial?.title ?? '');
  const [spotifyUrl, setSpotifyUrl] = useState(initial?.spotifyUrl ?? '');
  const [youtubeUrl, setYoutubeUrl] = useState(initial?.youtubeUrl ?? '');
  const [notes, setNotes] = useState(initial?.notes ?? '');
  const [touched, setTouched] = useState<Record<keyof FieldErrors, boolean>>({
    artist: false,
    title: false,
    spotifyUrl: false,
    youtubeUrl: false,
  });
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const draft: TrackDraft = {
    artist,
    title,
    spotifyUrl: spotifyUrl || undefined,
    youtubeUrl: youtubeUrl || undefined,
    notes: notes || undefined,
  };
  const errors = validate(draft);
  const visibleError = (k: keyof FieldErrors) =>
    submitAttempted || touched[k] ? errors[k] : undefined;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length > 0) return;
    onSubmit({
      artist: artist.trim(),
      title: title.trim(),
      spotifyUrl: spotifyUrl.trim() || undefined,
      youtubeUrl: youtubeUrl.trim() || undefined,
      notes: notes.trim() || undefined,
    });
  };

  const fillSample = () => {
    if (!sample) return;
    setArtist(sample.artist);
    setTitle(sample.title);
    setSpotifyUrl(sample.spotifyUrl ?? '');
    setYoutubeUrl(sample.youtubeUrl ?? '');
    setNotes(sample.notes ?? '');
    setTouched({
      artist: false,
      title: false,
      spotifyUrl: false,
      youtubeUrl: false,
    });
    setSubmitAttempted(false);
  };

  const isDialog = layout === 'dialog';

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          label="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, artist: true }))}
          placeholder="Radiohead"
          autoComplete="off"
          required
          error={visibleError('artist')}
        />
        <Input
          label="Track title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, title: true }))}
          placeholder="True Love Waits"
          autoComplete="off"
          required
          error={visibleError('title')}
        />
      </div>
      <Input
        label="Spotify URL"
        value={spotifyUrl}
        onChange={(e) => setSpotifyUrl(e.target.value)}
        onBlur={() => setTouched((t) => ({ ...t, spotifyUrl: true }))}
        placeholder="https://open.spotify.com/track/…"
        type="url"
        optional
        autoComplete="off"
        inputMode="url"
        hint="Paste the original link if you have it. Otherwise we'll search Spotify for it."
        error={visibleError('spotifyUrl')}
      />
      <Input
        label="YouTube URL"
        value={youtubeUrl}
        onChange={(e) => setYoutubeUrl(e.target.value)}
        onBlur={() => setTouched((t) => ({ ...t, youtubeUrl: true }))}
        placeholder="https://youtube.com/watch?v=…"
        type="url"
        optional
        autoComplete="off"
        inputMode="url"
        error={visibleError('youtubeUrl')}
      />
      <Textarea
        label="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value.slice(0, NOTES_MAX))}
        placeholder="Where you found it, why it matters, anything to remember…"
        optional
        hint={`${notes.length}/${NOTES_MAX}`}
      />
      <div
        className={
          isDialog
            ? 'flex flex-wrap items-center justify-end gap-2 pt-1'
            : 'flex flex-wrap items-center gap-2 pt-1'
        }
      >
        {onCancel ? (
          <Button variant="ghost" onClick={onCancel} type="button">
            {cancelLabel ?? 'Cancel'}
          </Button>
        ) : null}
        <Button variant="primary" type="submit" size={isDialog ? 'md' : 'lg'}>
          {submitLabel}
        </Button>
        {sample ? (
          <Button
            variant="secondary"
            type="button"
            size={isDialog ? 'md' : 'lg'}
            onClick={fillSample}
            leadingIcon={<RiMagicLine size={18} />}
          >
            Try a sample
          </Button>
        ) : null}
      </div>
    </form>
  );
}
