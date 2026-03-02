import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Play Senac API",
      description:
        "Sistema Web para agendamento e gerenciamento de quadras esportivas no Centro Universitário Senac, focado na digitalização e otimização de reservas",
      tags: ["Java", "SpringBoot", "Angular"],
      github: "https://github.com/Erick-Badaro/play-senac-api",
    },
    {
      title: "Alexandria - Loja Virtual de Livros",
      description:
        "Este projeto é uma loja virtual de livros desenvolvida como exercício prático de front-end, com funcionalidades completas para cadastro, login, visualização de produtos, carrinho de compras e gerenciamento de estoque, utilizando Local Storage para persistência dos dados.",
      tags: ["Angular", "TypeScript", "JSON Server"],
      github: "https://github.com/Erick-Badaro/PI-lbiblioteca",
    },
    {
      title: "Gerenciador de Publicações",
      description:
        "sistema web simples de gerenciamento de blog, focado nas operações essenciais de um CRUD para publicações. O objetivo principal é demonstrar o desenvolvimento de uma interface que permite o cadastro, visualização, alteração e exclusão de textos (publicações) em um ambiente web.",
      tags: ["Java", "SpringBoot"],
      github: "https://github.com/Erick-Badaro/publication-manager-back",
    },
    {
      title: "Lista de Tarefas",
      description:
        "Sistema Web simples que permite criar tarefas para serem realizadas, tipo checklists.",
      tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/Erick-Badaro/ToDoList-Tailwind",
    },
  ];

  return (
    <section id="projetos" className="py-24 px-6 bg-[#05070d]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <span className="text-sm tracking-widest text-cyan-400 uppercase">
            Portfólio
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Meus <span className="text-cyan-400">Projetos</span>
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-gray-400">
            Alguns projetos que desenvolvi aplicando boas práticas, arquitetura
            organizada e foco em backend.
          </p>
        </div>

        {/*Grid*/}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden 
              border border-white/10 bg-white/5 backdrop-blur-sm
              transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background fake image */}
              <div className="h-64 bg-gradient-to-br from-zinc-800 to-zinc-900" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 flex flex-col justify-end">
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-400">
                  {project.description}
                </p>

                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <FaGithub />
                  Ver código
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
