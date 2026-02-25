import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { SectionAnimate } from "./section-animate";

const fluidBase = "clamp(1rem, 0.94rem + 0.3vw, 1.25rem)";
const fluidSmall = "clamp(0.8125rem, 0.78rem + 0.15vw, 1rem)";

export function NowPage() {
  return (
    <div className="flex flex-col" style={{ gap: "clamp(2rem, 1.75rem + 1.25vw, 3rem)" }}>
      <SectionAnimate delay={0}>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          style={{ fontSize: fluidSmall, lineHeight: 1 }}
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </SectionAnimate>

      <SectionAnimate delay={0.05}>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(1.25rem, 1.1rem + 0.75vw, 1.9375rem)",
            lineHeight: 1.3,
            fontWeight: 400,
          }}
        >
          What I'm up to now
        </h1>
      </SectionAnimate>

      <SectionAnimate delay={0.1}>
        <div className="flex flex-col" style={{ gap: "clamp(1.5rem, 1.25rem + 1.25vw, 2.5rem)" }}>
          <div className="flex flex-col" style={{ gap: "clamp(0.75rem, 0.7rem + 0.25vw, 1rem)" }}>
            <h3
              className="text-muted-foreground"
              style={{ fontSize: fluidSmall, lineHeight: 1 }}
            >
              Looking for work
            </h3>
            <p style={{ fontSize: fluidBase, lineHeight: 1.5 }}>
              I'm currently looking for my next adventure as a product designer.
              I'm open to both full-time roles and freelance projects, especially
              in SaaS, marketplaces, or consumer products. If you're building
              something interesting, I'd love to hear about it.
            </p>
          </div>

          <div className="flex flex-col" style={{ gap: "clamp(0.75rem, 0.7rem + 0.25vw, 1rem)" }}>
            <h3
              className="text-muted-foreground"
              style={{ fontSize: fluidSmall, lineHeight: 1 }}
            >
              Score Counter
            </h3>
            <p style={{ fontSize: fluidBase, lineHeight: 1.5 }}>
              Continuing to improve my Android app Score Counter — recently shipped
              Auto-sorting, Grid View for Tablets, and a Timer feature. The app
              now serves 180,000+ monthly active users with a 4.9 rating.
            </p>
          </div>

          <div className="flex flex-col" style={{ gap: "clamp(0.75rem, 0.7rem + 0.25vw, 1rem)" }}>
            <h3
              className="text-muted-foreground"
              style={{ fontSize: fluidSmall, lineHeight: 1 }}
            >
              Interests
            </h3>
            <p style={{ fontSize: fluidBase, lineHeight: 1.5 }}>
              Design systems, product thinking, UX research, board games, and
              exploring how AI tools can enhance the design and development
              workflow.
            </p>
          </div>
        </div>
      </SectionAnimate>

      <SectionAnimate delay={0.15}>
        <p
          className="text-muted-foreground"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: fluidSmall,
            lineHeight: 1.5,
          }}
        >
          Last updated: February 2026
        </p>
      </SectionAnimate>
    </div>
  );
}
