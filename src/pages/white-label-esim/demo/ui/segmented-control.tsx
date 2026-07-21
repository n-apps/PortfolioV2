type Option<T extends string> = {
  value: T;
  label: string;
};

type Props<T extends string> = {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
};

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
}: Props<T>) {
  return (
    <div role="tablist" className="inline-flex rounded-[10px] bg-surface-field p-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          role="tab"
          aria-selected={opt.value === value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={[
            "min-h-11 select-none rounded-lg px-5 text-sm font-medium transition-[background-color,color,scale] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-demo-accent/30 active:scale-[0.96]",
            opt.value === value
              ? "bg-white text-ink-900 shadow-sm"
              : "text-ink-500 hover:text-ink-900",
          ].join(" ")}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
