import { Link } from "react-router";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { SectionAnimate } from "@/components/ui/section-animate";
import { navigateWithTransition } from "@/lib/page-transition";
import { nbsp } from "@/lib/nbsp";
import {
  fluidLead,
  fluidBase,
  fluidSmall,
  fluidH1,
  sectionGap,
  innerGap,
} from "@/lib/typography";
import {
  SectionHeading,
  PullQuote,
  ConfidentialityNote,
  highlight,
} from "@/components/case-study/case-study-components";

const SUBJECT = "Yesim";
import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";

/* ── Data ─────────────────────────────────────────────── */

const metadata = [
  { label: "Role", value: "Product Designer" },
  { label: "Timeframe", value: "Jan 2026" },
  { label: "Platform", value: "Web (B2B)" },
  { label: "Team", value: "PM · Engineers" },
];

const statusQuoItems = [
  {
    label: "Color-dependent UI",
    body: "a partner can pick almost any brand color. A mockup shows the one I chose. The product has to keep text readable on whatever they choose.",
  },
  {
    label: "Conditional sections",
    body: "the contact card appears only when there is contact info. The promotion badge has a toggle. The footer comes and goes. Static screens turn that into a pile of variants.",
  },
  {
    label: "File uploads",
    body: "logos and banners reshape the preview. Aspect ratios vary, fallbacks matter, and the layout needs to survive real assets.",
  },
];

const prototypeFeatures = [
  {
    label: "Live form-to-preview binding",
    body: "brand name, logo, color, banner, contact details, and policy links update the preview as the partner types",
  },
  {
    label: "Mobile and desktop preview modes",
    body: "the preview switches between an iPhone shell and a desktop browser frame",
  },
  {
    label: "Automatic contrast handling",
    body: "text color on brand backgrounds comes from a luminance function instead of a hardcoded choice",
  },
  {
    label: "File handling",
    body: "logo and banner uploads render immediately in the preview, with clear and replace controls",
  },
  {
    label: "Validation",
    body: "email format, URL structure, and brand alias cleanup happen inline, before save",
  },
  {
    label: "Dirty-state tracking",
    body: "the form warns before navigation when changes are unsaved, and save/reset work per section",
  },
  {
    label: "Loading states and transitions",
    body: "skeleton screens and CSS transitions make the preview feel closer to the product",
  },
];

const impactItems = [
  {
    label: "Zero contrast-related QA issues",
    body: "the luminance logic was tested in the prototype instead of being discovered during review",
  },
  {
    label: "Stakeholder alignment in one session",
    body: "PMs and partners tested the prototype directly instead of reviewing annotated screens for another round",
  },
  {
    label: "Less translation for development",
    body: "the prototype used the same stack as production (Next.js, Tailwind), so the developer could extend it instead of rebuilding from a mockup",
  },
  {
    label: "Edge cases handled by default",
    body: "conditional rendering and validation logic covered the state combinations inside the prototype itself",
  },
];

const whatWorked = [
  {
    label: "The medium enforced rigor",
    body: "Code doesn\u2019t let you hand-wave for long. Every state, color, and conditional is either handled or it breaks. That pressure made the design better.",
  },
  {
    label: "Stakeholders engaged differently",
    body: "When people can type into a prototype and see the result, the feedback shifts to behavior. People ask what happens when a field is blank instead of debating a static screen.",
  },
  {
    label: "The prototype became the spec",
    body: "There was no separate document explaining how the form and preview should interact. The developer could read the behavior in the code instead of translating a PDF.",
  },
];

const whatIdChange = [
  {
    label: "Pair with a developer from day one",
    body: "I built this solo, which worked for a focused feature but would not scale well. A developer in the room earlier would have caught a few structural choices I made like a designer.",
  },
  {
    label: "Keep a lightweight Figma file for visual exploration",
    body: "Code is a clumsy place for early divergent thinking. I should have sketched in Figma first, then moved to code once the direction was clearer.",
  },
  {
    label: "Document the \u201cwhy\u201d alongside the code",
    body: "The prototype shows what happens, but not always why. Short decision notes would have helped future teammates understand the intent behind the implementation.",
  },
];

/* ── Local sub-components ──────────────────────────────── */

function LabeledList({ items }: { items: { label: string; body: string }[] }) {
  return (
    <ol className="flex flex-col gap-2 pl-5 list-decimal">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-foreground/80"
          style={{ fontSize: fluidBase, lineHeight: 1.7 }}
        >
          <strong>{nbsp(item.label)}</strong>
          {": "}
          {nbsp(item.body)}
        </li>
      ))}
    </ol>
  );
}

function PrototypeLaunchIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-12 shrink-0 transition-transform duration-200 group-hover:scale-[1.04] sm:size-14"
    >
      <g clipPath="url(#prototype-launch-icon-clip)">
        <path
          d="M92 61.392V11.652C92 11.1495 91.901 10.6519 91.7085 10.1877C91.5161 9.72349 91.2341 9.30176 90.8786 8.94661C90.523 8.59147 90.101 8.30988 89.6366 8.11794C89.1722 7.926 88.6745 7.82748 88.172 7.82801H7.828C6.81344 7.828 5.84038 8.23076 5.12261 8.94779C4.40483 9.66481 4.00106 10.6374 4 11.652V61.392H92Z"
          fill="#FF4552"
        />
        <path
          d="M80.52 7.828H7.828C6.81344 7.828 5.84038 8.23076 5.12261 8.94778C4.40483 9.66481 4.00106 10.6374 4 11.652V61.392H26.96L80.52 7.828Z"
          fill="#FFADB3"
        />
        <path
          d="M4 61.392V69.044C4.00106 70.0586 4.40483 71.0312 5.12261 71.7482C5.84038 72.4652 6.81344 72.868 7.828 72.868H88.176C89.1899 72.8669 90.1619 72.4637 90.8788 71.7468C91.5957 71.0299 91.9989 70.0579 92 69.044V61.392H4Z"
          fill="white"
        />
        <path
          d="M59.48 88.172C56.0151 83.7955 54.0078 78.4437 53.74 72.868H42.26C41.9922 78.4437 39.985 83.7955 36.52 88.172H59.48Z"
          fill="#B2B2B2"
          stroke="#191919"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.776 88.176H65.212M4 61.392H92M38.432 26.96V34.608M57.56 26.96V34.608M88.176 7.828H7.828C6.81344 7.828 5.84038 8.23076 5.12261 8.94778C4.40483 9.66481 4.00106 10.6374 4 11.652V69.044C4 71.156 5.712 72.868 7.828 72.868H88.176C89.1899 72.8669 90.1619 72.4637 90.8788 71.7468C91.5957 71.0299 91.9989 70.0579 92 69.044V11.652C92 10.6378 91.5971 9.66517 90.88 8.94803C90.1628 8.23089 89.1902 7.828 88.176 7.828Z"
          stroke="#191919"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M63.304 44.176C59.0637 47.8752 53.6271 49.9133 48 49.9133C42.3729 49.9133 36.9363 47.8752 32.696 44.176"
          stroke="#191919"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="prototype-launch-icon-clip">
          <rect width={96} height={96} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export function WhiteLabelEsimPage() {
  return (
    <div className="flex flex-col" style={{ gap: sectionGap }}>
      {/* ── 1. Hero + TL;DR ────────────────────────────── */}
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
            White-label eSIM configurator: working prototype in hours instead of
            static mockups
          </h1>
          <p
            className="text-muted-foreground"
            style={{ fontSize: fluidLead, lineHeight: 1.5 }}
          >
            {nbsp(
              "I built a working prototype instead of another static Figma handoff. It exposed the states, edge cases, and interaction rules that mockups usually hide, and gave the team something closer to the final product.",
            )}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.08}>
        <div className="-mx-4 sm:mx-0">
          <ImageWithFallback
            src="/images/white-label-esim-hero.png"
            alt="Interactive prototype overview with form and live preview"
            className="w-full rounded-none sm:rounded-xl"
            loading="eager"
          />
        </div>
      </SectionAnimate>

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

      <SectionAnimate delay={0.11}>
        <ConfidentialityNote />
      </SectionAnimate>

      {/* ── 2. Context ─────────────────────────────────── */}
      <SectionAnimate delay={0.12}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Context</SectionHeading>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}
          >
            {highlight(
              "Yesim is a global eSIM platform with over 3\u00a0million customers. One B2B product lets opted-in partners upload a logo, pick brand colors, add contact details, and preview the eSIM experience their customers will see.",
              SUBJECT,
            )}
          </p>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}
          >
            {nbsp(
              "Before this work, the handoff pattern was familiar: design screens in Figma, annotate the edge cases, hand them to development, then spend review cycles catching things the static file could not express. That workflow was manageable for simple pages. It was much weaker for a product where the UI changes based on real partner input.",
            )}
          </p>
        </div>
      </SectionAnimate>

      {/* ── 3. Problem ─────────────────────────────────── */}
      <SectionAnimate delay={0.14}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Problem</SectionHeading>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}
          >
            {nbsp(
              "This customization screen was all response. Brand colors changed text contrast. Optional fields hid or revealed sections. File uploads changed the layout. A Figma mockup could show one clean state, but the product had to survive many.",
            )}
          </p>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}
          >
            {nbsp(
              "I had run into this before. I would hand off polished screens, then watch implementation surface the real problems: contrast failures on dark brand colors, empty states nobody designed, layout shifts when optional content appeared or disappeared. The mockup looked right. The built product did not behave right.",
            )}
          </p>
          <PullQuote>
            {nbsp(
              "How do we design a B2B customization flow so the artifact captures the behavior, not only the pixels?",
            )}
          </PullQuote>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}
          >
            {nbsp("For brand customization, the weak spots were predictable:")}
          </p>
          <LabeledList items={statusQuoItems} />
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}
          >
            {nbsp(
              "The risk was not that the screen would look bad in Figma. The risk was that it would look right there and fail under real input.",
            )}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.16}>
        <div className="-mx-4 sm:mx-0">
          <ImageWithFallback
            src="/images/white-label-esim-problem.png"
            alt="Static mockup compared with real input showing contrast and layout issues"
            className="w-full rounded-none sm:rounded-xl"
          />
        </div>
      </SectionAnimate>

      {/* ── 4. Approach ────────────────────────────────── */}
      <SectionAnimate delay={0.18}>
        <div className="flex flex-col" style={{ gap: sectionGap }}>
          {/* Decision 1: Code, not Figma */}
          <div className="flex flex-col" style={{ gap: innerGap }}>
            <SectionHeading>Approach</SectionHeading>
            <strong>
              Build the artifact where behavior had to work
            </strong>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "I designed directly in Next.js and Tailwind CSS instead of producing static screens. I wasn\u2019t skipping design. I was putting it somewhere the interaction constraints had to be dealt with.",
              )}
            </p>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "In Figma, you can place white text on a blue background and move on. In code, the text is either readable or it isn\u2019t. If partners can pick their own colors, the logic has to handle that.",
              )}
            </p>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "The trade-off was obvious: more effort upfront and a slower first pass. The upside was worth it. The awkward problems showed up while I was still designing.",
              )}
            </p>
          </div>

          {/* Decision 2: Contrast at the system level */}
          <div className="flex flex-col" style={{ gap: innerGap }}>
            <strong>
              Make contrast executable
            </strong>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "The prototype computes foreground text color from the partner\u2019s brand color using WCAG relative-luminance calculations. Light brand colors get dark text. Dark brand colors get white text. It runs every time the color changes, so nobody has to hope the chosen color happens to work.",
              )}
            </p>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "In a static design, I would have left a comment saying \u201censure contrast.\u201d In the prototype, contrast is a function. It passes or it fails.",
              )}
            </p>
          </div>

          <div className="-mx-4 sm:mx-0">
            <ImageWithFallback
              src="/images/white-label-esim-contrast.png"
              alt="Automatic contrast for light and dark brand colors"
              className="w-full rounded-none sm:rounded-xl"
            />
          </div>

          {/* Decision 3: Conditional rendering */}
          <div className="flex flex-col" style={{ gap: innerGap }}>
            <strong>
              Treat optional content as product logic
            </strong>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "Instead of creating a dozen Figma variants for toggles and optional fields, the prototype renders conditionally. The contact card appears when at least one contact field has content. The promotion badge follows its toggle. The footer appears only when it has something useful to show.",
              )}
            </p>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "That made the combinations much harder to miss. The rendering logic handled them instead of relying on my memory of which variants to draw.",
              )}
            </p>
          </div>

          <div className="-mx-4 sm:mx-0">
            <ImageWithFallback
              src="/images/white-label-esim-logic.png"
              alt="Conditional sections appearing based on input"
              className="w-full rounded-none sm:rounded-xl"
            />
          </div>

          {/* Decision 4: Real-time preview */}
          <div className="flex flex-col" style={{ gap: innerGap }}>
            <strong>
              Use the preview as the review surface
            </strong>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "The screen is split between the form and the live preview. Every keystroke, color change, or file upload updates the preview instantly. Partners can see their brand inside a realistic mobile interface, with a desktop toggle, without saving or refreshing.",
              )}
            </p>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "That made reviews faster. I did not have to walk people through annotations. I shared a URL, they typed into the form, and the product answered back.",
              )}
            </p>
          </div>
        </div>
      </SectionAnimate>

      {/* ── 5. Result ──────────────────────────────────── */}
      <SectionAnimate delay={0.22}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Result</SectionHeading>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}
          >
            {nbsp(
              "The prototype covered the parts that usually get shoved into annotations:",
            )}
          </p>
          <LabeledList items={prototypeFeatures} />
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}
          >
            {nbsp(
              "In a static handoff, most of that would have been comments. In the prototype, people could try the behavior themselves.",
            )}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.24}>
        <div className="group relative isolate transition-transform duration-200 hover:-translate-y-0.5">
          <GlowEffect
            colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
            mode="colorShift"
            blur="strong"
            duration={3}
            scale={1.06}
            className="translate-y-1.5 opacity-50"
          />
          <Link
            to="/work/white-label-esim/demo"
            data-goatcounter-click="launch-white-label-demo"
            onClick={(e) => {
              if (
                e.metaKey ||
                e.ctrlKey ||
                e.shiftKey ||
                e.altKey ||
                e.button !== 0
              )
                return;
              e.preventDefault();
              navigateWithTransition("/work/white-label-esim/demo", () =>
                Promise.all([
                  import("@/pages/white-label-esim/demo/layout"),
                  import("@/pages/white-label-esim/demo/company-settings"),
                ]),
              );
            }}
            className="relative z-10 flex items-center gap-4 rounded-xl bg-foreground p-4 text-background sm:gap-5 sm:p-5"
          >
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <span
                className="font-medium"
                style={{ fontSize: fluidBase, lineHeight: 1.4 }}
              >
                Launch the interactive prototype
              </span>
              <span
                className="text-background/70"
                style={{ fontSize: fluidSmall, lineHeight: 1.5 }}
              >
                Edit the form and watch the preview respond.
              </span>
            </div>
            <PrototypeLaunchIcon />
          </Link>
        </div>
      </SectionAnimate>

      {/* ── 6. Result details ──────────────────────────── */}
      <SectionAnimate delay={0.26}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <LabeledList items={impactItems} />
        </div>
      </SectionAnimate>

      {/* ── 7. Reflection ──────────────────────────────── */}
      <SectionAnimate delay={0.3}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Reflection</SectionHeading>
          <div className="flex flex-col gap-2">
            <p style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              What worked
            </p>
            <LabeledList items={whatWorked} />
          </div>
          <div className="flex flex-col gap-2">
            <p style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              What I'd change
            </p>
            <LabeledList items={whatIdChange} />
          </div>
        </div>
      </SectionAnimate>

      {/* Bottom back link */}
      <SectionAnimate delay={0.34}>
        <div className="flex items-center justify-between">
          <Link
            to="/"
            data-goatcounter-click="back-to-home-bottom"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            style={{ fontSize: fluidSmall, lineHeight: 1 }}
          >
            <RiArrowLeftLine size={16} />
            Home
          </Link>
          <Link
            to="/work/saas-onboarding"
            data-goatcounter-click="next-case-study"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            style={{ fontSize: fluidSmall, lineHeight: 1 }}
          >
            Next work
            <RiArrowRightLine size={16} />
          </Link>
        </div>
      </SectionAnimate>
    </div>
  );
}
