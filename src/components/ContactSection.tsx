import * as React from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
} from 'lucide-react';
import { STUDIO_CONTACT } from '../data/studioData';
import { Reveal } from './MotionPrimitives';
import { Button } from './ui/button';

interface ContactSectionProps {
  preselectedInterest?: {
    category: string;
    projectTitle: string;
  } | null;
}

const SERVICE_OPTIONS = [
  'Forro PVC Residencial',
  'Forro PVC Comercial',
  'Painéis Ripados',
  'Projeto Completo (Forro + Painéis)',
];

function formatBrazilPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactSection({ preselectedInterest }: ContactSectionProps) {
  const nameInputRef = React.useRef<HTMLInputElement | null>(null);

  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [serviceType, setServiceType] = React.useState(SERVICE_OPTIONS[0]);
  const [areaSqm, setAreaSqm] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (!preselectedInterest) return;
    const mapped =
      preselectedInterest.category === 'Residencial'
        ? SERVICE_OPTIONS[0]
        : preselectedInterest.category === 'Comercial'
        ? SERVICE_OPTIONS[1]
        : preselectedInterest.category === 'Painéis Ripados'
        ? SERVICE_OPTIONS[2]
        : SERVICE_OPTIONS[3];
    setServiceType(mapped);
    setMessage(
      `Gostaria de solicitar especificação técnica e orçamento inspirado no projeto "${preselectedInterest.projectTitle}".`
    );
    setSubmitted(false);
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 350);
  }, [preselectedInterest]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (name.trim().length < 2) {
      setErrorMsg('Por favor, informe seu nome completo para prosseguir.');
      return;
    }
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setErrorMsg('Informe um número de telefone ou WhatsApp válido com DDD.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setErrorMsg('Informe um endereço de e-mail válido.');
      return;
    }

    setSubmitted(true);
  };

  const whatsappMessageUrl = React.useMemo(() => {
    const summaryText = `Olá, sou ${name || 'cliente'}. Tenho interesse em ${serviceType}${
      areaSqm ? ` (aprox. ${areaSqm} m²)` : ''
    }. ${message ? `Detalhes: ${message}` : ''}`;
    return `https://wa.me/5500000000000?text=${encodeURIComponent(summaryText)}`;
  }, [name, serviceType, areaSqm, message]);

  return (
    <section
      id="contato"
      className="bg-gradient-surface py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Coluna Esquerda: Informações do Estúdio (5 colunas) */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-3 text-xs font-medium tracking-[0.14em] text-primary-ink uppercase">
                Contato & Especificação
              </p>
              <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-secondary sm:text-5xl">
                Inicie a especificação do seu projeto.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Atendemos obras residenciais, escritórios corporativos, clínicas
                e projetos assinados por arquitetos com fornecimento integral de
                forro PVC, painéis e instalação especializada.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-10 space-y-6 border-t border-border pt-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-card text-primary-ink">
                    <MapPin className="h-4 w-4" strokeWidth={1.6} />
                  </div>
                  <div>
                    <dt className="text-xs font-medium tracking-[0.06em] text-muted-foreground uppercase">
                      Endereço
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">
                      {STUDIO_CONTACT.address}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-card text-primary-ink">
                    <Phone className="h-4 w-4" strokeWidth={1.6} />
                  </div>
                  <div>
                    <dt className="text-xs font-medium tracking-[0.06em] text-muted-foreground uppercase">
                      Telefone e WhatsApp
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={STUDIO_CONTACT.phoneHref}
                        className="text-sm font-medium text-secondary tabular-nums transition-colors hover:text-primary-ink"
                      >
                        {STUDIO_CONTACT.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-card text-primary-ink">
                    <Clock className="h-4 w-4" strokeWidth={1.6} />
                  </div>
                  <div>
                    <dt className="text-xs font-medium tracking-[0.06em] text-muted-foreground uppercase">
                      Horário de Atendimento
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">
                      {STUDIO_CONTACT.hours}
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 border-t border-border pt-6">
                <a
                  href={STUDIO_CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-primary-ink"
                >
                  Atendimento direto via WhatsApp
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Coluna Direita: Formulário Minimalista (7 colunas) */}
          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <div className="border border-border bg-card p-6 shadow-architectural sm:p-10">
                {submitted ? (
                  <div
                    role="status"
                    className="flex flex-col items-start py-6"
                  >
                    <CheckCircle2
                      className="h-9 w-9 text-primary-ink"
                      strokeWidth={1.5}
                    />
                    <h3 className="mt-4 font-display text-3xl font-medium text-secondary">
                      Solicitação registrada com sucesso.
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                      Agradecemos o contato, <strong className="text-foreground">{name}</strong>.
                      Nossa equipe técnica recebeu os parâmetros preliminares para{' '}
                      <strong className="text-foreground">{serviceType}</strong> e
                      retornará pelo telefone{' '}
                      <span className="tabular-nums text-foreground">{phone}</span>.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <a
                        href={whatsappMessageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[var(--radius)] bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary"
                      >
                        Enviar resumo no WhatsApp
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                      </a>

                      <Button
                        variant="outline"
                        size="md"
                        onClick={() => {
                          setSubmitted(false);
                          setName('');
                          setPhone('');
                          setEmail('');
                          setAreaSqm('');
                          setMessage('');
                        }}
                      >
                        Nova solicitação
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="border-b border-border pb-4">
                      <h3 className="font-display text-2xl font-medium text-secondary sm:text-3xl">
                        Solicitar Atendimento Técnico
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Preencha os dados do ambiente para avaliação de paginação,
                        materiais e orçamento.
                      </p>
                    </div>

                    {errorMsg && (
                      <div
                        role="alert"
                        className="border border-destructive/30 bg-destructive/5 px-4 py-3 text-xs font-medium text-destructive"
                      >
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="mb-1.5 block text-xs font-medium text-foreground"
                        >
                          Nome completo
                        </label>
                        <input
                          ref={nameInputRef}
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Seu nome ou escritório"
                          className="min-h-[44px] w-full rounded-[var(--radius)] border border-input bg-background px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="mb-1.5 block text-xs font-medium text-foreground"
                        >
                          Telefone / WhatsApp
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) =>
                            setPhone(formatBrazilPhone(e.target.value))
                          }
                          placeholder="(00) 00000-0000"
                          className="min-h-[44px] w-full rounded-[var(--radius)] border border-input bg-background px-3.5 py-2 text-sm text-foreground tabular-nums placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="mb-1.5 block text-xs font-medium text-foreground"
                        >
                          E-mail
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="contato@suaempresa.com.br"
                          className="min-h-[44px] w-full rounded-[var(--radius)] border border-input bg-background px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-area"
                          className="mb-1.5 block text-xs font-medium text-foreground"
                        >
                          Área aproximada (m²)
                        </label>
                        <input
                          id="contact-area"
                          type="text"
                          value={areaSqm}
                          onChange={(e) => setAreaSqm(e.target.value)}
                          placeholder="Ex.: 85 m²"
                          className="min-h-[44px] w-full rounded-[var(--radius)] border border-input bg-background px-3.5 py-2 text-sm text-foreground tabular-nums placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-service"
                        className="mb-1.5 block text-xs font-medium text-foreground"
                      >
                        Solução desejada
                      </label>
                      <select
                        id="contact-service"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="min-h-[44px] w-full rounded-[var(--radius)] border border-input bg-background px-3.5 py-2 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                      >
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-1.5 block text-xs font-medium text-foreground"
                      >
                        Especificações do ambiente
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Descreva o tipo de ambiente, acabamento desejado (amadeirado, fosco, ripado), previsão de iluminação ou prazo da obra."
                        className="w-full rounded-[var(--radius)] border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                      />
                    </div>

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                      <Button type="submit" variant="primary" size="lg">
                        Entrar em contato
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        Atendimento técnico sem compromisso.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
