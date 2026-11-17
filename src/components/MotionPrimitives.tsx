import * as React from 'react';
import { motion, useInView } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  durationMs = 1100,
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = React.useState(value);

  React.useEffect(() => {
    if (!isInView) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDisplayValue(value);
      return;
    }

    let animationFrameId = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    setDisplayValue(0);
    animationFrameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, durationMs]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
