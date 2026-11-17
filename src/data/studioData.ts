import {
  AestheticPillar,
  PortfolioCategory,
  PortfolioProject,
  ProcessStep,
  StudioMetric,
} from '../types';
import heroCeilingImg from '../assets/images/hero_architectural_ceiling_1794945394292.jpg';
import portfolioResidencialImg from '../assets/images/portfolio_residencial_pvc_1794945394760.jpg';
import portfolioComercialImg from '../assets/images/portfolio_comercial_corporativo_1794945394858.jpg';
import portfolioPaineisImg from '../assets/images/portfolio_paineis_ripados_1794945395894.jpg';
import portfolioClinicaImg from '../assets/images/portfolio_clinica_minimalista_1794945396041.jpg';
import studioAtelierImg from '../assets/images/sobre_atelier_arquitetura_1794945397997.jpg';
import studioLogoImg from '../assets/images/logo-forro-design.png';

export const STUDIO_LOGO = {
  src: studioLogoImg,
  alt: 'Forro Design - Qualidade e Precisão',
};

export const STUDIO_CONTACT = {
  brandShort: 'Forro Design',
  brandFull: 'Forro Design - Vendas e Instalações de Forro PVC e Painéis',
  address: 'SEU ENDEREÇO AQUI',
  phoneDisplay: '(00) 00000-0000',
  phoneHref: 'tel:+5500000000000',
  whatsappHref:
    'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20atendimento%20t%C3%A9cnico%20com%20a%20Forro%20Design.',
  hours: 'Não informado',
};

export const HERO_MEDIA = {
  image: heroCeilingImg,
  imageAlt:
    'Sala de estar contemporânea com forro PVC amadeirado cedro, iluminação linear embutida e grandes panos de vidro.',
  caption: 'Residência Serra Azul · Forro PVC Amadeirado Cedro e Iluminação Linear',
};

export const STUDIO_MEDIA = {
  image: studioAtelierImg,
  imageAlt:
    'Mesa de estúdio de arquitetura com perfis técnicos de forro PVC, amostras minerais e amadeiradas, planta baixa e escalímetro de latão.',
  caption: 'Estúdio de Especificação · Perfis Técnicos, Paginação e Amostras',
};

export const STUDIO_METRICS: StudioMetric[] = [
  {
    value: 380,
    prefix: '+',
    label: 'Obras Entregues',
    caption: 'Projetos residenciais e corporativos concluídos',
  },
  {
    value: 15,
    suffix: ' anos',
    label: 'Atuação Técnica',
    caption: 'Especialização exclusiva em planos de teto e painéis',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Nivelamento a Laser',
    caption: 'Precisão milimétrica em toda a estruturação metálica',
  },
  {
    value: 12,
    suffix: ' anos',
    label: 'Garantia Estrutural',
    caption: 'Estabilidade dimensional e imunidade à umidade',
  },
];

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  'Todos',
  'Residencial',
  'Comercial',
  'Painéis Ripados',
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'residencia-vila-nova',
    title: 'Residência Vila Nova',
    category: 'Residencial',
    location: 'Zona Sul',
    year: '2025',
    areaSqm: '142 m²',
    material: 'Forro PVC Mineral Fosco com tabica negativa',
    lighting: 'Rasgo perimetral contínuo e pontos embutidos sem moldura',
    summary:
      'Plano de teto monolítico desenhado para unificar sala de jantar, estar e varanda integrada com juntas discretas.',
    memorial:
      'Desenvolvemos uma paginação limpa com lâminas de PVC de alta densidade em acabamento mineral fosco, afastadas das paredes por perfil tabica em alumínio anodizado. A solução garante conforto térmico, manutenção imediata e integração silenciosa com a marcenaria em carvalho.',
    image: portfolioResidencialImg,
    imageAlt:
      'Sala de jantar minimalista com forro PVC mineral fosco, tabica negativa e luminária escultural sobre mesa de carvalho.',
    featuredSpan: 'wide',
  },
  {
    id: 'sede-corporativa-atlantico',
    title: 'Sede Corporativa Atlântico',
    category: 'Comercial',
    location: 'Centro Empresarial',
    year: '2025',
    areaSqm: '310 m²',
    material: 'Painéis Ripados PVC Nogueira e Forro Acústico Geométrico',
    lighting: 'Perfis lineares de LED 3000K integrados em ângulos arquitetônicos',
    summary:
      'Recepção executiva onde o ritmo vertical dos painéis ripados conversa com a geometria acústica do teto.',
    memorial:
      'Para atender à demanda de absorção sonora e imponência institucional, combinamos painéis ripados em PVC padrão nogueira em toda a parede de fundo com planos geométricos de teto equipados com luminárias lineares embutidas. Instalação executada em 6 dias úteis sem paralisar o pavimento.',
    image: portfolioComercialImg,
    imageAlt:
      'Recepção corporativa sofisticada com parede em painéis ripados nogueira, poltronas azul-marinho e forro com iluminação linear.',
    featuredSpan: 'standard',
  },
  {
    id: 'galeria-horizonte',
    title: 'Galeria Horizonte',
    category: 'Painéis Ripados',
    location: 'Eixo Cultural',
    year: '2024',
    areaSqm: '96 m²',
    material: 'Painel Ripado Arquitetônico Contínuo e Forro PVC Branco Liso',
    lighting: 'Fita LED grazing de luz indireta na transição parede-teto',
    summary:
      'Transição contínua entre plano vertical ripado e forro liso, valorizando textura e profundidade luminosa.',
    memorial:
      'O corredor de circulação da galeria recebeu revestimento em painéis ripados modulares de PVC estrutural com encaixe oculto, encontrando o plano superior de forro liso através de um corte iluminado. O material oferece alta resistência a impactos e limpeza simplificada.',
    image: portfolioPaineisImg,
    imageAlt:
      'Corredor de galeria minimalista revestido com painéis ripados verticais e luz indireta no encontro com o teto branco.',
    featuredSpan: 'standard',
  },
  {
    id: 'clinica-estudio-lumiere',
    title: 'Clínica & Estúdio Lumière',
    category: 'Comercial',
    location: 'Jardins',
    year: '2024',
    areaSqm: '220 m²',
    material: 'Forro PVC Acetinado Higiênico com sanca curva executada in loco',
    lighting: 'Iluminação indireta difusa em curva orgânica de 2700K',
    summary:
      'Superfície asséptica e serena que atende às exigências sanitárias com desenho orgânico e luz confortável.',
    memorial:
      'Projetamos um forro PVC acetinado totalmente lavável, imune a fungos e umidade, estruturado com sanca perimetral curva para suavizar a percepção espacial da sala de espera. A iluminação indireta elimina o ofuscamento e reforça a atmosfera acolhedora.',
    image: portfolioClinicaImg,
    imageAlt:
      'Sala de espera de clínica minimalista com forro PVC branco acetinado, sanca curva iluminada e sofás em azul oceano.',
    featuredSpan: 'wide',
  },
];

export const AESTHETIC_PILLARS: AestheticPillar[] = [
  {
    title: 'Precisão Arquitetônica',
    description:
      'Cada paginação nasce do desenho do ambiente: respeitamos eixos de esquadrias, vigas aparentes e alinhamentos luminotécnicos antes do primeiro corte.',
  },
  {
    title: 'Matéria-Prima Selecionada',
    description:
      'Trabalhamos com perfis de PVC virgem de alta espessura, acabamentos acetinados ou amadeirados com estabilidade cromática e proteção UV.',
  },
  {
    title: 'Obra Limpa e Silenciosa',
    description:
      'Sistema de montagem a seco sobre estrutura galvanizada, sem geração de entulho, poeira de gesso ou necessidade de pintura posterior.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01.',
    title: 'Diagnóstico & Levantamento',
    description:
      'Vistoria técnica e medição a laser para mapear níveis, interferências hidráulicas, infraestrutura elétrica e condições do entreforro.',
    detail: 'Medição milimétrica in loco',
  },
  {
    number: '02.',
    title: 'Especificação & Paginação',
    description:
      'Definição do sentido das lâminas, espessura de perfis, acabamentos amadeirados ou minerais, tabicas de dilatação e recorte de luminárias.',
    detail: 'Amostragem física de materiais',
  },
  {
    number: '03.',
    title: 'Estruturação Galvanizada',
    description:
      'Montagem de subestrutura metálica rígida com tirantes reguláveis e alinhamento óptico a laser, garantindo plano perfeito sem empenamentos.',
    detail: 'Norma técnica de rigidez',
  },
  {
    number: '04.',
    title: 'Instalação & Acabamento Fino',
    description:
      'Fixação dos forros PVC e painéis ripados com encaixes ocultos, ajuste fino de juntas, testes de iluminação integrada e entrega vistoriada.',
    detail: 'Garantia estrutural de 12 anos',
  },
];
