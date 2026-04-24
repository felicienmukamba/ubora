export function getDictionary(locale: string) {
  return locale === 'fr' ? french : english;
}

const english = {
  nav: {
    home: "Home",
    about: "About",
    activities: "Activities",
    values: "Values",
    contact: "Contact",
    cta: "Get in touch"
  },
  hero: {
    title: "We build AI systems that convert",
    subtitle: "Premium AI development agency transforming businesses through intelligent automation and cutting-edge technology.",
    cta: "Start your project",
    secondary: "View our work"
  },
  heroCarousel: {
    pauseLabel: "Pause",
    playLabel: "Play",
    previousLabel: "Previous slide",
    nextLabel: "Next slide",
    slides: [
      {
        eyebrow: "KLADRIVA Intelligence",
        title: "AI that earns its place in your business.",
        subtitle: "Custom systems engineered for measurable outcomes — not just impressive demos.",
        primaryCta: "Start your project",
        primaryHref: "/contact",
        secondaryCta: "See the work",
        secondaryHref: "/activities",
        theme: "light"
      },
      {
        eyebrow: "Machine Learning",
        title: "Models tuned to the way you actually work.",
        subtitle: "Predictive systems trained on your data, deployed to your stack, owned by your team.",
        primaryCta: "Explore ML",
        primaryHref: "/activities",
        secondaryCta: "Talk to an engineer",
        secondaryHref: "/contact",
        theme: "dark"
      },
      {
        eyebrow: "Language & Documents",
        title: "Turn every conversation into leverage.",
        subtitle: "Assistants, search, and document intelligence built on frontier models — with guardrails you control.",
        primaryCta: "Build an assistant",
        primaryHref: "/contact",
        secondaryCta: "How we build",
        secondaryHref: "/values",
        theme: "light"
      },
      {
        eyebrow: "Computer Vision",
        title: "See what your operation is missing.",
        subtitle: "Detection, classification and visual automation that plug into the cameras and sensors you already have.",
        primaryCta: "Start a pilot",
        primaryHref: "/contact",
        secondaryCta: "About the team",
        secondaryHref: "/about",
        theme: "dark"
      }
    ]
  },
  metrics: {
    title: "Proven results",
    projects: { value: "120+", label: "Projects delivered" },
    satisfaction: { value: "98%", label: "Client satisfaction" },
    conversion: { value: "3x", label: "Average conversion increase" }
  },
  capabilities: {
    title: "What we do",
    subtitle: "End-to-end AI solutions for forward-thinking companies",
    items: [
      { title: "AI Strategy", description: "Comprehensive roadmap for AI integration aligned with your business goals.", tags: ["Consulting", "Roadmap", "Audit"] },
      { title: "Machine Learning", description: "Custom ML models trained on your data for predictive analytics and automation.", tags: ["Models", "Data", "Automation"] },
      { title: "NLP Solutions", description: "Natural language processing for chatbots, content analysis, and document processing.", tags: ["Chatbots", "Analysis", "LLM"] },
      { title: "Computer Vision", description: "Image recognition, object detection, and visual automation systems.", tags: ["Vision", "Detection", "Automation"] },
      { title: "AI Integration", description: "Seamless integration of AI capabilities into your existing infrastructure.", tags: ["Integration", "API", "Infrastructure"] },
      { title: "Data Analytics", description: "Turn your data into actionable insights with advanced analytics.", tags: ["Insights", "BI", "Reporting"] }
    ]
  },
  featuredWork: { title: "Featured work", subtitle: "Projects that define our expertise" },
  process: {
    title: "How we work",
    subtitle: "A proven methodology for delivering results",
    steps: [
      { title: "Discovery", description: "We dive deep into your business to understand goals, challenges, and opportunities." },
      { title: "Strategy", description: "We craft a tailored AI roadmap aligned with your objectives and market position." },
      { title: "Development", description: "Our team builds robust, scalable solutions using cutting-edge technology." },
      { title: "Optimization", description: "We continuously refine and improve for maximum performance and ROI." }
    ]
  },
  cta: {
    title: "Ready to transform your business?",
    subtitle: "Let's discuss how AI can drive your growth.",
    button: "Get started"
  },
  footer: {
    description: "Premium AI development agency building systems that convert.",
    newsletter: { title: "Stay updated", placeholder: "Enter your email", button: "Subscribe" },
    links: { company: "Company", services: "Services", legal: "Legal" },
    copyright: "© 2026 KLADRIVA. All rights reserved."
  },
  about: {
    title: "About us",
    vision: { title: "Our vision", content: "We believe AI is not just a technology—it's a transformative force that reshapes how businesses operate, compete, and grow. Our vision is to make enterprise-grade AI accessible, practical, and profitable for companies ready to embrace the future." },
    mission: { title: "Our mission", content: "To deliver AI solutions that don't just impress technically—they deliver measurable business outcomes. We bridge the gap between cutting-edge AI research and real-world application." },
    keyPoints: {
      title: "Why KLADRIVA",
      items: [
        { title: "Results-first", description: "Every AI system we build is designed with clear KPIs and ROI targets." },
        { title: "Scalable architecture", description: "Our solutions grow with your business, handling increased load seamlessly." },
        { title: "Security first", description: "Enterprise-grade security and compliance built into every solution." },
        { title: "Transparent process", description: "No black boxes—clear documentation and measurable outcomes." }
      ]
    },
    team: {
      title: "Our team",
      subtitle: "Experts across AI, development, and business consulting",
      roles: [
        { title: "AI Researchers", description: "PhD-level experts in machine learning and deep learning" },
        { title: "Full-Stack Developers", description: "Engineers who build robust, scalable AI systems" },
        { title: "Business Consultants", description: "Strategists who align AI with your business goals" }
      ]
    }
  },
  activities: { title: "Our activities", subtitle: "Comprehensive AI solutions tailored to your needs", cta: "Discuss your project" },
  values: {
    title: "Our values",
    subtitle: "The principles that guide everything we do",
    coreValues: [
      { title: "Excellence", description: "We settle for nothing less than outstanding in every deliverable." },
      { title: "Innovation", description: "We push boundaries and explore new possibilities in AI." },
      { title: "Partnership", description: "Your success is our success—we invest in your outcomes." },
      { title: "Integrity", description: "Transparent, honest, and accountable in all we do." },
      { title: "Agility", description: "We adapt quickly to changing requirements and technologies." },
      { title: "Impact", description: "We measure success by the results we deliver to your business." }
    ],
    quote: { text: "The best AI is invisible—it's the silent engine that powers extraordinary outcomes.", author: "KLADRIVA" },
    practices: {
      title: "Our practices",
      items: ["Continuous learning and adaptation", "Cross-functional collaboration", "Data-driven decision making", "Agile development methodology", "Regular client feedback loops", "Post-deployment support"]
    }
  },
  contact: {
    title: "Get in touch",
    subtitle: "Let's discuss how AI can transform your business.",
    form: {
      name: "Name", namePlaceholder: "Your name",
      email: "Email", emailPlaceholder: "your@email.com",
      company: "Company", companyPlaceholder: "Your company",
      message: "Message", messagePlaceholder: "Tell us about your project...",
      submit: "Send message", sending: "Sending..."
    },
    success: "Message sent successfully! We'll be in touch soon.",
    error: "Something went wrong. Please try again."
  },
  common: { language: "Language", en: "English", fr: "Français" }
};

const french = {
  ...english,
  nav: { home: "Accueil", about: "À propos", activities: "Activités", values: "Valeurs", contact: "Contact", cta: "Contactez-nous" },
  hero: { title: "Nous construisons des systèmes IA qui convertissent", subtitle: "Agence premium de développement IA transformant les entreprises grâce à l'automatisation intelligente et la technologie de pointe.", cta: "Démarrer votre projet", secondary: "Voir nos réalisations" },
  heroCarousel: {
    pauseLabel: "Pause",
    playLabel: "Lecture",
    previousLabel: "Diapositive précédente",
    nextLabel: "Diapositive suivante",
    slides: [
      {
        eyebrow: "KLADRIVA Intelligence",
        title: "Une IA qui mérite sa place dans votre entreprise.",
        subtitle: "Des systèmes sur mesure conçus pour des résultats mesurables — pas de simples démos.",
        primaryCta: "Démarrer votre projet",
        primaryHref: "/contact",
        secondaryCta: "Voir nos réalisations",
        secondaryHref: "/activities",
        theme: "light"
      },
      {
        eyebrow: "Apprentissage automatique",
        title: "Des modèles calibrés à votre réalité.",
        subtitle: "Des systèmes prédictifs entraînés sur vos données, déployés dans votre stack, possédés par vos équipes.",
        primaryCta: "Explorer le ML",
        primaryHref: "/activities",
        secondaryCta: "Parler à un ingénieur",
        secondaryHref: "/contact",
        theme: "dark"
      },
      {
        eyebrow: "Langage & Documents",
        title: "Transformez chaque conversation en levier.",
        subtitle: "Assistants, recherche et intelligence documentaire bâtis sur des modèles de pointe — avec les garde-fous que vous contrôlez.",
        primaryCta: "Bâtir un assistant",
        primaryHref: "/contact",
        secondaryCta: "Notre méthode",
        secondaryHref: "/values",
        theme: "light"
      },
      {
        eyebrow: "Vision par ordinateur",
        title: "Voyez ce que vos opérations manquent.",
        subtitle: "Détection, classification et automatisation visuelle qui s'intègrent à vos caméras et capteurs existants.",
        primaryCta: "Lancer un pilote",
        primaryHref: "/contact",
        secondaryCta: "À propos de l'équipe",
        secondaryHref: "/about",
        theme: "dark"
      }
    ]
  },
  metrics: { title: "Résultats prouvés", projects: { value: "120+", label: "Projets livrés" }, satisfaction: { value: "98%", label: "Satisfaction client" }, conversion: { value: "3x", label: "Augmentation moyenne de conversion" } },
  capabilities: { title: "Ce que nous faisons", subtitle: "Solutions IA complètes pour les entreprises visionnaires", items: english.capabilities.items },
  cta: { title: "Prêt à transformer votre entreprise?", subtitle: "Discutons de comment l'IA peut stimuler votre croissance.", button: "Commencer" },
  footer: { description: "Agence premium de développement IA construisant des systèmes qui convertissent.", newsletter: { title: "Restez informé", placeholder: "Entrez votre email", button: "S'abonner" }, links: { company: "Entreprise", services: "Services", legal: "Légal" }, copyright: "© 2026 KLADRIVA. Tous droits réservés." },
  about: { title: "À propos", vision: { title: "Notre vision", content: "Nous croyons que l'IA n'est pas seulement une technologie—c'est une force transformative qui redéfinit comment les entreprises opèrent, compétitionnent et grandissent. Notre vision est de rendre l'IA de niveau entreprise accessible, pratique et rentable pour les entreprises prêtes à embrasser l'avenir." }, mission: { title: "Notre mission", content: "Délivrer des solutions IA qui ne sont pas seulement impressionnantes techniquement—elles produisent des résultats métier mesurables. Nous comblons le fossé entre la recherche IA de pointe et l'application réelle." }, keyPoints: english.about.keyPoints, team: english.about.team },
  activities: { title: "Nos activités", subtitle: "Solutions IA complètes adaptées à vos besoins", cta: "Discuter de votre projet" },
  values: { title: "Nos valeurs", subtitle: "Les principes qui guident tout ce que nous faisons", coreValues: english.values.coreValues, quote: english.values.quote, practices: english.values.practices },
  contact: { title: "Contactez-nous", subtitle: "Discutons de comment l'IA peut transformer votre entreprise.", form: { name: "Nom", namePlaceholder: "Votre nom", email: "Email", emailPlaceholder: "votre@email.com", company: "Entreprise", companyPlaceholder: "Votre entreprise", message: "Message", messagePlaceholder: "Parlez-nous de votre projet...", submit: "Envoyer", sending: "Envoi..." }, success: "Message envoyé avec succès! Nous vous contacterons bientôt.", error: "Une erreur s'est produite. Veuillez réessayer." },
  common: { language: "Langue", en: "English", fr: "Français" }
};

export type Dictionary = typeof english;