import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen font-sans">
      <section className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-20 py-12 sm:py-24">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 tracking-tight">
          STMPD RCRDS FANPAGE
        </h1>
        <p className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl">
          Explore o universo sonoro da gravadora mais inovadora da música
          eletrônica
        </p>
        <Link
          href="/latest"
          className="bg-foreground text-background hover:bg-foreground/90 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-none transition duration-300 uppercase tracking-wider"
        >
          Descubra o Novo
        </Link>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6 md:px-20 py-12 sm:py-16">
        <div className="bg-background border border-foreground/10 p-6 sm:p-8 hover:bg-foreground/5 transition duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 uppercase">
            Notícias
          </h2>
          <p className="text-foreground/70">
            As últimas atualizações da STMPD RCRDS e seus artistas.
          </p>
        </div>
        <div className="bg-background border border-foreground/10 p-6 sm:p-8 hover:bg-foreground/5 transition duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 uppercase">
            Playlist
          </h2>
          <p className="text-foreground/70">
            Ouça as faixas mais recentes lançadas pela gravadora.
          </p>
        </div>
        <div className="bg-background border border-foreground/10 p-6 sm:p-8 hover:bg-foreground/5 transition duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 uppercase">
            Comunidade
          </h2>
          <p className="text-foreground/70">
            Conecte-se com outros fãs e compartilhe sua paixão.
          </p>
        </div>
      </section>

      <footer className="border-t border-foreground/10 text-center py-6 sm:py-8 px-4 sm:px-6">
        <p className="text-sm text-foreground/50">
          &copy; 2024 Fanpage STMPD RCRDS. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
