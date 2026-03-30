import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function fmt(n: number) {
  return '₦' + n.toLocaleString('en-NG', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })
}

export function fmtDate(d: Date | string | null) {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('en-NG', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

export function fmtTime(d: Date | string) {
  return new Date(d).toLocaleTimeString('en-NG', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

export function completionPct(milestones: { status: string }[]) {
  if (!milestones.length) return 0
  const done = milestones.filter(m => m.status === 'COMPLETED').length
  return Math.round((done / milestones.length) * 100)
}

export const STATUS_COLORS: Record<string, string> = {
  COMPLETED:   'text-emerald bg-emerald/10 border-emerald/30',
  IN_PROGRESS: 'text-amber bg-amber/10 border-amber/30',
  PENDING:     'text-ink-400 bg-ink-700 border-ink-600',
  OVERDUE:     'text-rose bg-rose/10 border-rose/30',
  ACTIVE:      'text-emerald bg-emerald/10 border-emerald/30',
  ON_HOLD:     'text-amber bg-amber/10 border-amber/30',
  CLOSED:      'text-ink-400 bg-ink-700 border-ink-600',
  PAID:        'text-emerald bg-emerald/10 border-emerald/30',
  OUTSTANDING: 'text-amber bg-amber/10 border-amber/30',
}

export const DOT_COLORS: Record<string, string> = {
  COMPLETED:   'bg-emerald',
  IN_PROGRESS: 'bg-amber',
  PENDING:     'bg-ink-500',
  OVERDUE:     'bg-rose',
}
