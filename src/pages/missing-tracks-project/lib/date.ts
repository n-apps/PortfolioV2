const DAY = 1000 * 60 * 60 * 24;

export function formatAddedAt(iso: string, now: Date = new Date()): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '—';
  const sameYear = d.getFullYear() === now.getFullYear();
  return d.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: sameYear ? undefined : 'numeric',
  });
}

export function formatChecked(iso: string | null, now: Date = new Date()): string {
  if (!iso) return 'Never checked';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return 'Never checked';
  const diff = now.getTime() - d.getTime();
  if (diff < 60_000) return 'Checked just now';
  if (diff < 60 * 60_000) {
    const m = Math.floor(diff / 60_000);
    return `Checked ${m}m ago`;
  }
  if (diff < DAY) {
    const h = Math.floor(diff / (60 * 60_000));
    return `Checked ${h}h ago`;
  }
  const days = Math.floor(diff / DAY);
  if (days < 14) return `Checked ${days}d ago`;
  return `Checked ${formatAddedAt(iso, now)}`;
}
