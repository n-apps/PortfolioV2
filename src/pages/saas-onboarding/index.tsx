import { Link } from "react-router";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { SectionAnimate } from "@/components/ui/section-animate";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
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

/* ── Data ─────────────────────────────────────────────── */

const metadata = [
  { label: "Role", value: "Product Designer" },
  { label: "Timeframe", value: "2025" },
  { label: "Platform", value: "Web (B2B SaaS)" },
  { label: "Team", value: "PM · Engineers · Designer" },
];

const problemItems = [
  {
    label: "Empty dashboard",
    body: "new admins saw a product shell, but no useful content.",
  },
  {
    label: "No clear starting point",
    body: "the UI exposed features, but did not explain the first required action.",
  },
  {
    label: "Hidden prerequisite",
    body: "product value required at least one employee and one assigned eSIM plan.",
  },
  {
    label: "Early drop-off risk",
    body: "users often left before the product had a chance to show its value.",
  },
];

const minimumPathSteps = [
  "Create or confirm company details",
  "Add the first employee",
  "Choose an eSIM destination or plan",
  "Assign the plan",
  "Land on a dashboard that now has real content",
];

const requiredFields = [
  "Company name",
  "Admin contact details",
  "One employee",
  "Destination or region",
  "Plan selection",
  "Assignment confirmation",
];

const flexibilityRules = [
  "Admins can add one employee first and invite more later",
  "Incomplete setup can be saved as a draft",
  "Optional fields are clearly marked and can be skipped",
  "The dashboard shows setup progress after signup",
  "Users can enter the product without losing their place in onboarding",
];

const dashboardStates = [
  "No employees added",
  "Employee added, but no plan assigned",
  "Plan selected, but not activated",
  "First eSIM assigned and ready to use",
];

const progressSteps = ["Company", "Employee", "Plan", "Activate"];

const outcomeItems = [
  "Reduced confusion after signup by replacing the empty dashboard with guided setup",
  "Shortened time-to-first-value by surfacing employee and eSIM assignment immediately",
  "Enabled freemium users to activate without manual sales or support assistance",
  "Made incomplete setup recoverable through draft states and dashboard guidance",
  "Created a reusable onboarding pattern for future B2B setup flows",
];

const whatWorked = [
  {
    label: "The flow focused on action, not education",
    body: "users did not need a tour of every feature. They needed to assign the first eSIM plan.",
  },
  {
    label: "The dashboard became part of onboarding",
    body: "instead of showing an empty product, it showed progress and the next useful action.",
  },
  {
    label: "The setup supported real admin behavior",
    body: "users could start with one employee, skip what they did not know yet, and continue later without losing progress.",
  },
];

const whatIdChange = [
  {
    label: "Validate the setup steps with more company sizes",
    body: "a small business adding one traveler and a larger company onboarding a whole department may need different entry points.",
  },
  {
    label: "Measure drop-off by step earlier",
    body: "better analytics around where admins stop would help refine the flow after launch.",
  },
  {
    label: "Explore bulk employee import sooner",
    body: "the first flow should stay simple, but larger companies may need CSV upload or invite links as a faster path.",
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

function PlainList({ items }: { items: string[] }) {
  return (
    <ol className="flex flex-col gap-2 pl-5 list-decimal">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-foreground/80"
          style={{ fontSize: fluidBase, lineHeight: 1.7 }}
        >
          {nbsp(item)}
        </li>
      ))}
    </ol>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export function SaasOnboardingPage() {
  return (
    <div className="flex flex-col" style={{ gap: sectionGap }}>
      {/* Back link */}
      <SectionAnimate delay={0}>
        <Link
          to="/"
          data-goatcounter-click="saas-onboarding-back-home-top"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          style={{ fontSize: fluidSmall, lineHeight: 1 }}
        >
          <RiArrowLeftLine size={16} />
          Home
        </Link>
      </SectionAnimate>

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
            {nbsp(
              "Designing onboarding: helping companies reduce roaming bills",
            )}
          </h1>
          <p
            className="text-muted-foreground"
            style={{ fontSize: fluidLead, lineHeight: 1.5 }}
          >
            {nbsp(
              "I designed a self-serve onboarding flow for companies buying eSIM plans for employees. New admins were arriving at an empty dashboard with no clear starting point. The flow had to do the work sales used to do in person, so users could activate on their own.",
            )}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.08}>
        <div className="-mx-4 sm:mx-0">
          <ImageWithFallback
            src="/images/saas-onboarding-hero.png"
            alt="From guided setup to self-serve access"
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
              "Yesim is a global eSIM platform with over 3 million customers. Its B2B product helps companies buy and manage eSIM plans for employees who travel for work. Admins can create a company workspace, add employees, assign mobile data plans, and track plan status from one dashboard.",
              SUBJECT,
            )}
          </p>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}
          >
            {nbsp(
              "Previously, onboarding happened outside the product. A sales or support team walked each company through setup, collected employee details, configured the account manually, and only then handed over access.",
            )}
          </p>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}
          >
            {nbsp(
              "That worked for high-touch enterprise onboarding, but it did not work for self-serve. As the product moved toward a freemium model, new users could sign up independently. The product now had to receive them without a salesperson in the room.",
            )}
          </p>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}
          >
            {nbsp(
              "The problem was that the product was not ready for that moment. New admins landed in an empty dashboard with no employees, no active plans, and no clear indication of what to do next.",
            )}
          </p>
          <PullQuote>
            {nbsp(
              "How do we help a company admin go from signup to their first assigned eSIM plan without relying on manual support?",
            )}
          </PullQuote>
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
              "The old flow assumed that setup had already happened before the user entered the product. In a self-serve model, that assumption broke.",
            )}
          </p>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}
          >
            {nbsp(
              "New users arrived in the product before anything existed: no company profile, no employees, no plans, no usage data. The dashboard loaded, but there was nothing on it to act on.",
            )}
          </p>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}
          >
            {nbsp("The main issues were:")}
          </p>
          <LabeledList items={problemItems} />
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}
          >
            {nbsp("The key insight was simple:")}
          </p>
          <PullQuote>
            {nbsp("No assigned eSIM plan = no product value.")}
          </PullQuote>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}
          >
            {nbsp(
              "The onboarding flow needed to make that first assignment the obvious next step.",
            )}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.16}>
        <div className="-mx-4 sm:mx-0">
          <ImageWithFallback
            src="/images/saas-onboarding-before.png"
            alt="Empty dashboard new admins saw before the onboarding redesign"
            className="w-full rounded-none sm:rounded-xl"
          />
        </div>
      </SectionAnimate>

      {/* ── 4. Approach ────────────────────────────────── */}
      <SectionAnimate delay={0.18}>
        <div className="flex flex-col" style={{ gap: sectionGap }}>
          {/* Decision 1: Start with the first valuable action */}
          <div className="flex flex-col" style={{ gap: innerGap }}>
            <SectionHeading>Approach</SectionHeading>
            <strong>
              Start with the first valuable action
            </strong>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "I replaced passive onboarding with a guided setup. Instead of explaining the dashboard, the product walks admins toward the first useful outcome: assigning an eSIM plan to an employee.",
              )}
            </p>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp("The first-time flow focuses on the minimum path to value:")}
            </p>
            <PlainList items={minimumPathSteps} />
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "This changed onboarding from “learn the product” to “create the first useful thing.”",
              )}
            </p>
          </div>

          <div className="-mx-4 sm:mx-0">
            <ImageWithFallback
              src="/images/saas-onboarding-flow.png"
              alt="eSIM onboarding flow from company setup to first assigned plan"
              className="w-full rounded-none sm:rounded-xl"
            />
          </div>

          {/* Decision 2: Reduce setup to the essentials */}
          <div className="flex flex-col" style={{ gap: innerGap }}>
            <strong>
              Reduce setup to the essentials
            </strong>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "The original setup process required information that many admins might not have during their first session: billing details, full employee lists, company policies, cost centers, approval rules, and travel dates.",
              )}
            </p>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "I separated what was required now from what could come later.",
              )}
            </p>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp("For the first version of onboarding, the flow only asks for:")}
            </p>
            <PlainList items={requiredFields} />
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "Everything else can be completed after the first plan is assigned. This kept the flow focused on activation instead of account configuration.",
              )}
            </p>
          </div>

          {/* Decision 3: Design for incomplete information */}
          <div className="flex flex-col" style={{ gap: innerGap }}>
            <strong>
              Design for incomplete information
            </strong>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "Company admins do not always arrive with a complete employee list, confirmed travel dates, or billing information. A rigid flow would block them at exactly the point where the product still needs to earn their trust.",
              )}
            </p>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "To support real user constraints, I designed the flow to be flexible and non-blocking:",
              )}
            </p>
            <PlainList items={flexibilityRules} />
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "The goal was to avoid a dead end. If the admin could not complete everything, the product still preserved progress and made the next step visible.",
              )}
            </p>
          </div>

          <div className="-mx-4 sm:mx-0">
            <ImageWithFallback
              src="/images/saas-onboarding-draft.png"
              alt="Draft setup state for incomplete eSIM onboarding"
              className="w-full rounded-none sm:rounded-xl"
            />
          </div>

          {/* Decision 4: Extend onboarding into the dashboard */}
          <div className="flex flex-col" style={{ gap: innerGap }}>
            <strong>
              Extend onboarding into the dashboard
            </strong>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "Onboarding should not end when the user reaches the dashboard. For a new company account, the dashboard is part of onboarding.",
              )}
            </p>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "I redesigned the empty dashboard around setup progress. Instead of showing empty charts and inactive tables, the homepage reflects the current state of the company account.",
              )}
            </p>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp("Possible states include:")}
            </p>
            <PlainList items={dashboardStates} />
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "Each state gives the admin one primary next step. This made the dashboard useful even before the account had full data.",
              )}
            </p>
          </div>

          <div className="-mx-4 sm:mx-0">
            <ImageWithFallback
              src="/images/saas-onboarding-dashboard.png"
              alt="Before and after dashboard empty state for eSIM onboarding"
              className="w-full rounded-none sm:rounded-xl"
            />
          </div>

          <div className="-mx-4 sm:mx-0">
            <ImageWithFallback
              src="/images/white-label-esim-tips.png"
              alt="Getting started checklist with contextual tips on the dashboard"
              className="w-full rounded-none sm:rounded-xl"
            />
          </div>

          {/* Decision 5: Make progress visible */}
          <div className="flex flex-col" style={{ gap: innerGap }}>
            <strong>
              Make progress visible
            </strong>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "The flow needed to feel lightweight, but users still needed to understand where they were. I used a simple step structure with clear progress labels:",
              )}
            </p>
            <PlainList items={progressSteps} />
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "Each step has one main action and a clear completion state. The interface avoids long educational text and uses the product state itself as guidance.",
              )}
            </p>
            <PullQuote>
              {nbsp(
                "Onboarding should not explain the whole product. It should help users create the first thing that makes the product useful.",
              )}
            </PullQuote>
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
              "The redesigned onboarding moved the product from a sales-led setup to something a company admin could finish on their own.",
            )}
          </p>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}
          >
            {nbsp("Expected or measured outcomes:")}
          </p>
          <PlainList items={outcomeItems} />
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}
          >
            {nbsp(
              "The product no longer assumed that setup happened somewhere else. Setup became part of the product experience.",
            )}
          </p>
        </div>
      </SectionAnimate>

      {/* ── 6. Reflection ──────────────────────────────── */}
      <SectionAnimate delay={0.26}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Reflection</SectionHeading>
          <div className="flex flex-col gap-2">
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "A few decisions held up well after launch. Most of them came from treating onboarding as part of the product, not a step before it.",
              )}
            </p>
            <LabeledList items={whatWorked} />
          </div>
          <div className="flex flex-col gap-2">
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}
            >
              {nbsp(
                "Some parts of the flow felt right under deadline but would benefit from a second pass. Most of the items below come down to assumptions I could not validate before ship.",
              )}
            </p>
            <LabeledList items={whatIdChange} />
          </div>
        </div>
      </SectionAnimate>

      {/* Bottom back link */}
      <SectionAnimate delay={0.3}>
        <div className="flex items-center justify-between">
          <Link
            to="/"
            data-goatcounter-click="saas-onboarding-back-home-bottom"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            style={{ fontSize: fluidSmall, lineHeight: 1 }}
          >
            <RiArrowLeftLine size={16} />
            Home
          </Link>
          <Link
            to="/work/score-counter"
            data-goatcounter-click="saas-onboarding-next-case-study"
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
