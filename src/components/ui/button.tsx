import * as React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      type = 'button',
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-[0.02em] whitespace-nowrap shrink-0 rounded-[var(--radius)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer';

    const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
      primary:
        'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground shadow-architectural hover:shadow-ocean',
      secondary:
        'bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground shadow-ocean',
      outline:
        'border border-border bg-card text-foreground hover:border-primary hover:text-primary-ink',
      ghost:
        'text-foreground hover:bg-muted hover:text-secondary',
    };

    const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
      sm: 'min-h-[40px] px-4 py-2 text-xs',
      md: 'min-h-[44px] px-6 py-2.5 text-sm',
      lg: 'min-h-[48px] px-8 py-3 text-sm',
    };

    return (
      <button
        ref={ref}
        type={type}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
