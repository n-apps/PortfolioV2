const scoreCounterCover = "/images/score-counter-cover.png";
const designSystemCover = "/images/design-system-cover.png";
const whiteLabelEsimCover = "/images/white-label-esim-cover.png";
const saasOnboardingCover = "/images/saas-onboarding-cover.png";

import { useState } from "react";
import type { ComponentType, SVGProps } from "react";
import { Link } from "react-router";
import { SectionAnimate } from "@/components/ui/section-animate";
import { nbsp } from "@/lib/nbsp";
import { DashedDivider } from "@/components/ui/dashed-divider";
import { fluidLead, fluidBase, fluidSmall } from "@/lib/typography";
import {
  EmailIcon,
  LinkedInIcon,
  PdfIcon,
  TelegramIcon,
} from "./connect-icons";

const workExperience = [
  {
    title: "Product designer at Yesim",
    period: "2021 - 2026",
    context: " Web and mobile · B2B and B2C. eSIM platform with 3M users",
    link: { href: "https://yesim.app/", label: "Try Yesim" },
  },
  {
    title: "Product designer at SMBF",
    period: "2020 - 2021",
    context: "Online reputation SaaS platform · B2B",
  },
  {
    title: "Product designer at Eventssion",
    period: "2018 - 2020",
    context: "Web and mobile · B2B and B2C. Event management and ticketing platform",
    link: {
      href: "https://betalist.com/startups/eventssion",
      label: "View project",
    },
  },
  {
    title: "Android developer at Eventssion",
    period: "2016 - 2018",
    context: "Android app · B2B and B2C. Event management and ticketing platform",
    link: {
      href: "https://betalist.com/startups/eventssion",
      label: "View project",
    },
  },
];

const selectedWorks = [
  {
    title: "Score Counter",
    subtitle: "Android App",
    description:
      "A side project I have maintained since 2016: 900K installs, 87.2K monthly active users, a 4.9 rating and no marketing spend. The work has mostly been protecting the simple flow people trust.",
    caseStudy: "/work/score-counter",
    cover: scoreCounterCover,
  },
  {
    title: "Design system",
    subtitle: "Yesim",
    description: "A shared UI foundation for three B2B products: 48 components, 140+ tokens and 3 brand themes. The work was less about visual consistency than keeping teams from rebuilding the same UI three ways.",
    caseStudy: "/work/design-system",
    cover: designSystemCover,
  },
  {
    title: "White-label eSIM",
    subtitle: "Yesim",
    description: "A working prototype for a B2B customization flow where colors, uploads, optional fields and preview states had to behave under real input. I built it using the production site’s tech stack so contrast, conditional rendering and edge cases were part of the artifact.",
    caseStudy: "/work/white-label-esim",
    cover: whiteLabelEsimCover,
  },
  {
    title: "Designing onboarding",
    subtitle: "Yesim",
    description: "A self-serve onboarding flow for companies buying eSIM plans for employees. The work focused on replacing sales-led setup with a product-led path to first value: add an employee, choose a plan and activate the first eSIM.",
    caseStudy: "/work/saas-onboarding",
    cover: saasOnboardingCover,
  },
];

type ConnectLink = {
  label: string;
  href: string;
  display: string;
  download?: boolean;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const connectLinks: ConnectLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/romashuliatiev",
    display: "in/romashuliatiev",
    Icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: [109, 97, 105, 108, 116, 111, 58, 104, 105, 64, 114, 111, 109, 97, 109, 97, 107, 101, 115, 46, 99, 111, 109].map(c => String.fromCharCode(c)).join(''),
    display: [104, 105, 64, 114, 111, 109, 97, 109, 97, 107, 101, 115, 46, 99, 111, 109].map(c => String.fromCharCode(c)).join(''),
    Icon: EmailIcon,
  },
  {
    label: "Telegram",
    href: "https://t.me/artificially_busy",
    display: "@artificially_busy",
    Icon: TelegramIcon,
  },
  {
    label: "CV",
    href: "/CV_Roma_Shuliatiev_Product_Designer.pdf",
    display: "download PDF",
    download: true,
    Icon: PdfIcon,
  },
];

function ConnectListItem({ label, href, display, download, Icon }: ConnectLink) {
  const [active, setActive] = useState(false);
  return (
    <li
      className="grid items-center sm:flex sm:flex-col sm:items-start"
      style={{
        gridTemplateColumns: "1fr 2fr",
        gap: "clamp(0.375rem, 0.3rem + 0.25vw, 0.5rem)",
      }}
    >
      <span
        className="relative inline-grid items-center justify-items-start"
        style={{ fontSize: fluidSmall, lineHeight: 1 }}
      >
        <span
          className="col-start-1 row-start-1 transition-opacity duration-300 ease-out motion-reduce:transition-none"
          style={{ opacity: active ? 0 : 1 }}
        >
          {label}
        </span>
        <span
          aria-hidden
          className="col-start-1 row-start-1 inline-flex items-center transition-opacity duration-300 ease-out motion-reduce:transition-none"
          style={{ opacity: active ? 1 : 0 }}
        >
          <Icon />
        </span>
      </span>
      <a
        href={href}
        data-goatcounter-click={label}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        {...(download
          ? { download: true }
          : { target: "_blank", rel: "noopener noreferrer" })}
        className="text-muted-foreground no-underline hover:underline underline-offset-2 hover:opacity-80 transition-opacity inline-flex items-center gap-1"
        style={{
          fontSize: fluidSmall,
          lineHeight: 1,
        }}
      >
        {display}
      </a>
    </li>
  );
}

export function HomePage() {
  return (
    <div className="flex flex-col" style={{ gap: "clamp(3rem, 2.5rem + 2.5vw, 5rem)" }}>
      {/* Introduction */}
      <SectionAnimate delay={0}>
        <section className="flex flex-col" style={{ gap: "clamp(1.5rem, 1.25rem + 1.25vw, 2.5rem)" }}>
          <div className="flex flex-col" style={{ gap: "clamp(0.75rem, 0.7rem + 0.25vw, 1rem)" }}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(1.5rem, 1.3rem + 1vw, 2rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
              aria-label="Who is Roma Shuliatiev"
            >
              Roma Shuliatiev
            </h2>
            <p style={{ fontSize: fluidLead, lineHeight: 1.5 }}>
              {nbsp("Product designer with a dev background. I close the gap between design and what engineers actually build.")}
            </p>
          </div>
          <div className="flex flex-col" style={{ gap: "clamp(0.375rem, 0.35rem + 0.1vw, 0.5rem)" }}>
            <p className="text-muted-foreground" style={{ fontSize: fluidBase, lineHeight: 1.5 }}>
              <span className="pulsing-dot" aria-hidden="true" />
              {"Open to product designer roles, full-time"}
            </p>
          </div>
        </section>
      </SectionAnimate>

      {/* Work Experience */}
      <SectionAnimate delay={0.1}>
        <section className="flex flex-col" style={{ gap: "clamp(0.75rem, 0.7rem + 0.25vw, 1.25rem)" }}>
          <div className="flex justify-between items-center">
            <h2
              style={{
                fontSize: fluidBase,
                fontWeight: 500,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              Work experience
            </h2>
          </div>
          <div className="flex flex-col" style={{ gap: "clamp(1rem, 0.9rem + 0.5vw, 1.5rem)" }}>
            {workExperience.map((job, i) => (
              <div key={i}>
                <div className="flex flex-col" style={{ gap: "clamp(0.125rem, 0.1rem + 0.1vw, 0.25rem)" }}>
                  <div
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline"
                    style={{ columnGap: "clamp(1rem, 0.8rem + 1vw, 2rem)" }}
                  >
                    <span style={{ fontSize: fluidBase, lineHeight: 1.4 }}>
                      {job.title}
                    </span>
                    <span
                      className="text-muted-foreground text-right"
                      style={{
                        fontSize: fluidSmall,
                        fontVariantNumeric: "tabular-nums",
                        lineHeight: 1.4,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {job.period}
                    </span>
                  </div>
                  <span
                    className="text-muted-foreground"
                    style={{ fontSize: fluidSmall, lineHeight: 1.4 }}
                  >
                    {nbsp(job.context)}
                  </span>
                  {job.link && (
                    <a
                      href={job.link.href}
                      data-goatcounter-click={`outbound-${job.link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent no-underline hover:underline underline-offset-2 hover:opacity-80 transition-opacity mt-1 inline-flex items-center gap-1"
                      style={{ fontSize: fluidSmall, lineHeight: 1.2 }}
                    >
                      {job.link.label}{" "}
                      <span aria-hidden className="text-xs">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
                {i < workExperience.length - 1 && (
                  <div className="mt-4">
                    <DashedDivider />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </SectionAnimate>

      {/* Selected Work */}
      <SectionAnimate delay={0.15}>
        <section className="flex flex-col" style={{ gap: "clamp(0.75rem, 0.7rem + 0.25vw, 1.25rem)" }}>
          <h2
            style={{
              fontSize: fluidBase,
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            Selected work
          </h2>
          <div className="flex flex-col" style={{ gap: "clamp(1.25rem, 1rem + 1vw, 2rem)" }}>
            {selectedWorks.map((project) => (
              <Link
                key={project.title}
                to={project.caseStudy}
                data-goatcounter-click={`case-study-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="work-card group block rounded-xl overflow-hidden bg-card"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full aspect-[16/9] object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-4 sm:p-5 flex flex-col" style={{ gap: "clamp(0.25rem, 0.2rem + 0.15vw, 0.375rem)" }}>
                  <div className="flex items-baseline gap-2">
                    <span
                      className="group-hover:text-accent transition-colors"
                      style={{ fontSize: fluidBase, lineHeight: 1.3 }}
                    >
                      {project.title}
                    </span>
                    <span
                      className="text-muted-foreground"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontStyle: "italic",
                        fontSize: fluidSmall,
                      }}
                    >
                      {project.subtitle}
                    </span>
                  </div>
                  <p
                    className="text-muted-foreground"
                    style={{ fontSize: fluidBase, lineHeight: 1.5 }}
                  >
                    {nbsp(project.description)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </SectionAnimate>

      {/* Skills */}
      <SectionAnimate delay={0.2}>
        <section className="flex flex-col" style={{ gap: "clamp(0.75rem, 0.7rem + 0.25vw, 1.25rem)" }}>
          <h2
            style={{
              fontSize: fluidBase,
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            Skills & tools
          </h2>
          <p style={{ fontSize: fluidBase, lineHeight: 1.5 }}>
            {nbsp("I've led work across user research, systems design and end-to-end shipping — from building products solo to leading a design team.")}
          </p>
          <p style={{ fontSize: fluidBase, lineHeight: 1.5 }}>
            {nbsp("Strong proficiency with Figma. Familiarity with AI, analytics and A/B testing tools.")}
          </p>
        </section>
      </SectionAnimate>

      {/* Connect */}
      <SectionAnimate delay={0.25}>
        <section className="flex flex-col" style={{ gap: "clamp(0.75rem, 0.7rem + 0.25vw, 1.25rem)" }}>
          <h2
            style={{
              fontSize: fluidBase,
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            Get in touch
          </h2>
          <div className="flex flex-col" style={{ gap: "clamp(1.5rem, 1.25rem + 1.25vw, 2.5rem)" }}>
            <ol
              className="grid grid-cols-1 sm:grid-cols-4"
              style={{
                rowGap: "clamp(0.75rem, 0.7rem + 0.25vw, 1rem)",
                columnGap: "clamp(1rem, 0.75rem + 0.5vw, 1.5rem)",
              }}
            >
              {connectLinks.map((item) => (
                <ConnectListItem key={item.label} {...item} />
              ))}
            </ol>
          </div>
        </section>
      </SectionAnimate>
    </div>
  );
}
