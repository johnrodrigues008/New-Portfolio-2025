export const en = {
  nav: {
    brand: "Personal portfolio",
    about: "About",
    work: "Work",
    education: "Education",
    contact: "Contact",
    menuLabel: "Navigation menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  translate: {
    select: "Select language",
    selected: "Selected language: {language}. Change language",
    available: "Available languages",
  },
  hero: {
    imageAlt: "John Rodrigues, Senior Full-Stack Developer",
    role: "Full-Stack Developer · Front-End & Back-End Engineering · Product & Interface Design · Web Accessibility",
    bio1:
      "Full-stack developer with experience across the entire software development lifecycle, from requirements analysis and prototyping to development, testing, deployment, and maintenance.",
    bio2:
      "Experienced in systems analysis, application integration, software architecture, scalability, maintainability, and accessible web development.",
  },
  footer: {
    home: "HOME",
    socialLabel: "Social links",
  },
  about: {
    title: "About",
    introTitle: "Introduction",
    introLead:
      "I'm John. A full-stack developer, problem solver and digital product builder.",
    intro1:
      "Over the last years, I've worked across multiple layers of software development from frontend engineering and backend architecture to UI/UX design, SEO/CRO strategy and data automation.",
    intro2:
      "As Full-Stack Developer, I design and build scalable applications, ensuring performance, reliability and clarity in every stage of the product lifecycle.",
    intro3:
      "I have a strong foundation in UI/UX principles, accessibility and prototyping, shaping interfaces that improve user experience while maintaining engineering excellence.",
    intro4:
      "What drives me is solving real problems through clear engineering, thoughtful design and continuous iteration.",
    quoteTitle: "Favorite Quote",
    quote:
      '"There is nothing so useless as doing efficiently that which should not be done at all."',
    quoteNote:
      "This quote resonates with my approach to building purposeful, meaningful software.",
    experience: "EXPERIENCE",
    experienceItems: [
      "Full-Stack Developer — G4F",
      "Full-Stack Developer — Decisão Sistemas",
      "SEO/CRO Developer — Media.Monks Brasil",
      "Data & Automation Analyst — Ministério da Infraestrutura",
    ],
    skills: "SKILLS",
    skillsList:
      "Full-Stack Development • UI/UX • SEO/CRO • Agile • APIs • Architecture • Automation • Databases • DevOps • Cloud • Debugging • Performance Optimization",
    kudos: "KUDOS",
    kudosText:
      "My journey has been shaped by great mentors and teams who helped refine my skills and thinking as an engineer and designer.",
    thankYou: "THANK YOU.",
  },
  work: {
    title: "WORK",
    intro:
      "Welcome to my projects section. Each piece of work presented here was developed with attention to detail and represents a part of my professional journey.",
    scrollDown: "Scroll down",
    preview: "Preview",
    github: "GitHub",
    projects: {
      gupeAdmin: {
        title: "Gupe Admin",
        description:
          "Administrative system focused on management, performance, and scalability.",
      },
      devReceitas: {
        title: "Dev Receitas",
        description:
          "AI chatbot for generating personalized culinary recipes.",
      },
      cardapioOnline: {
        title: "Online Menu",
        description:
          "Digital menu platform with product and category management.",
      },
      portfolio: {
        title: "Personal Portfolio",
        description:
          "Modern portfolio built with Next.js, Tailwind, and a focus on UX.",
      },
    },
  },
  blog: {
    title: "EDUCATION",
  },
  contact: {
    title: "CONTACT",
    hello: "Hello.",
    intro:
      "Need a beautiful, well-structured website that you can own and maintain yourself? Get in touch.",
    email: "Email: johnrodrigues008@gmail.com",
    internet: "On the Internet:",
  },
} as const;

export type Dictionary = {
  nav: {
    brand: string;
    about: string;
    work: string;
    education: string;
    contact: string;
    menuLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  translate: {
    select: string;
    selected: string;
    available: string;
  };
  hero: {
    imageAlt: string;
    role: string;
    bio1: string;
    bio2: string;
  };
  footer: {
    home: string;
    socialLabel: string;
  };
  about: {
    title: string;
    introTitle: string;
    introLead: string;
    intro1: string;
    intro2: string;
    intro3: string;
    intro4: string;
    quoteTitle: string;
    quote: string;
    quoteNote: string;
    experience: string;
    experienceItems: readonly string[];
    skills: string;
    skillsList: string;
    kudos: string;
    kudosText: string;
    thankYou: string;
  };
  work: {
    title: string;
    intro: string;
    scrollDown: string;
    preview: string;
    github: string;
    projects: {
      gupeAdmin: { title: string; description: string };
      devReceitas: { title: string; description: string };
      cardapioOnline: { title: string; description: string };
      portfolio: { title: string; description: string };
    };
  };
  blog: {
    title: string;
  };
  contact: {
    title: string;
    hello: string;
    intro: string;
    email: string;
    internet: string;
  };
};
