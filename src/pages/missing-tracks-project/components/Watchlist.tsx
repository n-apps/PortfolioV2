import { useMemo, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { RiArrowDownSLine } from '@remixicon/react';
import { TrackCard } from './TrackCard';
import { Popover, PopoverItem } from './ui/Popover';
import { Button } from './ui/Button';
import type { MissingTrack } from '../types/track';
import cdImg from '../assets/cd.png';

type SortKey = 'recent' | 'oldest' | 'artist';

const SORT_LABEL: Record<SortKey, string> = {
  recent: 'Newest first',
  oldest: 'Oldest first',
  artist: 'By artist',
};

export interface WatchlistProps {
  tracks: MissingTrack[];
  onMarkChecked: (id: string) => void;
  onEdit: (track: MissingTrack) => void;
  onDelete: (track: MissingTrack) => void;
}

export function Watchlist({
  tracks,
  onMarkChecked,
  onEdit,
  onDelete,
}: WatchlistProps) {
  const [sortKey, setSortKey] = useState<SortKey>('recent');

  const sorted = useMemo(() => {
    const list = [...tracks];
    switch (sortKey) {
      case 'recent':
        list.sort((a, b) => b.addedAt.localeCompare(a.addedAt));
        break;
      case 'oldest':
        list.sort((a, b) => a.addedAt.localeCompare(b.addedAt));
        break;
      case 'artist':
        list.sort((a, b) =>
          a.artist.localeCompare(b.artist, undefined, { sensitivity: 'base' }),
        );
        break;
    }
    return list;
  }, [tracks, sortKey]);

  if (tracks.length === 0) {
    return <EmptyState />;
  }

  return (
    <section
      id="watchlist"
      aria-labelledby="watchlist-heading"
      className="flex flex-col gap-6"
    >
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h2
            id="watchlist-heading"
            className="text-xl font-bold tracking-tight text-mt-text"
          >
            Watchlist
          </h2>
          <p className="text-sm text-mt-text-secondary">
            {tracks.length} {tracks.length === 1 ? 'track' : 'tracks'} saved
          </p>
        </div>
        <Popover
          align="end"
          trigger={
            <Button
              variant="secondary"
              size="sm"
              trailingIcon={<RiArrowDownSLine className="size-4" />}
            >
              {SORT_LABEL[sortKey]}
            </Button>
          }
        >
          {({ close }) => (
            <div className="flex flex-col">
              {(Object.keys(SORT_LABEL) as SortKey[]).map((k) => (
                <PopoverItem
                  key={k}
                  onClick={() => {
                    setSortKey(k);
                    close();
                  }}
                >
                  {SORT_LABEL[k]}
                </PopoverItem>
              ))}
            </div>
          )}
        </Popover>
      </header>

      <div role="list" className="flex flex-col gap-3">
        <AnimatePresence initial={false} mode="popLayout">
          {sorted.map((t) => (
            <TrackCard
              key={t.id}
              track={t}
              onMarkChecked={onMarkChecked}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function EmptyState() {
  return (
    <section
      aria-labelledby="empty-heading"
      className="group flex flex-col items-center gap-5 rounded-mt-card border border-dashed border-mt-border/50 bg-mt-surface/60 px-6 py-14 text-center"
    >
      <img
        src={cdImg}
        alt=""
        aria-hidden="true"
        className="h-16 w-16 rounded-mt-circle border border-mt-border/40 object-cover opacity-50 transition-opacity duration-200 group-hover:opacity-90 group-hover:animate-spin group-hover:[animation-duration:2.5s]"
      />
      <div className="flex max-w-md flex-col gap-2">
        <h2
          id="empty-heading"
          className="text-balance text-xl font-bold tracking-tight text-mt-text"
        >
          Nothing's gone missing. Yet.
        </h2>
        <p className="text-pretty text-sm text-mt-text-secondary">
          When a track blinks out of your library (a label gets greedy, a license
          lapses, regions disagree), save it here. You'll have a list to check
          back on, and a way to hear it elsewhere while the rights get sorted.
        </p>
      </div>
    </section>
  );
}
