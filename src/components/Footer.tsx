import { STUDIO_CONTACT, STUDIO_LOGO } from '../data/studioData';

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/60 text-foreground">
      <div className="mx-auto max-w-[1360px] px-4 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href="#inicio"
              aria-label="Forro Design - Voltar ao início"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <img
                src={STUDIO_LOGO.src}
                alt={STUDIO_LOGO.alt}
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {STUDIO_CONTACT.brandFull}. Soluções arquitetônicas em forros de
              PVC e painéis ripados com instalação técnica especializada.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-sans text-xs font-bold tracking-[0.12em] text-primary-ink uppercase">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href="#inicio"
                  className="transition-colors hover:text-secondary"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="transition-colors hover:text-secondary"
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="transition-colors hover:text-secondary"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="transition-colors hover:text-secondary"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-sans text-xs font-bold tracking-[0.12em] text-primary-ink uppercase">
              Contato
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>{STUDIO_CONTACT.address}</li>
              <li>
                <a
                  href={STUDIO_CONTACT.phoneHref}
                  className="tabular-nums transition-colors hover:text-secondary"
                >
                  {STUDIO_CONTACT.phoneDisplay}
                </a>
              </li>
              <li>Horário: {STUDIO_CONTACT.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {STUDIO_CONTACT.brandFull}. Todos os
            direitos reservados.
          </p>
          <p>Arquitetura de Tetos · Forro PVC e Painéis</p>
        </div>
      </div>
    </footer>
  );
}
