import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export function Sheet({ open, onOpenChange, title, children }: SheetProps) {
  React.useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 bg-secondary/40 backdrop-blur-[2px]"
            aria-hidden="true"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex h-full w-full max-w-[320px] flex-col border-l border-border bg-background p-6 shadow-elevated"
          >
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="font-display text-2xl font-semibold tracking-tight text-secondary">
                {title}
              </span>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                aria-label="Fechar menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius)] border border-border text-foreground transition-colors hover:border-primary hover:text-primary-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
              >
                <X className="h-4 w-4" strokeWidth={1.6} />
              </button>
            </div>
            <div className="mt-6 flex flex-1 flex-col justify-between overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
