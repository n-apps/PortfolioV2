import { Fragment } from "react";
import { RiDoubleQuotesL, RiEraserFill } from "@remixicon/react";
import { nbsp } from "@/lib/nbsp";
import { fluidBase, fluidLead, fluidSmall } from "@/lib/typography";

/** Renders `text` with `term` wrapped in <code>; applies nbsp to surrounding parts */
export function highlight(text: string, term: string): React.ReactNode {
  if (!text.includes(term)) return nbsp(text);
  const parts = text.split(term);
  return parts.map((part, i) => (
    <Fragment key={i}>
      {nbsp(part)}
      {i < parts.length - 1 && <code>{term}</code>}
    </Fragment>
  ));
}

/** Section label used as a category heading above content blocks */
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: fluidLead,
        fontWeight: 500,
        fontFamily: "var(--font-serif)",
        lineHeight: 1.2,
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h2>
  );
}

/** Sub-section heading inside a case-study section. Renders an <h3> so the
 * document outline stays intact (h1 → h2 → h3), styled to read as a bold lead. */
export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ fontSize: "1rem", fontWeight: 500, lineHeight: 1.4 }}>
      {children}
    </h3>
  );
}

/** Renders the first sentence in bold, rest as normal text */
export function BoldLead({
  text,
  highlightTerm,
}: {
  text: string;
  highlightTerm?: string;
}) {
  const render = (slice: string) =>
    highlightTerm ? highlight(slice, highlightTerm) : nbsp(slice);
  const i = text.indexOf(". ");
  if (i === -1) return <>{render(text)}</>;
  return (
    <>
      <strong>{render(text.slice(0, i + 1))}</strong> {render(text.slice(i + 2))}
    </>
  );
}

/** Standardized pull quote / callout: accent border + serif body text */
export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-[3px] border-accent pl-5 sm:pl-6 py-1 flex flex-col gap-2">
      <RiDoubleQuotesL className="text-accent shrink-0" size={28} aria-hidden />
      <div
        className="text-foreground/90"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: fluidBase,
          lineHeight: 1.5,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/** Subtle footnote-style disclaimer for case studies covered by an NDA */
export function ConfidentialityNote() {
  return (
    <div
      className="flex items-start gap-2 text-muted-foreground italic"
      style={{ fontSize: fluidSmall, lineHeight: 1.5 }}
    >
      <RiEraserFill
        className="shrink-0"
        size={14}
        style={{ marginTop: "calc((1lh - 14px) / 2)" }}
        aria-hidden
      />
      <p>
        {nbsp(
          "Note: images and some details have been modified per agreement with Yesim.",
        )}
      </p>
    </div>
  );
}

/** Placeholder shown when a case study image is not available */
export function ImagePlaceholder({ label }: { label: string }) {
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
