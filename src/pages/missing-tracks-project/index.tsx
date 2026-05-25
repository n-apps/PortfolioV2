import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { useTracks } from './hooks/useTracks';
import { TopNav } from './components/TopNav';
import { Hero } from './components/Hero';
import { AddTrackForm } from './components/AddTrackForm';
import { Watchlist } from './components/Watchlist';
import { EditTrackDialog } from './components/EditTrackDialog';
import { ConfirmDeleteDialog } from './components/ConfirmDeleteDialog';
import { Footer } from './components/Footer';
import type { MissingTrack } from './types/track';

// These two fonts are used only on this route (Strichpunkt as the .mt-root body
// font, Madimi One in the nav), so load their stylesheet on mount instead of
// site-wide in index.html — otherwise every page would block on a Google Fonts
// request for a route most visitors never open. Preconnects already live in
// index.html. Injected once and left in place so the browser cache serves it.
const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Strichpunkt+Sans:wght@400..900&family=Madimi+One&display=swap';

function useMissingTracksFonts() {
  useEffect(() => {
    if (document.querySelector('link[data-mt-fonts]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = FONT_HREF;
    link.setAttribute('data-mt-fonts', '');
    document.head.appendChild(link);
  }, []);
}

// Easter egg for the curious: the secondary audience here is designers and
// recruiters who open DevTools. Greet them once, and prove the "frontend-only,
// nothing phones home" claim by handing them the exact localStorage key.
let consoleGreetingShown = false;

function greetTheConsole() {
  if (consoleGreetingShown) return;
  consoleGreetingShown = true;
  console.log(
    "👋 Hello, developer! You found the console easter egg! This whole thing is frontend-only, so your watchlist lives in localStorage and nothing is sent anywhere. Want to see it? Run:\n%clocalStorage.getItem('missing-tracks:v1')",
    'color:#7fee64;font-weight:700;font-size:13px',
    'color:#859984;font-size:12px;line-height:1.6',
    'color:#ddffdc;font-family:monospace;font-size:12px',
  );
}

export default function MissingTracksApp() {
  const { tracks, addTrack, updateTrack, deleteTrack, markChecked } =
    useTracks();

  const [editing, setEditing] = useState<MissingTrack | null>(null);
  const [confirming, setConfirming] = useState<MissingTrack | null>(null);

  useMissingTracksFonts();
  useEffect(greetTheConsole, []);

  return (
    // .mt-root scopes the dark-green palette + element resets to this page
    // (see src/styles/missing-tracks-theme.css). MotionConfig honors the OS
    // reduced-motion preference for all motion/react animations below.
    <MotionConfig reducedMotion='user'>
      <div id='top' className='mt-root min-h-[100dvh]'>
        <TopNav />
      <main className='mx-auto flex w-full max-w-[1024px] flex-col gap-[clamp(4rem,8vw,8rem)] px-6 pb-16 md:px-8'>
        <Hero />
        <div className='flex flex-col gap-10'>
          <AddTrackForm onAdd={addTrack} />
          <Watchlist
            tracks={tracks}
            onMarkChecked={markChecked}
            onEdit={setEditing}
            onDelete={setConfirming}
          />
        </div>
        <Footer />
      </main>

      <EditTrackDialog
        track={editing}
        onClose={() => setEditing(null)}
        onSave={(id, draft) => updateTrack(id, draft)}
      />
      <ConfirmDeleteDialog
        track={confirming}
        onCancel={() => setConfirming(null)}
        onConfirm={(id) => {
          deleteTrack(id);
          setConfirming(null);
        }}
      />
      </div>
    </MotionConfig>
  );
}
