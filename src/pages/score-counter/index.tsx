import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { useInView, useSpring, useTransform, motion } from "motion/react";
import { SectionAnimate } from "@/components/ui/section-animate";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { nbsp } from "@/lib/nbsp";
import { fluidLead, fluidBase, fluidSmall, fluidH1, fluidH3, sectionGap, innerGap } from "@/lib/typography";
import { SectionHeading, BoldLead, PullQuote } from "@/components/case-study/case-study-components";

const heroImage = "/images/score-counter-hero.png";
const evolutionImage = "/images/score-counter-evolution.png";
const flowImage = "/images/score-counter-flow.png";
const testimonialsImage = "/images/score-counter-testimonials.png";
const unexpectedUseCasesImage = "/images/score-counter-bonus.png";

/* ── Data ─────────────────────────────────────────────── */

const metadata = [
  { label: "Role", value: "Creator, Design & Development" },
  { label: "Timeframe", value: "2016 \u2013 Present" },
  { label: "Platform", value: "Android" },
  { label: "Team", value: "Solo (with\u00a0community contributors)" },
];

const impactStats = [
  { value: "870K", label: "Installs" },
  { value: "87.2K", label: "Monthly active users" },
  { value: "225K", label: "Avg. active devices" },
  { value: "4.9", label: "Google Play rating" },
];

const constraints = [
  {
    title: "Keep the business model out of the way",
    text: "No\u00a0ad placements means the\u00a0UI earns its keep on\u00a0usability alone: a\u00a0clean, fast experience users trust enough to\u00a0recommend.",
  },
  {
    title: "Respect the platform and the community",
    text: "Material Design conventions, early Android version support, and\u00a0community-driven localization keep the\u00a0app native and\u00a0maintainable.",
  },
];

const whatWorked = [
  "The constraint stayed easy to explain. The app has one job, and the three-step flow made it clear which requests belonged and which ones did not.",
  "Trust became distribution. No ads, low friction, and familiar Android patterns made the app easy to recommend.",
  "Unexpected uses stayed possible. Because the app did not become a board-game-only tool, people used it for sports, habits, jokes, and household counting.",
];

const whatIdChange = [
  "Document decisions as they happen. Building Score Counter taught me this the hard way. My ideation process now lives in Figma from day one, and the app has used git version control from the start.",
  "Keep a hand on product health. I now use Crashlytics to monitor app stability and crash patterns. No plans for complex analytics, but enough to make informed decisions about what's working.",
  "Follow cross-platform demand signals earlier. The fan-made web version proved there's demand beyond Android. I explored building an iOS version with AI tools, but SwiftUI code generation wasn't there yet in 2025. The project is on hold while I look for a human iOS developer to collaborate with.",
];

/* ── Local sub-components ──────────────────────────────── */

/** Parse a display value like "870K", "4.9" into parts for animation */
function parseStatValue(display: string): {
  prefix: string;
  numericValue: number;
  suffix: string;
  decimals: number;
} {
  const match = display.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return { prefix: "", numericValue: 0, suffix: display, decimals: 0 };
  const prefix = match[1];
  const num = parseFloat(match[2]);
  const suffix = match[3];
  const decimalPart = match[2].split(".")[1];
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
  const { prefix, numericValue, suffix, decimals } = parseStatValue(displayValue);
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => {
    const rounded = decimals > 0
      ? current.toFixed(decimals)
      : Math.round(current).toLocaleString();
    return `${prefix}${rounded}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, spring, numericValue]);

  return <motion.span style={{ fontVariantNumeric: "tabular-nums" }}>{display}</motion.span>;
}

function ImpactStatsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
      {impactStats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl bg-card card-shadow p-4 sm:p-5 flex flex-col gap-1 items-center text-center"
        >
          <span
            className="text-foreground"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)",
              lineHeight: 1.3,
            }}
          >
            <AnimatedStatValue displayValue={s.value} isInView={isInView} />
          </span>
          <span
            className="text-muted-foreground"
            style={{ fontSize: "0.75rem", lineHeight: 1.3 }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export function ScoreCounterPage() {
  return (
    <div className="flex flex-col" style={{ gap: sectionGap }}>
      {/* Back link */}
      <SectionAnimate delay={0}>
        <Link
          to="/"
          data-goatcounter-click="back-to-home-top"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          style={{ fontSize: fluidSmall, lineHeight: 1 }}
        >
          <RiArrowLeftLine size={16} />
          Back to Home Page
        </Link>
      </SectionAnimate>

      {/* ── Section 1: Hero ── */}
      <SectionAnimate delay={0.05}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: fluidH1,
              lineHeight: 1.25,
              letterSpacing: "-0.025em",
            }}
          >
            {nbsp("Score Counter: Keeping a simple app simple for 870K installs")}
          </h1>
          <p
            className="text-muted-foreground"
            style={{ fontSize: fluidLead, lineHeight: 1.5 }}
          >
            {nbsp("I built Score Counter as a side project in 2016. Nine years later, it has 870K installs, 87.2K monthly active users, and a 4.9 rating on Google Play. The design challenge was not adding more. It was protecting the simple flow that made people trust it.")}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.08}>
        <div className="-mx-4 sm:mx-0">
          <ImageWithFallback
            src={heroImage}
            alt="Five smartphone screens showcasing Score Counter app features: player scores, dice roller, calculator input, and timer"
            className="w-full rounded-none sm:rounded-xl"
            loading="eager"
          />
        </div>
      </SectionAnimate>

      {/* ── Section 2: Context ── */}
      <SectionAnimate delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 rounded-xl bg-card card-shadow p-5 sm:p-6">
          {metadata.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <span
                className="text-muted-foreground tracking-wide uppercase"
                style={{ fontSize: "0.75rem", lineHeight: 1.3 }}
              >
                {m.label}
              </span>
              <span style={{ fontSize: "0.875rem", lineHeight: 1.4 }}>
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.12}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Context</SectionHeading>
          <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
            {nbsp("Score Counter is an Android app for tracking scores during board games, card games, and any group activity that needs counting. It serves everyone from families at game night to tabletop groups and anyone replacing pen and paper.")}
          </p>
          <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
            {nbsp("I built it as a solo side project, without ads or marketing spend. Over time, the app grew through search, recommendations, translations from volunteers, and people using it for things I never planned.")}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.14}>
        <div className="-mx-4 sm:mx-0">
          <ImageWithFallback
            src={evolutionImage}
            alt="Side-by-side comparison of Score Counter in 2018 (numbered rows with colored backgrounds and arrow controls) and 2025 (full-bleed player cards with large +/\u2212 buttons and named counters)"
            className="w-full rounded-none sm:rounded-xl"
            loading="lazy"
          />
        </div>
      </SectionAnimate>

      {/* ── Section 3: Problem ── */}
      <SectionAnimate delay={0.16}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Problem</SectionHeading>
          <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
            {nbsp("Score Counter looked simple, but simplicity became harder to protect as the app grew. Users kept asking for saved sessions, deeper customization, and game-specific features. Some of those requests were useful, but many would have turned the app into something slower and narrower. The design problem was deciding what not to build.")}
          </p>
          <PullQuote>
            {nbsp("How do you keep an app dead-simple when users keep asking for features that sound reasonable on their own?")}
          </PullQuote>
        </div>
      </SectionAnimate>

      {/* ── Section 4: Approach ── */}
      <SectionAnimate delay={0.18}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Approach</SectionHeading>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3 style={{ fontSize: fluidH3, fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.005em" }}>
                Protect the three-step flow
              </h3>
              <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
                {nbsp("The primary flow is sacred: open the app, add counters, start counting. Every feature request gets measured against that loop. If it adds a step or a decision to the core path, it doesn\u2019t ship. This single constraint is what kept Score Counter focused while competitors kept adding complexity. It is also why users describe the experience as \u2018does what it needs to do.\u2019")}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 style={{ fontSize: fluidH3, fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.005em" }}>
                Say no when a feature narrows the product
              </h3>
              <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
                {nbsp("One of the most requested features was the ability to save an active game session and load it later. I said no. Shipping it would have fixed Score Counter conceptually as a board game companion, which is narrower than what it actually is. People use it to count anything, not just board game scores. Adding save/load would also mean extra steps before starting a quick session, breaking the three-step flow for a feature that serves only a subset of users.")}
              </p>
            </div>
          </div>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.2}>
        <div className="-mx-4 sm:mx-0">
          <ImageWithFallback
            src={flowImage}
            alt="Hand-drawn primary flow diagram: 1. Open, 2. Add Counters, 3. Count"
            className="w-full rounded-none sm:rounded-xl"
            loading="lazy"
          />
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.22}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <div className="flex flex-col gap-4">
            {constraints.map((c) => (
              <div key={c.title} className="flex flex-col gap-1">
                <h3 style={{ fontSize: fluidH3, fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.005em" }}>
                  {c.title}
                </h3>
                <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionAnimate>

      {/* ── Section 5: Result ── */}
      <SectionAnimate delay={0.24}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Result</SectionHeading>
          <ImpactStatsGrid />
          <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
            {nbsp("870K installs came through word-of-mouth alone, with no ads and no marketing spend. Volunteers have contributed translations, a developer built a fan web version, and the app still holds a 4.9 rating after nine years. The product lesson is simple: build something people trust enough to recommend.")}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.26}>
        <Link
          to="/work/score-counter/reviews"
          data-goatcounter-click="testimonials-see-all-reviews"
          className="-mx-4 sm:mx-0 block group"
        >
          <ImageWithFallback
            src={testimonialsImage}
            alt="Collection of user testimonials: Bounchanh says 'Best score tracker on the planet hands down', Brandon Wong says 'I love the UX. Does what it needs to do', Lou P says 'Where's the 6 star button? That's all you need to know.'"
            className="w-full rounded-none sm:rounded-xl transition-opacity group-hover:opacity-90"
            loading="lazy"
          />
        </Link>
      </SectionAnimate>

      <SectionAnimate delay={0.28}>
        <PullQuote>
          {nbsp("One user created a tally called \"little spoiled brats\" to count every time a child annoyed them: 227 reasons and counting. When you build a tool that does one thing well and stays out of the way, people find uses you never imagined.")}
        </PullQuote>
      </SectionAnimate>

      <SectionAnimate delay={0.3}>
        <div className="-mx-4 sm:mx-0">
          <ImageWithFallback
            src={unexpectedUseCasesImage}
            alt="Screenshot grid of real Play Store reviews showing unexpected use cases: scoring camogie matches in Ireland, counting beers, tracking children's annoyances, and keeping track of swearing in front of kids"
            className="w-full rounded-none sm:rounded-xl"
            loading="lazy"
          />
        </div>
      </SectionAnimate>

      {/* ── Section 6: Reflection ── */}
      <SectionAnimate delay={0.32}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Reflection</SectionHeading>
          <div className="flex flex-col gap-2">
            <p style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
              <strong>What worked:</strong>
            </p>
            <ul className="flex flex-col gap-3 pl-5 list-disc">
              {whatWorked.map((item, i) => (
                <li
                  key={i}
                  className="text-foreground/80"
                  style={{ fontSize: fluidBase, lineHeight: 1.7 }}
                >
                  <BoldLead text={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
              <strong>What I'd change:</strong>
            </p>
            <ul className="flex flex-col gap-3 pl-5 list-disc">
              {whatIdChange.map((item, i) => (
                <li
                  key={i}
                  className="text-foreground/80"
                  style={{ fontSize: fluidBase, lineHeight: 1.7 }}
                >
                  <BoldLead text={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionAnimate>

      {/* ── CTA ── */}
      <SectionAnimate delay={0.34}>
        <a
          href="https://play.google.com/store/apps/details?id=ua.napps.scorekeeper"
          data-goatcounter-click="outbound-play-store"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
          style={{ fontSize: fluidSmall, lineHeight: 1 }}
        >
          Get it on Google Play
          <span aria-hidden>↗</span>
        </a>
      </SectionAnimate>

      {/* Bottom back link */}
      <SectionAnimate delay={0.36}>
        <div className="flex items-center justify-between">
          <Link
            to="/"
            data-goatcounter-click="back-to-home-bottom"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            style={{ fontSize: fluidSmall, lineHeight: 1 }}
          >
            <RiArrowLeftLine size={16} />
            Back to Home Page
          </Link>
          <Link
            to="/work/design-system"
            data-goatcounter-click="next-case-study"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            style={{ fontSize: fluidSmall, lineHeight: 1 }}
          >
            Next Case Study
            <RiArrowRightLine size={16} />
          </Link>
        </div>
      </SectionAnimate>
    </div>
  );
}
