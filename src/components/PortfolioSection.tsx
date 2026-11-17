import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Expand,
  Layers,
} from 'lucide-react';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
} from '../data/studioData';
import { PortfolioCategory, PortfolioProject } from '../types';
import { Reveal } from './MotionPrimitives';
import { Dialog } from './ui/dialog';
import { Button } from './ui/button';

interface PortfolioSectionProps {
  onSelectProjectForContact: (categoryLabel: string, projectTitle: string) => void;
}

export function PortfolioSection({
  onSelectProjectForContact,
}: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] =
    React.useState<PortfolioCategory>('Todos');
  const [selectedProjectId, setSelectedProjectId] = React.useState<string | null>(
    null
  );
  const [failedImages, setFailedImages] = React.useState<Record<string, boolean>>(
    {}
  );

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === 'Todos') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const activeIndex = React.useMemo(
    () => filteredProjects.findIndex((p) => p.id === selectedProjectId),
    [filteredProjects, selectedProjectId]
  );

  const activeProject: PortfolioProject | null =
    activeIndex >= 0 ? filteredProjects[activeIndex] : null;

  const handlePrevProject = React.useCallback(() => {
    if (filteredProjects.length <= 1 || activeIndex < 0) return;
    const prevIdx =
      (activeIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProjectId(filteredProjects[prevIdx].id);
  }, [activeIndex, filteredProjects]);

  const handleNextProject = React.useCallback(() => {
    if (filteredProjects.length <= 1 || activeIndex < 0) return;
    const nextIdx = (activeIndex + 1) % filteredProjects.length;
    setSelectedProjectId(filteredProjects[nextIdx].id);
  }, [activeIndex, filteredProjects]);

  React.useEffect(() => {
    if (!activeProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevProject();
      if (e.key === 'ArrowRight') handleNextProject();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeProject, handlePrevProject, handleNextProject]);

  return (
    <section
      id="portfolio"
      className="border-b border-border bg-gradient-surface py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Cabeçalho da Seção */}
        <Reveal>
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-3 text-xs font-medium tracking-[0.14em] text-primary-ink uppercase">
                Portfólio & Galeria Técnica
              </p>
              <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-secondary sm:text-5xl lg:text-6xl">
                Obras Selecionadas
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Cada instalação reflete a leitura do pé-direito, do controle
                luminotécnico e da materialidade do projeto arquitetônico.
                Selecione uma obra para ampliar a galeria e consultar o memorial.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Controles Interativos de Filtro */}
        <Reveal delay={0.08}>
          <div
            role="tablist"
            aria-label="Filtrar projetos por tipologia"
            className="mt-10 flex flex-wrap items-center gap-2 border-y border-border py-4"
          >
            {PORTFOLIO_CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[40px] px-4 py-2 text-xs font-medium tracking-[0.04em] whitespace-nowrap shrink-0 rounded-[var(--radius)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer ${
                    isSelected
                      ? 'bg-secondary text-secondary-foreground shadow-architectural'
                      : 'bg-transparent text-muted-foreground hover:bg-card hover:text-secondary'
                  }`}
                >
                  {category}
                </button>
              );
            })}
            <span className="ml-auto hidden text-xs text-muted-foreground sm:inline tabular-nums">
              {filteredProjects.length}{' '}
              {filteredProjects.length === 1 ? 'obra exibida' : 'obras exibidas'}
            </span>
          </div>
        </Reveal>

        {/* Grade Assimétrica de 12 Colunas */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isWide =
                activeCategory === 'Todos'
                  ? idx === 0 || idx === 3
                  : idx % 2 === 0;
              const colSpanClass = isWide
                ? 'md:col-span-7'
                : 'md:col-span-5';
              const hasFailed = Boolean(failedImages[project.id]);

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className={`${colSpanClass} group flex flex-col border border-border bg-card shadow-architectural transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated`}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedProjectId(project.id)}
                    className="flex h-full flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
                    aria-label={`Ampliar galeria do projeto ${project.title}`}
                  >
                    {/* Container da Fotografia */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                      {!hasFailed ? (
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setFailedImages((prev) => ({
                              ...prev,
                              [project.id]: true,
                            }))
                          }
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-ocean-navy p-6 text-secondary-foreground">
                          <Layers className="mb-2 h-7 w-7 opacity-80" strokeWidth={1.4} />
                          <span className="font-display text-2xl">{project.title}</span>
                        </div>
                      )}

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />

                      <span className="absolute right-4 bottom-4 inline-flex h-10 w-10 items-center justify-center border border-border/60 bg-card/95 text-secondary opacity-0 shadow-architectural transition-all duration-300 group-hover:opacity-100">
                        <Expand className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                    </div>

                    {/* Conteúdo Editorial (Zero-Pill Metadata) */}
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground tabular-nums">
                          <span className="font-medium text-primary-ink">
                            {project.category}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{project.areaSqm}</span>
                          <span aria-hidden="true">·</span>
                          <span>{project.location}</span>
                          <span aria-hidden="true">·</span>
                          <span>{project.year}</span>
                        </div>

                        <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-secondary transition-colors group-hover:text-primary-ink sm:text-3xl">
                          {project.title}
                        </h3>

                        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                          {project.summary}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs font-medium text-secondary">
                        <span className="truncate pr-4 text-muted-foreground">
                          {project.material}
                        </span>
                        <span className="inline-flex items-center gap-1 whitespace-nowrap shrink-0 text-primary-ink">
                          Ver detalhes
                          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.6} />
                        </span>
                      </div>
                    </div>
                  </button>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Lightbox da Galeria de Fotos */}
      <Dialog
        open={Boolean(activeProject)}
        onOpenChange={(open) => {
          if (!open) setSelectedProjectId(null);
        }}
        title={activeProject ? activeProject.title : 'Detalhes do projeto'}
      >
        {activeProject && (
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="relative aspect-[4/3] bg-muted lg:col-span-7 lg:aspect-auto lg:min-h-[500px]">
              {!failedImages[activeProject.id] ? (
                <img
                  src={activeProject.image}
                  alt={activeProject.imageAlt}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-ocean-navy p-8 text-secondary-foreground">
                  <Layers className="mb-3 h-9 w-9" strokeWidth={1.4} />
                  <p className="font-display text-3xl">{activeProject.title}</p>
                </div>
              )}

              {filteredProjects.length > 1 && (
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevProject}
                    aria-label="Projeto anterior"
                    className="inline-flex h-10 w-10 items-center justify-center border border-border bg-card/95 text-secondary shadow-architectural transition-colors hover:border-primary hover:text-primary-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
                  >
                    <ArrowLeft className="h-4 w-4" strokeWidth={1.6} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextProject}
                    aria-label="Próximo projeto"
                    className="inline-flex h-10 w-10 items-center justify-center border border-border bg-card/95 text-secondary shadow-architectural transition-colors hover:border-primary hover:text-primary-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
                  >
                    <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground tabular-nums">
                  <span className="font-medium text-primary-ink">
                    {activeProject.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activeProject.areaSqm}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeProject.year}</span>
                </div>

                <h3 className="mt-3 font-display text-3xl font-medium tracking-tight text-secondary sm:text-4xl">
                  {activeProject.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
                  {activeProject.memorial}
                </p>

                <dl className="mt-6 space-y-3 border-t border-border pt-5 text-xs sm:text-sm">
                  <div className="flex flex-col gap-0.5">
                    <dt className="font-medium text-muted-foreground">
                      Sistema e Acabamento
                    </dt>
                    <dd className="text-foreground">{activeProject.material}</dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="font-medium text-muted-foreground">
                      Integração Luminotécnica
                    </dt>
                    <dd className="text-foreground">{activeProject.lighting}</dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="font-medium text-muted-foreground">
                      Localidade
                    </dt>
                    <dd className="text-foreground">{activeProject.location}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    const project = activeProject;
                    setSelectedProjectId(null);
                    onSelectProjectForContact(project.category, project.title);
                  }}
                >
                  Entrar em contato
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                </Button>
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
}
