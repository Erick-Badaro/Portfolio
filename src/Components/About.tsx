import { motion } from "framer-motion";
import { Code2, Rocket, Database, Shield } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="relative bg-[#05070d] py-32 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:px-12">
        {/* COLUNA ESQUERDA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm font-semibold uppercase text-cyan-400/90">
            Sobre mim
          </p>

          <h2 className="mb-8 text-4xl font-bold leading-tight md:text-5xl">
            Construindo a base por trás das {" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
              aplicações
            </span>
          </h2>

          <p className="mb-6 text-slate-300">
            Sou desenvolvedor com foco principal em Backend, criando APIs,
            arquiteturas escaláveis e sistemas bem estruturados. Gosto de
            entender profundamente o problema antes de propor a solução.
          </p>

          <p className="mb-8 text-slate-400">
            Trabalho com organização de código, boas práticas, performance e
            integração entre serviços. Acredito que um backend sólido é a base
            para qualquer produto digital de qualidade.
          </p>
        </motion.div>

        {/* COLUNA DIREITA */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <Card
            icon={<Code2 size={22} />}
            title="Arquitetura"
            description="Estruturação de projetos com foco em organização, escalabilidade e manutenção a longo prazo."
          />

          <Card
            icon={<Rocket size={22} />}
            title="APIs & Integrações"
            description="Desenvolvimento de APIs RESTful e integração entre serviços e bancos de dados."
          />

          <Card
            icon={<Database size={22} />}
            title="Banco de Dados"
            description="Modelagem e otimização de consultas para garantir performance e consistência."
          />

          <Card
            icon={<Shield size={22} />}
            title="Boas Práticas"
            description="Versionamento, padrões de projeto e código limpo para manter qualidade e colaboração."
          />
        </motion.div>
      </div>
    </section>
  );
}

/* COMPONENTE CARD */
function Card({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
      <div className="mb-4 inline-flex rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 p-3 text-black">
        {icon}
      </div>

      <h3 className="mb-3 text-lg font-semibold">{title}</h3>

      <p className="text-sm text-slate-400">{description}</p>
    </div>
  );
}
