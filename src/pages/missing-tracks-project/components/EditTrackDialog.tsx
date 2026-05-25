import { Dialog } from './ui/Dialog';
import { TrackFormFields } from './TrackFormFields';
import type { MissingTrack, TrackDraft } from '../types/track';

export interface EditTrackDialogProps {
  track: MissingTrack | null;
  onClose: () => void;
  onSave: (id: string, draft: TrackDraft) => void;
}

export function EditTrackDialog({ track, onClose, onSave }: EditTrackDialogProps) {
  return (
    <Dialog
      open={track !== null}
      onClose={onClose}
      title="Edit track"
      description="Update the artist, title, links, or notes."
    >
      {track ? (
        <TrackFormFields
          key={track.id}
          initial={{
            artist: track.artist,
            title: track.title,
            spotifyUrl: track.spotifyUrl,
            youtubeUrl: track.youtubeUrl,
            notes: track.notes,
          }}
          submitLabel="Save changes"
          cancelLabel="Cancel"
          onSubmit={(draft) => {
            onSave(track.id, draft);
            onClose();
          }}
          onCancel={onClose}
          layout="dialog"
        />
      ) : null}
    </Dialog>
  );
}
