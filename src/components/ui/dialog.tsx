import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export function Dialog({ open, onOpenChange, title, children }: DialogProps) {
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 bg-foreground/75 backdrop-blur-xs"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.985 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-h-[92vh] w-full max-w-5xl overflow-y-auto border border-border bg-card text-card-foreground shadow-elevated"
          >
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              aria-label="Fechar visualização ampliada"
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius)] border border-border bg-card/95 text-foreground shadow-architectural transition-colors hover:border-primary hover:text-primary-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
            >
              <X className="h-4 w-4" strokeWidth={1.6} />
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
