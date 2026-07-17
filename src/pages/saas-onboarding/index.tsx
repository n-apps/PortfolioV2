import { Link } from 'react-router';
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';
import { SectionAnimate } from '@/components/ui/section-animate';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
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

/* ── Data ─────────────────────────────────────────────── */

const metadata = [
  { label: 'Role', value: 'Product designer' },
  { label: 'Timeframe', value: '2025' },
  { label: 'Platform', value: 'Web (B2B SaaS)' },
  { label: 'Team', value: 'PM · Engineering' },
];

const problemItems = [
  {
    label: 'Empty dashboard',
    body: 'New admins saw a product shell, but no useful content.',
  },
  {
    label: 'No clear starting point',
    body: 'The UI exposed features, but did not explain the first required action.',
  },
  {
    label: 'Hidden prerequisite',
    body: 'Product value required at least one employee and one assigned eSIM plan.',
  },
  {
    label: 'Early drop-off risk',
    body: 'Users often left before the product had a chance to show its value.',
  },
];

const minimumPathSteps = [
  'Create or confirm company details',
  'Add the first employee',
  'Choose an eSIM destination or plan',
  'Assign the plan',
  'Land on a dashboard that now has real content',
];

const requiredFields = [
  'Company name',
  'Admin contact details',
  'One employee',
  'Destination or region',
  'Plan selection',
  'Assignment confirmation',
];

const flexibilityRules = [
  'Admins can add one employee first and invite more later',
  'Incomplete setup can be saved as a draft',
  'Optional fields are clearly marked and can be skipped',
  'The dashboard shows setup progress after signup',
  'Users can enter the product without losing their place in onboarding',
];

const dashboardStates = [
  'No employees added',
  'Employee added, but no plan assigned',
  'Plan selected, but not activated',
  'First eSIM assigned and ready to use',
];

const progressSteps = ['Company', 'Employee', 'Plan', 'Activate'];

const outcomeItems = [
  {
    label: 'Reduced confusion after signup',
    body: 'Replacing the empty dashboard with guided setup gave admins an immediate path forward.',
  },
  {
    label: 'Shortened time-to-first-value',
    body: 'Surfacing employee and eSIM assignment immediately removed the delay between signup and activation.',
  },
  {
    label: 'Enabled freemium self-activation',
    body: 'Freemium users could complete setup without manual sales or support assistance.',
  },
  {
    label: 'Made incomplete setup recoverable',
    body: 'Draft states and dashboard guidance let admins return and finish setup without starting over.',
  },
  {
    label: 'Created a reusable onboarding pattern',
    body: 'The flow established a foundation for future B2B setup experiences across the product.',
  },
];

const whatWorked = [
  {
    label: 'The flow focused on action, not education',
    body: 'Users did not need a tour of every feature. They needed to assign the first eSIM plan.',
  },
  {
    label: 'The dashboard became part of onboarding',
    body: 'Instead of showing an empty product, it showed progress and the next useful action.',
  },
  {
    label: 'The setup supported real admin behavior',
    body: 'Users could start with one employee, skip what they did not know yet and continue later without losing progress.',
  },
];

const whatIdChange = [
  {
    label: 'Validate the setup steps with more company sizes',
    body: 'A small business adding one traveler and a larger company onboarding a whole department may need different entry points.',
  },
  {
    label: 'Measure drop-off by step earlier',
    body: 'Better analytics around where admins stop would help refine the flow after launch.',
  },
  {
    label: 'Explore bulk employee import sooner',
    body: 'The first flow should stay simple, but larger companies may need CSV upload or invite links as a faster path.',
  },
];

/* ── Local sub-components ──────────────────────────────── */

function LabeledList({ items }: { items: { label: string; body: string }[] }) {
  return (
    <ul className='flex flex-col gap-4 pl-5 my-4 list-disc'>
      {items.map((item, i) => (
        <li
          key={i}
          className='text-foreground/80'
          style={{
            fontSize: fluidBase,
            lineHeight: 1.6,
            letterSpacing: '-0.011em',
          }}>
          <strong>{nbsp(item.label)}:</strong>
          <br />
          {nbsp(item.body)}
        </li>
      ))}
    </ul>
  );
}

function InlineFlow({ items }: { items: string[] }) {
  return (
    <p
      className='text-foreground/80'
      style={{
        fontSize: fluidBase,
        lineHeight: 1.6,
        letterSpacing: '-0.011em',
      }}>
      {items.map((item, i) => (
        <span key={item}>
          {i > 0 && (
            <span className='text-muted-foreground' aria-hidden='true'>
              {' '}
              →{' '}
            </span>
          )}
          {nbsp(item)}
        </span>
      ))}
    </p>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export function SaasOnboardingPage() {
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
            {nbsp('Design of onboarding flow')}
          </h1>
          <p style={{ fontSize: fluidLead, lineHeight: 1.6 }}>
            {nbsp(
              'Designed a self-serve onboarding flow for companies buying eSIM plans for employees. The goal was to move from sales-led to product-led onboarding.',
            )}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.08}>
        <div className='-mx-4 sm:mx-0'>
          <ImageWithFallback
            src='/images/saas-onboarding-hero.png'
            alt='From guided setup to self-serve access'
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
              'Yesim is a global eSIM platform with over 3 million customers. Its B2B product helps companies buy and manage eSIM plans for employees who travel for work. Admins can create a company workspace, add employees, assign mobile data plans and track plan status from one dashboard.',
              SUBJECT,
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'Previously, onboarding happened outside the product. A sales or support team walked each company through setup, collected employee details, configured the account manually and only then handed over access.',
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'That worked for high-touch enterprise onboarding, but it did not work for self-serve. As the product moved toward a freemium model, new users could sign up independently. The product now had to receive them without a salesperson in the room.',
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'The problem was that the product was not ready for that moment. New admins landed in an empty dashboard with no employees, no active plans and no clear indication of what to do next.',
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp('The main issues were:')}
          </p>
          <LabeledList items={problemItems} />
          <PullQuote>
            {nbsp(
              'How do we help a company admin go from signup to their first assigned eSIM plan without relying on manual support?',
            )}
          </PullQuote>
        </div>
      </SectionAnimate>

      {/* ── 3. Hypothesis & Constraints ────────────────── */}
      <SectionAnimate delay={0.14}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <SectionHeading>Hypothesis &amp; Constraints</SectionHeading>
          <PullQuote>
            {nbsp('No assigned eSIM plan = no product value.')}
          </PullQuote>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'My hypothesis was that onboarding would be more useful if it guided admins toward the first valuable action: assigning an eSIM plan to an employee. The product did not need to explain the whole dashboard first. It needed to help users create the first thing that made the dashboard matter.',
            )}
          </p>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'The constraints were practical: new users arrived with incomplete company data, no employees, no plans, no usage history and no salesperson or support person in the room.',
            )}
          </p>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.16}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <SectionHeading>Before</SectionHeading>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'The old dashboard loaded successfully, but it behaved like a product shell. With no employees, no assigned plans and no usage history, there was almost nothing meaningful for a new admin to act on.',
            )}
          </p>
          <div className='-mx-4 sm:mx-0'>
            <ImageWithFallback
              src='/images/saas-onboarding-before.png'
              alt='Empty dashboard new admins saw before the onboarding redesign'
              className='w-full rounded-none sm:rounded-xl'
            />
          </div>
        </div>
      </SectionAnimate>

      {/* ── 5. Exploration ─────────────────────────────── */}
      <SectionAnimate delay={0.18}>
        <div className='flex flex-col' style={{ gap: sectionGap }}>
          <div className='flex flex-col' style={{ gap: innerGap }}>
            <SectionHeading>Exploration</SectionHeading>
            <SubHeading>
              Reframe onboarding around value, not education
            </SubHeading>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'The important shift was from “teach users the product” to “help users create the first useful thing.” A tour of every dashboard feature would not solve the empty-account problem. The flow needed to create an employee, choose a plan and make the first assignment visible.',
              )}
            </p>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'That reframing kept the work focused. Every screen had to either move the admin closer to the first assigned eSIM or help them recover when they did not have all the information yet.',
              )}
            </p>
          </div>

          <div className='-mx-4 sm:mx-0'>
            <ImageWithFallback
              src='/images/saas-onboarding-flow.png'
              alt='eSIM onboarding flow from company setup to first assigned plan'
              className='w-full rounded-none sm:rounded-xl'
            />
          </div>

          {/* ── 6. Final Solution ───────────────────────── */}
          <div className='flex flex-col' style={{ gap: innerGap }}>
            <SectionHeading>Final Solution</SectionHeading>
            <SubHeading>
              Make the first assignment the spine of the flow
            </SubHeading>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'I replaced passive onboarding with a guided setup. The signup flow captures only what is needed now, then the dashboard continues onboarding after signup.',
              )}
            </p>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp('The minimum path to value became:')}
            </p>
            <InlineFlow items={minimumPathSteps} />
          </div>

          <div className='flex flex-col' style={{ gap: innerGap }}>
            <SubHeading>Reduce setup to the essentials</SubHeading>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'The original setup process required information that many admins might not have during their first session: billing details, full employee lists, company policies, cost centers, approval rules and travel dates.',
              )}
            </p>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'I separated what was required now from what could come later. For the first version of onboarding, the flow only asks for:',
              )}
            </p>
            <InlineFlow items={requiredFields} />
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'Everything else can be completed after the first plan is assigned. This kept the flow focused on activation instead of account configuration.',
              )}
            </p>
          </div>

          {/* Decision 3: Design for incomplete information */}
          <div className='flex flex-col' style={{ gap: innerGap }}>
            <SubHeading>Design for incomplete information</SubHeading>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'Company admins do not always arrive with a complete employee list, confirmed travel dates, or billing information. A rigid flow would block them at exactly the point where the product still needs to earn their trust.',
              )}
            </p>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'To support real user constraints, I designed the flow to be flexible and non-blocking:',
              )}
            </p>
            <InlineFlow items={flexibilityRules} />
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'The goal was to avoid a dead end. If the admin could not complete everything, the product still preserved progress and made the next step visible.',
              )}
            </p>
          </div>

          <div className='-mx-4 sm:mx-0'>
            <ImageWithFallback
              src='/images/saas-onboarding-draft.png'
              alt='Draft setup state for incomplete eSIM onboarding'
              className='w-full rounded-none sm:rounded-xl'
            />
          </div>

          {/* Decision 4: Extend onboarding into the dashboard */}
          <div className='flex flex-col' style={{ gap: innerGap }}>
            <SubHeading>Extend onboarding into the dashboard</SubHeading>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'Onboarding should not end when the user reaches the dashboard. For a new company account, the dashboard is part of onboarding.',
              )}
            </p>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'I redesigned the empty dashboard around setup progress. Instead of showing empty charts and inactive tables, the homepage reflects the current state of the company account.',
              )}
            </p>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp('Possible states include:')}
            </p>
            <InlineFlow items={dashboardStates} />
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'Each state gives the admin one primary next step. This made the dashboard useful even before the account had full data.',
              )}
            </p>
          </div>

          <div className='-mx-4 sm:mx-0'>
            <ImageWithFallback
              src='/images/saas-onboarding-dashboard.png'
              alt='Before and after dashboard empty state for eSIM onboarding'
              className='w-full rounded-none sm:rounded-xl'
            />
          </div>

          <div className='-mx-4 sm:mx-0'>
            <ImageWithFallback
              src='/images/white-label-esim-tips.png'
              alt='Getting started checklist with contextual tips on the dashboard'
              className='w-full rounded-none sm:rounded-xl'
            />
          </div>

          {/* Decision 5: Make progress visible */}
          <div className='flex flex-col' style={{ gap: innerGap }}>
            <SubHeading>Make progress visible</SubHeading>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'The flow needed to feel lightweight, but users still needed to understand where they were. I used a simple step structure with clear progress labels:',
              )}
            </p>
            <InlineFlow items={progressSteps} />
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'Each step has one main action and a clear completion state. The interface avoids long educational text and uses the product state itself as guidance.',
              )}
            </p>
            <PullQuote>
              {nbsp(
                'Onboarding should not explain the whole product. It should help users create the first thing that makes the product useful.',
              )}
            </PullQuote>
          </div>
        </div>
      </SectionAnimate>

      {/* ── 7. Expected / Observed Result ──────────────── */}
      <SectionAnimate delay={0.22}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <SectionHeading>Expected / Observed Result</SectionHeading>
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'The redesigned onboarding moved the product from a sales-led setup to something a company admin could finish on their own.',
            )}
          </p>
          <LabeledList items={outcomeItems} />
          <p
            className='text-foreground/80'
            style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
            {nbsp(
              'The product no longer assumed that setup happened somewhere else. Setup became part of the product experience.',
            )}
          </p>
        </div>
      </SectionAnimate>

      {/* ── 8. Reflection ──────────────────────────────── */}
      <SectionAnimate delay={0.26}>
        <div className='flex flex-col' style={{ gap: innerGap }}>
          <SectionHeading>Reflection</SectionHeading>
          <div className='flex flex-col gap-2'>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'The strongest lessons came from treating onboarding as part of the product, not a step before it.',
              )}
            </p>
            <LabeledList items={whatWorked} />
          </div>
          <div className='flex flex-col gap-2'>
            <p
              className='text-foreground/80'
              style={{ fontSize: fluidBase, lineHeight: 1.6 }}>
              {nbsp(
                'Some parts of the flow felt right under deadline but would benefit from a second pass. Most of the items below come down to assumptions I could not validate before ship.',
              )}
            </p>
            <LabeledList items={whatIdChange} />
          </div>
        </div>
      </SectionAnimate>

      {/* Bottom back link */}
      <SectionAnimate delay={0.3}>
        <div className='flex items-center justify-between'>
          <Link
            to='/'
            data-goatcounter-click='saas-onboarding-back-home-bottom'
            className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground focus-visible:text-foreground transition-colors'
            style={{ fontSize: fluidSmall, lineHeight: 1 }}>
            <RiArrowLeftLine size={16} />
            Home
          </Link>
          <Link
            to='/work/score-counter'
            data-goatcounter-click='saas-onboarding-next-case-study'
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
