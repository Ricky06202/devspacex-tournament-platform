import { useState } from "react";

const IniciarSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-16 animate-fade-in">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">
            <span className="gradient-text">Iniciar sesión</span>
          </h1>
          <p className="text-text-secondary text-sm">
            Ingresá a tu cuenta para participar en los torneos.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text-secondary mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-text-secondary mb-2"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent-blue hover:brightness-110 text-black font-bold py-2.5 rounded-lg text-sm transition-all duration-200 glow-blue cursor-pointer"
          >
            Entrar
          </button>

          <p className="text-center text-text-muted text-sm">
            ¿No tenés cuenta?{" "}
            <a
              href="/registrarse"
              className="text-accent-blue hover:text-accent-blue/80 transition-colors"
            >
              Registrate
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default IniciarSesion;
