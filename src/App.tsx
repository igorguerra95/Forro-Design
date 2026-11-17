import * as React from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutProcessSection } from './components/AboutProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  const [preselectedInterest, setPreselectedInterest] = React.useState<{
    category: string;
    projectTitle: string;
  } | null>(null);

  const scrollToContact = React.useCallback(() => {
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const nameField = document.getElementById('contact-name');
        nameField?.focus({ preventScroll: true });
      }, 450);
    }
  }, []);

  const handleSelectProjectForContact = React.useCallback(
    (category: string, projectTitle: string) => {
      setPreselectedInterest({ category, projectTitle });
      const el = document.getElementById('contato');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    []
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-secondary">
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-[var(--radius)] focus:bg-secondary focus:px-4 focus:py-2 focus:text-sm focus:text-secondary-foreground"
        >
          Ir para o conteúdo principal
        </a>

        <Navbar onContactClick={scrollToContact} />

        <main>
          <HeroSection onContactClick={scrollToContact} />
          <PortfolioSection
            onSelectProjectForContact={handleSelectProjectForContact}
          />
          <AboutProcessSection onContactClick={scrollToContact} />
          <ContactSection preselectedInterest={preselectedInterest} />
        </main>

        <Footer />
        <WhatsAppFloat />
      </div>
    </MotionConfig>
  );
}
