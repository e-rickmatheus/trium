"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Ecosystem from "@/components/Ecosystem";
import Methodology from "@/components/Methodology";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export type Language = "pt" | "en" | "es";

export default function Home() {
  const [lang, setLang] = useState<Language>("pt");
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme on mount (client-only)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Sync theme changes to DOM and localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const dict = {
    pt: {
      menu: {
        manifesto: "O Manifesto",
        ecosystem: "O Ecossistema",
        methodology: "A Metodologia",
        cta: "Agendar Diagnóstico",
      },
      hero: {
        tag: "Presença Digital de Alta Performance",
        headlinePart1: "Não construímos apenas sites. Desenhamos o ",
        headlineHighlight: "ecossistema",
        headlinePart2: " digital do seu negócio.",
        subheadline: "Unificamos SEO avançado, tráfego pago focado em ROI, automações inteligentes e conteúdo de alto impacto em uma única estratégia integrada para marcas High-Ticket.",
        cta1: "Aplicar para Consultoria Diagnóstica",
        cta2: "Conhecer Soluções",
        metric1: "100% Integrado",
        metric2: "High-Ticket Foco em Valor",
        metric3: "ROI Como Métrica",
      },
      manifesto: {
        tag: "Filosofia TRIUM Lab",
        title: "O marketing tradicional fragmentado está quebrando o seu negócio.",
        intro: "Contratar uma agência para fazer posts em redes sociais, um freelancer para criar um site template, e outro profissional para gerenciar anúncios cria uma experiência desconexa e ineficiente.",
        body1: "Para marcas High-Ticket, a percepção de valor é tudo. Quando o seu cliente em potencial clica em um anúncio premium, mas cai em um site lento, e depois é qualificado por um atendimento manual demorado, o encantamento desaparece. O resultado? Sua taxa de conversão despenca e sua marca se desvaloriza.",
        body2: "A TRIUM Lab nasceu para combater essa fragmentação. Nós não entregamos entregas soltas. Desenvolvemos e gerenciamos um Ecossistema de Presença Digital Unificado.",
        quote: "Presença Digital de alto valor exige consistência de ponta a ponta: do primeiro pixel do anúncio à qualificação inteligente do lead. Se uma engrenagem falha, todo o funil High-Ticket desaba.",
      },
      ecosystem: {
        tag: "A Solução Unificada",
        title: "O Ecossistema Digital TRIUM",
        sub: "Ao invés de serviços avulsos que não conversam entre si, entregamos uma estrutura unificada onde cada elemento potencializa os outros.",
        nextStep: "Próxima etapa: Integração",
        cta: "Solicitar este Pilar no Diagnóstico",
        included: "O que está incluído de ponta a ponta:",
        pillars: {
          infra: {
            title: "Infraestrutura & SEO",
            subtitle: "Performance Orgânica",
            desc: "Sites sob medida desenhados com código limpo, velocidade extrema e arquitetura moderna. Otimização técnica de SEO para dominar as buscas orgânicas.",
            nextStep: "Próxima etapa: Escalar com Tráfego",
            details: [
              "Carregamento ultra-rápido (Next.js e Vercel)",
              "SEO Técnico avançado & Schema Markup",
              "Experiência Mobile (UI/UX) impecável",
              "Segurança de dados e conformidade LGPD",
            ],
          },
          ads: {
            title: "Tráfego Pago",
            subtitle: "Performance com ROI Real",
            desc: "Gestão inteligente de campanhas no Google Ads e Meta Ads. Foco em segmentação demográfica qualificada para atrair o público com real intenção de compra.",
            nextStep: "Próxima etapa: Automatizar Atendimento",
            details: [
              "Segmentação demográfica refinada (Renda & Interesses)",
              "Copywriting persuasivo e criativos de alto impacto",
              "Monitoramento e rastreio de conversões ponta a ponta",
              "Otimização constante baseada em custo por lead qualificado",
            ],
          },
          automation: {
            title: "Automação de Atendimento",
            subtitle: "Qualificação Inteligente 24/7",
            desc: "Bots estruturados and fluxos conversacionais integrados. Qualifique seus leads no WhatsApp ou direct no mesmo instante em que chegam, otimizando seu tempo.",
            nextStep: "Próxima etapa: Conteúdo de Autoridade",
            details: [
              "Triagem automática inteligente de leads",
              "Integração direta com CRM and agendadores",
              "Respostas instantâneas e fluxos humanizados",
              "Economia de tempo do seu time de vendas",
            ],
          },
          content: {
            title: "Conteúdo de Autoridade",
            subtitle: "Social Media High-Ticket",
            desc: "Vídeos roteirizados para posicionar você como autoridade. Criativos de alta retenção que educam o cliente e geram desejo de compra imediato.",
            nextStep: "Próxima etapa: Integração Total do Funil",
            details: [
              "Roteirização focada em retenção e vendas",
              "Edição de vídeo premium e dinâmica",
              "Curadoria estética alinhada a mercados de luxo",
              "Estratégia de distribuição multicanal",
            ],
          },
        },
      },
      methodology: {
        tag: "Engenharia de Conversão",
        title: "Como desenhamos a jornada ideal para o seu cliente final",
        sub: "Nossa metodologia foca em entender o comportamento de compra do seu público High-Ticket. Criamos uma jornada sem fricção e entregamos relatórios claros para você acompanhar os resultados reais.",
        steps: [
          { number: "01", title: "Auditoria & Mapeamento", subtitle: "Diagnóstico de Fricção", desc: "Mapeamos os pontos de contato e analisamos onde você perde leads." },
          { number: "02", title: "Desenho da Nova Jornada", subtitle: "Arquitetura High-Ticket", desc: "Redesenhamos a experiência com copy de valor e carregamento rápido." },
          { number: "03", title: "Ativação do Ecossistema", subtitle: "Implementação Integradora", desc: "Desenvolvemos a infraestrutura e iniciamos campanhas de captação." },
          { number: "04", title: "Otimização & LTV", subtitle: "Relatórios de Performance Real", desc: "Analisamos métricas de negócios e ROI para otimizações contínuas." }
        ],
        card1Title: "Consultoria da Jornada do Usuário",
        card1Desc: "Mapeamos visualmente como o lead de alta renda se comporta na internet, estruturamos canais que passam credibilidade imediata e desenhamos funis eficientes.",
        card2Title: "Relatórios Analíticos de Performance",
        card2Desc: "Painéis de performance dinâmicos e simplificados, focando no que realmente importa: Leads Qualificados, Custo de Aquisição (CAC) e Retorno sobre Investimento (ROI).",
      },
      contact: {
        tag: "Processo Seletivo Diagnóstico",
        title: "Aplicação de Consultoria",
        sub: "Não atendemos todos os clientes. Qualifique sua empresa abaixo para receber um diagnóstico estratégico gratuito da nossa equipe de engenharia digital.",
        step1: "Etapa 1: Dados Estruturais",
        step2: "Etapa 2: Escopo e Posicionamento",
        step3: "Etapa 3: Gargalo de Negócios",
        labelName: "Seu Nome Completo *",
        labelRole: "Seu Cargo *",
        labelCompany: "Nome da Empresa *",
        labelEmail: "E-mail Corporativo *",
        labelPhone: "WhatsApp de Contato *",
        labelWebsite: "Link do Site ou Instagram Atual",
        labelRevenue: "Qual o faturamento mensal médio atual? *",
        labelBottleneck: "Qual o seu maior desafio digital no momento? *",
        optionsRevenue: [
          "Até R$ 50k / mês",
          "R$ 50k a R$ 100k / mês",
          "R$ 100k a R$ 300k / mês",
          "Acima de R$ 300k / mês",
        ],
        optionsBottleneck: [
          "Meu site é lento/antigo e não passa credibilidade",
          "Fazemos anúncios pagos, mas eles não atraem o lead certo",
          "Nosso time comercial perde muito tempo com leads desqualificados",
          "Preciso posicionar minha marca como autoridade incontestável",
        ],
        btnBack: "Voltar",
        btnNext: "Avançar",
        btnSubmit: "Enviar Aplicação",
        submitting: "Analisando Aplicação...",
        submittingDesc1: "Rastreando infraestrutura do site...",
        submittingDesc2: "Gerando tokens de segurança...",
        successTitle: "Aplicação Recebida com Sucesso!",
        successBody: "Parabéns! Seus dados foram encaminhados diretamente para o nosso time de arquitetos digitais.",
        successNext: "O que acontece agora?",
        successNextDesc: "Analisaremos sua presença online e o gargalo informado. Entraremos em contato em até **24h úteis** via WhatsApp ou e-mail.",
      },
      footer: {
        tagline: "Presença com Inteligência",
        desc: "Boutique de presença digital focada no crescimento e posicionamento estratégico de marcas High-Ticket.",
        navTitle: "Navegação",
        connectTitle: "Conectar",
        rights: "© 2026 TRIUM Lab. Todos os direitos reservados.",
        terms: "Termos de Serviço",
        privacy: "Política de Privacidade",
      }
    },
    en: {
      menu: {
        manifesto: "The Manifesto",
        ecosystem: "The Ecosystem",
        methodology: "The Methodology",
        cta: "Book Diagnosis",
      },
      hero: {
        tag: "High-Performance Digital Presence",
        headlinePart1: "We don't just build websites. We design your business's digital ",
        headlineHighlight: "ecosystem",
        headlinePart2: ".",
        subheadline: "We unify advanced SEO, ROI-focused paid traffic, smart automations, and high-impact content into a single integrated strategy for High-Ticket brands.",
        cta1: "Apply for Diagnostic Consulting",
        cta2: "Explore Solutions",
        metric1: "100% Integrated",
        metric2: "High-Ticket Value Focus",
        metric3: "ROI as Core Metric",
      },
      manifesto: {
        tag: "TRIUM Lab Philosophy",
        title: "Traditional fragmented marketing is breaking your business.",
        intro: "Hiring an agency for social media posts, a freelancer for a template website, and another professional to manage ads creates a disconnected and inefficient experience.",
        body1: "For High-Ticket brands, perception of value is everything. When your potential client clicks on a premium ad but lands on a slow website, and is then qualified by a slow manual response, the enchantment disappears. The result? Your conversion rate plummets and your brand loses value.",
        body2: "TRIUM Lab was born to combat this fragmentation. We do not deliver isolated tasks. We develop and manage a Unified Digital Presence Ecosystem.",
        quote: "High-value Digital Presence requires end-to-end consistency: from the first pixel of the ad to smart lead qualification. If one gear fails, the entire High-Ticket funnel collapses.",
      },
      ecosystem: {
        tag: "The Unified Solution",
        title: "The TRIUM Digital Ecosystem",
        sub: "Instead of isolated services that don't speak to each other, we deliver a unified framework where each element enhances the others.",
        nextStep: "Next step: Integration",
        cta: "Request this Pillar in your Diagnosis",
        included: "What is included from end to end:",
        pillars: {
          infra: {
            title: "Infrastructure & SEO",
            subtitle: "Organic Performance",
            desc: "Custom-built websites designed with clean code, extreme speed, and modern architecture. Advanced technical SEO to dominate organic search.",
            nextStep: "Next step: Scale with Traffic",
            details: [
              "Ultra-fast loading (Next.js and Vercel)",
              "Technical SEO & Schema Markup",
              "Impeccable Mobile UX/UI experience",
              "Data security and LGPD/GDPR compliance",
            ],
          },
          ads: {
            title: "Paid Traffic",
            subtitle: "Performance with Real ROI",
            desc: "Smart management of Google Ads and Meta Ads campaigns. Focus on refined demographic targeting to attract high-intent audiences.",
            nextStep: "Next step: Automate Lead Qualification",
            details: [
              "Refined demographic targeting (Income & Interests)",
              "Persuasive copywriting & high-impact creatives",
              "End-to-end conversion tracking and analytics",
              "Constant optimization based on qualified cost per lead",
            ],
          },
          automation: {
            title: "Conversational Automation",
            subtitle: "Smart 24/7 Qualification",
            desc: "Structured bots and highly integrated messaging flows. Qualify your leads on WhatsApp or direct instantly as they arrive, saving you time.",
            nextStep: "Next step: Build Authority Content",
            details: [
              "Smart automatic lead screening and triaging",
              "Direct integration with CRM and schedulers",
              "Instant replies and humanized conversation flows",
              "Massive time savings for your sales reps",
            ],
          },
          content: {
            title: "Authority Content",
            subtitle: "High-Ticket Social Media",
            desc: "Scripted video production to position you as an authority. High-retention creatives that educate the client and drive immediate intent.",
            nextStep: "Next step: Complete Funnel Integration",
            details: [
              "Sales and retention-focused copywriting & scriptwriting",
              "Premium, dynamic video editing style",
              "Aesthetic curation aligned with luxury markets",
              "Multichannel social distribution strategy",
            ],
          },
        },
      },
      methodology: {
        tag: "Conversion Engineering",
        title: "How we design the ideal journey for your end customer",
        sub: "Our methodology focuses on understanding the buying behavior of your High-Ticket audience. We create a frictionless journey and deliver clear reports to track real results.",
        steps: [
          { number: "01", title: "Audit & Mapping", subtitle: "Friction Diagnosis", desc: "We map your touchpoints and analyze where you are losing qualified leads." },
          { number: "02", title: "New Journey Design", subtitle: "High-Ticket Architecture", desc: "We redesign the experience with value copy and lightning-fast speed." },
          { number: "03", title: "Ecosystem Activation", subtitle: "Integrated Launch", desc: "We build the infrastructure and launch highly targeted acquisition campaigns." },
          { number: "04", title: "Optimization & LTV", subtitle: "Real Performance Reports", desc: "We analyze business metrics and ROI for continuous funnel tuning." }
        ],
        card1Title: "User Journey Consulting",
        card1Desc: "We visually map how high-income leads behave online, structure channels that build immediate credibility, and design efficient sales funnels.",
        card2Title: "Analytical Performance Reports",
        card2Desc: "Dynamic, simplified dashboards focusing on what really matters: Qualified Leads, Customer Acquisition Cost (CAC), and Return on Investment (ROI).",
      },
      contact: {
        tag: "Select Diagnostic Process",
        title: "Consulting Application",
        sub: "We do not accept all clients. Qualify your company below to receive a free strategic diagnosis from our digital engineering team.",
        step1: "Step 1: Structural Data",
        step2: "Step 2: Scope & Positioning",
        step3: "Step 3: Business Bottleneck",
        labelName: "Your Full Name *",
        labelRole: "Your Role *",
        labelCompany: "Company Name *",
        labelEmail: "Corporate Email *",
        labelPhone: "WhatsApp Contact *",
        labelWebsite: "Website or Instagram Link",
        labelRevenue: "What is your average monthly revenue? *",
        labelBottleneck: "What is your biggest digital challenge right now? *",
        optionsRevenue: [
          "Up to R$ 50k / month",
          "R$ 50k to R$ 100k / month",
          "R$ 100k to R$ 300k / month",
          "Above R$ 300k / month",
        ],
        optionsBottleneck: [
          "My website is slow/old and doesn't build trust",
          "We run paid ads, but they don't attract the right lead",
          "Our sales team wastes too much time on unqualified leads",
          "I need to position my brand as an absolute authority",
        ],
        btnBack: "Back",
        btnNext: "Next",
        btnSubmit: "Submit Application",
        submitting: "Analyzing Application...",
        submittingDesc1: "Crawling website infrastructure...",
        submittingDesc2: "Generating secure API tokens...",
        successTitle: "Application Submitted Successfully!",
        successBody: "Congratulations! Your data has been sent directly to our digital architects team.",
        successNext: "What happens next?",
        successNextDesc: "We will analyze your online presence and the bottleneck reported. We will reach out within **24 business hours** via WhatsApp or email.",
      },
      footer: {
        tagline: "Presence with Intelligence",
        desc: "Digital presence boutique focused on strategic positioning and growth for High-Ticket brands.",
        navTitle: "Navigation",
        connectTitle: "Connect",
        rights: "© 2026 TRIUM Lab. All rights reserved.",
        terms: "Terms of Service",
        privacy: "Privacy Policy",
      }
    },
    es: {
      hero: {
        tag: "Presencia Digital de Alto Rendimiento",
        headlinePart1: "No solo construimos sitios web. Diseñamos el ",
        headlineHighlight: "ecosistema",
        headlinePart2: " digital de su negocio.",
        subheadline: "Unificamos SEO avanzado, tráfico pago enfocado en ROI, automatizaciones inteligentes y contenido de alto impacto en una sola estrategia integrada para marcas High-Ticket.",
        cta1: "Aplicar para Consultoría Diagnóstica",
        cta2: "Conocer Soluciones",
        metric1: "100% Integrado",
        metric2: "High-Ticket Enfoque en Valor",
        metric3: "ROI como Métrica Principal",
      },
      menu: {
        manifesto: "El Manifiesto",
        ecosystem: "El Ecosistema",
        methodology: "La Metodología",
        cta: "Agendar Diagnóstico",
      },
      manifesto: {
        tag: "Filosofía TRIUM Lab",
        title: "El marketing tradicional fragmentado está quebrando su negocio.",
        intro: "Contratar una agencia para redes sociales, un freelancer para un sitio plantilla, y otro profesional para anuncios crea una experiencia inconexa e ineficiente.",
        body1: "Para marcas High-Ticket, la percepción de valor lo es todo. Cuando su cliente potencial hace clic en un anuncio premium pero aterriza en una web lenta, y luego es calificado por un soporte manual lento, el encanto desaparece. ¿El resultado? Su tasa de conversión se desploma y su marca se devalúa.",
        body2: "TRIUM Lab nació para combatir esta fragmentación. No entregamos tareas aisladas. Desarrollamos y gestionamos un Ecosistema de Presencia Digital Unificado.",
        quote: "La Presencia Digital de alto valor exige consistencia de extremo a extremo: desde el primer píxel del anuncio hasta la calificación inteligente del lead. Si un engranaje falla, todo el embudo High-Ticket se derrumba.",
      },
      ecosystem: {
        tag: "La Solución Unificada",
        title: "El Ecosistema Digital TRIUM",
        sub: "En lugar de servicios aislados que no conversan entre sí, entregamos una estructura unificada donde cada elemento potencia a los demás.",
        nextStep: "Siguiente paso: Conexión",
        cta: "Solicitar este Pilar en su Diagnóstico",
        included: "Lo que está incluido de extremo a extremo:",
        pillars: {
          infra: {
            title: "Infraestructura & SEO",
            subtitle: "Rendimiento Orgánico",
            desc: "Sitios web a medida diseñados con código limpio, velocidad extrema y arquitectura moderna. Optimización técnica de SEO para dominar las búsquedas orgánicas.",
            nextStep: "Siguiente paso: Escalar con Tráfico",
            details: [
              "Carga ultra rápida (Next.js y Vercel)",
              "SEO Técnico avanzado & Schema Markup",
              "Experiencia Mobile UI/UX impecable",
              "Seguridad de datos y cumplimiento normativo",
            ],
          },
          ads: {
            title: "Tráfico Pago",
            subtitle: "Rendimiento con ROI Real",
            desc: "Gestão inteligente de campanhas no Google Ads e Meta Ads. Enfoque en segmentación demográfica calificada para atraer audiencias de alto valor.",
            nextStep: "Siguiente paso: Automatizar Atención",
            details: [
              "Segmentación demográfica refinada (Ingresos e Intereses)",
              "Copywriting persuasivo y creativos de alto impacto",
              "Monitoreo y seguimiento de conversiones de extremo a extremo",
              "Optimización constante basada en costo por lead calificado",
            ],
          },
          automation: {
            title: "Automatización Conversacional",
            subtitle: "Calificación Inteligente 24/7",
            desc: "Bots estructurados y flujos conversacionales integrados. Califique sus leads en WhatsApp o direct al instante, optimizando su tiempo comercial.",
            nextStep: "Siguiente paso: Crear Contenido de Autoridad",
            details: [
              "Triaje y filtrado automático inteligente de leads",
              "Integración directa con CRM y agendadores",
              "Respuestas al instante y flujos de conversación humanizados",
              "Ahorro de tiempo para su equipo de ventas",
            ],
          },
          content: {
            title: "Contenido de Autoridade",
            subtitle: "Social Media High-Ticket",
            desc: "Producción de videos guionizados para posicionarse como autoridad. Creativos de alta retención que educan al cliente y generan intención de compra.",
            nextStep: "Siguiente paso: Integración Total del Embudo",
            details: [
              "Guiones enfocados en retención y ventas",
              "Edición de video premium y dinámica",
              "Curaduría estética alineada a mercados de lujo",
              "Estratégia de distribuição multicanal",
            ],
          },
        },
      },
      methodology: {
        tag: "Ingeniería de Conversión",
        title: "Cómo diseñamos la jornada ideal para su cliente final",
        sub: "Nuestra metodología se enfoca en entender el comportamiento de compra de su público High-Ticket. Creamos una jornada sin fricciones y entregamos reportes claros de rendimiento.",
        steps: [
          { number: "01", title: "Auditoría & Mapeo", subtitle: "Diagnóstico de Fricción", desc: "Mapeamos sus puntos de contacto y analizamos dónde pierde leads calificados." },
          { number: "02", title: "Diseño de Nueva Jornada", subtitle: "Arquitectura High-Ticket", desc: "Rediseñamos la experiencia con copy de alto valor y velocidad extrema." },
          { number: "03", title: "Activación del Ecosistema", subtitle: "Lanzamiento Integrado", desc: "Desarrollamos la infraestructura e iniciamos campañas de captación premium." },
          { number: "04", title: "Optimización & LTV", subtitle: "Reportes de Performance Real", desc: "Analizamos métricas comerciales y ROI para optimizaciones constantes." }
        ],
        card1Title: "Consultoría de la Jornada del Usuario",
        card1Desc: "Mapeamos visualmente cómo se comporta el lead de altos ingresos en internet, estructuramos canales de alta credibilidad y diseñamos embudos eficientes.",
        card2Title: "Reportes Analíticos de Rendimiento",
        card2Desc: "Paneles de rendimiento dinámicos y simplificados enfocados en lo que importa: Leads Calificados, Costo de Adquisición (CAC) y Retorno sobre Inversión (ROI).",
      },
      contact: {
        tag: "Proceso Selectivo Diagnóstico",
        title: "Aplicación de Consultoría",
        sub: "No aceptamos a todos los clientes. Qualifique su empresa a continuación para recibir un diagnóstico estratégico gratuito de nuestro equipo de ingeniería digital.",
        step1: "Paso 1: Datos Estructurales",
        step2: "Paso 2: Alcance y Posicionamiento",
        step3: "Paso 3: Desafío de Negocios",
        labelName: "Su Nombre Completo *",
        labelRole: "Su Cargo *",
        labelCompany: "Nombre de la Empresa *",
        labelEmail: "Correo Corporativo *",
        labelPhone: "WhatsApp de Contacto *",
        labelWebsite: "Enlace de la Web o Instagram Actual",
        labelRevenue: "¿Cuál es el faturamento mensual medio actual? *",
        labelBottleneck: "¿Cuál es su mayor desafío digital en este momento? *",
        optionsRevenue: [
          "Hasta R$ 50k / mes",
          "R$ 50k a R$ 100k / mes",
          "R$ 100k a R$ 300k / mes",
          "Más de R$ 300k / mes",
        ],
        optionsBottleneck: [
          "Mi sitio web es lento/antiguo y no genera confianza",
          "Hacemos anuncios pagados, pero no atraen al lead correcto",
          "Nuestro equipo comercial pierde mucho tiempo con leads desqualificados",
          "Necesito posicionar mi marca como autoridad incontestable",
        ],
        btnBack: "Volver",
        btnNext: "Avanzar",
        btnSubmit: "Enviar Aplicación",
        submitting: "Analizando Aplicación...",
        submittingDesc1: "Rastreando infraestructura del sitio web...",
        submittingDesc2: "Generando tokens de seguridad...",
        successTitle: "¡Aplicación Recibida con Éxito!",
        successBody: "¡Felicitaciones! Sus datos han sido enviados directamente a nuestro equipo de arquitectos digitales.",
        successNext: "¿Qué sucede ahora?",
        successNextDesc: "Analizaremos su presencia en línea y el desafío reportado. Nos pondremos en contacto en un plazo de **24 horas hábiles** vía WhatsApp o correo electrónico.",
      },
      footer: {
        tagline: "Presencia con Inteligência",
        desc: "Boutique de presencia digital focada no crescimento e posicionamento estratégico de marcas High-Ticket.",
        navTitle: "Navegación",
        connectTitle: "Conectar",
        rights: "© 2026 TRIUM Lab. Todos los derechos reservados.",
        terms: "Términos de Servicio",
        privacy: "Política de Privacidad",
      }
    }
  };

  return (
    <>
      <Navbar
        lang={lang}
        setLang={setLang}
        t={dict[lang].menu}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main className="flex flex-col flex-1 w-full overflow-hidden">
        <Hero t={dict[lang].hero} />
        <Manifesto t={dict[lang].manifesto} />
        <Ecosystem t={dict[lang].ecosystem} />
        <Methodology t={dict[lang].methodology} />
        <ContactForm t={dict[lang].contact} />
      </main>
      <Footer t={dict[lang].footer} />
    </>
  );
}
