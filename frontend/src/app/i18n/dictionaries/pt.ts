import type { Dictionary } from "./en";

export const pt: Dictionary = {
  nav: {
    brand: "Portfólio pessoal",
    home: "Principal",
    about: "Sobre",
    work: "Trabalho",
    education: "Formação",
    contact: "Contato",
    menuLabel: "Menu de navegação",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  translate: {
    select: "Selecionar idioma",
    selected: "Idioma selecionado: {language}. Alterar idioma",
    available: "Idiomas disponíveis",
  },
  hero: {
    imageAlt: "John Rodrigues, Desenvolvedor Full-Stack Sênior",
    role: "Desenvolvedor Full-Stack · Engenharia Front-End & Back-End · Design de Produto & Interface · Acessibilidade Web",
    bio1:
      "Desenvolvedor full-stack com experiência em todo o ciclo de vida do software, desde análise de requisitos e prototipagem até desenvolvimento, testes, implantação e manutenção.",
    bio2:
      "Experiente em análise de sistemas, integração de aplicações, arquitetura de software, escalabilidade, manutenibilidade e desenvolvimento web acessível.",
    downloadCv: "Baixar Currículo",
    viewExperience: "Ver experiências",
  },
  footer: {
    home: "INÍCIO",
    socialLabel: "Redes sociais",
  },
  about: {
    title: "Sobre",
    introTitle: "Introdução",
    introLead:
      "Eu sou o John. Desenvolvedor full-stack, solucionador de problemas e construtor de produtos digitais.",
    intro1:
      "Sou desenvolvedor full stack com experiência em desenvolvimento de sistemas e web, atuando em todo o ciclo de vida do software: requisitos, prototipação, desenvolvimento, testes, implantação e sustentação.",
    intro2:
      "Domino PHP, JavaScript (Node.js, TypeScript), Python, HTML, CSS (SCSS/SASS), além de frameworks como AngularJS, Angular (v16–v19), ReactJS e Next.js.",
    intro3:
      "Perfil analítico e proativo, com foco na resolução de problemas, evolução contínua e crescimento em arquitetura de software e liderança técnica.",
    intro4:
      "O que me motiva é resolver problemas reais com engenharia clara, design cuidadoso e iteração contínua.",
    quoteTitle: "Citação favorita",
    quote:
      '"Não há nada tão inútil quanto fazer com eficiência aquilo que não deveria ser feito."',
    quoteNote:
      "Essa citação ecoa a minha abordagem de construir software com propósito e significado.",
    experience: "EXPERIÊNCIA",
    experienceEntries: [
      {
        role: "Desenvolvedor Full Stack",
        company: "G4F",
        location: "Brasília, DF",
        period: "2024 – Atual · 1 ano e 10 meses",
        highlights: [
          "Desenvolvimento e manutenção de aplicações web para o Ministério das Relações Exteriores.",
          "Sustentação e refatoração com PHP (Zend, Doctrine), Node.js (NestJS), SQL Server e PostgreSQL.",
          "Modernização de interfaces com AngularJS e ReactJS; Docker, Git, Bitbucket, Jira e monitoramento com ELK Stack.",
        ],
      },
      {
        role: "Desenvolvedor Full Stack",
        company: "Decisão Sistemas",
        location: "Goiânia, GO",
        period: "2023 – 2024 · 1 ano",
        highlights: [
          "Desenvolvimento de software, da concepção à entrega, com foco em qualidade, desempenho e usabilidade.",
          "Criação de interfaces e serviços backend com AngularJS e Node.js.",
          "Prototipação e design de interfaces com Figma.",
        ],
      },
      {
        role: "Analista de SEO/CRO",
        company: "Media.Monks",
        location: "Sorocaba, SP",
        period: "2022 – 2023 · 1 ano e 6 meses",
        highlights: [
          "Desenvolvimento frontend e implementação de APIs para aplicações web.",
          "Manutenção de e-commerces em VTEX Legacy, VTEX IO, TrayCorp, WordPress, Deco CX e Salesforce.",
          "Estratégias de SEO e CRO; metodologias ágeis com Scrum e Kanban.",
        ],
      },
      {
        role: "Analista de Dados e Automação",
        company: "Ministério dos Transportes",
        location: "Brasília, DF",
        period: "2021 – 2022 · 1 ano",
        highlights: [
          "Gerenciamento de bancos PostgreSQL e MySQL; soluções de Data Lake.",
          "Automações com Python, Power Automate e Power Apps.",
          "Dashboards com Power BI; desenvolvimento web com HTML, CSS, JavaScript e CMS Plone.",
        ],
      },
    ],
    skills: "HABILIDADES",
    skillsGroups: [
      { category: "Backend", items: "Node.js (NestJS), PHP (Zend, Doctrine), Python" },
      { category: "Frontend", items: "JavaScript, TypeScript, React.js, Next.js, AngularJS, Angular, HTML5, CSS3, SCSS, Tailwind" },
      { category: "Bancos de Dados", items: "PostgreSQL, MySQL, SQL Server, MongoDB" },
      { category: "DevOps e Ferramentas", items: "Docker, Git, Bitbucket, Jira, ELK Stack, Scrum, Kanban" },
      { category: "Acessibilidade e SEO", items: "WCAG 2.1, HTML semântico, Core Web Vitals, otimização de SEO" },
    ],
    kudos: "AGRADECIMENTOS",
    kudosText:
      "Minha trajetória foi moldada por mentores e equipes excepcionais que ajudaram a refinar minhas habilidades e meu pensamento como engenheiro e designer.",
    thankYou: "OBRIGADO.",
  },
  work: {
    title: "TRABALHO",
    intro:
      "Sejam bem-vindos à minha seção de projetos. Cada trabalho aqui apresentado foi desenvolvido com atenção aos detalhes e representa um pouco da minha trajetória profissional.",
    scrollDown: "Ir para baixo",
    preview: "Preview",
    github: "GitHub",
    projects: {
      gupeAdmin: {
        title: "Gupe Admin",
        description:
          "Sistema administrativo com foco em gestão, performance e escalabilidade.",
      },
      devReceitas: {
        title: "Dev Receitas",
        description:
          "Chatbot com IA para geração de receitas culinárias personalizadas.",
      },
      cardapioOnline: {
        title: "Cardápio Online",
        description:
          "Plataforma de cardápio digital com gerenciamento de produtos e categorias.",
      },
      portfolio: {
        title: "Portfólio Pessoal",
        description:
          "Portfólio moderno desenvolvido com Next.js, Tailwind e foco em UX.",
      },
    },
  },
  education: {
    title: "FORMAÇÃO",
    intro:
      "Formação acadêmica e certificações que sustentam meu desenvolvimento contínuo em engenharia de software.",
    degreesTitle: "Graduações e Pós",
    certificationsTitle: "Certificações",
    languagesTitle: "Idiomas",
    degrees: [
      {
        institution: "PUC Campinas",
        program: "Pós-graduação — Arquitetura de Software, Ciência de Dados e Cybersecurity",
        period: "Em andamento · Previsto Dez 2026",
      },
      {
        institution: "Universidade Estácio de Sá",
        program: "Graduação — Ciências da Computação",
        period: "Previsto Jun 2026",
      },
      {
        institution: "Anhanguera Educacional",
        program: "Pós-graduação — Engenharia de Software",
        period: "Concluído em 2023",
      },
      {
        institution: "Universidade Estácio de Sá",
        program: "Graduação — Processos Gerenciais",
        period: "Concluído em 2022",
      },
    ],
    certifications: [
      { name: "Todos na Web: melhores práticas para acessibilidade digital", provider: "nic.br", year: "2025" },
      { name: "Desenvolvimento de Aplicativos Web Acessíveis", provider: "Alura", year: "2023" },
      { name: "Desenvolvedor Full Stack", provider: "Gama Academy (360h)", year: "2021" },
      { name: "Desenvolvedor Frontend/Backend", provider: "SENAI (360h)", year: "2021" },
    ],
    languages: ["Português — Nativo", "Inglês — Avançado", "Espanhol — Intermediário"],
  },
  contact: {
    title: "CONTATO",
    hello: "Olá.",
    intro:
      "Precisa de um site bonito e bem estruturado que você possa ter e manter sozinho? Entre em contato.",
    email: "Email: johnrodrigues008@gmail.com",
    phone: "Telefone: +55 61 99180-3216",
    location: "Brasília, Brasil",
    internet: "Na internet:",
  },
  resume: {
    pt: "/docs/Curriculum_John_Rodrigues.pdf",
    en: "/docs/Curriculum_John_Rodrigues_EN.pdf",
  },
};
