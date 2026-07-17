import { Link } from 'react-router';
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';
import { SectionAnimate } from '@/components/ui/section-animate';
import { navigateWithTransition } from '@/lib/page-transition';
import { nbsp } from '@/lib/nbsp';
import {
  fluidLead,
  fluidBase,
  fluidSmall,
  fluidH1,
  sectionGap,
  innerGap,
} from '@/lib/typography';
import {
  SectionHeading,
  SubHeading,
  PullQuote,
  ConfidentialityNote,
  highlight,
} from '@/components/case-study/case-study-components';

const SUBJECT = 'Yesim';
import { GlowEffect } from '@/components/motion-primitives/glow-effect';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';

/* ── Data ─────────────────────────────────────────────── */

const metadata = [
  { label: 'Role', value: 'Product designer' },
  { label: 'Timeframe', value: 'Jan 2026' },
  { label: 'Platform', value: 'Web (B2B)' },
  { label: 'Team', value: 'PM · Engineering' },
];

function PrototypeLaunchIcon() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 96 96'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='size-12 shrink-0 transition-transform duration-200 group-hover:scale-[1.04] sm:size-14'>
      <g clipPath='url(#prototype-launch-icon-clip)'>
        <path
          d='M92 61.392V11.652C92 11.1495 91.901 10.6519 91.7085 10.1877C91.5161 9.72349 91.2341 9.30176 90.8786 8.94661C90.523 8.59147 90.101 8.30988 89.6366 8.11794C89.1722 7.926 88.6745 7.82748 88.172 7.82801H7.828C6.81344 7.828 5.84038 8.23076 5.12261 8.94779C4.40483 9.66481 4.00106 10.6374 4 11.652V61.392H92Z'
          fill='#F55817'
        />
        <path
          d='M80.52 7.828H7.828C6.81344 7.828 5.84038 8.23076 5.12261 8.94778C4.40483 9.66481 4.00106 10.6374 4 11.652V61.392H26.96L80.52 7.828Z'
          fill='#FFADB3'
        />
        <path
          d='M4 61.392V69.044C4.00106 70.0586 4.40483 71.0312 5.12261 71.7482C5.84038 72.4652 6.81344 72.868 7.828 72.868H88.176C89.1899 72.8669 90.1619 72.4637 90.8788 71.7468C91.5957 71.0299 91.9989 70.0579 92 69.044V61.392H4Z'
          fill='white'
        />
        <path
          d='M59.48 88.172C56.0151 83.7955 54.0078 78.4437 53.74 72.868H42.26C41.9922 78.4437 39.985 83.7955 36.52 88.172H59.48Z'
          fill='#B2B2B2'
          stroke='#191919'
          strokeWidth={4}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M30.776 88.176H65.212M4 61.392H92M38.432 26.96V34.608M57.56 26.96V34.608M88.176 7.828H7.828C6.81344 7.828 5.84038 8.23076 5.12261 8.94778C4.40483 9.66481 4.00106 10.6374 4 11.652V69.044C4 71.156 5.712 72.868 7.828 72.868H88.176C89.1899 72.8669 90.1619 72.4637 90.8788 71.7468C91.5957 71.0299 91.9989 70.0579 92 69.044V11.652C92 10.6378 91.5971 9.66517 90.88 8.94803C90.1628 8.23089 89.1902 7.828 88.176 7.828Z'
          stroke='#191919'
          strokeWidth={4}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M63.304 44.176C59.0637 47.8752 53.6271 49.9133 48 49.9133C42.3729 49.9133 36.9363 47.8752 32.696 44.176'
          stroke='#191919'
          strokeWidth={4}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='prototype-launch-icon-clip'>
          <rect width={96} height={96} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export function WhiteLabelEsimPage() {
  return (
    <div className='flex flex-col' style={{ gap: sectionGap }}>
      {/* ── 1. Hero + TL;DR ────────────────────────────── */}
      <SectionAnimate delay={0.05}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: fluidH1,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
            }}>
            Interactive eSIM configurator in hours
          </h1>
          <p style={{ fontSize: fluidLead, lineHeight: 1.6 }}>
            {nbsp(
              'Built an interactive prototype of white-label eSIM configurator in 2 days. It gave the team a closer look of the final product and helped identify potential issues early on.',
            )}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.08}>
        <div className='-mx-4 sm:mx-0'>
          <ImageWithFallback
            src='/images/white-label-esim-hero.png'
            alt='Interactive prototype overview with form and live preview'
            className='w-full rounded-none sm:rounded-xl'
            loading='eager'
          />
        </div>
      </SectionAnimate>

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

      <SectionAnimate delay={0.11}>
        <ConfidentialityNote />
      </SectionAnimate>

      {/* ── 2. Problem & Context ───────────────────────── */}
      <SectionAnimate delay={0.12}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <SectionHeading>Problem &amp; Context</SectionHeading>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {highlight(
              'Yesim is a global eSIM platform with over 3\u00a0million customers. One B2B product lets opted-in partners upload a logo, pick brand colors, add contact details and preview the eSIM experience their customers will see.',
              SUBJECT,
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'Before this work, the handoff pattern was familiar: design screens in Figma, annotate the edge cases, hand them to development, then spend review cycles catching things the static file could not express. That workflow was manageable for simple pages. It was much weaker for a product where the UI changes based on real partner input.',
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'The white-label eSIM configurator had few states on the surface. Brand colors changed text contrast. Optional fields hid or revealed sections. File uploads changed the layout. A Figma mockup could show one clean state, but the product had to survive many.',
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'I had run into this before. I would hand off polished screens, then watch implementation surface the real problems: contrast failures on dark brand colors, empty states nobody designed, layout shifts when optional content appeared or disappeared. The mockup looked right. The built product did not behave right.',
            )}
          </p>
          <PullQuote>
            {nbsp(
              'How do we design a B2B customization flow so the artifact captures the behavior, not only the pixels?',
            )}
          </PullQuote>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'The risk was not that the screen would look bad in Figma. The risk was that it would look right there and fail under real input.',
            )}
          </p>
        </div>
      </SectionAnimate>

      {/* ── 3. Hypothesis & Constraints ────────────────── */}
      <SectionAnimate delay={0.14}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <SectionHeading>Hypothesis &amp; Constraints</SectionHeading>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'My hypothesis was that a working prototype would reveal contrast, layout, conditional-content and validation issues earlier than static mockups could.',
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'The constraints were concrete: partners could choose arbitrary brand colors, upload logos and banners with different aspect ratios, turn optional sections on or off, and review a mobile experience that had to survive real input.',
            )}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.16}>
        <div className='-mx-4 sm:mx-0'>
          <ImageWithFallback
            src='/images/white-label-esim-problem.png'
            alt='Static mockup compared with real input showing contrast and layout issues'
            className='w-full rounded-none sm:rounded-xl'
          />
        </div>
      </SectionAnimate>

      {/* ── 4. Exploration ─────────────────────────────── */}
      <SectionAnimate delay={0.18}>
        <div className='flex flex-col' style={{ gap: sectionGap }}>
          <div className='flex flex-col' style={{ gap: innerGap }}>
            <SectionHeading>Exploration</SectionHeading>
            <SubHeading>Use code where behavior had to be resolved</SubHeading>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'I designed directly in code instead of producing static screens. I wasn\u2019t skipping design. I was putting it somewhere the interaction constraints had to be dealt with.',
              )}
            </p>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'Static mockups were useful for direction, but weak for this problem. They could show one clean combination, not what happened when a partner entered a hard-to-read color, skipped optional content, or uploaded a banner with an awkward crop.',
              )}
            </p>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'The trade-off was obvious: more effort upfront and a slower first pass. The upside was worth it. The awkward problems showed up while I was still designing.',
              )}
            </p>
          </div>

          <div className='flex flex-col' style={{ gap: innerGap }}>
            <SectionHeading>Final Solution</SectionHeading>
            <SubHeading>Make contrast executable</SubHeading>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'The prototype computes foreground text color from the partner\u2019s brand color using WCAG relative-luminance calculations. Light brand colors get dark text. Dark brand colors get white text. Contrast became a rule in the product, not a comment in Figma.',
              )}
            </p>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'Because the rule runs every time the color changes, the preview does not depend on someone remembering to check a clean swatch by hand.',
              )}
            </p>
          </div>

          <div className='-mx-4 sm:mx-0'>
            <ImageWithFallback
              src='/images/white-label-esim-contrast.png'
              alt='Automatic contrast for light and dark brand colors'
              className='w-full rounded-none sm:rounded-xl'
            />
          </div>

          <div className='flex flex-col' style={{ gap: innerGap }}>
            <SubHeading>Treat optional content as product logic</SubHeading>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'Instead of creating a dozen Figma variants for toggles and optional fields, the prototype renders conditionally. Contact details, promotions and footer content appear only when they have useful input. Logo and banner states update when files are uploaded or replaced.',
              )}
            </p>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'That reduced the chance of missed combinations. The rendering logic handled blank, partial and filled states instead of relying on my memory of which variants to draw.',
              )}
            </p>
          </div>

          <div className='-mx-4 sm:mx-0'>
            <ImageWithFallback
              src='/images/white-label-esim-logic.png'
              alt='Conditional sections appearing based on input'
              className='w-full rounded-none sm:rounded-xl'
            />
          </div>

          <div className='flex flex-col' style={{ gap: innerGap }}>
            <SubHeading>Use the preview as the review surface</SubHeading>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'The screen is split between the form and the live preview. Every keystroke, color change, or file upload updates the preview instantly. Partners can see their brand inside a realistic mobile interface, with a desktop toggle, without saving or refreshing.',
              )}
            </p>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'Inline validation, file-upload behavior, save and reset controls, dirty-state warnings and skeleton transitions lived in the prototype too. The artifact described the interaction rules by letting people try them.',
              )}
            </p>
          </div>
        </div>
      </SectionAnimate>

      {/* ── 5. Result ──────────────────────────────────── */}
      <SectionAnimate delay={0.22}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <SectionHeading>Result</SectionHeading>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'The prototype handled the full configurator in a single shareable URL. As the partner typed, brand name, logo, color, banner, contact details, and policy links all updated the live preview. A toggle switched between mobile and desktop frames. Foreground text color adapted from a luminance function automatically, and file uploads rendered immediately with clear-and-replace controls.',
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'It also covered the friction that usually surfaces late: inline validation for email format, URL structure, and brand alias cleanup; dirty-state warnings before navigation; save and reset controls per section; and skeleton transitions to make the preview feel close to the finished product. In a static handoff, most of that would have been comments. In the prototype, people could try the behavior themselves.',
            )}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.24}>
        <div className='group relative isolate transition-transform duration-200 hover:-translate-y-0.5'>
          <GlowEffect
            colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
            mode='colorShift'
            blur='strong'
            duration={3}
            scale={1.06}
            className='translate-y-1.5 opacity-50'
          />
          <Link
            to='/work/white-label-esim/demo'
            data-goatcounter-click='launch-white-label-demo'
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
              navigateWithTransition('/work/white-label-esim/demo', () =>
                Promise.all([
                  import('@/pages/white-label-esim/demo/layout'),
                  import('@/pages/white-label-esim/demo/company-settings'),
                ]),
              );
            }}
            className='relative z-10 flex items-center gap-4 rounded-xl bg-foreground p-4 text-background sm:gap-5 sm:p-5'>
            <div className='flex min-w-0 flex-1 flex-col gap-1'>
              <h3
                className='font-medium'
                style={{ fontSize: fluidBase, lineHeight: 1.4 }}>
                Launch the interactive prototype
              </h3>
              <span
                className='text-background/70'
                style={{ fontSize: fluidSmall, lineHeight: 1.5 }}>
                Edit the form and watch the preview respond.
              </span>
            </div>
            <PrototypeLaunchIcon />
          </Link>
        </div>
      </SectionAnimate>

      {/* ── 6. Result details ──────────────────────────── */}
      <SectionAnimate delay={0.26}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'No contrast QA issues surfaced after handoff; the luminance logic had already been tested inside the prototype. PMs and partners reviewed in one session by typing into the form and seeing the result directly, rather than working through annotated screens.',
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'The developer extended the prototype rather than rebuilding from a mockup; both used the same stack. Conditional rendering and validation logic already lived in the prototype, so edge cases got handled there before production development started.',
            )}
          </p>
        </div>
      </SectionAnimate>

      {/* ── 7. Reflection ──────────────────────────────── */}
      <SectionAnimate delay={0.3}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <SectionHeading>Reflection</SectionHeading>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'Building the prototype in code was right for this feature. Code doesn\u2019t let you hand-wave: every state and conditional is either handled or it breaks. That pressure surfaced the awkward problems while I was still designing, before the team had to commit.',
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'The tradeoff is that code makes the first solid idea feel more final than it is. Figma would still be better for the earliest exploratory phase, before the direction has earned that level of commitment.',
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'I would also add short decision notes alongside the code next time. The prototype shows what happens, but future teammates still need the intent behind the behavior.',
            )}
          </p>
        </div>
      </SectionAnimate>

      {/* Bottom back link */}
      <SectionAnimate delay={0.34}>
        <div className='flex items-center justify-between'>
          <Link
            to='/'
            data-goatcounter-click='back-to-home-bottom'
            className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors'
            style={{ fontSize: fluidSmall, lineHeight: 1 }}>
            <RiArrowLeftLine size={16} />
            Home
          </Link>
          <Link
            to='/work/saas-onboarding'
            data-goatcounter-click='next-case-study'
            className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors'
            style={{ fontSize: fluidSmall, lineHeight: 1 }}>
            Next work
            <RiArrowRightLine size={16} />
          </Link>
        </div>
      </SectionAnimate>
    </div>
  );
}
