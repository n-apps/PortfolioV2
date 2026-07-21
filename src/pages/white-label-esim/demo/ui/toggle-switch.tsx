type Props = {
  checked: boolean;
  onChange: (next: boolean) => void;
  label?: string;
};

export function ToggleSwitch({ checked, onChange, label }: Props) {
  return (
    <label className="relative grid size-11 shrink-0 cursor-pointer place-items-center">
      <input
        type="checkbox"
        role="switch"
        aria-label={label}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer sr-only"
      />
      <span
        aria-hidden
        className={[
          "relative block h-5 w-10 rounded-full transition-colors duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-demo-accent/30",
          checked ? "bg-demo-accent" : "bg-ink-500/30",
        ].join(" ")}
      >
        <span
          className={[
            "absolute top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-white shadow-sm ring-1 transition-[left] duration-200 ease-out",
            checked
              ? "left-[18px] ring-demo-accent"
              : "left-[-2px] ring-ink-500/40",
          ].join(" ")}
        />
      </span>
    </label>
  );
}
