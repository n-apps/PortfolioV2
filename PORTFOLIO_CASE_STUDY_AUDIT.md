# Portfolio case-study audit

Audit date: 21 August 2026

## Evidence used

- Current route pages, shared case-study components, and all referenced media in `src/pages`, `src/components/case-study`, `public/images`, and `public/videos`.
- The working white-label prototype, including contrast, validation, uploads, conditional sections, unsaved-change handling, responsive previews, and loading states.
- Deleted source case studies recovered from repository history: `case-studies/design-system.md`, `case-studies/white-label-esim.md`, and `case-studies/score-counter.md`.
- The current portfolio CV, Score Counter review corpus, and the public Google Play listing.
- Google Play Console KPI screenshots supplied by Roma for the private Score Counter metrics.
- Current code is newer than the objective's Score Counter examples: it documents 1M+ installs and 100K MAU. Historic commits document 870K / 87.2K and later 920K / 90K. Roma identified Google Play Console KPI trends from August 2026 as the internal source for the current figures. The live Play listing confirms the 4.9 rating and exposes only the 500K+ public download band.

## Portfolio selection

The repository contains four case-study routes, matching the target of three flagship stories plus one compact ownership proof:

1. Yesim multibrand design system — flagship systems and delivery case.
2. White-label eSIM configurator — flagship complex B2B interaction and prototyping case.
3. Yesim self-serve onboarding — potentially the growth case, but not yet supported by experiment evidence or an observed metric.
4. Score Counter — compact solo ownership and long-term iteration proof.

There was no post-launch analytics result for the onboarding route. The CV mentions other onboarding and core-flow A/B tests, but Roma confirmed that this flow was not run as a formal experiment.

---

## 1. Yesim multibrand design system

### Current narrative

Three B2B products had diverged. Roma audited recurring surfaces, designed a shared token architecture, allowed product-specific themes without component forks, introduced documentation and governance, and reports faster design work and less style-related QA.

### Strong parts

- The scaling problem is specific: three products, shared workflows, different visual identities, duplicated UI decisions.
- The semantic-token decision directly answers the problem and demonstrates systems thinking.
- The page covers B2B-heavy patterns: tables, forms, filters, states, navigation, density, documentation, and migration.
- The CV reports 4x faster Figma file preparation and 30% fewer style-related QA issues. Roma clarified that both figures are operational estimates, not controlled KPIs.
- The source case supports the mature scope: 48 components, 140+ tokens, and three themes.

### Weak or unsupported parts

- The hero is a component sheet, so the first impression is “UI library catalogue,” not scaling problem → architecture → impact.
- “Up to 90% faster feature design” and “~30% less time on style-related QA” conflict with the clarified evidence. They should become “about 4x faster Figma file preparation” and “around 30% fewer recurring style-related QA issues,” both labelled as operational estimates.
- Claims such as “forms are 40%+ of B2B surfaces,” “every product's most-visited page,” and “results after one quarter” have no supporting source beyond later page copy.
- Raw values, primitives, and semantic tokens are explained, but the implementation bridge from Figma variables to production code is mostly asserted.
- The page does not clearly separate Roma's work from PM and engineering work.
- The repeated before/after prose describes a process change but supplies no delivery evidence.

### Evidence confirmed by Roma

- No formal time-tracked baseline was established before the system.
- Before the system, preparing a Figma file for a new B2B product or branded variation required manual recreation and adjustment of styles, components, and product-specific patterns.
- After the shared token system, reusable components, and theming were introduced, comparable preparation work typically took about one quarter of the previous effort.
- The comparison came from repeated, similar setup work before and after adoption. The portfolio therefore describes the result as “about 4x faster” and labels it as an operational estimate.
- The QA estimate came from comparing recurring style-related implementation issues in comparable releases before and after the system across all three B2B products.
- The issues surfaced during design QA and included inconsistent spacing, typography, colour, and component styling.
- There was no formal QA experiment or fixed reporting window. The portfolio therefore says “around 30% fewer” and labels this result as an operational estimate.
- Roma owned the design-side architecture in Figma: shared component structure, reusable patterns, token hierarchy, and the theming approach across three products.
- Engineering owned production implementation of the components and styles. Roma clarified expected behaviour, worked through technical constraints and product-specific edge cases with engineers, and handled design QA during adoption.
- Adoption happened collaboratively within each product with PMs, engineers, and relevant stakeholders. There was no documented single person who formally approved adoption across all three products, so the case does not name one.
- Roma's first Figma names described interactive states from a design perspective. After engineering feedback, he renamed the variants to match production terms such as `:hover` and `:focus-visible`.
- The change established a wider system rule: when possible, design-system semantics should align with implementation semantics instead of creating a parallel naming language.
- The first scope focused on high-frequency B2B forms and tables. The system expanded as the three products adopted it and real product work exposed more reusable patterns.
- The 48 components and 140+ tokens describe the mature library after product use, engineering feedback, and additional requirements. They are not launch-scope figures.

### Structural action

- Remove the generic Before / After prose cards.
- Merge Context, Problem, and Constraints into one concise opening.
- Merge prioritisation and migration into “Where to start without a big-bang rewrite.”
- Add a visible role split and success criteria near the top.
- Add a Delivery section: component anatomy, documentation, Figma ↔ code alignment, migration, and governance.
- Lead Result with about 4x / around 30% / three products; label both results as operational estimates and keep 48 / 140+ as mature-library scope.

---

## 2. White-label eSIM configurator

### Current narrative

A PRD described the white-label requirements, but could not express arbitrary brand input and conditional behaviour. Roma skipped a separate Figma stage and translated the PRD and known technical constraints directly into a working prototype for product and client conversations.

### Strong parts

- This is the clearest differentiated story in the portfolio: code was selected because behaviour was the design problem.
- The repository itself proves the prototype is functional: live form binding, image uploads, conditional contact fields, mobile/desktop preview, validation, save/reset, dirty-state warning, and skeleton states all exist.
- The contrast and conditional-logic visuals explain decisions instead of merely showing finished screens.
- The prototype uses Next.js and Tailwind, and the deleted source reports that no contrast-related issues surfaced during post-launch design QA.
- The live demo is unusually strong delivery evidence for a product designer.

### Weak or unsupported parts

- The staged laptop hero hides the interaction and behaves like a decorative mockup.
- The home cover says “AI-first workflow,” which misframes the project as tool promotion rather than design-tool selection.
- “Stakeholder alignment in one session” still needs direct confirmation before it becomes a headline claim.
- The current page repeats the prototype feature inventory in both Final solution and Result.
- The page says WCAG relative-luminance handling, but the prototype currently uses a fixed luminance threshold (`0.55`) rather than comparing actual contrast ratios. That implementation can choose white text for mid-luminance colours that do not meet WCAG contrast.
- The original source alternates between “operator” and “partner”; the current page should use one audience term.

### Evidence confirmed by Roma

- The working concept was built in roughly two working days. Earlier discovery work was outside that window.
- There was no Figma stage before the prototype. Roma started from the PRD, existing product context, and known technical constraints, then translated them directly into a functional Next.js / Tailwind concept.
- The two-day goal was to explore the interaction model, expose UX and technical constraints, and give the team something tangible to discuss. It was not an implementation-ready UI claim.
- Because the prototype behaved like a product, it could also support more concrete conversations with existing B2B platform clients.
- PM and stakeholders reviewed and tested the working prototype with real brand inputs.
- A brand colour that worked in one context could produce insufficient contrast or an unexpected component state elsewhere. Those combinations were not fully accounted for in the PRD.
- The review led Roma to treat contrast handling as dynamic product logic rather than manually designed exceptions, exposing edge cases before implementation or design QA.
- Next.js and Tailwind were the prototype stack. Production did not reuse that code; engineering reimplemented the experience in the production codebase using the prototype as the reference for the interaction model and product rules.
- No contrast-related issues surfaced during post-launch design QA. This is a qualitative observation because there was no fixed reporting window or formal QA record.

### Structural action

- Replace the staged hero with a direct form → preview composition.
- Open with the PRD as the starting point, Roma's role, the confirmed two-day working-concept constraint, and the strongest supported outcome.
- Organise reasoning around three behaviours: contrast, conditional content, and validation / unsaved work.
- Merge the repeated prototype inventory into a compact Delivery section.
- Keep the live demo immediately after the first behaviour visual.
- Correct the contrast implementation before describing it as accessibility validation.

---

## 3. Yesim self-serve onboarding

### Current narrative

The business was moving from manual account creation to self-service signup. New admins could land on an empty dashboard; the shipped flow guided them toward adding an employee and assigning the first eSIM plan.

### Strong parts

- The empty-dashboard problem and the move from manual account creation to self-service signup are easy to understand.
- The “first assigned eSIM” is a plausible activation event and gives the design a coherent spine.
- The page considers incomplete company information and dashboard empty states rather than stopping at signup screens.
- The current visuals show an actual before state and annotated product decisions.

### Weak or unsupported parts

- This page is currently a solution rationale, not a growth or experiment case.
- “Users often left,” “reduced confusion,” “shortened time-to-first-value,” “enabled freemium self-activation,” and “made incomplete setup recoverable” are presented as outcomes without analytics, research, or post-launch evidence.
- The heading “Expected / Observed Result” combines two materially different evidence levels.
- The page contains no GA4 / BigQuery funnel, hypothesis, variant, test result, sample, timeframe, or interpretation.
- The exact flow shipped. A separate saved-draft state, multiple dashboard states, and bulk-import implications remain unconfirmed.
- The “draft” image is not a draft-state visual. It is an annotated company-profile step.

### Evidence confirmed by Roma

- The work was triggered by the business moving from manual account creation to a self-service signup model. No documented funnel finding preceded it.
- The onboarding flow shown in the case was proposed and shipped.
- The shipped flow was not user-tested before or after launch.
- The flow was not run as a formal experiment, so there was no control or variant.
- GA4 and BigQuery did not provide a post-launch funnel result for this flow.
- Roma was the sole designer on the onboarding flow. He owned the UX structure, interaction design, prototyping, and coordination with product and engineering through delivery.
- The shipped recovery states were the dashboard checklist plus the ability to skip the initial form and resume its completion later. A separate saved-draft state is not claimed.

### Structural action

- Keep the route as a shipped product-design case; do not position it as a proven growth case.
- Replace the outcome claims with an honest “Designed success criteria / evidence still needed” section.
- Merge Problem, Before, and Hypothesis into one evidence-led opening.
- Keep one end-to-end activation path; remove repeated explanations of “first value.”
- Add a compact “What shipped” section that lists only confirmed production states.
- Add the missing experiment block only after Roma supplies the data.

---

## 4. Score Counter

### Current narrative

Roma conceived, designed, developed, launched, and maintained a simple Android counting app. Its growth created feature pressure; Roma protected a fast core loop and allowed broad use cases rather than turning it into a board-game-only tool.

### Strong parts

- Solo ownership is clear and unusually credible: product, design, Android development, releases, store optimisation, support, and iteration since 2016.
- The CV supports 1M+ installs, 100K MAU, a 4.9 rating, and $0 marketing spend. Roma's August 24, 2026 Google Play check records a #1 ranking for "score counter" in US/en-US.
- The review corpus supports ease of use, no ads, broad use cases, and recurring requests for saved sessions / multiple lists.
- The evolution visual and direct review video show long-term iteration and real-world use.
- The public Play listing confirms the 4.9 rating, ad-free positioning, recent updates, session history, score graphs, and ongoing developer responses.

### Weak or unsupported parts

- “Mostly thanks to the best UX in its category” and “installs came through best UX” are self-congratulatory causal claims without attribution evidence.
- “Word of mouth alone” is too absolute; the current text more accurately mentions search, recommendations, and volunteer translations.
- The page is longer than a compact proof-of-ownership case and repeats the same principles in Approach, Result, and Reflection.
- The testimonial lifestyle image is a decorative reconstruction. It makes real reviews look less credible than the source review evidence.
- The static evolution image and the flow video partially repeat the same UI story.
- “After nine years” is stale for a project running since 2016.
- The old 225K active-device figure is stale. A current Play Console screenshot shows 233K average active devices, but this metric remains less useful in the live case than the install and MAU figures.

### Evidence confirmed by Roma

- The 1M+ total installs and 100K monthly active users figures come from Google Play Console KPI trends read in August 2026.
- A Google Play Console screenshot shows 233K average active devices for 27 July–23 August 2026, up 2%. This supersedes the old 225K figure.
- Three confirmed shipped iterations are the timer, graph history visualisation, and custom colour picker.
- The 2026 timer release responded to at least two Google Play reviews. One asked for a timer alongside other utilities; another described physical board-game timers as easy to lose or break.
- Roma reviewed popular game-assistant tools and found timers were common. He placed the feature on a separate screen so it would not interrupt the main counting flow.
- No measured post-release result exists for the timer feature. Its evidence ends at shipment and cannot support an impact claim.
- User requests prompted graph history visualisation, which shipped in August 2026.
- Roma did not measure a post-release result for graph history visualisation.
- User requests prompted the custom colour picker, which shipped in January 2026.
- Roma did not measure a post-release result for the custom colour picker.
- On August 24, 2026, Score Counter ranked #1 in Google Play for "score counter" in the US/en-US locale.

### Missing evidence

- None from this audit round.

### Structural action

- Compress into Context → ownership loop → one prioritisation decision → evolution → proof.
- Put 1M+ installs, 100K MAU, 4.9 rating, and $0 marketing spend in the first two viewports.
- Replace causal “best UX” claims with supported organic-distribution language.
- Remove the reconstructed testimonial image and keep direct review evidence.
- Keep the reflection to one concrete lesson and one next step.

---

## Visual and asset audit

| Asset | Used in | Decision | Why / exact change |
| --- | --- | --- | --- |
| `design-system-cover.png` | Home card | KEEP, BUT REWORK | Useful category cue, but abstract. Replace the generic typography/grid/code icons with a small shared-foundation → three themes story when the cover is next redesigned. |
| `design-system-hero.png` | Design-system hero | REPLACE / NEW VISUAL NEEDED | A cropped component sheet makes the case look like a UI catalogue. Lead with Foundations → semantic tokens → shared components → three product themes → production. |
| `design-system-before-after.png` | Design-system problem/exploration | KEEP, BUT REWORK | It is an audit → analyse → prioritise process visual, not before/after. Rename its role, enlarge the evidence, remove unreadable sticky notes, and caption the prioritisation decision. |
| `design-system-semantics.png` | Token architecture | KEEP, BUT REWORK | The value → primitive → semantic mapping is useful. Add the missing component / product-theme destination and align labels with the page's three-layer terminology. |
| `design-system-sub-brands.png` | Theming | KEEP | Best architecture proof. Caption: one component keeps its structure while semantic tokens change product identity. |
| `design-system-specs.png` | Currently unused | KEEP, BUT REWORK | Strong delivery evidence. Crop to one component and show anatomy, states, usage guidance, accessibility, and the engineering-facing specification. |
| `design-system-prototype.png` | Dead constant; historic source reference | REPLACE / NEW VISUAL NEEDED | File is missing. Do not restore an “AI-powered tooling” visual unless it explains a real decision. Prefer Figma variables → implementation tokens → shipped component. |
| `design-system-governance.png` | Historic source reference only | REPLACE / NEW VISUAL NEEDED | File is missing. A small request → review → build → test across three themes → release flow would support delivery if the workflow is confirmed. |
| `white-label-esim-cover.png` | Home card | KEEP, BUT REWORK | Direct product view is strong; “AI-first workflow” is the wrong story. Relabel around functional validation or behaviour-first prototyping. |
| `white-label-esim-hero.png` | White-label hero | REMOVE | Staged laptop mockup hides the UI and adds no evidence. Replace with a direct form + live-preview composition. |
| `white-label-esim-problem.png` | White-label problem | KEEP, BUT REWORK | Clearly shows why static approval can fail under real input. Tighten the annotations and make the failure mechanism, not Figma-versus-web decoration, the focus. |
| `white-label-esim-contrast.png` | Contrast decision | KEEP, BUT REWORK | Strong formula → behaviour visual, but the shown `0.55` threshold is not a WCAG pass guarantee. Update after the prototype compares actual contrast ratios. |
| `white-label-esim-logic.png` | Conditional logic | KEEP | Strong input → rule → output visual. Caption which optional inputs add or remove which preview regions. |
| `white-label-esim-tips.png` | Onboarding dashboard | KEEP, BUT REWORK | Useful onboarding evidence but misnamed and nearly duplicates `saas-onboarding-dashboard.png`. Keep only as part of one combined dashboard-guidance visual. |
| `promo-banner.png` | White-label live demo | KEEP | Real upload/crop stress-test content inside the demo. It need not appear separately in the case study. |
| `PrototypeLaunchIcon` inline SVG | White-label case CTA | KEEP | Decorative but functional as a compact demo-launch cue; it does not displace product evidence. |
| `yesim-wordmark.tsx` and demo UI SVGs | White-label live demo | KEEP | Product UI assets required by the working prototype; not standalone case-study visuals. |
| `empty-brands-illustration.tsx` | White-label demo | KEEP | Supports the empty state inside the demo. No separate portfolio placement needed. |
| `saas-onboarding-cover.png` | Home card | KEEP | Direct view of the onboarding-aware dashboard; stronger than the staged hero. |
| `saas-onboarding-hero.png` | Onboarding hero | REMOVE | Staged laptop mockup duplicates the cover and makes the UI unreadable. Use the direct dashboard or an end-to-end flow. |
| `saas-onboarding-before.png` | Before state | KEEP | Clear product evidence of an empty dashboard. Add a caption that names the missing prerequisite and absent next action. |
| `saas-onboarding-flow.png` | Problem transition | KEEP, BUT REWORK | Current “????” diagram explains the gap but not the solution. Replace with old manual account-creation route versus new signup → company → employee → plan → activation route. |
| `saas-onboarding-draft.png` | “Incomplete information” section | KEEP, BUT REWORK | The screenshot shows a company-profile step, not a saved draft. Rename/reposition it and annotate why these fields are needed; do not claim draft recovery from this image. |
| `saas-onboarding-dashboard.png` | Dashboard continuation | KEEP, BUT REWORK | Useful decision annotation, but overlaps with the tips image. Combine both into one visual with only two callouts: account identity and next action. |
| `score-counter-cover.png` | Home card | KEEP | Clear, readable product view and platform cue. |
| `score-counter-hero.jpg` | Score Counter hero | KEEP, BUT REWORK | Shows the app in a real context, but it is still a lifestyle composition. Add a caption about replacing pen-and-paper during play; do not use it as metric proof. |
| `score-counter-evolution.png` | Product evolution | KEEP | Strong long-term ownership proof. Add two or three annotations naming meaningful interaction changes, not just visual modernisation. |
| `score-counter-flow.mp4` | Core flow | KEEP, BUT REWORK | Shows the live interaction, but needs a visible caption and poster. Ensure it demonstrates open → add counters → count rather than duplicating the evolution image. |
| `score-counter-testimonials.png` | Review CTA | REMOVE | Reconstructed lifestyle image weakens the credibility of real reviews. Replace with direct review excerpts or link to the existing review wall. |
| `score-counter-bonus.mp4` | Unexpected uses | KEEP | Strong direct evidence from real reviews and user messages. Add a caption explaining that generality enabled sports, household, and habit use cases. |

## Score Counter metric synchronisation

- Current visible references: `src/pages/home/index.tsx` and `src/pages/score-counter/index.tsx` both use 1M+ installs / 100K MAU.
- No current file uses 870K or 87K. Those values exist only in repository history and the deleted original Markdown.
- 920K / 90K also exists only in repository history; the latest CV and current pages supersede it with 1M+ / 100K.
- Google Play Console KPI trends from August 2026 are the internal source for 1M+ installs and 100K MAU. The public Play listing independently confirms 4.9 stars but not the internal figures.

## Seven-question readiness

| Case | Product | Problem | Why it mattered | Roma's role | Decision rationale | What shipped | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Design system | Yes | Yes | Yes | Partial | Yes | Partial | Yes, after metric correction |
| White-label configurator | Yes | Yes | Yes | Mostly | Yes | Mostly | Partial; production proof needs confirmation |
| Self-serve onboarding | Yes | Yes | Partial | Partial | Yes | Unclear | No observed outcome |
| Score Counter | Yes | Yes | Yes | Yes | Yes | Yes | Yes, with internal-source caveat |

## Proposed story structures

These are the implementation outlines. Each section has one job: establish evidence, explain a decision, or show delivery. Decorative mockups and repeated process narration are excluded.

### Design system

1. **Opening:** Three B2B products shared workflows but had drifted into separate UI systems. Show Roma's role, the three-product scope, and the supported outcomes: about 4x faster Figma file preparation and around 30% fewer recurring style-related QA issues, both operational estimates.
2. **Evidence and constraint:** Use the product audit to show duplication, then explain why a rewrite was impractical. State the success criteria before showing the solution.
3. **Two decisions:** First, values → primitives → semantic tokens so components describe purpose. Second, one structural component layer with semantic themes for each product.
4. **Delivery:** Show a real component specification, the Figma-to-code handoff, staged migration, and lightweight governance. Distinguish Roma's design-system ownership from engineering implementation without inventing names or approvals.
5. **Result:** Lead with about 4x / around 30% / three products and explain how both estimates were formed. Treat 48 components and 140+ tokens as mature-library scope. Close with one lesson about adoption: a system succeeds when teams can use it without stopping product work.

Visual order: new code-native architecture hero → audited-surface image → semantics image → sub-brand image → specification image. Remove the generic prose comparison and the missing prototype / governance references.

### White-label eSIM configurator

1. **Opening:** A partner can enter almost any brand colour, asset, or content combination, so a PRD alone could not prove that the configuration would remain legible and valid. Show Roma as designer and prototype developer and state the roughly two-day working-concept scope.
2. **Why code:** Compare what the PRD described with what the team needed to test: live input, contrast, conditional regions, validation, and responsive behaviour. State that there was no prior Figma phase.
3. **Three behaviours:** Explain the contrast-ratio decision; optional-content rules; and validation plus unsaved-work protection. Each behaviour gets one direct visual and one tradeoff.
4. **Delivery:** Show the functional prototype, what the review artifact covered, and the live demo. Timing is confirmed; keep stakeholder-session count, code reuse, and production QA outcomes out of the headline until confirmed.
5. **Result:** State only what the repository proves: the prototype made arbitrary inputs and edge cases testable in the browser. Mark production outcomes as evidence still needed in the audit, not as live-page claims.

Visual order: new code-native form → rules → preview hero → problem image → new contrast-ratio visual → conditional-logic image → live prototype. Remove the staged laptop and threshold-based contrast graphic.

### Self-serve onboarding

1. **Opening and status:** Manual account creation was moving to self-service signup, while the product could leave new admins in an empty state. Frame the work as an onboarding direction whose measured outcome is not documented in the repository.
2. **Evidence:** Use the actual empty dashboard as the before state. Do not claim abandonment or conversion loss without analytics.
3. **Activation decision:** Define the intended activation event as the first employee receiving an eSIM. Show the shipped path from account → company → employee → plan → dashboard.
4. **Product decisions:** Explain why company information was placed before employee setup and why the dashboard needed a visible next action. Identify each as a design rationale, not an observed result.
5. **Measurement plan:** List the funnel events and success criteria that would be needed to call this a growth case. Do not publish a fabricated result.

Visual order: direct dashboard hero → empty-dashboard evidence → new code-native old/new path → company-step image → one dashboard-guidance image. Remove the staged laptop, the question-mark flow, duplicate dashboard visual, and Expected / Observed Result block.

### Score Counter

1. **Opening:** A solo Android product Roma has designed, built, released, and supported since 2016. Put 1M+ installs, 100K MAU, 4.9 rating, and $0 marketing spend near the top.
2. **Signal:** Reviews and support requests showed two consistent needs: keep counting immediate and make sessions more useful without narrowing the app to one game.
3. **Prioritisation decision:** Protect the open → add counters → count loop, then add saved sessions, history, graphs, and optional controls around it.
4. **Evolution and delivery:** Use the evolution image and real interaction video to show iteration across Android releases. Keep ownership evidence concise: research, design, development, store listing, support, and localisation.
5. **Proof:** Use the supported metrics, direct review evidence, and current Play listing. Avoid claims that “best UX” caused growth. Close with the lesson that general tools stay useful when their core action remains obvious.

Visual order: contextual product photo → interaction video → evolution image → direct review video → review wall link. Remove the reconstructed testimonial image and repeated outcome prose.

## Implementation record

### Narrative and evidence hierarchy

| Before | After |
| --- | --- |
| Case titles and leads described artifacts or made broad success claims. | Each opening names the product problem, Roma's contribution, and the strongest supported outcome or evidence boundary. |
| Generic Problem / Hypothesis / Final solution headings repeated the same rationale. | Headings now carry the story: the constraint, the decision, the tradeoff, delivery, and result. |
| Role metadata named a title but did not explain ownership. | The design-system and white-label pages separate Roma's work from PM / engineering collaboration; onboarding explicitly avoids solo-credit language. |
| Outcomes appeared late and mixed delivery scope with impact. | Supported metrics sit near the opening; component and token counts are labelled as mature-library scope. |
| The onboarding page treated intended effects as observed effects. | A visible evidence-status block and measurement plan distinguish the shipped flow from a proven experiment result. |

### Visual and interface polish

| Before | After |
| --- | --- |
| Staged laptop mockups led the white-label and onboarding stories. | Direct product evidence and code-native system diagrams lead both cases. |
| Images appeared without captions, so decorative and evidentiary media had equal weight. | Every retained case-study image and video has a concise evidence caption and a theme-aware 1px outline. |
| The design-system hero read as a component catalogue. | A shared foundation → one component layer → three themes diagram explains the scaling decision first. |
| The white-label contrast visual documented a fixed luminance threshold. | A code-native contrast-ratio visual matches the corrected prototype logic: compare black and white foreground ratios and use the stronger result. |
| Score Counter's reconstructed testimonial collage displaced real user evidence. | The page uses direct review excerpts, the real-review video, and the existing review wall. |

### Removed from the live narrative

- Unsupported or conflicting metrics: 90% faster feature design, the stale 225K active-device figure, stale install / MAU counts, and implied onboarding lift. The newer 233K active-device evidence remains omitted from the live case because it adds less context than the dated install and MAU figures.
- Unconfirmed delivery claims: one-session alignment, direct prototype-code reuse, and zero post-launch contrast QA issues.
- Decorative or misleading media: all staged case-study heroes, the “AI-first workflow” white-label cover, threshold-based contrast graphic, question-mark onboarding flow, duplicate dashboard tips, and reconstructed Score Counter testimonials.
- Repeated Before / After, approach, result, and reflection prose that restated decisions without adding evidence.

### Reworked or newly created visuals

- Design system: new code-native architecture opening; retained audit, semantic-token, sub-brand, and specification images with corrected roles and captions.
- White-label: new input → rules → preview opening and contrast-ratio visual; retained the real-input problem and conditional-logic images; linked directly to the working configurator.
- Onboarding: direct dashboard opening plus a new manual versus self-service activation path; retained one company-step image and one dashboard-continuation image.
- Score Counter: retained the contextual hero, core-flow video, evolution image, and direct-review video; removed the lifestyle testimonial collage.

## Post-implementation seven-question check

| Case | Product | Problem | Why it mattered | Roma's role | Decision rationale | What shipped | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Design system | Clear | Clear | Clear | Clear design / engineering split; adoption was collaborative with no single formal approver | Clear | Clear | Both operational estimate methods and limitations are documented |
| White-label configurator | Clear | Clear | Clear | Clear for design and prototype | Clear | Prototype is directly testable | Post-launch QA result is qualitative and its evidence limits are stated |
| Self-serve onboarding | Clear | Clear | Clear as a product hypothesis | Clear; Roma was the sole designer | Clear | Exact flow confirmed shipped | No observed outcome is claimed |
| Score Counter | Clear | Clear | Clear | Clear | Clear | Clear | Supported by CV, review corpus, current Play listing, and Roma's dated Play-search check |

## Evidence status after follow-up

No unresolved evidence gaps remain from this audit round.
