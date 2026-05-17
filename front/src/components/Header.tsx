import { useState } from "react";

const Header = () => {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg-dark/80 backdrop-blur-lg border-b border-border">
      `{" "}
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="/"
          className="text-2xl font-extrabold gradient-text tracking-tight"
        >
          DevSpaceX
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-4">
          <a
            href="/"
            className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium"
          >
            Inicio
          </a>
          <a
            href="/torneos"
            className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium"
          >
            Torneos
          </a>
          <div className="h-6 w-px bg-border mx-1" />
          <a
            href="/iniciar-sesion"
            className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium"
          >
            Iniciar sesión
          </a>
          <a
            href="/registrarse"
            className="bg-accent-blue hover:brightness-110 text-black font-bold px-5 py-2 rounded-lg transition-all duration-200 text-sm glow-blue"
          >
            Empezar ahora
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setAbierto(!abierto)}
          className="sm:hidden flex flex-col gap-1 p-2 cursor-pointer"
          aria-label="Menú"
        >
          <span
            className={`block w-5 h-0.5 bg-text-secondary rounded transition-all duration-200 ${
              abierto ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-text-secondary rounded transition-all duration-200 ${
              abierto ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-text-secondary rounded transition-all duration-200 ${
              abierto ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>
      {/* Mobile menu overlay */}
      {abierto && (
        <div className="sm:hidden bg-bg-dark/95 backdrop-blur-lg border-b border-border animate-fade-in">
          <nav className="text-center max-w-4xl mx-auto px-4 py-6 flex flex-col gap-4">
            <a
              href="/"
              onClick={() => setAbierto(false)}
              className="text-text-secondary hover:text-text-primary transition-colors text-lg font-medium"
            >
              Inicio
            </a>
            <a
              href="/torneos"
              onClick={() => setAbierto(false)}
              className="text-text-secondary hover:text-text-primary transition-colors text-lg font-medium"
            >
              Torneos
            </a>
            <hr className="border-border" />
            <a
              href="/iniciar-sesion"
              onClick={() => setAbierto(false)}
              className="text-text-secondary hover:text-text-primary transition-colors text-lg font-medium"
            >
              Iniciar sesión
            </a>
            <a
              href="/registrarse"
              onClick={() => setAbierto(false)}
              className="bg-accent-blue hover:brightness-110 text-black font-bold px-5 py-3 rounded-xl text-center text-base transition-all duration-200 glow-blue"
            >
              Empezar ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
