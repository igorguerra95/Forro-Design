import * as React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, Layers } from 'lucide-react';
import { Button } from './ui/button';
import { AnimatedCounter } from './MotionPrimitives';
import { HERO_MEDIA, STUDIO_METRICS } from '../data/studioData';

interface HeroSectionProps {
  onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border bg-background architectural-grain"
    >
      {/* Brilho arquitetônico sutil em Azul Oceano e Marinho */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full opacity-[0.07] blur-3xl"
        style={{
          background:
            'radial-gradient(circle, hsl(199 89% 48%) 0%, hsl(224 64% 33%) 55%, transparent 75%)',
        }}
      />

      <div className="mx-auto max-w-[1360px] px-4 pt-10 pb-14 sm:px-8 sm:pt-16 sm:pb-20 lg:px-12 lg:pt-20 lg:pb-24">
        {/* Split Assimétrico 12 Colunas */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna Tipográfica (7 colunas) */}
          <div className="flex flex-col justify-between lg:col-span-7 lg:py-4">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium tracking-[0.14em] text-primary-ink uppercase"
              >
                <span>Forro Design</span>
                <span aria-hidden="true">·</span>
                <span>Forro PVC e Painéis Arquitetônicos</span>
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.72,
                  delay: 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-display text-[clamp(3rem,5.8vw,5.75rem)] font-medium leading-[0.98] tracking-[-0.03em] text-secondary"
              >
                Tetos que esculpem a luz e o espaço.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.72,
                  delay: 0.16,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                Venda técnica e instalação de alta precisão em forros de PVC
                arquitetônicos e painéis ripados. Unimos rigor geométrico,
                conforto acústico e obra limpa para projetos residenciais e
                corporativos exigentes.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.72,
                delay: 0.24,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-9 flex flex-wrap items-center gap-5 pt-2"
            >
              <Button variant="primary" size="lg" onClick={onContactClick}>
                Entrar em contato
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
              </Button>

              <a
                href="#portfolio"
                className="inline-flex min-h-[44px] items-center gap-2 border-b border-border pb-1 text-sm font-medium text-secondary whitespace-nowrap shrink-0 transition-colors hover:border-primary hover:text-primary-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Explorar portfólio
                <ArrowDownRight className="h-4 w-4" strokeWidth={1.6} />
              </a>
            </motion.div>
          </div>

          {/* Coluna Visual Autoral (5 colunas) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col lg:col-span-5"
          >
            <figure className="flex flex-1 flex-col">
              <div className="relative flex-1 overflow-hidden border border-border bg-muted shadow-elevated aspect-[4/3] lg:aspect-auto lg:min-h-[460px]">
                {!imageError ? (
                  <img
                    src={HERO_MEDIA.image}
                    alt={HERO_MEDIA.imageAlt}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-ocean-navy p-8 text-center text-secondary-foreground">
                    <Layers className="mb-3 h-8 w-8 opacity-80" strokeWidth={1.4} />
                    <p className="font-display text-2xl">Forro Design</p>
                    <p className="mt-1 text-xs opacity-80">{HERO_MEDIA.caption}</p>
                  </div>
                )}
              </div>
              <figcaption className="mt-3 flex items-center justify-between gap-4 text-xs text-muted-foreground">
                <span>{HERO_MEDIA.caption}</span>
                <span className="shrink-0 tabular-nums">Projeto Autoral</span>
              </figcaption>
            </figure>
          </motion.div>
        </div>

        {/* Faixa Horizontal de Métricas Arquitetônicas (Count-up) */}
        <div className="mt-14 grid grid-cols-2 gap-y-8 border-t border-border pt-10 md:grid-cols-4 md:gap-x-8 lg:mt-20">
          {STUDIO_METRICS.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex flex-col justify-between ${
                index > 0 ? 'md:border-l md:border-border md:pl-8' : ''
              } ${index % 2 === 1 ? 'border-l border-border pl-5 md:pl-8' : 'pr-4 md:pr-0'}`}
            >
              <div className="font-display text-4xl font-semibold tracking-tight text-secondary sm:text-5xl">
                <AnimatedCounter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </div>
              <div className="mt-2">
                <p className="text-sm font-bold tracking-[0.01em] text-foreground">
                  {metric.label}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {metric.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
