import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { SectionAnimate } from "./section-animate";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import problemImage from "figma:asset/106f1dd596e37509baec7f1d82ee8047793086df.png";
import heroImage from "figma:asset/00413c12f7b394f8a95ae07d5c61238f28edcd3e.png";
import testimonialsImage from "figma:asset/26145f2d7d13ce66997df6a134404c1f40648cb3.png";
import flowImage from "figma:asset/b269287ad961da5c26b40436e40d9308ffef9c59.png";
import unexpectedUseCasesImage from "figma:asset/6d3c70010140f28047d6c06bd248c425e6d114e2.png";

const fluidBase = "clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem)";
const fluidSmall = "clamp(0.8125rem, 0.78rem + 0.15vw, 1rem)";
const fluidH1 = "clamp(1.5rem, 1.3rem + 1vw, 2.25rem)";
const fluidH2 = "clamp(0.6875rem, 0.66rem + 0.12vw, 0.75rem)";
const fluidH3 = "clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem)";
const sectionGap = "clamp(2.5rem, 2rem + 2.5vw, 4rem)";
const innerGap = "clamp(0.75rem, 0.7rem + 0.25vw, 1rem)";

/* ── Data ─────────────────────────────────────────────── */

const metadata = [
  { label: "Role", value: "Creator — Design & Development" },
  { label: "Timeframe", value: "2016 – Present" },
  { label: "Platform", value: "Android" },
  { label: "Team", value: "Solo (with community contributors)" },
];

const snapshotRows = [
  {
    key: "What it is",
    value:
      "A scorekeeper app for board games, card games, and any activity that needs counting",
  },
  {
    key: "Audience",
    value:
      "Board game players, families, tabletop groups — anyone replacing pen & paper score tracking",
  },
  {
    key: "Key use cases",
    value:
      "Track scores for multiple players, use timers for turn-based games, sort players by rank, count anything",
  },
  { key: "Installs", value: "600K+ (organic, zero ad spend)" },
  {
    key: "Active users",
    value:
      "180K+ monthly active devices (grew from 109K to 170K in 2025 alone)",
  },
  {
    key: "Rating",
    value: "4.9 on Google Play (maintained consistently)",
  },
  {
    key: "Monetization",
    value: "Zero ads — and keeping it that way",
  },
];

const successCriteria = [
  "Time from launch to first score entry: under 10 seconds",
  "Maintain a 4.8+ rating on Google Play",
  "Grow through word-of-mouth only — zero marketing budget",
];

const impactStats = [
  { value: "600K+", label: "Installs" },
  { value: "180K+", label: "Monthly active users" },
  { value: "4.9", label: "Google Play rating" },
  { value: "$0", label: "Marketing spend" },
];

const proudOf = [
  "Sustained quality over nine years. This isn't a portfolio piece I shipped and forgot — it's a living product with 108 commits in 2025 alone, real users, and a 4.9 rating that has been maintained, not inflated by launch spikes.",
  "Growth without marketing. 600K installs driven entirely by product quality, word-of-mouth, and organic discovery. That's evidence that design decisions — simplicity, no ads, respect for the user — compound over time.",
  "Community impact. A contributor was inspired enough to build a web version. Others volunteer translations. The app has become something people care about beyond just using it, and that's the most meaningful signal I can point to.",
];

const doDifferently = [
  "Document the design process earlier. For years I iterated without saving artifacts. If I'd kept a design journal from the start, this case study would be richer with before/after evidence.",
  "Explore lightweight analytics sooner. Understanding which features are actually used (vs. requested) would have sharpened prioritization.",
  "Consider cross-platform earlier. The fan-made web version proved there's demand beyond Android — I should have explored that signal sooner.",
];


/* ── Reusable sub-components ──────────────────────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-muted-foreground tracking-widest uppercase"
      style={{ fontSize: fluidH2, lineHeight: 1.3, letterSpacing: "0.15em" }}
    >
      {children}
    </h2>
  );
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full rounded-xl bg-secondary flex items-center justify-center overflow-hidden"
      style={{ aspectRatio: "772 / 320" }}
    >
      <span
        className="text-muted-foreground text-center px-4"
        style={{ fontSize: "0.875rem", lineHeight: 1.4 }}
      >
        {label}
      </span>
    </div>
  );
}

function CalloutBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl bg-card border border-border p-5 sm:p-6 flex flex-col gap-2"
    >
      {children}
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
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          style={{ fontSize: fluidSmall, lineHeight: 1 }}
        >
          <ArrowLeft size={16} />
          Back to Home Page
        </Link>
      </SectionAnimate>

      {/* Title + intro */}
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
            Score Counter — From Side Project to 600K Installs with Zero
            Marketing
          </h1>
          <p
            className="text-muted-foreground"
            style={{ fontSize: fluidBase, lineHeight: 1.5 }}
          >
            I designed and built an Android utility app that grew entirely
            through product quality, reaching 180K+ monthly active users and a
            4.9 rating — without spending a dollar on marketing.
          </p>
        </div>
      </SectionAnimate>

      {/* Hero image */}
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

      {/* Metadata grid */}
      <SectionAnimate delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 rounded-xl bg-card border border-border p-5 sm:p-6">
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

      {/* Product Snapshot */}
      <SectionAnimate delay={0.12}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Product Snapshot</SectionHeading>
          <div className="overflow-x-auto">
            <table className="w-full" style={{ fontSize: "0.875rem", lineHeight: 1.4 }}>
              <tbody>
                {snapshotRows.map((row) => (
                  <tr key={row.key} className="border-b border-border">
                    <td
                      className="text-muted-foreground py-3 pr-4 whitespace-nowrap align-top"
                      style={{ minWidth: "7rem" }}
                    >
                      {row.key}
                    </td>
                    <td className="py-3 text-foreground/80">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionAnimate>

      {/* Context */}
      <SectionAnimate delay={0.14}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Context</SectionHeading>
          <div className="flex flex-col gap-4">
            <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
              Score Counter started in 2016 as a personal itch: I needed a
              simple way to track scores during board game nights without
              fumbling for pen and paper. At the time, I was transitioning from
              Android development to product design at Eventssion, so building a
              small utility app felt natural — a way to practice both craft and
              product thinking.
            </p>
            <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
              What surprised me was the demand. The app kept growing organically,
              year after year, eventually crossing 600K installs. Nine years
              later, I still maintain it — shipping updates, responding to user
              feedback, and treating it as a living product rather than a
              one-time release.
            </p>
          </div>
        </div>
      </SectionAnimate>

      {/* Problem & Goals */}
      <SectionAnimate delay={0.16}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Problem &amp; Goals</SectionHeading>
          <div className="flex flex-col gap-4">
            <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
              The core problem was straightforward: people playing board games,
              card games, or any group activity need a fast, reliable way to
              track scores. The existing solutions were either bloated with ads,
              overly complicated, or aesthetically dated.
            </p>
            <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
              My goal was to build something that felt effortless — an app that
              disappears into the background of a game night. Open it, add
              players, start counting. No onboarding walls, no ad interruptions,
              no unnecessary features.
            </p>
          </div>
        </div>
      </SectionAnimate>

      {/* Problem & Goals image */}
      <SectionAnimate delay={0.165}>
        <div className="-mx-4 sm:mx-0">
          <ImageWithFallback
            src={problemImage}
            alt="Star Realms card game counters alongside the Score Counter app interface showing player setup and score tracking"
            className="w-full rounded-none sm:rounded-xl"
            loading="lazy"
          />
        </div>
      </SectionAnimate>

      {/* Success criteria callout */}
      <SectionAnimate delay={0.17}>
        <CalloutBox>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
            <strong>Success criteria I set for myself:</strong>
          </p>
          <ul className="flex flex-col gap-1 pl-5 list-disc">
            {successCriteria.map((c, i) => (
              <li
                key={i}
                style={{ fontSize: "0.875rem", lineHeight: 1.6 }}
              >
                {c}
              </li>
            ))}
          </ul>
        </CalloutBox>
      </SectionAnimate>

      {/* My Role & Responsibilities */}
      <SectionAnimate delay={0.2}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>My Role &amp; Responsibilities</SectionHeading>
          <div className="flex flex-col gap-4">
            <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
              This is a solo project. I own everything: product strategy, UX/UI
              design, Android development, release management, and user support.
              Over the years, the community has contributed translations (the app
              now supports multiple languages), and one contributor was so
              inspired that he built an independent web version.
            </p>
            <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
              The dual hat — designer and developer — gives me an unusual
              feedback loop. I can validate a design decision in code within
              hours, ship it, and watch real usage data to confirm or correct
              course.
            </p>
          </div>
        </div>
      </SectionAnimate>

      {/* Design Principles */}
      <SectionAnimate delay={0.22}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Design Principles</SectionHeading>
          <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
            Three principles have guided every decision over nine years of building Score Counter. They work as both a creative compass and a set of constraints — especially when saying no to a feature request or resisting a monetization shortcut.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex flex-col gap-1">
              <h3 style={{ fontSize: fluidH3, lineHeight: 1.5 }}>
                <strong>Simplicity over feature richness</strong>
              </h3>
              <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
                The primary flow is three steps: open, add counters, count. Every feature request is measured against that loop — if it adds cognitive load to the core path, it doesn't ship. This constraint kept the app focused while competitors kept adding complexity.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 style={{ fontSize: fluidH3, lineHeight: 1.5 }}>
                <strong>Never show ads</strong>
              </h3>
              <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
                Not showing ads isn't just an ethical choice — it's a design constraint. Without ad placements competing for screen real estate, the UI has to earn its keep on usability alone. The result is a clean, fast experience that users trust enough to recommend, which is how the app grew to 600K installs with zero marketing spend.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 style={{ fontSize: fluidH3, lineHeight: 1.5 }}>
                <strong>Respect the platform ecosystem</strong>
              </h3>
              <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
                Score Counter follows Material Design conventions, supports the latest Android versions early (Android 16 compatibility shipped in 2025), and embraces community contributions for localization. Instead of fighting the platform, the app leans into it — which keeps maintenance sustainable and the experience native.
              </p>
            </div>
          </div>
        </div>
      </SectionAnimate>

      {/* Primary flow image */}
      <SectionAnimate delay={0.225}>
        <div className="-mx-4 sm:mx-0">
          <ImageWithFallback
            src={flowImage}
            alt="Hand-drawn primary flow diagram: 1. Open — 2. Add Counters — 3. Count"
            className="w-full rounded-none sm:rounded-xl"
            loading="lazy"
          />
        </div>
      </SectionAnimate>

      {/* Outcome & Impact */}
      <SectionAnimate delay={0.26}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Outcome &amp; Impact</SectionHeading>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {impactStats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-card border border-border p-4 sm:p-5 flex flex-col gap-1 items-center text-center"
              >
                <span
                  className="text-foreground"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)",
                    lineHeight: 1.3,
                  }}
                >
                  {s.value}
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
          <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
            Active devices grew from 109K in January 2025 to approximately 170K
            by year's end — a 56% increase in a single year, entirely organic.
            The app has inspired community contributions (translations, a
            fan-made web version) and remains a top-rated utility in its
            category.
          </p>
        </div>
      </SectionAnimate>

      {/* What I'm Proud Of */}
      <SectionAnimate delay={0.28}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>What I'm Proud Of</SectionHeading>
          <ul className="flex flex-col gap-3 pl-5 list-disc">
            {proudOf.map((item, i) => (
              <li
                key={i}
                className="text-foreground/80"
                style={{ fontSize: fluidBase, lineHeight: 1.7 }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </SectionAnimate>

      {/* Testimonials */}
      <SectionAnimate delay={0.29}>
        <div className="-mx-4 sm:mx-0">
          <ImageWithFallback
            src={testimonialsImage}
            alt="Collection of user testimonials: Bounchanh says 'Best score tracker on the planet hands down', Brandon Wong says 'I love the UX. Does what it needs to do', Lou P says 'Where's the 6 star button? That's all you need to know.'"
            className="w-full rounded-none sm:rounded-xl"
            loading="lazy"
          />
        </div>
      </SectionAnimate>

      {/* What I'd Do Differently */}
      <SectionAnimate delay={0.32}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>What I'd Do Differently</SectionHeading>
          <ul className="flex flex-col gap-3 pl-5 list-disc">
            {doDifferently.map((item, i) => (
              <li
                key={i}
                className="text-foreground/80"
                style={{ fontSize: fluidBase, lineHeight: 1.7 }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </SectionAnimate>

      {/* Bonus: Unexpected Use Cases */}
      <SectionAnimate delay={0.33}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Bonus: Unexpected Use Cases</SectionHeading>
          <div className="flex flex-col gap-4">
            <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
              I built Score Counter for board game nights. What I didn't expect was how far beyond that people would take it. Over the years, Play Store reviews and emails have revealed use cases I never designed for — scoring camogie matches in Ireland, counting beers, tracking vehicles on a road, and one user who created a tally called "little spoiled brats" to count every time a child annoyed them (227 reasons and counting).
            </p>
            <p className="text-foreground/80" style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
              These stories are my favorite proof that simplicity scales. When you build a tool that does one thing well and stays out of the way, people will find uses you never imagined.
            </p>
          </div>
        </div>
      </SectionAnimate>

      {/* Unexpected use cases image */}
      <SectionAnimate delay={0.34}>
        <div className="-mx-4 sm:mx-0">
          <ImageWithFallback
            src={unexpectedUseCasesImage}
            alt="Screenshot grid of real Play Store reviews showing unexpected use cases: scoring camogie matches in Ireland, counting beers, tracking children's annoyances, and keeping track of swearing in front of kids"
            className="w-full rounded-none sm:rounded-xl"
            loading="lazy"
          />
        </div>
      </SectionAnimate>

      {/* CTA */}
      <SectionAnimate delay={0.4}>
        <a
          href="https://play.google.com/store/apps/details?id=ua.napps.scorekeeper"
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
      <SectionAnimate delay={0.42}>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          style={{ fontSize: fluidSmall, lineHeight: 1 }}
        >
          <ArrowLeft size={16} />
          Back to Home Page
        </Link>
      </SectionAnimate>
    </div>
  );
}