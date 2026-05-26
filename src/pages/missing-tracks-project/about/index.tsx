import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { RiArrowRightLine } from '@remixicon/react';
import { Button } from '../components/ui/Button';
import { Footer } from '../components/Footer';
import { cn } from '../lib/cn';

const ease = [0.16, 1, 0.3, 1] as const;
const HOME_PATH = '/missing-tracks-project';

type Step = {
  n: string;
  tone: 'green' | 'red';
  title: string;
  desc: string;
};

// The flow the page narrates: spot a track → Spotify can't play it (the dead end,
// flagged red) → save it → recheck later.
const STEPS: Step[] = [
  {
    n: '01',
    tone: 'green',
    title: 'You spot a track',
    desc: 'It catches you at a bar or in a set, and Shazam finally puts a name to it.',
  },
  {
    n: '02',
    tone: 'red',
    title: "Spotify won't play it",
    desc: 'You search and hit a wall: greyed out, region-locked, or gone from the catalog.',
  },
  {
    n: '03',
    tone: 'green',
    title: 'Save it to the list',
    desc: "Add the title, artist, and the link that wouldn't play. Takes a few seconds.",
  },
  {
    n: '04',
    tone: 'green',
    title: 'Recheck when you want',
    desc: 'Re-run it later. Licensing shifts, and often the song is quietly back.',
  },
];

// Status coins borrow the app's own availability language: green reads as
// "playable", red as "unavailable" — so the lone red coin (step 02) is the dead
// end the headline names. The bloom mirrors the primary button's green glow.
const toneCoin: Record<Step['tone'], string> = {
  green: 'bg-mt-green text-mt-bg shadow-[0_0_24px_-4px_rgba(127,238,100,0.5)]',
  red: 'bg-mt-red text-mt-bg shadow-[0_0_24px_-4px_rgba(232,99,99,0.5)]',
};

function AboutHero() {
  return (
    <section
      aria-labelledby='about-hero-heading'
      className='flex flex-col gap-7 pt-10 md:pt-16'>
      <motion.h1
        id='about-hero-heading'
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, delay: 0.05, ease }}
        className='text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-mt-text md:text-5xl lg:text-5xl'>
        <span className='block'>The track you found isn't on Spotify yet.</span>
        <span className='block text-mt-green'>Don't lose it.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, delay: 0.12, ease }}
        className='text-pretty text-base leading-relaxed text-mt-text-secondary md:text-lg'>
        Have you ever been in a situation like that? You heard a cool track,
        bookmarked it, and want to add it to your Spotify library, but bam—the
        track isn't available and you hit a dead end. Save it to a small
        watchlist so it isn't forgotten, then recheck when it comes back.
      </motion.p>
    </section>
  );
}

function HowItWorks() {
  return (
    <section
      aria-labelledby='how-it-works-heading'
      className='flex flex-col gap-10 md:gap-12'>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.42, ease }}
        className='flex flex-col gap-4'>
        <span className='font-mt-mono text-[11px] uppercase tracking-mt-eyebrow text-mt-text-secondary'>
          How it works
        </span>
        <h2
          id='how-it-works-heading'
          className='text-balance text-3xl font-extrabold leading-[1.08] tracking-tight text-mt-text sm:text-4xl lg:text-[2.75rem]'>
          From a dead end to a song you can play again.
        </h2>
      </motion.div>

      <ol className='flex flex-col'>
        {STEPS.map((step, i) => {
          const isLast = i === STEPS.length - 1;
          return (
            <li
              key={step.n}
              className={cn(
                'grid grid-cols-[auto_1fr] gap-x-5 sm:gap-x-7',
                !isLast && 'pb-11 md:pb-14',
              )}>
              {/* Rail: the numbered status coin, then the connector that draws
                  down toward the next step as this row scrolls into view. */}
              <div className='flex flex-col items-center' aria-hidden='true'>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.4, ease }}
                  className={cn(
                    'flex size-10 shrink-0 items-center justify-center rounded-mt-circle font-mt-mono text-[13px] font-bold leading-none',
                    toneCoin[step.tone],
                  )}>
                  {step.n}
                </motion.span>
                {!isLast && (
                  <motion.span
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.12, ease }}
                    style={{ transformOrigin: 'top' }}
                    className='mt-3 w-px flex-1 bg-gradient-to-b from-mt-border to-mt-border/20'
                  />
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.42, delay: 0.08, ease }}
                className='flex flex-col gap-2 pt-1.5'>
                <h3 className='text-xl font-bold leading-snug tracking-tight text-mt-text md:text-2xl'>
                  {step.title}
                </h3>
                <p className='text-[15px] leading-relaxed text-mt-text-secondary md:text-base'>
                  {step.desc}
                </p>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function ClosingCta() {
  const navigate = useNavigate();
  return (
    <motion.section
      aria-labelledby='about-cta-heading'
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.42, ease }}>
      <div className='flex flex-col items-start gap-7 rounded-mt-card border border-mt-border bg-mt-mint p-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:p-12'>
        <h2
          id='about-cta-heading'
          className='text-balance text-2xl font-extrabold leading-tight tracking-tight text-mt-bg sm:text-3xl'>
          Start with the song you just looked up.
        </h2>
        <Button
          variant='primary'
          size='lg'
          className='shrink-0'
          trailingIcon={<RiArrowRightLine className='size-4' />}
          onClick={() => navigate(HOME_PATH)}
          data-goatcounter-click='missing-tracks-about-cta'>
          Open the watchlist
        </Button>
      </div>
    </motion.section>
  );
}

export function MissingTracksAboutPage() {
  return (
    // isolate keeps the decorative top glow behind the content without leaking a
    // stacking context to the rest of the page.
    <div className='relative isolate'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]'
        style={{
          background:
            'radial-gradient(ellipse 120% 60% at 18% 0%, color-mix(in oklab, var(--color-mt-green) 6%, transparent), transparent 55%)',
        }}
      />
      <main className='mx-auto flex w-full max-w-[1024px] flex-col gap-[clamp(4rem,8vw,8rem)] px-6 pb-16 md:px-8'>
        <AboutHero />
        <HowItWorks />
        <ClosingCta />
        <Footer />
      </main>
    </div>
  );
}
