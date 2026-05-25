import { Dialog } from './ui/Dialog';
import { Button } from './ui/Button';
import type { MissingTrack } from '../types/track';

export interface ConfirmDeleteDialogProps {
  track: MissingTrack | null;
  onCancel: () => void;
  onConfirm: (id: string) => void;
}

export function ConfirmDeleteDialog({
  track,
  onCancel,
  onConfirm,
}: ConfirmDeleteDialogProps) {
  return (
    <Dialog
      open={track !== null}
      onClose={onCancel}
      title="Delete track?"
      description={
        track
          ? `"${track.title}" by ${track.artist} will be removed from your watchlist.`
          : undefined
      }
      footer={
        <>
          <Button variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              if (track) onConfirm(track.id);
            }}
          >
            Delete
          </Button>
        </>
      }
    >
      <p className="text-sm text-mt-text-secondary">
        This can't be undone. It's only saved in this browser, so there's no copy
        to bring back.
      </p>
    </Dialog>
  );
}
