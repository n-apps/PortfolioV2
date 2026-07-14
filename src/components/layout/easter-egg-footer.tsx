import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { playPopSound } from '@/lib/ui-sounds';

const WHEEL_REVEAL_THRESHOLD = 600;
const TOUCH_REVEAL_THRESHOLD = 140;
const MIN_DELTA = 3;
const BOTTOM_TOLERANCE = 24;
const TOUCH_PROGRESS_TIMEOUT_MS = 1600;
const BORKS = [
  '(bork.)',
  '(woof.)',
  '(...)',
  '(🥎?)',
  "(yes, i'm annoying, but i'm also kinda special.)",
  '(do you have treats?)',
  '(...!)',
];
const BORK_DURATION_MS = 2200;

export function EasterEggFooter() {
  const { pathname } = useLocation();
  const [revealed, setRevealed] = useState(false);
  const [bork, setBork] = useState<{ msg: string; key: number } | null>(null);
  const overshootRef = useRef(0);
  const lastTouchYRef = useRef<number | null>(null);
  const touchProgressTimerRef = useRef<number | null>(null);
  const borkIndexRef = useRef(-1);
  const borkTimerRef = useRef<number | null>(null);

  useEffect(() => {
    setRevealed(false);
    setBork(null);
    overshootRef.current = 0;
    lastTouchYRef.current = null;
    if (touchProgressTimerRef.current) {
      window.clearTimeout(touchProgressTimerRef.current);
      touchProgressTimerRef.current = null;
    }
    if (borkTimerRef.current) {
      window.clearTimeout(borkTimerRef.current);
      borkTimerRef.current = null;
    }
  }, [pathname]);

  useEffect(
    () => () => {
      if (borkTimerRef.current) window.clearTimeout(borkTimerRef.current);
      if (touchProgressTimerRef.current) {
        window.clearTimeout(touchProgressTimerRef.current);
      }
    },
    [],
  );

  const handleDogClick = () => {
    playPopSound();
    if (borkTimerRef.current) window.clearTimeout(borkTimerRef.current);
    let next = Math.floor(Math.random() * BORKS.length);
    if (next === borkIndexRef.current) next = (next + 1) % BORKS.length;
    borkIndexRef.current = next;
    setBork({ msg: BORKS[next], key: Date.now() });
    borkTimerRef.current = window.setTimeout(
      () => setBork(null),
      BORK_DURATION_MS,
    );
  };

  useEffect(() => {
    if (revealed) return;

    const isAtBottom = () => {
      const doc = document.documentElement;
      return (
        window.innerHeight + window.scrollY >=
        doc.scrollHeight - BOTTOM_TOLERANCE
      );
    };

    const push = (delta: number, threshold: number) => {
      if (delta <= 0 || !isAtBottom()) {
        overshootRef.current = 0;
        return;
      }
      if (delta < MIN_DELTA) return;
      overshootRef.current += delta;
      if (overshootRef.current >= threshold) {
        setRevealed(true);
      }
    };

    const onWheel = (e: WheelEvent) =>
      push(e.deltaY, WHEEL_REVEAL_THRESHOLD);

    const onTouchStart = (e: TouchEvent) => {
      if (touchProgressTimerRef.current) {
        window.clearTimeout(touchProgressTimerRef.current);
        touchProgressTimerRef.current = null;
      }
      lastTouchYRef.current = e.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (e: TouchEvent) => {
      const prev = lastTouchYRef.current;
      const current = e.touches[0]?.clientY;
      if (prev == null || current == null) return;
      push(prev - current, TOUCH_REVEAL_THRESHOLD);
      lastTouchYRef.current = current;
    };

    const onTouchEnd = () => {
      lastTouchYRef.current = null;
      touchProgressTimerRef.current = window.setTimeout(() => {
        overshootRef.current = 0;
        touchProgressTimerRef.current = null;
      }, TOUCH_PROGRESS_TIMEOUT_MS);
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('touchcancel', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
    };
  }, [revealed]);

  return (
    <div
      aria-hidden='true'
      className='relative w-full overflow-hidden'
      style={{
        height: revealed ? 'clamp(110px, 13.89vw, 200px)' : 0,
        transition: 'height 700ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}>
      <BlissDay className='absolute inset-0 h-full w-full dark:hidden' />
      <BlissNight className='absolute inset-0 h-full w-full hidden dark:block' />
      <div
        style={{
          position: 'absolute',
          right: 'clamp(1rem, 5vw, 5rem)',
          bottom: 'clamp(0.25rem, 1.5vw, 1rem)',
        }}>
        <img
          src='/images/annoying_dog.gif'
          alt=''
          loading='lazy'
          decoding='async'
          onClick={handleDogClick}
          data-goatcounter-click='annoying-dog'
          style={{
            display: 'block',
            width: 'clamp(30px, 4vw, 55px)',
            imageRendering: 'pixelated',
            outline: 'none',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        />
        <AnimatePresence>
          {bork && (
            <motion.div
              key={bork.key}
              initial={{ opacity: 0, y: 4, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -2, scale: 0.96 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'absolute',
                bottom: 'calc(100% + 8px)',
                right: 0,
                padding: '4px 8px',
                background: 'var(--background)',
                border: '1px solid var(--foreground)',
                borderRadius: '2px',
                color: 'var(--foreground)',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                lineHeight: 1.3,
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              }}>
              {bork.msg}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const HILL_BACK_D =
  'M1440 200V83.5166C988.736 73.8096 582.598 112.637 221.587 200';
const HILL_FRONT_D = 'M0 200V112.637C480 105.357 912 134.478 1296 200';

function BlissDay({ className }: { className: string }) {
  return (
    <svg
      width='1440'
      height='200'
      viewBox='0 0 1440 200'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
      className={className}>
      <path
        d='M747.354 82.0605C742.423 72.3201 747.354 67.4498 762.148 67.4498C762.148 62.5796 764.614 60.1445 769.545 60.1445C762.148 45.5337 791.736 38.2284 791.736 52.8391C796.667 52.8391 799.133 55.2742 799.133 60.1445C808.995 60.1445 811.461 67.4498 806.53 82.0605'
        fill='url(#bliss-day-cloud-sm)'
      />
      <path
        d='M335.049 122.844C347.29 98.9647 335.049 87.0247 298.325 87.0247C298.325 75.0848 292.205 69.1149 279.964 69.1149C298.325 33.2951 224.879 15.3852 224.879 51.205C212.638 51.205 206.517 57.1749 206.517 69.1149C182.035 69.1149 175.914 87.0247 188.156 122.844'
        fill='url(#bliss-day-cloud-lg)'
      />
      <path d={HILL_BACK_D} fill='url(#bliss-day-hill-back)' />
      <path d={HILL_FRONT_D} fill='url(#bliss-day-hill-front)' />
      <g style={{ mixBlendMode: 'overlay' }} opacity='0.5'>
        <path d={HILL_BACK_D} fill='url(#bliss-grain-day)' />
        <path d={HILL_FRONT_D} fill='url(#bliss-grain-day)' />
      </g>
      <defs>
        <linearGradient
          id='bliss-day-cloud-sm'
          x1='745.505'
          y1='44.875'
          x2='745.505'
          y2='82.0605'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='white' />
          <stop offset='1' stopColor='white' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='bliss-day-cloud-lg'
          x1='339.639'
          y1='31.6802'
          x2='339.639'
          y2='122.844'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='white' />
          <stop offset='1' stopColor='white' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='bliss-day-hill-back'
          x1='1440'
          y1='82.0605'
          x2='1440'
          y2='200'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#22c55e' />
          <stop offset='1' stopColor='#16a34a' />
        </linearGradient>
        <linearGradient
          id='bliss-day-hill-front'
          x1='0'
          y1='111.545'
          x2='0'
          y2='200'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#16a34a' />
          <stop offset='1' stopColor='#15803d' />
        </linearGradient>
        <pattern
          id='bliss-grain-day'
          patternUnits='userSpaceOnUse'
          width='100'
          height='100'>
          <image
            href='/images/grain.png'
            x='0'
            y='0'
            width='100'
            height='100'
            preserveAspectRatio='none'
          />
        </pattern>
      </defs>
    </svg>
  );
}

function BlissNight({ className }: { className: string }) {
  return (
    <svg
      width='1440'
      height='200'
      viewBox='0 0 1440 200'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
      className={className}>
      <path
        d='M747.354 82.0605C742.423 72.3201 747.354 67.4498 762.148 67.4498C762.148 62.5796 764.614 60.1445 769.545 60.1445C762.148 45.5337 791.736 38.2284 791.736 52.8391C796.667 52.8391 799.133 55.2742 799.133 60.1445C808.995 60.1445 811.461 67.4498 806.53 82.0605'
        fill='url(#bliss-night-cloud-sm)'
      />
      <path
        d='M335.049 122.844C347.29 98.9647 335.049 87.0247 298.325 87.0247C298.325 75.0848 292.205 69.1149 279.964 69.1149C298.325 33.2951 224.879 15.3852 224.879 51.205C212.638 51.205 206.517 57.1749 206.517 69.1149C182.035 69.1149 175.914 87.0247 188.156 122.844'
        fill='url(#bliss-night-cloud-lg)'
      />
      <path d={HILL_BACK_D} fill='url(#bliss-night-hill-back)' />
      <path d={HILL_FRONT_D} fill='url(#bliss-night-hill-front)' />
      <g style={{ mixBlendMode: 'overlay' }} opacity='0.5'>
        <path d={HILL_BACK_D} fill='url(#bliss-grain-night)' />
        <path d={HILL_FRONT_D} fill='url(#bliss-grain-night)' />
      </g>
      <defs>
        <linearGradient
          id='bliss-night-cloud-sm'
          x1='745.505'
          y1='44.875'
          x2='745.505'
          y2='82.0605'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#cdd8ee' stopOpacity='0.55' />
          <stop offset='1' stopColor='#cdd8ee' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='bliss-night-cloud-lg'
          x1='339.639'
          y1='31.6802'
          x2='339.639'
          y2='122.844'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#cdd8ee' stopOpacity='0.55' />
          <stop offset='1' stopColor='#cdd8ee' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='bliss-night-hill-back'
          x1='1440'
          y1='82.0605'
          x2='1440'
          y2='200'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#15803d' />
          <stop offset='1' stopColor='#166534' />
        </linearGradient>
        <linearGradient
          id='bliss-night-hill-front'
          x1='0'
          y1='111.545'
          x2='0'
          y2='200'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#166534' />
          <stop offset='1' stopColor='#14532d' />
        </linearGradient>
        <pattern
          id='bliss-grain-night'
          patternUnits='userSpaceOnUse'
          width='100'
          height='100'>
          <image
            href='/images/grain.png'
            x='0'
            y='0'
            width='100'
            height='100'
            preserveAspectRatio='none'
          />
        </pattern>
      </defs>
    </svg>
  );
}
