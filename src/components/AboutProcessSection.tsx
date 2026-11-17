import * as React from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';
import {
  AESTHETIC_PILLARS,
  PROCESS_STEPS,
  STUDIO_MEDIA,
} from '../data/studioData';
import { Reveal } from './MotionPrimitives';
import { Button } from './ui/button';

interface AboutProcessSectionProps {
  onContactClick: () => void;
}

export function AboutProcessSection({
  onContactClick,
}: AboutProcessSectionProps) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <section
      id="sobre"
      className="border-b border-border bg-background py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Parte 1: Sobre o Estúdio e Visão Estética */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Fotografia Vertical 3:4 do Estúdio (5 colunas) */}
          <Reveal className="lg:col-span-5">
            <figure>
              <div className="aspect-[3/4] w-full overflow-hidden border border-border bg-muted shadow-architectural">
                {!imageError ? (
                  <img
                    src={STUDIO_MEDIA.image}
                    alt={STUDIO_MEDIA.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-ocean-navy p-8 text-center text-secondary-foreground">
                    <Compass className="mb-3 h-8 w-8 opacity-80" strokeWidth={1.4} />
                    <p className="font-display text-2xl">Estúdio Forro Design</p>
                  </div>
                )}
              </div>
              <figcaption className="mt-3 text-xs text-muted-foreground">
                {STUDIO_MEDIA.caption}
              </figcaption>
            </figure>
          </Reveal>

          {/* Narrativa e Pilares Estéticos (7 colunas) */}
          <div className="lg:col-span-7 lg:pt-2">
            <Reveal>
              <p className="mb-3 text-xs font-medium tracking-[0.14em] text-primary-ink uppercase">
                Sobre o Estúdio · Visão Estética
              </p>
              <h2 className="font-display text-4xl font-medium leading-[1.06] tracking-[-0.025em] text-secondary sm:text-5xl">
                A engenharia silenciosa por trás de cada plano superior.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  A{' '}
                  <strong className="font-semibold text-foreground">
                    Forro Design - Vendas e Instalações de Forro PVC e Painéis
                  </strong>{' '}
                  nasceu da convicção de que o teto e os planos verticais
                  merecem o mesmo rigor projetual atribuído à marcenaria e à
                  iluminação. Atuamos lado a lado com arquitetos, designers de
                  interiores e proprietários exigentes.
                </p>
                <p>
                  Ao substituir soluções improvisadas por sistemas de PVC
                  arquitetônico de alta espessura e painéis ripados modulares,
                  entregamos superfícies contínuas, imunes à umidade e
                  desempenhos térmicos superiores — com execução limpa, seca e
                  cronograma rigoroso.
                </p>
              </div>
            </Reveal>

            {/* Pilares Estéticos com Divisores Hairline */}
            <div className="mt-10 grid grid-cols-1 gap-8 border-t border-border pt-8 sm:grid-cols-3">
              {AESTHETIC_PILLARS.map((pillar, idx) => (
                <Reveal key={pillar.title} delay={0.1 + idx * 0.06}>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-secondary">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Parte 2: Processo Criativo e Construtivo */}
        <div className="mt-20 border-t border-border pt-16 sm:mt-28 sm:pt-20">
          <Reveal>
            <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="mb-3 text-xs font-medium tracking-[0.14em] text-primary-ink uppercase">
                  Metodologia de Execução
                </p>
                <h2 className="font-display text-3xl font-medium leading-[1.08] tracking-[-0.02em] text-secondary sm:text-4xl lg:text-5xl">
                  Processo Criativo e Técnico
                </h2>
              </div>
              <div className="flex lg:col-span-5 lg:justify-end">
                <Button variant="outline" size="md" onClick={onContactClick}>
                  Entrar em contato
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.07}>
                <div className="flex h-full flex-col justify-between border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-architectural sm:p-7">
                  <div>
                    <span className="font-display text-3xl font-medium text-primary-ink tabular-nums">
                      {step.number}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-secondary">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  <p className="mt-6 border-t border-border pt-4 text-xs font-medium text-secondary/80">
                    {step.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
