import { useState } from "react";

const LENGUAJES = ["Python", "JavaScript", "TypeScript", "Go", "Rust", "Java", "C++", "Brainfuck"];

const CrearTorneo = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [duracion, setDuracion] = useState("30");
  const [cupoMax, setCupoMax] = useState("20");
  const [lenguajes, setLenguajes] = useState<string[]>([]);
  const [enviado, setEnviado] = useState(false);

  const toggleLenguaje = (leng: string) => {
    setLenguajes((prev) =>
      prev.includes(leng) ? prev.filter((l) => l !== leng) : [...prev, leng]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  };

  const valido =
    nombre.trim() &&
    descripcion.trim() &&
    fecha &&
    hora &&
    duracion &&
    cupoMax &&
    lenguajes.length > 0;

  return (
    <section className="py-16 animate-fade-in max-w-xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">
          <span className="gradient-text">Crear Torneo</span>
        </h1>
        <p className="text-text-secondary text-lg">
          Organiza un torneo de programación para tu club o comunidad.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
        <Campo label="Nombre del torneo" htmlFor="nombre">
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Ronda Inaugural"
            className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors text-sm"
          />
        </Campo>

        <Campo label="Descripción" htmlFor="descripcion">
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Describe el torneo y qué esperar..."
            rows={3}
            className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors text-sm resize-none"
          />
        </Campo>

        <div className="grid grid-cols-2 gap-4">
          <Campo label="Fecha" htmlFor="fecha">
            <input
              id="fecha"
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-accent-blue transition-colors text-sm [color-scheme:dark]"
            />
          </Campo>
          <Campo label="Hora" htmlFor="hora">
            <input
              id="hora"
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-accent-blue transition-colors text-sm [color-scheme:dark]"
            />
          </Campo>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Campo label="Duración (min)" htmlFor="duracion">
            <select
              id="duracion"
              value={duracion}
              onChange={(e) => setDuracion(e.target.value)}
              className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-accent-blue transition-colors text-sm"
            >
              <option value="10">10 min</option>
              <option value="15">15 min</option>
              <option value="20">20 min</option>
              <option value="30">30 min</option>
              <option value="45">45 min</option>
              <option value="60">60 min</option>
              <option value="90">90 min</option>
            </select>
          </Campo>
          <Campo label="Cupo máximo" htmlFor="cupo">
            <select
              id="cupo"
              value={cupoMax}
              onChange={(e) => setCupoMax(e.target.value)}
              className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-accent-blue transition-colors text-sm"
            >
              {[5, 10, 15, 20, 30, 50, 100].map((n) => (
                <option key={n} value={n}>
                  {n} participantes
                </option>
              ))}
            </select>
          </Campo>
        </div>

        <Campo label="Lenguajes permitidos">
          <div className="flex flex-wrap gap-2">
            {LENGUAJES.map((leng) => {
              const activo = lenguajes.includes(leng);
              return (
                <button
                  key={leng}
                  type="button"
                  onClick={() => toggleLenguaje(leng)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                    activo
                      ? "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30"
                      : "bg-bg-dark text-text-muted border border-border hover:border-text-muted"
                  }`}
                >
                  {leng}
                </button>
              );
            })}
          </div>
        </Campo>

        <button
          type="submit"
          disabled={!valido}
          className={`w-full font-bold py-3 rounded-xl text-sm transition-all duration-200 cursor-pointer ${
            valido
              ? "bg-accent-blue hover:brightness-110 text-black glow-blue"
              : "bg-text-muted/20 text-text-muted cursor-not-allowed"
          }`}
        >
          {enviado ? "¡Torneo creado!" : "Crear torneo"}
        </button>

        {!valido && (
          <p className="text-text-muted text-xs text-center">
            * Completá todos los campos y seleccioná al menos un lenguaje
          </p>
        )}
      </form>
    </section>
  );
};

const Campo = ({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
}) => (
  <div>
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-text-secondary mb-2"
    >
      {label}
    </label>
    {children}
  </div>
);

export default CrearTorneo;
