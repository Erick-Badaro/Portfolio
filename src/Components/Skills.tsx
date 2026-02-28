import {
  FaReact,
  FaDocker,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDotnet,
  SiMongodb,
  SiPostgresql,
  SiAmazonwebservices,
} from "react-icons/si";

import { MdApi } from "react-icons/md";


export default function Skills(){
 const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "Java", icon: <FaJava /> },
    { name: "API REST", icon: <MdApi/> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "AWS", icon: <SiAmazonwebservices/> },
  ];

    return (
    <section className="py-24 px-6 bg-[#05070d]">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-sm tracking-widest text-cyan-400 uppercase">
          Minhas Skills
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          Tecnologias & <span className="text-cyan-400">Ferramentas</span>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-400">
          Tecnologias que utilizo para construir aplicações modernas,
          com foco em backend e boas práticas.
        </p>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center 
              p-6 rounded-2xl border border-white/10 
              bg-white/5 backdrop-blur-sm
              transition-all duration-300
              hover:bg-white/10 hover:-translate-y-2"
            >
              <div className="text-4xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              <span className="mt-3 text-sm font-medium text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}