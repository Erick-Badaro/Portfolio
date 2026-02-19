export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        
        {/* Logo */}
        <a
          href="#hero"
          className="relative text-lg font-semibold tracking-wide"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
            Portfolio
          </span>

          {/* Glow */}
          <span className="absolute -inset-1 -z-10 blur-lg opacity-40 bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500"></span>
        </a>

        {/* Nav */}
        <nav className="hidden items-center gap-10 text-sm md:flex">
          {["Sobre", "Skills", "Projetos", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-slate-300 transition duration-300 hover:text-white"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50 md:inline-flex"
        >
          Fale comigo
        </a>
      </div>
    </header>
  );
}

export default Header;
