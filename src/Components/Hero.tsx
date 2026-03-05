import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";


export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Software Engineer";

  // efeito de digitação
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05070d] text-white">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a1a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a1a_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* GRADIENT GLOW */}
      <div className="absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-500/30 via-sky-500/20 to-fuchsia-500/30 blur-[160px] animate-pulse" />

      {/* NOISE */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <p className="mb-6 text-sm tracking-[0.3em] text-cyan-400">
          OLÁ, EU SOU
        </p>

        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
            Erick Badaró
          </span>
        </h1>

        <h2 className="mb-6 text-xl text-slate-300 md:text-2xl min-h-[32px]">
          {text}
          <span className="animate-pulse">|</span>
        </h2>

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <img
            src="src/assets/erick-badaro2jpg.jpg"
            className="h-40 w-40 rounded-full border border-white/10 object-cover shadow-[0_0_60px_rgba(56,189,248,0.4)]"
          />
        </motion.div>

        <p className="mx-auto mb-10 max-w-2xl text-slate-200">
          Desenvolvo aplicações modernas com foco em performance, organização e boas práticas. 
          Acredito que tecnologia bem aplicada resolve problemas reais.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="#projetos"
            className="rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500 px-6 py-3 font-semibold text-black shadow-[0_10px_40px_rgba(56,189,248,0.5)] transition duration-300 hover:scale-105"
          >
            Ver Projetos
          </a>

          <a
            href="#contato"
            className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition duration-300 hover:border-slate-400 hover:text-white"
          >
            Contato
          </a>

          <a
            href="./public/erick-badaro-software-engineer.pdf"
            download
            className="rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500 px-6 py-3 font-semibold text-black shadow-[0_10px_40px_rgba(56,189,248,0.5)] transition duration-300 hover:scale-105 flex items-center gap-2 animate-pulse"
          >
            <ArrowDown className="w-4 h-4" />
            Baixar CV
          </a>

        </div>

        {/* ICONS: GitHub / LinkedIn / Email */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://github.com/Erick-Badaro"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-200 hover:bg-cyan-400/10 hover:text-cyan-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.44-2.71 5.42-5.29 5.7.42.36.8 1.07.8 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12 24 5.65 18.35.5 12 .5z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/erick-badaro/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-200 hover:bg-cyan-400/10 hover:text-cyan-400"
          >
            {/* Seta animada ("Clique aqui") - Flutua acima do ícone */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce text-cyan-400/70 transition-colors duration-200 group-hover:text-cyan-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </div>
            {/* LinkedIn icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.48V9h3.41v1.56h.05c.48-.91 1.66-1.87 3.42-1.87 3.66 0 4.34 2.41 4.34 5.54v6.22zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.57V9h3.54v11.45z" />
            </svg>
          </a>

          <a
            href="mailto:zaterick10@gmail.com"
            aria-label="Email"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-200 hover:bg-cyan-400/10 hover:text-cyan-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
