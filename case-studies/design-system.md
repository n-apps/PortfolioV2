# Design system: One shared UI foundation for three B2B products

> I designed a shared design system for three B2B products that had grown in different directions. The goal was not just visual consistency. It was making product teams faster without creating a system that needed constant maintenance.

![Design system overview — components, tokens, and theme variations side by side](/images/design-system-hero.png)

| | |
| --- | --- |
| **Role** | Product Designer |
| **Timeframe** | Sep – Dec 2025 |
| **Platform** | Web (B2B products) |
| **Team** | Developer, PM, UX/UI Designer (myself) |

## Context

Yesim is a global eSIM platform with over 3 million customers and several B2B web products sharing the same tech stack. When I joined, three products were growing independently, each with its own UI patterns, color schemes, and legacy implementations. Even small changes slowed things down, and design reviews became negotiations instead of quick reference checks.

The products did not need a decorative refresh. They needed a shared way to build common B2B surfaces: tables, forms, filters, navigation, feedback states, and settings pages. The hard part was that each product still needed its own identity.

## Problem

The main product risk was fragmentation. If each product needed its own components, the system would collapse under maintenance. If the system forced every product to look the same, teams would work around it. Either outcome would slow the work down.

> How do we give three products one shared UI foundation without flattening the parts that need to feel distinct?

![Before/after UI audit — three products with inconsistent components vs. unified system output](/images/design-system-before-after.png)

## Approach

### Prevent forks before they started

The main risk was forking. If each product needed its own buttons, inputs, tables, and dialogs, the library would become three libraries with the same name. So I used three token layers: raw values, primitives, and semantic tokens.

The product-specific work happens at the semantic layer. A product can change `color-primary`, `font-heading`, or `radius-default` without changing the component itself. The component stays boring on purpose.

| Layer | Purpose | Example | Themeable? |
| --- | --- | --- | --- |
| Raw values | Hardcoded (legacy) | `#3B82F6` | No (shared) |
| Primitive | The full palette | `blue-500: #3B82F6` | No (shared) |
| Semantic | Role-based meanings | `color-primary: {blue-500}` | Yes (per product) |

![Token and theming model — three-layer diagram showing primitives → semantics → component tokens](/images/design-system-semantics.png)

### Let products look different without separate components

Each product gets a theme file that overrides semantic tokens. The component library does not need to know which product is using it. Switching themes changes the product expression, not the component implementation.

| Token | Product A | Product B | Product C |
| --- | --- | --- | --- |
| `color-primary` | Blue (#3B82F6) | Teal (#0D9488) | Purple (#7C3AED) |
| `font-heading` | Inter | Plus Jakarta Sans | Inter |
| `radius-default` | 8px | 4px | 12px |
| `density` | Default | Compact | Default |

![Sub-brand themes comparison — same component rendered in three product themes side by side](/images/design-system-sub-brands.png)

### Prioritize the surfaces teams touched every week

I audited every UI element across all three products: buttons in five styles, three table implementations, form fields that looked similar but behaved differently. Then I used the results to build a prioritized roadmap. Tables and forms came first because they appeared on every product's most-visited pages.

| Category | Components | Why first |
| --- | --- | --- |
| Data display | Tables, data cards, stat blocks, badges | Every B2B product has a data table on its most-visited page |
| Forms | Inputs, selects, date pickers, form layouts, validation | Forms are 40%+ of B2B surfaces |
| Filters & search | Filter bars, chips, search inputs, sort controls | Paired with tables in nearly every list view |
| Feedback & states | Empty states, loading skeletons, toasts, error states | Most-neglected category; huge impact on perceived quality |
| Navigation | Sidebar, breadcrumbs, tabs, page headers | Structural: everything else lives inside navigation |

Density is a system-level token. Components respond to a density setting (default, compact, spacious) without separate variants. Tokens are named by function, not appearance: `color-fg-secondary` tells you it's a secondary foreground color without looking up the hex.

![Component anatomy — button dissected with token labels mapped to visual properties](/images/design-system-specs.png)

### Make adoption lighter than rebuilding

Each component includes a live preview, prop/variant table, usage guidelines (when to use and when not to), accessibility notes, and a changelog.

Product managers could prototype with real components, so concepts looked like the actual product from day one instead of a rough wireframe that needed to be redesigned later.

![Figma library connected to an AI-powered prototype tool — design system enabling rapid prototyping](/images/design-system-prototype.png)

Instead of mandating a full migration, I worked with each product team to migrate high-impact, low-risk surfaces first: settings pages and list views. Once teams saw the time savings, adoption became easier to justify.

To keep requests manageable, teams submitted component requests through Jira. I reviewed and ranked them weekly. New components went through design review with at least one consuming team, then were built, documented, versioned, and tested across all three product themes.

![Governance workflow diagram — one team submits requests, the design system team processes and ships components, and two product teams consume them](/images/design-system-governance.png)

## Result

- **48** Components
- **140+** Design tokens
- **3** Brand themes

- **Up to 90% faster feature design:** assembling from components instead of designing from scratch
- **~30% less time on style-related QA:** inconsistencies caught at the design stage, not in review
- **Clearer team reference:** new team members could read the documented decisions instead of reverse-engineering patterns from code and old screens

## Reflection

**What worked:**

- **The anti-forking rule held up:** Getting three products with distinct visual identities onto one shared library was the hardest part. The token model kept that from becoming three separate component sets.
- **Teams used the process because it was small:** Busy product teams participated because requests were easy to make, priorities were visible, and the first migrations produced results after one quarter.
- **Documentation carried design intent:** Including the "why" in component documentation made the system easier to trust. It showed when to use a pattern, not just what it looked like.

**What I'd change:**

- **Use AI-powered tooling earlier:** Manual batch operations were slow and left room for small mistakes.
- **Track adoption from the start:** Component usage, override frequency, and contribution activity would have made the system's value visible sooner.
- **Involve developers earlier:** Some naming decisions that seemed logical in Figma caused problems in code.
