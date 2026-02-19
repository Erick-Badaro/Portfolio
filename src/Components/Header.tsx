export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        
        <a
          href="#hero"
          className="relative text-2xl font-semibold tracking-wide"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
            Portfolio
          </span>

          <span className="absolute -inset-1 -z-10 bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500 opacity-20 blur-md" />
        </a>

        <nav className="hidden items-center gap-10 text-base md:flex">
          <a href="#sobre" className="text-slate-400 transition hover:text-white">
            Sobre
          </a>

          <a href="#skills" className="text-slate-400 transition hover:text-white">
            Skills
          </a>

          <a href="#projetos" className="text-slate-400 transition hover:text-white">
            Projetos
          </a>

          <a
            href="#contato"
            className="rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-2 font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}


export default Header;
