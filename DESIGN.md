---
name: Roma Shuliatiev Portfolio
description: An understated, evidence-led product-design portfolio. Near-monochrome, one hot-coral signal.
colors:
  bg-base: "#fafafa"
  ink: "#0a0a0a"
  card-surface: "#ffffff"
  surface-secondary: "#f0f0f0"
  surface-muted: "#e8e8e8"
  ink-muted: "#6b6b6b"
  hot-coral: "#ff4552"
  on-coral: "#ffffff"
  success: "#16a34a"
  hairline: "#0a0a0a14"
typography:
  display:
    fontFamily: "OpenRunde, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2rem, 1rem + 3.5vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "OpenRunde, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.5rem, 1rem + 2vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title:
    fontFamily: "OpenRunde, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.25rem, 1rem + 1vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "OpenRunde, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.011em"
  body:
    fontFamily: "OpenRunde, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.011em"
  label:
    fontFamily: "OpenRunde, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(0.8125rem, 0.78rem + 0.15vw, 1rem)"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  serif-accent:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(1rem, 0.94rem + 0.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  mono:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.875em"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  full: "9999px"
spacing:
  inner: "clamp(0.75rem, 0.7rem + 0.25vw, 1rem)"
  section: "clamp(2.5rem, 2rem + 2.5vw, 4rem)"
  content-max: "700px"
components:
  link-default:
    textColor: "{colors.ink-muted}"
    typography: "{typography.body}"
  link-accent:
    textColor: "{colors.hot-coral}"
    typography: "{typography.label}"
  card-work:
    backgroundColor: "{colors.card-surface}"
    rounded: "{rounded.xl}"
    padding: "16px"
  button-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: "32px"
    width: "32px"
  code-inline:
    backgroundColor: "{colors.surface-secondary}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "5px"
    padding: "3px 6px"
---

# Design System: Roma Shuliatiev Portfolio

## 1. Overview

**Creative North Star: "The Annotated Specimen"**

This is a designer-who-codes spec sheet, not a marketing site. The page behaves like a well-set type specimen with evidence in the margins: claims arrive next to the number, the artifact, or the working prototype that proves them. Restraint is the whole posture. A near-monochrome grayscale carries almost the entire surface so that the one hot-coral accent reads as a deliberate annotation, never decoration. The work, the metrics, and the prose do the talking; the chrome gets out of the way.

Density is generous and reading-first. Content lives in a single ~700px column (`spacing.content-max`) with fluid `clamp()` type and varied vertical rhythm, so the page feels paced rather than padded. Depth is flat by default: hairline rings and 1px image outlines define edges instead of drop shadows. Motion is quiet and consistent, a single ease-out curve applied to fades and small state shifts, never choreography for its own sake.

This system explicitly rejects the loud-SaaS-landing reflex (gradient heroes, animated metric counters, glowing CTAs, feature-grid cards), the generic portfolio template (Framer/Webflow defaults, identical project cards), the Dribbble showpiece (style over substance, mockups floating on gradients), and the over-animated site (scroll-jacking, parallax, motion that performs rather than serves). If it looks like it shipped from a startup template, it is wrong for this portfolio.

**Key Characteristics:**
- Near-monochrome neutrals; one hot-coral signal used on ≤10% of any screen.
- Type-led hierarchy: rounded geometric sans for everything, serif italic for names and asides, mono for code.
- Flat by default, defined by hairlines and 1px outlines, not shadows.
- Single-column ~700px reading measure with fluid type and varied spacing.
- One ease-out motion curve; restrained, feedback-only animation.
- Dual light/dark theme, system-aware, user-toggleable, persisted.

## 2. Colors

A crisp, near-monochrome grayscale with a single warm-red signal. The neutrals are intentionally clean rather than tinted; the accent is the only chromatic event on the page.

### Primary
- **Hot Coral** (`#ff4552`): The single accent and the system's one voice. Used for inline links, active/hover affordances on work titles, the pull-quote mark, and the `R—S` interaction. Identical in light and dark. Its scarcity is the point. On coral fills, text is **On Coral** (`#ffffff`).

### Neutral
- **Base Background** (`#fafafa` light / `#111111` dark): The page field. Off-white in light, near-black in dark; never pure white or pure black for the field.
- **Ink** (`#0a0a0a` light / `#ededed` dark): Primary text and the highest-contrast UI.
- **Ink Muted** (`#6b6b6b` light / `#8b8b8b` dark): Secondary text, metadata, dates, captions, default link color.
- **Card Surface** (`#ffffff` light / `#1a1a1a` dark): Raised reading surfaces (work cards, placeholders).
- **Surface Secondary** (`#f0f0f0` light / `#222222` dark): Inline code background, quiet fills.
- **Surface Muted** (`#e8e8e8` light / `#2a2a2a` dark): The faintest fill tier (chips, dividers' parent fills).
- **Hairline** (`rgba(0,0,0,0.08)` light / `rgba(255,255,255,0.08)` dark): Borders, dividers, and the 1px image outline. Carries definition where shadows would otherwise be used.

### Functional
- **Success** (`#16a34a` light / `#22c55e` dark): Reserved for the pulsing "open to roles" availability dot. Not a general-purpose green.

### Named Rules
**The One Voice Rule.** Hot Coral appears on no more than ~10% of any screen. It marks exactly one kind of thing at a time (a link, an active state, a quote). If two unrelated elements both fight for it, neither gets it.

**The Clean Neutral Rule.** Neutrals stay near-true grayscale; do not tint them toward the accent. The contrast between flat gray chrome and the lone warm accent is the identity. Keep the field off-pure (`#fafafa` / `#111111`), never `#ffffff` or `#000000` on the page background.

## 3. Typography

**Display / Body Font:** OpenRunde (with `system-ui, -apple-system, sans-serif`)
**Serif Accent Font:** Newsreader (with `Georgia, serif`)
**Mono Font:** IBM Plex Mono (with `monospace`)

**Character:** OpenRunde is a soft, rounded geometric sans that does the entire functional load, headings and body alike, with a calm, modern neutrality. Newsreader italic enters only for human and editorial notes: the name, project subtitles, section headings, pull quotes. IBM Plex Mono is strictly for code. The pairing reads precise and considered, an engineer's specimen sheet with an editorial hand.

### Hierarchy
- **Display** (400, `clamp(2rem, 1rem + 3.5vw, 3.25rem)`, lh 1.15, `-0.02em`, `text-wrap: balance`): Page-level `h1`. One per page.
- **Headline** (400, `clamp(1.5rem, 1rem + 2vw, 2.25rem)`, lh 1.2, `-0.015em`): Major section titles (`h2`). The name on the home page uses this size set in Newsreader italic.
- **Title** (400, `clamp(1.25rem, 1rem + 1vw, 1.5rem)`, lh 1.3, `-0.01em`): Sub-section headings (`h3`).
- **Lead** (400, `clamp(1.125rem, 1.05rem + 0.4vw, 1.25rem)`, lh 1.5): The opening statement under a name or section. One short paragraph that sets intent.
- **Body** (400, `clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem)`, lh 1.5, `-0.011em`, `text-wrap: pretty`): Default reading text. Held to the ~700px measure (≈65–75ch).
- **Label** (500, `clamp(0.8125rem, 0.78rem + 0.15vw, 1rem)`, lh 1.4): Metadata, dates (tabular-nums), inline link affordances, small UI.
- **Serif Accent** (400 italic, `clamp(1rem, 0.94rem + 0.3vw, 1.25rem)`, `-0.01em`): Newsreader. Names, project subtitles, section headings in case studies, pull-quote body.
- **Mono** (400, `0.875em`): IBM Plex Mono, inline `code` only.

### Named Rules
**The Two-Weight Rule.** OpenRunde ships in 400 and 500 only. Hierarchy comes from scale, color, and the serif/sans contrast, not from a ladder of weights. Never reach for 600+ to add emphasis; change size, switch to Ink, or set it in serif italic.

**The Serif-for-Human Rule.** Newsreader italic is reserved for human and editorial register (names, asides, quotes). It never sets functional UI or running body copy.

## 4. Elevation

Flat by default. Depth is communicated through hairlines and tonal surface steps, not drop shadows. Images carry a 1px inset outline (`outline: 1px solid var(--image-outline); outline-offset: -1px`) so they read as crisp specimens rather than floating objects. The one shadow in the system, `card-shadow`, is a near-invisible composite (a 1px ring plus two whisper-soft offsets) used to lift a reading surface a hair off the page, never to dramatize it.

### Shadow Vocabulary
- **card-shadow** (`box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.06), 0px 1px 2px -1px rgba(0,0,0,0.06), 0px 2px 4px 0px rgba(0,0,0,0.04)`): The only sanctioned elevation. A hairline ring doing most of the work, with a barely-there lift. Dark mode swaps the tints to `rgba(255,255,255,0.06)` / `0.04`.

### Named Rules
**The Hairline Rule.** Edges are defined by 1px borders, 1px image outlines, and tonal surface steps. If a surface needs separation, reach for a hairline or the next tonal tier before reaching for a shadow. Dramatic, blurred drop shadows are forbidden: this is a specimen sheet, not a card stack.

## 5. Components

The system has almost no traditional "controls." Interaction lives in text links, one icon button (the theme toggle), and a few signature editorial elements. Everything is refined, restrained, and content-first: controls recede, content leads, feedback is subtle.

### Buttons
- **Shape:** Round for icon controls (`rounded.full`); the system has no large filled CTA button by design.
- **Theme toggle:** A 32px transparent round button holding a 16px contrast icon, colored **Ink**. Press feedback is `scale: 0.96` (Motion `whileTap`), no background change.
- **Hover / Focus:** Subtle by default. No glowing or filled hover states; affordance comes from the inline-link treatment below.

### Links
- **Default:** **Ink Muted**, no underline at rest, underline on hover/focus (`underline-offset: 2px`) plus a slight opacity drop. The reading-first default.
- **Accent:** **Hot Coral**, used for outbound/primary links, often with a trailing `↗`. Same underline-on-hover behavior.
- **Work title (in cards):** Ink at rest, transitions to **Hot Coral** on card hover (`group-hover`).

### Cards / Containers
- **Use sparingly.** The only routine card is the work-preview card; most content sits directly on the page with no container.
- **Corner Style:** `rounded.xl` (14px).
- **Background:** **Card Surface**; cover image fills a 16:9 top crop that scales to 1.02 on hover (`duration-500 ease-out`), clipped by `overflow-hidden`.
- **Border:** A 1px **Hairline** border defines the card edge against the near-tonal field, deepening to **Ink Muted / 30%** on hover. This is the Hairline Rule applied: separation comes from the edge, not a shadow.
- **Shadow Strategy:** Flat. No drop shadow on cards; reserve `card-shadow` for surfaces that genuinely need to lift off the page.
- **Internal Padding:** 16px (`p-4`), 20px (`p-5`) at `sm` and up.

### Inputs / Fields
- **Style:** Transparent border at rest; fill is **Input Background** (`#f3f3f5` light) or `#2a2a2a` dark. Body weight (400), not medium.
- **Focus:** A 1px **Ring** (`#a0a0a0` light / `#555555` dark) via the global `outline-ring/50` base, no glow.
- (Inputs are concentrated in the white-label eSIM demo, which carries its own scoped token set in `demo-theme.css`; the brand surface itself is read-only.)

### Navigation
- **Style:** A bare top bar, no background or border. Left: the `R—S` wordmark. Right: the theme toggle. Enters with a 0.4s fade-and-drop from `y: -10`.
- **States:** The wordmark expands its em-dash and tracking on hover/focus (`letter-spacing` and `width` transitions, 420ms, `cubic-bezier(.2,.7,.2,1)`), respecting `prefers-reduced-motion`.

### Signature Components
- **The `R—S` Wordmark.** The home logo. On hover the center em-dash widens (`1em → 1.8em`) and letter-spacing opens to `0.12em`. A quiet, mechanical flourish, the one piece of pure delight.
- **Pulsing Availability Dot.** A 0.375em **Success** dot with an expanding ring (`pulsing-dot`, 3s loop) preceding the "open to roles" line. Animation disabled under `prefers-reduced-motion`.
- **Dashed Divider.** A full-width 1px dashed rule at **Ink Muted / 30%**, via Radix `Separator`. The default between-section separator.
- **Pull Quote.** An editorial callout: a `RiDoubleQuotesL` mark in **Hot Coral** above serif-italic body. It carries a 3px Hot Coral left rule. This is the single sanctioned vertical accent rule in the entire system (see Don'ts).

### Named Rules
**The Ease-Out Rule.** Entrance and state motion uses one curve, `cubic-bezier(0.4, 0, 0.2, 1)`, at 0.4–0.5s. Section content fades up from `y: 16`, staggered ~0.1s per section. No bounce, no elastic, no spring overshoot.

## 6. Do's and Don'ts

### Do:
- **Do** keep Hot Coral (`#ff4552`) to ≤10% of any screen, marking one kind of thing at a time. Its rarity is the signal.
- **Do** build hierarchy from scale + the serif/sans contrast, using only OpenRunde 400 and 500.
- **Do** define edges with hairlines (1px borders, 1px image outlines) and tonal surface steps before reaching for any shadow.
- **Do** hold running text to the ~700px measure (≈65–75ch) and vary vertical rhythm for pacing.
- **Do** animate with the single ease-out curve (`cubic-bezier(0.4, 0, 0.2, 1)`, 0.4–0.5s) and gate every animation behind `prefers-reduced-motion`.
- **Do** keep the field off-pure: `#fafafa` / `#111111`, never `#ffffff` or `#000000` as the page background.
- **Do** reserve Newsreader italic for names, asides, and quotes; reserve IBM Plex Mono for code.

### Don't:
- **Don't** build a loud SaaS landing: no gradient heroes, animated metric counters, glowing or large filled CTAs, or feature-grid cards.
- **Don't** ship the generic portfolio template look: Framer/Webflow defaults, identical same-size project cards, "passionate creative" framing.
- **Don't** make a Dribbble showpiece: no decorative mockups floating on gradients; every visual ties to a real problem and outcome.
- **Don't** over-animate: no scroll-jacking, parallax, spring/bounce, or motion that performs instead of serving comprehension.
- **Don't** use `border-left`/`border-right` greater than 1px as a colored accent stripe on cards, list items, or alerts. The Pull Quote is the **only** exception in this system; do not extend the pattern elsewhere.
- **Don't** use gradient text (`background-clip: text`), decorative glassmorphism/blur, or the big-number hero-metric template.
- **Don't** tint the neutrals toward coral, or add a second accent color. One voice only.
- **Don't** introduce drop shadows to dramatize surfaces; if it looks like a 2014 card stack, the shadow is wrong for this system.
