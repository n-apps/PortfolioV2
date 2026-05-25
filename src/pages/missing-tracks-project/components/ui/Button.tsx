import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  fullWidth?: boolean;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-mt-button font-semibold ' +
  'transition-[transform,background-color,color,box-shadow] duration-200 ease-out ' +
  'cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 active:translate-y-px ' +
  'whitespace-nowrap select-none';

const sizes: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-[13px] tracking-normal',
  md: 'h-10 px-4 text-sm tracking-normal',
  lg: 'h-12 px-6 text-base tracking-normal',
};

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-mt-green text-mt-bg hover:bg-mt-green/90 hover:shadow-[0_8px_24px_rgba(127,238,100,0.25)]',
  secondary:
    'bg-mt-interactive text-mt-text border border-mt-border hover:bg-mt-interactive/70 hover:border-mt-text-secondary',
  ghost:
    'bg-transparent text-mt-text-secondary hover:text-mt-text hover:bg-mt-interactive/60',
  danger:
    'bg-transparent text-mt-red border border-mt-red/40 hover:bg-mt-red/10 hover:border-mt-red',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant = 'primary',
      size = 'md',
      leadingIcon,
      trailingIcon,
      fullWidth,
      type,
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type ?? 'button'}
        className={cn(
          base,
          sizes[size],
          variants[variant],
          fullWidth && 'w-full',
          className,
        )}
        {...rest}
      >
        {leadingIcon ? (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {leadingIcon}
          </span>
        ) : null}
        <span className="inline-flex items-center">{children}</span>
        {trailingIcon ? (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {trailingIcon}
          </span>
        ) : null}
      </button>
    );
  },
);
