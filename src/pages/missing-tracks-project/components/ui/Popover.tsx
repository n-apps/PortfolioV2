import {
  cloneElement,
  isValidElement,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '../../lib/cn';

type TriggerProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
  ref?: React.Ref<HTMLElement>;
  'aria-expanded'?: boolean;
  'aria-haspopup'?: boolean | 'menu' | 'dialog' | 'listbox' | 'tree' | 'grid';
  id?: string;
};

export interface PopoverProps {
  trigger: ReactElement<TriggerProps>;
  children: ReactNode | ((api: { close: () => void }) => ReactNode);
  align?: 'start' | 'end';
  className?: string;
}

export function Popover({ trigger, children, align = 'end', className }: PopoverProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        contentRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus?.();
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (!isValidElement(trigger)) return null;

  const originalOnClick = trigger.props.onClick;

  const triggerWithProps = cloneElement(trigger, {
    ref: (node: HTMLElement | null) => {
      triggerRef.current = node;
    },
    'aria-expanded': open,
    'aria-haspopup': 'menu',
    id,
    onClick: (e) => {
      originalOnClick?.(e);
      setOpen((v) => !v);
    },
  } satisfies TriggerProps);

  const content = typeof children === 'function' ? children({ close: () => setOpen(false) }) : children;

  return (
    <span className="relative inline-flex">
      {triggerWithProps}
      <AnimatePresence>
        {open ? (
          <motion.div
            ref={contentRef}
            role="menu"
            aria-labelledby={id}
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={cn(
              'absolute top-[calc(100%+6px)] z-[200] min-w-[180px] rounded-mt-link bg-mt-surface',
              'border border-mt-border/60 p-1 shadow-mt-elevated',
              align === 'end' ? 'right-0' : 'left-0',
              className,
            )}
          >
            {content}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </span>
  );
}

export interface PopoverItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  destructive?: boolean;
  leadingIcon?: ReactNode;
}

export function PopoverItem({
  destructive,
  leadingIcon,
  className,
  children,
  type,
  ...rest
}: PopoverItemProps) {
  return (
    <button
      type={type ?? 'button'}
      role="menuitem"
      className={cn(
        'flex w-full cursor-pointer items-center gap-2.5 rounded-[6px] px-2.5 py-2 text-left text-sm',
        'text-mt-text transition-colors duration-150',
        'hover:bg-mt-interactive focus:bg-mt-interactive focus:outline-none',
        destructive && 'text-mt-red hover:bg-mt-red/10 focus:bg-mt-red/10',
        className,
      )}
      {...rest}
    >
      {leadingIcon ? (
        <span className="inline-flex shrink-0 text-mt-text-secondary [&_svg]:size-4" aria-hidden="true">
          {leadingIcon}
        </span>
      ) : null}
      <span className="flex-1 truncate">{children}</span>
    </button>
  );
}
