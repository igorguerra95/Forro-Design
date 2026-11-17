import { MessageCircle } from 'lucide-react';
import { STUDIO_CONTACT } from '../data/studioData';

export function WhatsAppFloat() {
  return (
    <div className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6">
      <a
        href={STUDIO_CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Entrar em contato via WhatsApp pelo número ${STUDIO_CONTACT.phoneDisplay}`}
        title={`WhatsApp: ${STUDIO_CONTACT.phoneDisplay}`}
        className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-elevated transition-transform duration-200 hover:scale-105 hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:h-13 sm:w-13"
      >
        {/* Pulse discreto solicitado */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-primary/35 animate-ping [animation-duration:2.8s]"
        />
        <MessageCircle
          className="relative z-10 h-5 w-5 transition-transform duration-200 group-hover:scale-110"
          strokeWidth={1.75}
        />
      </a>
    </div>
  );
}
