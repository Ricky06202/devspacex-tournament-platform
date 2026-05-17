import { useState } from "react";

const Registrarse = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-16 animate-fade-in">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">
            <span className="gradient-text">Crear cuenta</span>
          </h1>
          <p className="text-text-secondary text-sm">
            Registrate para unirte a los torneos de programación.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-text-secondary mb-2"
            >
              Usuario
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="@usuario"
              className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors text-sm"
            />
          </div>

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

          <div>
            <label
              htmlFor="confirmar"
              className="block text-sm font-medium text-text-secondary mb-2"
            >
              Confirmar contraseña
            </label>
            <input
              id="confirmar"
              type="password"
              value={confirmar}
              onChange={(e) => setConfirmar(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent-blue hover:brightness-110 text-black font-bold py-2.5 rounded-lg text-sm transition-all duration-200 glow-blue cursor-pointer"
          >
            Crear cuenta
          </button>

          <p className="text-center text-text-muted text-sm">
            ¿Ya tenés cuenta?{" "}
            <a
              href="/iniciar-sesion"
              className="text-accent-blue hover:text-accent-blue/80 transition-colors"
            >
              Iniciá sesión
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Registrarse;
