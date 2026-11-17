import * as React from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet } from './ui/sheet';
import { STUDIO_CONTACT, STUDIO_LOGO } from '../data/studioData';

interface NavbarProps {
  onContactClick: () => void;
}

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export function Navbar({ onContactClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleMobileNav = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMobileContact = () => {
    setMobileMenuOpen(false);
    onContactClick();
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/94 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1360px] items-center justify-between gap-8 px-4 sm:h-20 sm:px-8 lg:px-12">
        {/* Zona 1: Logotipo transparente sem fundo */}
        <a
          href="#inicio"
          aria-label="Forro Design - Página inicial"
          className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <img
            src={STUDIO_LOGO.src}
            alt={STUDIO_LOGO.alt}
            className="h-10 w-auto object-contain sm:h-14"
          />
        </a>

        {/* Zona 2: Links de navegação concisos */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-sm font-normal tracking-[0.02em] text-muted-foreground whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-secondary after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: Ação principal + Gatilho mobile */}
        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant="primary"
            size="sm"
            onClick={onContactClick}
            className="hidden md:inline-flex"
          >
            Entrar em contato
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.6} />
          </Button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius)] border border-border bg-card text-secondary transition-colors hover:border-primary hover:text-primary-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden cursor-pointer"
          >
            <Menu className="h-5 w-5" strokeWidth={1.6} />
          </button>
        </div>
      </div>

      {/* Menu Mobile (Sheet / Drawer) */}
      <Sheet
        open={mobileMenuOpen}
        onOpenChange={setMobileMenuOpen}
        title={STUDIO_CONTACT.brandShort}
      >
        <nav aria-label="Menu mobile" className="flex flex-col gap-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleMobileNav(item.href);
              }}
              className="flex min-h-[48px] items-center justify-between border-b border-border/70 py-3 font-display text-2xl font-medium text-foreground transition-colors hover:text-primary-ink"
            >
              <span>{item.label}</span>
              <ArrowUpRight
                className="h-4 w-4 text-muted-foreground"
                strokeWidth={1.5}
              />
            </a>
          ))}
        </nav>

        <div className="mt-8 space-y-5 border-t border-border pt-6">
          <div className="space-y-1.5 text-xs text-muted-foreground">
            <p className="font-semibold text-secondary">
              {STUDIO_CONTACT.brandFull}
            </p>
            <p>{STUDIO_CONTACT.address}</p>
            <p className="tabular-nums">{STUDIO_CONTACT.phoneDisplay}</p>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={handleMobileContact}
            className="w-full"
          >
            Entrar em contato
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
          </Button>
        </div>
      </Sheet>
    </header>
  );
}
