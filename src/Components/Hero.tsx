import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05070d] text-white">
      
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
          Desenvolvendo soluções escaláveis, performáticas e centradas no usuário.
          Transformando ideias em produtos digitais reais.
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
        </div>
      </motion.div>
    </section>
  );
}
