import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';
import {
  useInView,
  useReducedMotion,
  useSpring,
  useTransform,
  motion,
} from 'motion/react';
import { SectionAnimate } from '@/components/ui/section-animate';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { Magnetic } from '@/components/core/magnetic';
import { nbsp } from '@/lib/nbsp';
import {
  fluidLead,
  fluidBase,
  fluidSmall,
  fluidStat,
  fluidH1,
  sectionGap,
  innerGap,
} from '@/lib/typography';
import {
  SectionHeading,
  SubHeading,
  PullQuote,
  highlight,
} from '@/components/case-study/case-study-components';

const SUBJECT = 'Score Counter';

const heroImage = '/images/score-counter-hero.jpg';
const evolutionImage = '/images/score-counter-evolution.png';
const flowVideo = '/videos/score-counter-flow.mp4';
const testimonialsImage = '/images/score-counter-testimonials.png';
const unexpectedUseCasesVideo = '/videos/score-counter-bonus.mp4';

/* ── Data ─────────────────────────────────────────────── */

const metadata = [
  { label: 'Role', value: 'Creator' },
  { label: 'Timeframe', value: '2016\u2013present' },
  { label: 'Platform', value: 'Android' },
  { label: 'Team', value: 'Solo' },
];

const impactStats = [
  { value: '1M+', label: 'Installs' },
  { value: '100K', label: 'Monthly active users' },
  { value: '225K', label: 'Avg. active devices' },
  { value: '4.9', label: 'Google Play rating' },
];

const constraints = [
  {
    title: 'Keep the business model out of the way',
    text: 'No\u00a0ad placements means the\u00a0UI earns its keep on\u00a0usability alone: a\u00a0clean, fast experience users trust enough to\u00a0recommend.',
  },
  {
    title: 'Respect the platform and the community',
    text: 'Material Design conventions, early Android version support, and\u00a0community-driven localization keep the\u00a0app native and\u00a0maintainable.',
  },
];

const whatWorked = [
  {
    label: 'The constraint stayed easy to explain',
    body: 'The app has one job and the three-step flow made it clear which requests belonged and which ones did not.',
  },
  {
    label: 'Trust became distribution',
    body: 'No ads, low friction and familiar Android patterns made the app easy to recommend.',
  },
  {
    label: 'Unexpected uses stayed possible',
    body: 'Because the app did not become a board-game-only tool, people used it for sports, habits, jokes and household counting.',
  },
];

const whatIdChange = [
  {
    label: 'Document decisions as they happen',
    body: 'Building Score Counter taught me this the hard way. My ideation process now lives in Figma from day one and the app has used git version control from the start.',
  },
  {
    label: 'Keep a hand on product health',
    body: "I now use Crashlytics to monitor app stability and crash patterns. No plans for complex analytics, but enough to make informed decisions about what's working.",
  },
  {
    label: 'Follow cross-platform demand signals earlier',
    body: "The fan-made web version proved there's demand beyond Android. I explored building an iOS version with AI tools, but SwiftUI code generation wasn't there yet in 2025. The project is on hold while I look for a human iOS developer to collaborate with.",
  },
];

/* ── Local sub-components ──────────────────────────────── */

/** Parse a display value like "900K", "4.9" into parts for animation */
function parseStatValue(display: string): {
  prefix: string;
  numericValue: number;
  suffix: string;
  decimals: number;
} {
  const match = display.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match)
    return { prefix: '', numericValue: 0, suffix: display, decimals: 0 };
  const prefix = match[1];
  const num = parseFloat(match[2]);
  const suffix = match[3];
  const decimalPart = match[2].split('.')[1];
  const decimals = decimalPart ? decimalPart.length : 0;
  return { prefix, numericValue: num, suffix, decimals };
}

function AnimatedStatValue({
  displayValue,
  isInView,
}: {
  displayValue: string;
  isInView: boolean;
}) {
  const { prefix, numericValue, suffix, decimals } =
    parseStatValue(displayValue);
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => {
    const rounded =
      decimals > 0 ?
        current.toFixed(decimals)
      : Math.round(current).toLocaleString();
    return `${prefix}${rounded}${suffix}`;
  });

  const prefersReducedMotion = useReducedMotion();
  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      spring.jump(numericValue);
    } else {
      spring.set(numericValue);
    }
  }, [isInView, prefersReducedMotion, spring, numericValue]);

  return (
    <motion.span style={{ fontVariantNumeric: 'tabular-nums' }}>
      {display}
    </motion.span>
  );
}

function ImpactStatsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className='grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4'>
      {impactStats.map((s) => (
        <div
          key={s.label}
          className='rounded-xl bg-card card-shadow p-4 sm:p-5 flex flex-col gap-1 items-center text-center'>
          <span
            className='text-foreground'
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: fluidStat,
              lineHeight: 1.3,
            }}>
            <AnimatedStatValue displayValue={s.value} isInView={isInView} />
          </span>
          <span className='text-xs leading-[1.3] text-muted-foreground'>
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function LabeledList({ items }: { items: { label: string; body: string }[] }) {
  return (
    <ol className='flex flex-col gap-4 pl-6 my-4 list-decimal'>
      {items.map((item, i) => (
        <li
          key={i}
          className='text-foreground/80'
          style={{
            fontSize: fluidBase,
            lineHeight: 1.6,
            letterSpacing: '-0.011em',
          }}>
          <strong>{nbsp(item.label)}:</strong>
          <br />
          {highlight(item.body, SUBJECT)}
        </li>
      ))}
    </ol>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export function ScoreCounterPage() {
  return (
    <div className='flex flex-col' style={{ gap: sectionGap }}>
      {/* ── Section 1: Hero ── */}
      <SectionAnimate delay={0.05}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: fluidH1,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
            }}>
            {nbsp('The most loved counter app on Android')}
          </h1>
          <p style={{ fontSize: fluidLead, lineHeight: 1.6 }}>
            {nbsp(
              'Built a simple utility app for mobile devices. It grew to 1M+ installs mostly thanks to the best UX in its category.',
            )}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.08}>
        <div className='-mx-4 sm:mx-0'>
          <ImageWithFallback
            src={heroImage}
            alt='Five smartphone screens showcasing Score Counter app features: player scores, dice roller, calculator input and timer'
            className='w-full rounded-none sm:rounded-xl'
            loading='eager'
          />
        </div>
      </SectionAnimate>

      {/* ── Section 2: Context ── */}
      <SectionAnimate delay={0.1}>
        <dl className='grid grid-cols-2 sm:grid-cols-4 gap-6 rounded-xl bg-card card-shadow p-5 sm:p-6'>
          {metadata.map((m) => (
            <div key={m.label} className='flex flex-col gap-1'>
              <dt className='text-xs leading-[1.3] font-medium text-muted-foreground tracking-wide uppercase'>
                {m.label}
              </dt>
              <dd className='text-sm leading-[1.4]'>{m.value}</dd>
            </div>
          ))}
        </dl>
      </SectionAnimate>

      <SectionAnimate delay={0.12}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <SectionHeading>Context</SectionHeading>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {highlight(
              'Score Counter is an Android app for tracking scores during board games, card games and any group activity that needs counting. It serves everyone from families at game night to tabletop groups and anyone replacing pen and paper.',
              SUBJECT,
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'The idea was personal. I wanted a clean way to keep score during board game nights, but every app I tried was clunky, ad-heavy, or buried the basics under settings. I had no development experience at the time — but I couldn’t settle for what was out there, so I taught myself enough Android to build and eventually release, the version I actually wanted to use.',
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'What started as a side project grew on its own — no ads, no marketing spend. Over time, search, word of mouth, volunteer translations and people using it for things I never planned turned it into something much bigger.',
            )}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.14}>
        <div className='-mx-4 sm:mx-0'>
          <ImageWithFallback
            src={evolutionImage}
            alt='Side-by-side comparison of Score Counter in 2018 (numbered rows with colored backgrounds and arrow controls) and 2025 (full-bleed player cards with large +/\u2212 buttons and named counters)'
            className='w-full rounded-none sm:rounded-xl'
            loading='lazy'
          />
        </div>
      </SectionAnimate>

      {/* ── Section 3: Problem ── */}
      <SectionAnimate delay={0.16}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <SectionHeading>Problem</SectionHeading>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {highlight(
              'Score Counter looked simple, but simplicity became harder to protect as the app grew. Users kept asking for saved sessions, deeper customization and game-specific features. Some of those requests were useful, but many would have turned the app into something slower and narrower. The design problem was deciding what not to build.',
              SUBJECT,
            )}
          </p>
          <PullQuote>
            {nbsp(
              'How do you keep an app dead-simple when users keep asking for features that sound reasonable on their own?',
            )}
          </PullQuote>
        </div>
      </SectionAnimate>

      {/* ── Section 4: Approach ── */}
      <SectionAnimate delay={0.18}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <SectionHeading>Approach</SectionHeading>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1'>
              <SubHeading>Protect the three-step flow</SubHeading>
              <p
                className='text-foreground/80'
                style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
                {highlight(
                  'The primary flow is sacred: open the app → add counters → start counting. Every feature request gets measured against that loop. If it adds a step or a decision to the core path, it doesn\u2019t ship. This single constraint is what kept Score Counter focused while competitors kept adding complexity. It is also why users describe the experience as \u2018does what it needs to do.\u2019',
                  SUBJECT,
                )}
              </p>
            </div>
            <div className='flex flex-col gap-1'>
              <SubHeading>Say no when a feature narrows the product</SubHeading>
              <p
                className='text-foreground/80'
                style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
                {highlight(
                  'One of the most requested features was the ability to save an active game session and load it later. I said no. Shipping it would have fixed Score Counter conceptually as a board game companion, which is narrower than what it actually is. People use it to count anything, not just board game scores. Adding save/load would also mean extra steps before starting a quick session, breaking the three-step flow for a feature that serves only a subset of users.',
                  SUBJECT,
                )}
              </p>
            </div>
          </div>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.2}>
        <div className='-mx-4 sm:mx-0'>
          <video
            src={flowVideo}
            className='w-full rounded-none sm:rounded-xl'
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.22}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <div className='flex flex-col gap-4'>
            {constraints.map((c) => (
              <div key={c.title} className='flex flex-col gap-1'>
                <SubHeading>{c.title}</SubHeading>
                <p
                  className='text-foreground/80'
                  style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionAnimate>

      {/* ── Section 5: Result ── */}
      <SectionAnimate delay={0.24}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <SectionHeading>Result</SectionHeading>
          <ImpactStatsGrid />
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              '1M+ installs came through best UX and organic installs. The app still holds a 4.9 rating after nine years. The product lesson is simple: build something people trust enough to recommend.',
            )}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.26}>
        <Link
          to='/work/score-counter/reviews'
          data-goatcounter-click='testimonials-see-all-reviews'
          className='-mx-4 sm:mx-0 block group rounded-none sm:rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'>
          <ImageWithFallback
            src={testimonialsImage}
            alt="Collection of user testimonials: Bounchanh says 'Best score tracker on the planet hands down', Brandon Wong says 'I love the UX. Does what it needs to do', Lou P says 'Where's the 6 star button? That's all you need to know.'"
            className='w-full rounded-none sm:rounded-xl transition-opacity group-hover:opacity-90'
            loading='lazy'
          />
        </Link>
      </SectionAnimate>

      <SectionAnimate delay={0.28}>
        <PullQuote>
          {nbsp(
            'One user created a tally called "little spoiled brats" to count every time a child annoyed them: 227 reasons and counting. When you build a tool that does one thing well and stays out of the way, people find uses you never imagined.',
          )}
        </PullQuote>
      </SectionAnimate>

      <SectionAnimate delay={0.3}>
        <div className='-mx-4 sm:mx-0'>
          <video
            src={unexpectedUseCasesVideo}
            className='w-full rounded-none sm:rounded-xl'
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </SectionAnimate>

      {/* ── Section 6: Reflection ── */}
      <SectionAnimate delay={0.32}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <SectionHeading>Reflection</SectionHeading>
          <div className='flex flex-col gap-2'>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {highlight(
                'A few choices still explain why Score Counter kept growing without becoming heavier. The best ones were not clever features; they were constraints I could repeat every time a new request arrived.',
                SUBJECT,
              )}
            </p>
            <LabeledList items={whatWorked} />
          </div>
          <div className='flex flex-col gap-2'>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'The parts I would revisit are mostly about operating the product with more discipline. The app survived because it stayed simple, but its history taught me to capture decisions, health signals and platform demand earlier.',
              )}
            </p>
            <LabeledList items={whatIdChange} />
          </div>
        </div>
      </SectionAnimate>

      {/* ── CTA ── */}
      <SectionAnimate delay={0.34}>
        <Magnetic>
          <a
            href='https://play.google.com/store/apps/details?id=ua.napps.scorekeeper'
            data-goatcounter-click='outbound-play-store'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-4 py-2.5 bg-foreground text-background rounded-lg hover:opacity-90 focus-visible:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
            style={{ fontSize: fluidSmall, lineHeight: 1 }}>
            Get it on Google Play
            <span aria-hidden>↗</span>
          </a>
        </Magnetic>
      </SectionAnimate>

      {/* Bottom back link */}
      <SectionAnimate delay={0.36}>
        <div className='flex items-center justify-between'>
          <Link
            to='/'
            data-goatcounter-click='back-to-home-bottom'
            className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground focus-visible:text-foreground transition-colors'
            style={{ fontSize: fluidSmall, lineHeight: 1 }}>
            <RiArrowLeftLine size={16} />
            Home
          </Link>
          <Link
            to='/work/design-system'
            data-goatcounter-click='next-case-study'
            className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground focus-visible:text-foreground transition-colors'
            style={{ fontSize: fluidSmall, lineHeight: 1 }}>
            Next work
            <RiArrowRightLine size={16} />
          </Link>
        </div>
      </SectionAnimate>
    </div>
  );
}
