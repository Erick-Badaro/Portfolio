export default function Footer() {
    return (
        <footer className="bg-[#05070d]">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                <p className="text-center md:text-left">
                    Feito por{" "}
                    <span className="text-cyan-400 font-medium">Erick Badaró</span>
                </p>

                <p className="mt-4 md:mt-0">
                    © {new Date().getFullYear()} Todos os direitos reservados.
                </p>
            </div>
        </footer>

    )
}