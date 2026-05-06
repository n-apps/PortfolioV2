# White-label eSIM: Designing behavior instead of static mockups

> I built a working prototype instead of another static Figma handoff. It exposed the states, edge cases, and interaction rules that mockups usually hide, and gave the team something closer to the final product.

![Interactive prototype overview with form and live preview](/images/white-label-esim-hero.png)

| | |
| --- | --- |
| **Role** | Product Designer |
| **Timeframe** | 2025–2026 |
| **Platform** | Web (B2B) |
| **Team** | PM, UX/UI Designer (myself) |

## Context

Yesim is a global eSIM platform with over 3 million customers. One B2B product lets telecom operators upload a logo, pick brand colors, add contact details, and preview the eSIM experience their customers will see.

Before this work, the handoff pattern was familiar: design screens in Figma, annotate the edge cases, hand them to development, then spend review cycles catching things the static file could not express. That workflow was manageable for simple pages. It was much weaker for a product where the UI changes based on real operator input.

## Problem

This customization screen was all response. Brand colors changed text contrast. Optional fields hid or revealed sections. File uploads changed the layout. A Figma mockup could show one clean state, but the product had to survive many.

I had run into this before. I would hand off polished screens, then watch implementation surface the real problems: contrast failures on dark brand colors, empty states nobody designed, layout shifts when optional content appeared or disappeared. The mockup looked right. The built product did not behave right.

> How do we design a B2B customization flow so the artifact captures the behavior, not only the pixels?

For brand customization, the weak spots were predictable:

- **Color-dependent UI:** an operator can pick almost any brand color. A mockup shows the one I chose. The product has to keep text readable on whatever they choose.
- **Conditional sections:** the contact card appears only when there is contact info. The promotion badge has a toggle. The footer comes and goes. Static screens turn that into a pile of variants.
- **File uploads:** logos and banners reshape the preview. Aspect ratios vary, fallbacks matter, and the layout needs to survive real assets.

The risk was not that the screen would look bad in Figma. The risk was that it would look right there and fail under real input.

![Static mockup compared with real input showing contrast and layout issues](/images/white-label-esim-problem.png)

## Approach

### Build the artifact where behavior had to work

I designed directly in Next.js and Tailwind CSS instead of producing static screens. I wasn't skipping design. I was putting it somewhere the interaction constraints had to be dealt with.

In Figma, you can place white text on a blue background and move on. In code, the text is either readable or it isn't. If operators can pick their own colors, the logic has to handle that.

The trade-off was obvious: more effort upfront and a slower first pass. The upside was worth it. The awkward problems showed up while I was still designing.

### Make contrast executable

The prototype computes foreground text color from the operator's brand color using WCAG relative-luminance calculations. Light brand colors get dark text. Dark brand colors get white text. It runs every time the color changes, so nobody has to hope the chosen color happens to work.

In a static design, I would have left a comment saying "ensure contrast." In the prototype, contrast is a function. It passes or it fails.

![Automatic contrast for light and dark brand colors](/images/white-label-esim-contrast.png)

### Treat optional content as product logic

Instead of creating a dozen Figma variants for toggles and optional fields, the prototype renders conditionally. The contact card appears when at least one contact field has content. The promotion badge follows its toggle. The footer appears only when it has something useful to show.

That made the combinations much harder to miss. The rendering logic handled them instead of relying on my memory of which variants to draw.

![Conditional sections appearing based on input](/images/white-label-esim-logic.png)

### Use the preview as the review surface

The screen is split between the form and the live preview. Every keystroke, color change, or file upload updates the preview instantly. Operators can see their brand inside a realistic mobile interface, with a desktop toggle, without saving or refreshing.

That made reviews faster. I did not have to walk people through annotations. I shared a URL, they typed into the form, and the product answered back.

## Result

The prototype covered the parts that usually get shoved into annotations:

- **Live form-to-preview binding:** brand name, logo, color, banner, contact details, and policy links update the preview as the operator types
- **Mobile and desktop preview modes:** the preview switches between an iPhone shell and a desktop browser frame
- **Automatic contrast handling:** text color on brand backgrounds comes from a luminance function instead of a hardcoded choice
- **File handling:** logo and banner uploads render immediately in the preview, with clear and replace controls
- **Validation:** email format, URL structure, and brand alias cleanup happen inline, before save
- **Dirty-state tracking:** the form warns before navigation when changes are unsaved, and save/reset work per section
- **Loading states and transitions:** skeleton screens and CSS transitions make the preview feel closer to the product

In a static handoff, most of that would have been comments. In the prototype, people could try the behavior themselves.

[interactive demo: Launch the interactive prototype — edit the form and watch the preview respond. Available at `/work/white-label-esim/demo`]

- **Zero contrast-related QA issues:** the luminance logic was tested in the prototype instead of being discovered during review
- **Stakeholder alignment in one session:** PMs and partners tested the prototype directly instead of reviewing annotated screens for another round
- **Less translation for development:** the prototype used the same stack as production (Next.js, Tailwind), so the developer could extend it instead of rebuilding from a mockup
- **Edge cases handled by default:** conditional rendering and validation logic covered the state combinations inside the prototype itself

## Reflection

**What worked:**

- **The medium enforced rigor:** Code doesn't let you hand-wave for long. Every state, color, and conditional is either handled or it breaks. That pressure made the design better.
- **Stakeholders engaged differently:** When people can type into a prototype and see the result, the feedback shifts to behavior. People ask what happens when a field is blank instead of debating a static screen.
- **The prototype became the spec:** There was no separate document explaining how the form and preview should interact. The developer could read the behavior in the code instead of translating a PDF.

**What I'd change:**

- **Pair with a developer from day one:** I built this solo, which worked for a focused feature but would not scale well. A developer in the room earlier would have caught a few structural choices I made like a designer.
- **Keep a lightweight Figma file for visual exploration:** Code is a clumsy place for early divergent thinking. I should have sketched in Figma first, then moved to code once the direction was clearer.
- **Document the "why" alongside the code:** The prototype shows what happens, but not always why. Short decision notes would have helped future teammates understand the intent behind the implementation.
