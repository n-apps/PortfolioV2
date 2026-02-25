import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { SectionAnimate } from "./section-animate";

const fluidBase = "clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem)";
const fluidSmall = "clamp(0.8125rem, 0.78rem + 0.15vw, 1rem)";
const fluidH1 = "clamp(1.5rem, 1.3rem + 1vw, 2.25rem)";
const fluidH2 = "clamp(0.6875rem, 0.66rem + 0.12vw, 0.75rem)";
const fluidH3 = "clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem)";
const sectionGap = "clamp(2.5rem, 2rem + 2.5vw, 4rem)";
const innerGap = "clamp(0.75rem, 0.7rem + 0.25vw, 1rem)";

/* ── Data ─────────────────────────────────────────────── */

const metadata = [
  { label: "Role", value: "Product Designer — Design System Lead" },
  { label: "Timeframe", value: "Within Apr 2021 – Mar 2026" },
  { label: "Platform", value: "Web (B2B products)" },
  { label: "Team", value: "[team size TBD]" },
];

const successMetrics = [
  "Reduction in time-to-design for new features [metric TBD]",
  "Reduction in UI inconsistencies flagged during QA [metric TBD]",
  "Component adoption rate across all three products [metric TBD]",
  "Developer satisfaction with design handoffs [metric TBD]",
];

const constraints = [
  "The system had to integrate with existing codebases — a greenfield rewrite was not an option",
  "Each product had its own release cycle and team priorities",
  "Theming had to work at the token level (colors, typography) without requiring component forks",
  "No dedicated design-system team — I led this alongside product design work",
];

const principles: { title: string; description: string }[] = [
  {
    title: "1. Consistency where it matters, flexibility where it doesn't",
    description:
      "Interaction patterns, accessibility, and spacing are universal. Colors, typography, and branding are themeable. This is the core tradeoff that shapes the entire architecture.",
  },
  {
    title: "2. Composability over completeness",
    description:
      "Build small, composable primitives (buttons, inputs, cards) that combine into larger patterns, rather than shipping opinionated page templates that are hard to adapt.",
  },
  {
    title: "3. Tokens are the API",
    description:
      "Design tokens are the contract between the system and consuming products. If it's not a token, it's not themeable. If it's not themeable, it's a deliberate decision.",
  },
  {
    title: "4. Accessible by default",
    description:
      "WCAG 2.1 AA compliance baked into every component — contrast ratios, keyboard navigation, screen reader support. Not an afterthought.",
  },
  {
    title: "5. Document the why, not just the what",
    description:
      "Every component includes usage guidelines explaining when to use it, when not to, and why it works the way it does. Specs without rationale are just pictures.",
  },
  {
    title: "6. Adoption is a product, not a mandate",
    description:
      "Teams adopt the system because it makes their work faster and better — not because someone said they have to. If teams resist a component, the system is wrong, not the team.",
  },
  {
    title: "7. Ship incrementally",
    description:
      "No big-bang launch. Components ship as they're ready, migrated product by product, validated in real context before being declared stable.",
  },
];

const tokenLayers = [
  {
    layer: "Primitive",
    purpose: "Raw values — the full palette",
    example: "blue-500: #3B82F6",
    themeable: "No (shared)",
  },
  {
    layer: "Semantic",
    purpose: "Role-based meanings",
    example: "color-primary: {blue-500}",
    themeable: "Yes (per product)",
  },
  {
    layer: "Component",
    purpose: "Scoped to specific components",
    example: "button-bg: {color-primary}",
    themeable: "Inherited",
  },
];

const subBrandThemes = [
  {
    token: "color-primary",
    productA: "Blue (#3B82F6)",
    productB: "Teal (#0D9488)",
    productC: "Purple (#7C3AED)",
  },
  {
    token: "font-heading",
    productA: "Inter",
    productB: "Plus Jakarta Sans",
    productC: "Inter",
  },
  {
    token: "radius-default",
    productA: "8px",
    productB: "4px",
    productC: "12px",
  },
  {
    token: "density",
    productA: "Default",
    productB: "Compact",
    productC: "Default",
  },
];

const priorityComponents = [
  {
    category: "Data display",
    components: "Tables, data cards, stat blocks, badges",
    why: "Every B2B product has a data table on its most-visited page",
  },
  {
    category: "Forms",
    components: "Inputs, selects, date pickers, form layouts, validation",
    why: "Forms are 40%+ of B2B surfaces",
  },
  {
    category: "Filters & search",
    components: "Filter bars, chips, search inputs, sort controls",
    why: "Paired with tables in nearly every list view",
  },
  {
    category: "Feedback & states",
    components: "Empty states, loading skeletons, toasts, error states",
    why: "Most-neglected category; huge impact on perceived quality",
  },
  {
    category: "Navigation",
    components: "Sidebar, breadcrumbs, tabs, page headers",
    why: "Structural — everything else lives inside navigation",
  },
];

const governanceSteps = [
  "Request: Any team can request a new component or variant via a shared intake form",
  "Triage: I review requests weekly, categorize as 'add to system,' 'product-specific,' or 'defer'",
  "Design & review: New components are designed in Figma, reviewed by at least one product team that will consume them",
  "Build & ship: Once approved, the component is built, documented, and released with a version bump",
  "Versioning: Semantic versioning — breaking changes get a major bump, new components get a minor bump",
];

const crossProductChecks = [
  "Every component was tested with all three product themes before release",
  "Edge cases (long labels, RTL text, empty data) were part of the standard QA checklist",
  "I maintained a 'theme stress test' page — a single page rendering every component under every theme, to catch visual regressions instantly",
];

const tradeoffs: { title: string; description: string }[] = [
  {
    title: "No motion/animation tokens in V1",
    description:
      "Animation is highly contextual per product. Standardizing it prematurely would add complexity without clear ROI. Deferred to V2.",
  },
  {
    title: "No mobile-specific components",
    description:
      "The B2B products are web-first, desktop-first. Responsive behavior is handled at the layout level, but I didn't create mobile-native variants.",
  },
  {
    title: "No illustration or iconography system",
    description:
      "Icons were handled by an existing third-party library. Custom illustrations were too brand-specific to generalize across products.",
  },
  {
    title: "Limited dark mode support",
    description:
      "None of the three B2B products had dark mode on their roadmap. The token architecture supports it, but I didn't invest in validating every component in dark mode.",
  },
  {
    title: "No automated visual regression testing",
    description:
      "The team didn't have the infrastructure for tools like Chromatic. Visual QA was manual via the theme stress test page. A clear gap for the future.",
  },
];

const outcomeDelivered = [
  "A complete token system (primitives, semantics, component tokens) with three product themes",
  "A Figma component library with [number TBD] components, each with variants, states, and documentation",
  "A coded component library aligned 1:1 with the Figma source of truth",
  "Documentation covering usage, accessibility, and contribution guidelines",
  "A governance process for requests, reviews, and versioning",
];

const outcomeImpact = [
  "Reduced time-to-design for new features — designers assemble from existing components instead of drawing from scratch [metric TBD]",
  "Fewer UI inconsistencies reaching QA — the system catches them at the design stage [metric TBD]",
  "Improved developer handoff quality — developers reference the system's documentation instead of inspecting Figma frames pixel by pixel",
  "Faster onboarding for new team members — the system serves as a living reference for 'how we build things here'",
];

const whatILearned = [
  "A design system is a product, not a project. It needs ongoing investment, a roadmap, and a feedback loop — treating it as a one-time deliverable is a recipe for abandonment.",
  "Adoption is harder than creation. Building the system was the straightforward part. Convincing busy product teams to migrate, change habits, and trust the system took more effort than any component design.",
  "Start with tokens, not components. Getting the token architecture right unlocked everything else. Components built on bad tokens are components you'll rebuild.",
  "Document decisions, not just specs. The 'why' behind a design choice is more valuable than the spec itself. Teams trust a system when they understand its reasoning.",
];

const doDifferently = [
  "Invest in automated visual regression testing from the start. Manual QA doesn't scale and lets regressions slip through.",
  "Build a metrics dashboard for adoption early — tracking component usage, override frequency, and contribution activity would have made the system's value visible to leadership.",
  "Involve developers more in the initial architecture phase. Some token naming decisions that felt logical in Figma created friction in code.",
];

const nextSteps = [
  "Extend the system to support future B2B products without per-product customization overhead",
  "Introduce animation/motion tokens once product needs are clearer",
  "Set up automated visual regression testing infrastructure",
  "Build an internal adoption dashboard to track system health and coverage",
];

const questionsForRoma = [
  "What was the exact team setup? Were there dedicated developers for the design system, or did product engineers implement components alongside feature work?",
  "Can you share the approximate number of components in the library at launch vs. today?",
  "How was the Figma-to-code sync handled? Was the Figma library the source of truth, or was there a parallel code-first workflow?",
  "Are there any quantitative metrics you can share — e.g., reduction in design/dev time, QA tickets related to inconsistency, or adoption percentages?",
  "Were the three B2B products all web-based, or were there mobile considerations as well?",
  "How did you handle component requests that were genuinely product-specific vs. candidates for the shared library?",
  'What governance challenges did you face — e.g., teams overriding tokens, building "escape hatch" components, or resisting migration?',
  "Is there a specific before/after example (a screen or flow) that clearly shows the impact of the system?",
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
    <div
      className="w-full rounded-xl bg-secondary flex items-center justify-center overflow-hidden"
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
    <div className="rounded-xl bg-card border border-border p-5 sm:p-6 flex flex-col gap-3">
      {children}
    </div>
  );
}

function PrincipleCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl bg-card border border-border p-5 flex flex-col gap-1">
      <p style={{ fontSize: fluidH3, lineHeight: 1.5 }}>
        <strong>{title}</strong>
      </p>
      <p
        className="text-foreground/70"
        style={{ fontSize: "0.875rem", lineHeight: 1.6 }}
      >
        {description}
      </p>
    </div>
  );
}

function DataTable({
  headers,
  rows,
  mono,
}: {
  headers: string[];
  rows: string[][];
  mono?: number[];
}) {
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <table
        className="w-full min-w-[500px]"
        style={{ fontSize: "0.875rem", lineHeight: 1.4 }}
      >
        <thead>
          <tr className="border-b border-border/60">
            {headers.map((h) => (
              <th
                key={h}
                className="text-left text-muted-foreground tracking-wide uppercase py-3 pr-4"
                style={{ fontSize: "0.75rem" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`py-3 pr-4 ${j === 0 ? "text-foreground" : "text-foreground/80"}`}
                  style={
                    mono?.includes(j)
                      ? { fontFamily: "monospace", fontSize: "0.75rem" }
                      : undefined
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export function DesignSystemPage() {
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
            Building a B2B Design System from Scratch — Scalable Across Three
            Products
          </h1>
          <p
            className="text-muted-foreground"
            style={{ fontSize: fluidBase, lineHeight: 1.5 }}
          >
            I created Yesim's B2B design system to bring consistency, speed, and
            sub-brand flexibility across a growing ecosystem of products.
          </p>
        </div>
      </SectionAnimate>

      {/* Hero image */}
      <SectionAnimate delay={0.08}>
        <ImagePlaceholder label="[image with design system overview.jpg]" />
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

      {/* Confidentiality note */}
      <SectionAnimate delay={0.11}>
        <CalloutBox>
          <p
            className="text-muted-foreground"
            style={{
              fontSize: "0.875rem",
              lineHeight: 1.6,
              fontStyle: "italic",
            }}
          >
            Note: Some details have been generalized to respect
            confidentiality. Product names, internal metrics, and sensitive
            business logic are omitted or abstracted.
          </p>
        </CalloutBox>
      </SectionAnimate>

      {/* Context */}
      <SectionAnimate delay={0.12}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Context</SectionHeading>
          <div className="flex flex-col gap-4">
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.75 }}
            >
              Yesim is a worldwide eSIM platform serving over 3 million
              customers. Beyond its consumer-facing app, Yesim operates a group
              of B2B products — internal tools, partner dashboards, and
              operational platforms — that serve different audiences but share a
              common tech stack and design DNA.
            </p>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.75 }}
            >
              When I joined, these B2B products were growing independently.
              Each had its own UI patterns, color schemes, and component
              implementations. The inconsistency was manageable at two products;
              at three and growing, it became a bottleneck — slowing
              development, fragmenting the user experience, and making design
              reviews a negotiation rather than a reference check.
            </p>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.75 }}
            >
              I was tasked with building a design system from scratch: one that
              could serve all B2B products today and scale to new ones tomorrow,
              while allowing each product to maintain its own visual identity
              through theming.
            </p>
          </div>
        </div>
      </SectionAnimate>

      {/* Problem & Goals */}
      <SectionAnimate delay={0.14}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Problem &amp; Goals</SectionHeading>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.75 }}
          >
            The core challenge was the tension between consistency and
            flexibility. We needed a shared component library that felt unified
            — same interaction patterns, same accessibility standards, same
            quality — but looked different enough per product to support distinct
            brand identities (similar to sub-brands under one umbrella).
          </p>
        </div>
      </SectionAnimate>

      {/* Problem statement callout */}
      <SectionAnimate delay={0.15}>
        <CalloutBox>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
            <strong>Problem statement:</strong>
          </p>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
            How might we create a single design system that works across 3+ B2B
            products with different visual identities, without forcing teams to
            fork components or fight the system?
          </p>
        </CalloutBox>
      </SectionAnimate>

      {/* Success metrics */}
      <SectionAnimate delay={0.16}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <p style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
            <strong>Success metrics:</strong>
          </p>
          <ul className="flex flex-col gap-2 pl-5 list-disc">
            {successMetrics.map((m, i) => (
              <li
                key={i}
                className="text-foreground/80"
                style={{ fontSize: fluidBase, lineHeight: 1.6 }}
              >
                {m}
              </li>
            ))}
          </ul>
        </div>
      </SectionAnimate>

      {/* Constraints */}
      <SectionAnimate delay={0.17}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <p style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
            <strong>Constraints:</strong>
          </p>
          <ul className="flex flex-col gap-2 pl-5 list-disc">
            {constraints.map((c, i) => (
              <li
                key={i}
                className="text-foreground/80"
                style={{ fontSize: fluidBase, lineHeight: 1.6 }}
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </SectionAnimate>

      {/* System Goals & Principles */}
      <SectionAnimate delay={0.18}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>System Goals &amp; Principles</SectionHeading>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.75 }}
          >
            Before building anything, I defined a set of principles to guide
            decisions. These served as the system's constitution — a reference
            point for every "should we include this?" debate.
          </p>
          <div className="flex flex-col gap-3">
            {principles.map((p) => (
              <PrincipleCard
                key={p.title}
                title={p.title}
                description={p.description}
              />
            ))}
          </div>
        </div>
      </SectionAnimate>

      {/* Architecture — Token strategy */}
      <SectionAnimate delay={0.2}>
        <div className="flex flex-col" style={{ gap: sectionGap }}>
          <div className="flex flex-col" style={{ gap: innerGap }}>
            <SectionHeading>Architecture</SectionHeading>
            <h3 style={{ fontSize: fluidH3, lineHeight: 1.5 }}>
              <strong>Token strategy</strong>
            </h3>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.75 }}
            >
              The token architecture uses three layers: primitives, semantics,
              and component tokens. This layered approach is what makes theming
              possible — swapping a product's theme means overriding semantic
              tokens only, while primitives and component structure remain
              untouched.
            </p>
            <DataTable
              headers={["Layer", "Purpose", "Example", "Themeable?"]}
              rows={tokenLayers.map((t) => [
                t.layer,
                t.purpose,
                t.example,
                t.themeable,
              ])}
              mono={[2]}
            />
            <ImagePlaceholder label="[image with tokens and theming model.jpg]" />
          </div>

          {/* Theming for sub-brands */}
          <div className="flex flex-col" style={{ gap: innerGap }}>
            <h3 style={{ fontSize: fluidH3, lineHeight: 1.5 }}>
              <strong>Theming for sub-brands</strong>
            </h3>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.75 }}
            >
              Each B2B product gets a theme file that overrides semantic tokens.
              The component library itself is product-agnostic — it references
              semantic tokens only. Switching from "Product A" to "Product B"
              means swapping a single theme configuration, not rebuilding
              components.
            </p>
            <DataTable
              headers={["Token", "Product A", "Product B", "Product C"]}
              rows={subBrandThemes.map((t) => [
                t.token,
                t.productA,
                t.productB,
                t.productC,
              ])}
              mono={[0]}
            />
            <p
              className="text-muted-foreground"
              style={{
                fontSize: "0.75rem",
                lineHeight: 1.3,
                fontStyle: "italic",
              }}
            >
              Product names and exact token values are illustrative.
            </p>
            <ImagePlaceholder label="[image with sub-brand themes comparison.jpg]" />
          </div>

          {/* Naming conventions */}
          <div className="flex flex-col" style={{ gap: innerGap }}>
            <h3 style={{ fontSize: fluidH3, lineHeight: 1.5 }}>
              <strong>Naming conventions</strong>
            </h3>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.75 }}
            >
              I established a function-first naming convention. Tokens are named
              by what they do, not what they look like.{" "}
              <code className="px-1.5 py-0.5 rounded bg-secondary text-foreground/80" style={{ fontSize: "0.75rem" }}>
                color-fg-secondary
              </code>{" "}
              tells you it's a foreground color with secondary hierarchy —
              without needing to look up the hex value. This makes the system
              scannable for both designers in Figma and developers in code.
            </p>
            <ImagePlaceholder label="[image with component anatomy.jpg]" />
          </div>
        </div>
      </SectionAnimate>

      {/* Component Library */}
      <SectionAnimate delay={0.22}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Component Library</SectionHeading>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.75 }}
          >
            The component library was prioritized around B2B usage patterns.
            Consumer apps need carousels and hero sections; B2B products need
            dense data tables, complex forms, and permission-aware states. I
            built for the latter.
          </p>
          <h3 style={{ fontSize: fluidH3, lineHeight: 1.5 }}>
            <strong>Priority components (Phase 1)</strong>
          </h3>
          <DataTable
            headers={["Category", "Components", "Why first"]}
            rows={priorityComponents.map((p) => [
              p.category,
              p.components,
              p.why,
            ])}
          />
          <p
            className="text-muted-foreground"
            style={{
              fontSize: "0.75rem",
              lineHeight: 1.3,
              fontStyle: "italic",
            }}
          >
            Exact component list may differ from what was shipped.
          </p>
          <ImagePlaceholder label="[image with table component spec.jpg]" />
          <ImagePlaceholder label="[image with form patterns.jpg]" />
        </div>
      </SectionAnimate>

      {/* Handling density */}
      <SectionAnimate delay={0.23}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <h3 style={{ fontSize: fluidH3, lineHeight: 1.5 }}>
            <strong>Handling density</strong>
          </h3>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.75 }}
          >
            B2B users often work with dense information. I built density as a
            system-level token — components respond to a density setting
            (default, compact, spacious) without requiring separate variants. A
            table in "compact" mode tightens padding and reduces row height; the
            component API stays the same.
          </p>
        </div>
      </SectionAnimate>

      {/* Process */}
      <SectionAnimate delay={0.24}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Process</SectionHeading>
          <div className="flex flex-col gap-4">
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.75 }}
            >
              I started with an audit. Before designing a single component, I
              cataloged every unique UI element across all three products —
              buttons in five different styles, three different table
              implementations, form fields that looked similar but behaved
              differently. The audit made the problem visible to stakeholders and
              built alignment around why a shared system was worth investing in.
            </p>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.75 }}
            >
              From the audit, I derived the token architecture (described above)
              and a prioritized component roadmap. The principle was: ship the
              components that eliminate the most inconsistency first. Tables and
              forms topped the list because they appeared on every product's
              most-visited pages.
            </p>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.75 }}
            >
              Each component went through a cycle: audit existing
              implementations → define the API (props, variants, states) →
              design in Figma with tokens → review with product teams → build
              and validate in code → document. The Figma library and the code
              library were kept in sync — a component wasn't "done" until it
              existed in both and had documentation.
            </p>
          </div>
        </div>
      </SectionAnimate>

      {/* Documentation & Governance */}
      <SectionAnimate delay={0.26}>
        <div className="flex flex-col" style={{ gap: sectionGap }}>
          <div className="flex flex-col" style={{ gap: innerGap }}>
            <SectionHeading>Documentation &amp; Governance</SectionHeading>
            <h3 style={{ fontSize: fluidH3, lineHeight: 1.5 }}>
              <strong>Documentation approach</strong>
            </h3>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.75 }}
            >
              Every component has a documentation page that includes: a live
              preview, prop/variant table, usage guidelines (when to use, when
              not to), accessibility notes, and a changelog. Documentation is
              part of the definition of done — not an afterthought.
            </p>
            <ImagePlaceholder label="[image with documentation page example.jpg]" />
          </div>

          {/* Contribution and governance model */}
          <div className="flex flex-col" style={{ gap: innerGap }}>
            <h3 style={{ fontSize: fluidH3, lineHeight: 1.5 }}>
              <strong>Contribution and governance model</strong>
            </h3>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.75 }}
            >
              I designed a lightweight governance process to balance speed with
              quality:
            </p>
            <ul className="flex flex-col gap-2 pl-5 list-disc">
              {governanceSteps.map((s, i) => (
                <li
                  key={i}
                  className="text-foreground/80"
                  style={{ fontSize: fluidBase, lineHeight: 1.6 }}
                >
                  {s}
                </li>
              ))}
            </ul>
            <ImagePlaceholder label="[image with governance workflow diagram.jpg]" />
          </div>
        </div>
      </SectionAnimate>

      {/* Adoption Across Products */}
      <SectionAnimate delay={0.28}>
        <div className="flex flex-col" style={{ gap: sectionGap }}>
          <div className="flex flex-col" style={{ gap: innerGap }}>
            <SectionHeading>Adoption Across Products</SectionHeading>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.75 }}
            >
              A design system that nobody uses is just a Figma file. Adoption
              was a deliberate effort, not a side effect.
            </p>
          </div>

          <div className="flex flex-col" style={{ gap: innerGap }}>
            <h3 style={{ fontSize: fluidH3, lineHeight: 1.5 }}>
              <strong>Migration strategy</strong>
            </h3>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.75 }}
            >
              Instead of mandating a full migration, I worked with each product
              team to identify high-impact, low-risk surfaces to migrate first —
              typically settings pages and list views. This proved the system's
              value without disrupting active feature work. As teams saw the
              time savings, adoption accelerated organically.
            </p>
          </div>

          <div className="flex flex-col" style={{ gap: innerGap }}>
            <h3 style={{ fontSize: fluidH3, lineHeight: 1.5 }}>
              <strong>Ensuring cross-product compatibility</strong>
            </h3>
            <ul className="flex flex-col gap-2 pl-5 list-disc">
              {crossProductChecks.map((c, i) => (
                <li
                  key={i}
                  className="text-foreground/80"
                  style={{ fontSize: fluidBase, lineHeight: 1.6 }}
                >
                  {c}
                </li>
              ))}
            </ul>
            <p
              className="text-foreground/80"
              style={{ fontSize: fluidBase, lineHeight: 1.75 }}
            >
              <strong>Adoption measurement:</strong>{" "}
              <span className="text-foreground/60">
                [metric TBD — e.g., percentage of screens using system
                components, number of one-off overrides, developer survey
                scores]
              </span>
            </p>
            <ImagePlaceholder label="[image with before-after UI consistency.jpg]" />
          </div>
        </div>
      </SectionAnimate>

      {/* Tradeoffs & Risks */}
      <SectionAnimate delay={0.3}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Tradeoffs &amp; Risks</SectionHeading>
          <p
            className="text-foreground/80"
            style={{ fontSize: fluidBase, lineHeight: 1.75 }}
          >
            Every system makes deliberate choices about what not to solve.
            Here's what I consciously scoped out and why:
          </p>
          <div className="flex flex-col gap-3">
            {tradeoffs.map((t) => (
              <PrincipleCard
                key={t.title}
                title={t.title}
                description={t.description}
              />
            ))}
          </div>
        </div>
      </SectionAnimate>

      {/* Outcome */}
      <SectionAnimate delay={0.32}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Outcome</SectionHeading>
          <p style={{ fontSize: fluidBase, lineHeight: 1.75 }}>
            <strong>What was delivered:</strong>
          </p>
          <ul className="flex flex-col gap-2 pl-5 list-disc">
            {outcomeDelivered.map((item, i) => (
              <li
                key={i}
                className="text-foreground/80"
                style={{ fontSize: fluidBase, lineHeight: 1.6 }}
              >
                {item}
              </li>
            ))}
          </ul>
          <p
            className="mt-4"
            style={{ fontSize: fluidBase, lineHeight: 1.75 }}
          >
            <strong>Impact on the organization:</strong>
          </p>
          <ul className="flex flex-col gap-2 pl-5 list-disc">
            {outcomeImpact.map((item, i) => (
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

      {/* What I Learned */}
      <SectionAnimate delay={0.34}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>What I Learned</SectionHeading>
          <ul className="flex flex-col gap-3 pl-5 list-disc">
            {whatILearned.map((item, i) => (
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

      {/* What I'd Do Differently */}
      <SectionAnimate delay={0.36}>
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

      {/* Next Steps */}
      <SectionAnimate delay={0.38}>
        <div className="flex flex-col" style={{ gap: innerGap }}>
          <SectionHeading>Next Steps</SectionHeading>
          <ul className="flex flex-col gap-2 pl-5 list-disc">
            {nextSteps.map((item, i) => (
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

      {/* Questions callout */}
      <SectionAnimate delay={0.4}>
        <CalloutBox>
          <p
            className="text-muted-foreground tracking-wide uppercase"
            style={{ fontSize: "0.75rem", lineHeight: 1.3 }}
          >
            For Roma to review:
          </p>
          <ol className="flex flex-col gap-2 pl-5 list-decimal">
            {questionsForRoma.map((q, i) => (
              <li key={i} style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                {q}
              </li>
            ))}
          </ol>
        </CalloutBox>
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