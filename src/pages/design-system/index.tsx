import { Link } from 'react-router';
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';
import { SectionAnimate } from '@/components/ui/section-animate';
import { nbsp } from '@/lib/nbsp';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
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

const heroImage = '/images/design-system-hero.png';
const beforeAfterImage = '/images/design-system-before-after.png';
const semanticsImage = '/images/design-system-semantics.png';
const subBrandsImage = '/images/design-system-sub-brands.png';
const specsImage = '/images/design-system-specs.png';
const governanceImage = '/images/design-system-governance.png';
const prototypeImage = '/images/design-system-prototype.png';

/* ── Data ─────────────────────────────────────────────── */

const metadata = [
  { label: 'Role', value: 'Product Designer' },
  { label: 'Timeframe', value: 'Sep \u2013 Dec 2025' },
  { label: 'Platform', value: 'Web (B2B)' },
  { label: 'Team', value: 'PM · Engineering' },
];

const impactStats = [
  { value: '48', label: 'Components' },
  { value: '140+', label: 'Design tokens' },
  { value: '3', label: 'Brand themes' },
];

const tokenLayers = [
  {
    layer: 'Raw values',
    purpose: 'Hardcoded (legacy)',
    example: '#3B82F6',
    themeable: 'No (shared)',
  },
  {
    layer: 'Primitive',
    purpose: 'The full palette',
    example: 'blue-500: #3B82F6',
    themeable: 'No (shared)',
  },
  {
    layer: 'Semantic',
    purpose: 'Role-based meanings',
    example: 'color-primary: {blue-500}',
    themeable: 'Yes (per product)',
  },
];

const subBrandThemes = [
  {
    token: 'color-primary',
    productA: 'Blue (#3B82F6)',
    productB: 'Teal (#0D9488)',
    productC: 'Purple (#7C3AED)',
  },
  {
    token: 'font-heading',
    productA: 'Inter',
    productB: 'Plus Jakarta Sans',
    productC: 'Inter',
  },
  {
    token: 'radius-default',
    productA: '8px',
    productB: '4px',
    productC: '12px',
  },
  {
    token: 'density',
    productA: 'Default',
    productB: 'Compact',
    productC: 'Default',
  },
];

const priorityComponents = [
  {
    category: 'Data display',
    components: 'Tables, data cards, stat blocks, badges',
    why: 'Every B2B product has a data table on its most-visited page',
  },
  {
    category: 'Forms',
    components: 'Inputs, selects, date pickers, form layouts, validation',
    why: 'Forms are 40%+ of B2B surfaces',
  },
  {
    category: 'Filters & search',
    components: 'Filter bars, chips, search inputs, sort controls',
    why: 'Paired with tables in nearly every list view',
  },
  {
    category: 'Feedback & states',
    components: 'Empty states, loading skeletons, toasts, error states',
    why: 'Most-neglected category; huge impact on perceived quality',
  },
  {
    category: 'Navigation',
    components: 'Sidebar, breadcrumbs, tabs, page headers',
    why: 'Structural: everything else lives inside navigation',
  },
];

const impactItems = [
  {
    label: 'Up to 90% faster feature design',
    body: 'Assembling from components instead of designing from scratch',
  },
  {
    label: '~30% less time on style-related QA',
    body: 'Inconsistencies caught at the design stage, not in review',
  },
  {
    label: 'Clearer team reference',
    body: 'New team members could read the documented decisions instead of reverse-engineering patterns from code and old screens',
  },
];

const whatWorked = [
  {
    label: 'The anti-forking rule held up',
    body: 'Getting three products with distinct visual identities onto one shared library was the hardest part. The token model kept that from becoming three separate component sets.',
  },
  {
    label: 'Teams used the process because it was small',
    body: 'Busy product teams participated because requests were easy to make, priorities were visible and the first migrations produced results after one quarter.',
  },
];

const whatIdChange = [
  {
    label: 'Use AI-powered tooling earlier',
    body: 'Manual batch operations were slow and left room for small mistakes.',
  },
  {
    label: 'Track adoption from the start',
    body: 'Component usage, override frequency and contribution activity would have made the system\u2019s value visible sooner.',
  },
  {
    label: 'Involve developers earlier',
    body: 'Some naming decisions that seemed logical in Figma caused problems in code.',
  },
];

/* ── Local sub-components ──────────────────────────────── */

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
    <div className='overflow-x-hidden sm:overflow-x-auto -mx-4 sm:mx-0'>
      <table
        className='w-full min-w-0 table-fixed'
        style={{ fontSize: '0.875rem', lineHeight: 1.4 }}>
        <thead>
          <tr className='border-b border-border/60'>
            {headers.map((h) => (
              <th
                key={h}
                scope='col'
                className='text-left text-muted-foreground tracking-wide uppercase py-3 pr-4 break-words whitespace-normal'
                style={{ fontSize: '0.75rem' }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className='border-b border-border'>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`py-3 pr-4 ${j === 0 ? 'text-foreground' : 'text-foreground/80'} break-words whitespace-normal`}
                  style={
                    mono?.includes(j) ?
                      { fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }
                    : undefined
                  }>
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

function MobileDataCards({
  headers,
  rows,
  mono,
}: {
  headers: string[];
  rows: string[][];
  mono?: number[];
}) {
  return (
    <div className='grid gap-3 sm:hidden'>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className='rounded-xl bg-card card-shadow p-4'>
          <p
            className='text-foreground'
            style={
              mono?.includes(0) ?
                { fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }
              : { fontSize: '0.9375rem', lineHeight: 1.4 }
            }>
            {row[0]}
          </p>
          <dl className='mt-3 grid gap-3'>
            {row.slice(1).map((cell, cellIndex) => {
              const columnIndex = cellIndex + 1;

              return (
                <div key={headers[columnIndex]} className='grid gap-1'>
                  <dt
                    className='text-muted-foreground tracking-wide uppercase'
                    style={{ fontSize: '0.6875rem', lineHeight: 1.3 }}>
                    {headers[columnIndex]}
                  </dt>
                  <dd
                    className='text-foreground/80 text-pretty'
                    style={
                      mono?.includes(columnIndex) ?
                        {
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          lineHeight: 1.5,
                        }
                      : { fontSize: '0.875rem', lineHeight: 1.5 }
                    }>
                    {cell}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      ))}
    </div>
  );
}

function LabeledList({ items }: { items: { label: string; body: string }[] }) {
  return (
    <ol className='flex flex-col gap-4 pl-6 my-4 list-decimal'>
      {items.map((item, i) => (
        <li
          key={i}
          className='text-foreground/80'
          style={{
            fontSize: fluidSmall,
            lineHeight: 1.6,
            letterSpacing: '-0.011em',
          }}>
          <strong>{nbsp(item.label)}:</strong>
          <br />
          {nbsp(item.body)}
        </li>
      ))}
    </ol>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export function DesignSystemPage() {
  return (
    <div className='flex flex-col' style={{ gap: sectionGap }}>
      {/* ── 1. Hero + TL;DR ────────────────────────────── */}
      <SectionAnimate delay={0.05}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: fluidH1,
              lineHeight: 1.25,
              letterSpacing: '-0.025em',
            }}>
            Design system: One shared UI foundation for three B2B products
          </h1>
          <p style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'I designed a shared design system for three B2B products that had grown in different directions. The goal was not just visual consistency. It was making product teams faster without creating a system that needed constant maintenance.',
            )}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.08}>
        <div className='-mx-4 sm:mx-0'>
          <ImageWithFallback
            src={heroImage}
            alt='Design system overview \u2014 components, tokens and theme variations side by side'
            className='w-full rounded-none sm:rounded-xl'
            loading='eager'
          />
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.1}>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 rounded-xl bg-card card-shadow p-5 sm:p-6'>
          {metadata.map((m) => (
            <div key={m.label} className='flex flex-col gap-1'>
              <span
                className='text-muted-foreground tracking-wide uppercase'
                style={{ fontSize: '0.75rem', lineHeight: 1.3 }}>
                {m.label}
              </span>
              <span style={{ fontSize: '0.875rem', lineHeight: 1.4 }}>
                {m.value}
              </span>
            </div>
          ))}
        </div>
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
              'Yesim is a global eSIM platform with over 3\u00a0million customers and several B2B web products sharing the same tech stack. When I joined, three products were growing independently, each with its own UI patterns, color schemes and legacy implementations. Even small changes slowed things down and design reviews became negotiations instead of quick reference checks.',
              SUBJECT,
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'The products did not need a decorative refresh. They needed a shared way to build common B2B surfaces: tables, forms, filters, navigation, feedback states and settings pages. The hard part was that each product still needed its own identity.',
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'The main product risk was fragmentation. If each product needed its own components, the system would collapse under maintenance. If the system forced every product to look the same, teams would work around it. Either outcome would slow the work down.',
            )}
          </p>
          <PullQuote>
            {nbsp(
              'How do we give three products one shared UI foundation without flattening the parts that need to feel distinct?',
            )}
          </PullQuote>
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
              'My working hypothesis was that one shared component library could support all three products if product-specific differences lived in semantic tokens instead of separate component forks.',
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'The constraints shaped the system: three products had different visual identities, legacy UI patterns and existing implementations. Teams also needed faster day-to-day work without adopting a library that required constant maintenance.',
            )}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.16}>
        <div className='-mx-4 sm:mx-0'>
          <ImageWithFallback
            src={beforeAfterImage}
            alt='Before/after UI audit \u2014 three products with inconsistent components vs. unified system output'
            className='w-full rounded-none sm:rounded-xl'
          />
        </div>
      </SectionAnimate>

      {/* ── 4. Exploration ─────────────────────────────── */}
      <SectionAnimate delay={0.18}>
        <div className='flex flex-col' style={{ gap: sectionGap }}>
          <div className='flex flex-col' style={{ gap: innerGap }}>
            <SectionHeading>Exploration</SectionHeading>
            <SubHeading>
              Prioritize the surfaces teams touched every week
            </SubHeading>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'I audited every UI element across all three products: buttons in five styles, three table implementations, form fields that looked similar but behaved differently. The audit made the repeated work visible and helped separate high-impact patterns from one-off cleanup.',
              )}
            </p>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'Tables and forms came first because teams touched them constantly and they appeared on each product\u2019s most important B2B surfaces. Starting there reduced adoption risk: teams could migrate useful, visible areas without waiting for a big-bang redesign.',
              )}
            </p>
            <MobileDataCards
              headers={['Category', 'Components', 'Why first']}
              rows={priorityComponents.map((p) => [
                p.category,
                p.components,
                p.why,
              ])}
            />
            <div className='hidden sm:block'>
              <DataTable
                headers={['Category', 'Components', 'Why first']}
                rows={priorityComponents.map((p) => [
                  p.category,
                  p.components,
                  p.why,
                ])}
              />
            </div>
          </div>
        </div>
      </SectionAnimate>

      {/* ── 5. Final Solution ──────────────────────────── */}
      <SectionAnimate delay={0.22}>
        <div className='flex flex-col' style={{ gap: sectionGap }}>
          <div className='flex flex-col' style={{ gap: innerGap }}>
            <SectionHeading>Final Solution</SectionHeading>
            <SubHeading>Prevent forks before they started</SubHeading>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'The system used three token layers: raw values, primitives and semantic tokens. Raw values and primitives kept the shared palette organized. Semantic tokens carried product meaning, which is where each brand could safely differ.',
              )}
            </p>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'That mattered because the component implementation stayed shared. A product could change',
              )}{' '}
              <code>color-primary</code>
              {', '}
              <code>font-heading</code>
              {', or '}
              <code>radius-default</code>{' '}
              {nbsp(
                'without creating a product-specific button, input or table. Identity lived in tokens; behavior and structure stayed in one library.',
              )}
            </p>
            <MobileDataCards
              headers={['Layer', 'Purpose', 'Example', 'Themeable?']}
              rows={tokenLayers.map((t) => [
                t.layer,
                t.purpose,
                t.example,
                t.themeable,
              ])}
              mono={[2]}
            />
            <div className='hidden sm:block'>
              <DataTable
                headers={['Layer', 'Purpose', 'Example', 'Themeable?']}
                rows={tokenLayers.map((t) => [
                  t.layer,
                  t.purpose,
                  t.example,
                  t.themeable,
                ])}
                mono={[2]}
              />
            </div>
          </div>

          <div className='-mx-4 sm:mx-0'>
            <ImageWithFallback
              src={semanticsImage}
              alt='Token and theming model \u2014 three-layer diagram showing primitives \u2192 semantics \u2192 component tokens'
              className='w-full rounded-none sm:rounded-xl'
            />
          </div>

          <div className='flex flex-col' style={{ gap: innerGap }}>
            <SubHeading>
              Let products look different without separate components
            </SubHeading>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'Each product gets a theme file that overrides semantic tokens. The component library does not need to know which product is using it. Switching themes changes the product expression while preserving the same implementation underneath.',
              )}
            </p>
            <MobileDataCards
              headers={['Token', 'Product A', 'Product B', 'Product C']}
              rows={subBrandThemes.map((t) => [
                t.token,
                t.productA,
                t.productB,
                t.productC,
              ])}
              mono={[0]}
            />
            <div className='hidden sm:block'>
              <DataTable
                headers={['Token', 'Product A', 'Product B', 'Product C']}
                rows={subBrandThemes.map((t) => [
                  t.token,
                  t.productA,
                  t.productB,
                  t.productC,
                ])}
                mono={[0]}
              />
            </div>
          </div>

          <div className='-mx-4 sm:mx-0'>
            <ImageWithFallback
              src={subBrandsImage}
              alt='Sub-brand themes comparison \u2014 same component rendered in three product themes side by side'
              className='w-full rounded-none sm:rounded-xl'
            />
          </div>

          <div className='flex flex-col' style={{ gap: innerGap }}>
            <SubHeading>Make density and usage rules explicit</SubHeading>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'Density became a system-level token. Components respond to a density setting (default, compact, spacious) without separate variants. Tokens are named by function, not appearance:',
              )}{' '}
              <code>color-fg-secondary</code>{' '}
              {nbsp(
                'tells you it\u2019s a secondary foreground color without looking up the hex.',
              )}
            </p>
          </div>

          <div className='-mx-4 sm:mx-0'>
            <ImageWithFallback
              src={specsImage}
              alt='Component anatomy \u2014 button dissected with token labels mapped to visual properties'
              className='w-full rounded-none sm:rounded-xl'
            />
          </div>

          <div className='flex flex-col' style={{ gap: innerGap }}>
            <SubHeading>Make adoption lighter than rebuilding</SubHeading>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'Each component includes a live preview, prop/variant table, usage guidelines (when to use and when not to), accessibility notes and a changelog.',
              )}
            </p>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'Product managers could prototype with real components, so concepts looked like the actual product from day one instead of a rough wireframe that needed to be redesigned later.',
              )}
            </p>
          </div>

          <div className='-mx-4 sm:mx-0'>
            <ImageWithFallback
              src={prototypeImage}
              alt='Figma library connected to an AI-powered prototype tool \u2014 design system enabling rapid prototyping'
              className='w-full rounded-none sm:rounded-xl'
            />
          </div>

          <div className='flex flex-col' style={{ gap: innerGap }}>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'Instead of mandating a full migration, I worked with each product team to migrate high-impact, low-risk surfaces first: settings pages and list views. The adoption path matched the prioritization work: useful surfaces first, broad cleanup later.',
              )}
            </p>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'To keep requests manageable, teams submitted component requests through Jira. I reviewed and ranked them weekly. New components went through design review with at least one consuming team, then were built, documented, versioned and tested across all three product themes.',
              )}
            </p>
          </div>

          <div className='-mx-4 sm:mx-0'>
            <ImageWithFallback
              src={governanceImage}
              alt='Governance workflow diagram \u2014 one team submits requests, the design system team processes and ships components and two product teams consume them'
              className='w-full rounded-none sm:rounded-xl'
            />
          </div>
        </div>
      </SectionAnimate>

      {/* ── 6. Before / After ──────────────────────────── */}
      <SectionAnimate delay={0.26}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <SectionHeading>Before / After</SectionHeading>
          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='rounded-xl bg-card card-shadow p-5'>
              <SubHeading>Before: repeated decisions</SubHeading>
              <p
                className='text-foreground/80'
                style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
                {nbsp(
                  'Products used separate patterns, reviews slowed down on style questions, and teams kept re-deciding common B2B UI details.',
                )}
              </p>
            </div>
            <div className='rounded-xl bg-card card-shadow p-5'>
              <SubHeading>After: shared rules</SubHeading>
              <p
                className='text-foreground/80'
                style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
                {nbsp(
                  'Teams had shared components, token-based theming and documented usage rules that preserved product identity without forking the library.',
                )}
              </p>
            </div>
          </div>
        </div>
      </SectionAnimate>

      {/* ── 7. Result ──────────────────────────────────── */}
      <SectionAnimate delay={0.28}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <SectionHeading>Result</SectionHeading>
          <div className='grid grid-cols-3 gap-3 sm:gap-4'>
            {impactStats.map((s) => (
              <div
                key={s.label}
                className='rounded-xl bg-card card-shadow p-4 sm:p-5 flex flex-col gap-1 items-center text-center'>
                <span
                  className='text-foreground'
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
                    lineHeight: 1.3,
                  }}>
                  {s.value}
                </span>
                <span
                  className='text-muted-foreground'
                  style={{ fontSize: '0.75rem', lineHeight: 1.3 }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <LabeledList items={impactItems} />
        </div>
      </SectionAnimate>

      {/* ── 8. Reflection ──────────────────────────────── */}
      <SectionAnimate delay={0.32}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <SectionHeading>Reflection</SectionHeading>
          <div className='flex flex-col gap-2'>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'The system worked best where the rules were small enough for product teams to remember. The useful decisions were less about polishing components and more about preventing the library from splitting apart.',
              )}
            </p>
            <LabeledList items={whatWorked} />
          </div>
          <div className='flex flex-col gap-2'>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'The next pass would make the system easier to operate, not just easier to adopt. I would put more automation, measurement and engineering feedback into the foundation before migration work picked up speed.',
              )}
            </p>
            <LabeledList items={whatIdChange} />
          </div>
        </div>
      </SectionAnimate>

      {/* Bottom back link */}
      <SectionAnimate delay={0.36}>
        <div className='flex items-center justify-between'>
          <Link
            to='/'
            data-goatcounter-click='back-to-home-bottom'
            className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground focus-visible:text-foreground transition-colors'
            style={{ fontSize: fluidSmall, lineHeight: 1 }}>
            <RiArrowLeftLine size={16} />
            Home
          </Link>
          <Link
            to='/work/white-label-esim'
            data-goatcounter-click='next-case-study'
            className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground focus-visible:text-foreground transition-colors'
            style={{ fontSize: fluidSmall, lineHeight: 1 }}>
            Next work
            <RiArrowRightLine size={16} />
          </Link>
        </div>
      </SectionAnimate>
    </div>
  );
}
