"use client";

import Footer from "../components/footer";
import { useCallback } from "react";

export default function Work() {
  // Função para descer a página 100px
  const scrollDown = useCallback(() => {
    window.scrollBy({
      top: 500,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Gupe Admin",
      description:
        "Sistema administrativo com foco em gestão, performance e escalabilidade.",
      image: "/img/projects/gupe-admin.jpg",
      preview: "https://gupeadmin.preview.com",
      github: "https://github.com/seu-usuario/gupeadmin",
    },
    {
      id: 2,
      title: "Dev Receitas",
      description:
        "Chatbot com IA para geração de receitas culinárias personalizadas.",
      image: "/img/projects/dev-receitas.jpg",
      preview: "https://devreceitas.preview.com",
      github: "https://github.com/seu-usuario/dev-receitas",
    },
    {
      id: 3,
      title: "Cardápio Online",
      description:
        "Plataforma de cardápio digital com gerenciamento de produtos e categorias.",
      image: "/img/projects/cardapio-online.jpg",
      preview: "https://cardapio.preview.com",
      github: "https://github.com/seu-usuario/cardapio-online",
    },
    {
      id: 4,
      title: "Portfólio Pessoal",
      description:
        "Portfólio moderno desenvolvido com Next.js, Tailwind e foco em UX.",
      image: "/img/projects/portfolio.jpg",
      preview: "https://seusite.com",
      github: "https://github.com/seu-usuario/portfolio",
    },
    {
      id: 5,
      title: "Portfólio Pessoal",
      description:
        "Portfólio moderno desenvolvido com Next.js, Tailwind e foco em UX.",
      image: "/img/projects/portfolio.jpg",
      preview: "https://seusite.com",
      github: "https://github.com/seu-usuario/portfolio",
    },
    {
      id: 6,
      title: "Portfólio Pessoal",
      description:
        "Portfólio moderno desenvolvido com Next.js, Tailwind e foco em UX.",
      image: "/img/projects/portfolio.jpg",
      preview: "https://seusite.com",
      github: "https://github.com/seu-usuario/portfolio",
    },
  ];


  return (
    <div
      className="flex flex-col lg:flex-row min-h-screen"
      style={{ backgroundColor: "#1A1A18" }}
    >
      <Footer textColor="#222222" />

      <main className="flex flex-col w-full bg-[#F8F8F8] text-[#222222] flex-1 lg:justify-center lg:items-center lg:gap-12 xl:gap-20 px-4 sm:px-6 lg:px-20 py-8 lg:py-0">
        
        <div className="w-full h-screen text-center flex justify-center flex-col items-center">
          <h2 className="font-grandslang text-4xl sm:text-5xl md:text-6xl lg:text-[200px] mb-8 mt-8">
            WORK
          </h2>

          <p className="max-w-[50%]">
            Sejam bem-vindos à minha sessão de projetos. Cada trabalho aqui
            apresentado foi desenvolvido com atenção aos detalhes e representa um
            pouco da minha trajetória profissional.
          </p>

          {/* Botão da seta */}
          <button
            onClick={scrollDown}
            className="
              mt-10
              animate-bounce
              text-[#222222]
              hover:opacity-70
              transition
              p-4
              cursor-pointer
            "
            aria-label="Ir para baixo"
          >
            {/* Ícone da seta (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 16.5l-8-8 1.4-1.4L12 13.7l6.6-6.6L20 8.5z" />
            </svg>
          </button>
        </div>

        <div>
          <div className="
              w-full
              max-w-[1400px]
              mx-auto
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-6
              
          "
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="
                bg-white
                rounded-xl
                shadow-lg
                overflow-hidden
                flex
                flex-col
                transition
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              {/* Imagem */}
              <div
                className="h-[220px] bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
                aria-hidden
              />

              {/* Conteúdo */}
              <div className="flex flex-col flex-1 p-6 text-left">
                <h3 className="font-grandslang text-2xl mb-2">
                  {project.title}
                </h3>

                <p className="text-sm leading-6 text-gray-700 flex-1">
                  {project.description}
                </p>

                {/* Ações */}
                <div className="flex gap-3 mt-6">
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      text-center
                      text-sm
                      font-medium
                      px-4
                      py-2
                      rounded-md
                      bg-[#1A1A18]
                      text-white
                      hover:opacity-90
                      transition
                    "
                  >
                    Preview
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      text-center
                      text-sm
                      font-medium
                      px-4
                      py-2
                      rounded-md
                      border
                      border-[#1A1A18]
                      text-[#1A1A18]
                      hover:bg-[#1A1A18]
                      hover:text-white
                      transition
                    "
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        </div>
      </main>
    </div>
  );
}
