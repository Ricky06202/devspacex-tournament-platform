import { useState } from "react";

type Status = "proximo" | "en_vivo" | "finalizado";

interface Torneo {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  duracion: string;
  lenguajes: string[];
  participantes: number;
  cupoMax: number;
  status: Status;
  organizador: string;
}

const MOCK_TORNEOS: Torneo[] = [
  {
    id: 1,
    titulo: "Ronda Inaugural",
    descripcion: "Primer torneo oficial de DevSpaceX. Demuestra de qué estás hecho.",
    fecha: "20 de Mayo, 19:00hs",
    duracion: "30 min",
    lenguajes: ["Python", "JavaScript", "Go"],
    participantes: 12,
    cupoMax: 20,
    status: "proximo",
    organizador: "@admin",
  },
  {
    id: 2,
    titulo: "Viernes de Algoritmos",
    descripcion: "Algoritmos clásicos a contrarreloj. ¿Quién los resuelve primero?",
    fecha: "24 de Mayo, 21:00hs",
    duracion: "45 min",
    lenguajes: ["Python", "JavaScript"],
    participantes: 8,
    cupoMax: 15,
    status: "proximo",
    organizador: "@admin",
  },
  {
    id: 3,
    titulo: "Speedrun: Strings",
    descripcion: "Torneo exprés de manipulación de strings. 3 rondas, 10 minutos cada una.",
    fecha: "17 de Mayo, 18:00hs",
    duracion: "20 min",
    lenguajes: ["Python", "Go", "JavaScript", "Rust"],
    participantes: 14,
    cupoMax: 14,
    status: "en_vivo",
    organizador: "@vibecoder",
  },
  {
    id: 4,
    titulo: "Desafío de Brainfuck",
    descripcion: "Sí, leíste bien. Brainfuck. Para los mas valientes.",
    fecha: "10 de Mayo, 20:00hs",
    duracion: "60 min",
    lenguajes: ["Brainfuck"],
    participantes: 3,
    cupoMax: 10,
    status: "finalizado",
    organizador: "@nightmare",
  },
  {
    id: 5,
    titulo: "Batalla de DP",
    descripcion: "Dynamic programming a morir. Trae café.",
    fecha: "3 de Mayo, 19:00hs",
    duracion: "90 min",
    lenguajes: ["Python", "JavaScript", "Go", "Java"],
    participantes: 22,
    cupoMax: 30,
    status: "finalizado",
    organizador: "@zer0cool",
  },
  {
    id: 6,
    titulo: "Hackathon Express",
    descripcion: "24 horas para construir una API completa. Individual o en equipo.",
    fecha: "1 de Junio, 12:00hs",
    duracion: "24 hs",
    lenguajes: ["Python", "JavaScript", "Go", "TypeScript"],
    participantes: 5,
    cupoMax: 50,
    status: "proximo",
    organizador: "@devspacex",
  },
];

const FILTROS: { key: Status | "todos"; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "en_vivo", label: "En vivo" },
  { key: "proximo", label: "Próximos" },
  { key: "finalizado", label: "Finalizados" },
];

const STATUS_CONFIG = {
  en_vivo: { label: "En vivo", clase: "bg-accent-green/15 text-accent-green" },
  proximo: { label: "Próximo", clase: "bg-accent-blue/15 text-accent-blue" },
  finalizado: {
    label: "Finalizado",
    clase: "bg-text-muted/15 text-text-muted",
  },
} as const;

const ListaTorneos = () => {
  const [filtro, setFiltro] = useState<Status | "todos">("todos");

  const torneosFiltrados =
    filtro === "todos"
      ? MOCK_TORNEOS
      : MOCK_TORNEOS.filter((t) => t.status === filtro);

  return (
    <section className="py-16 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <h1 className="text-4xl font-bold">
            <span className="gradient-text">Torneos</span>
          </h1>
          <p className="text-text-secondary text-lg mt-1">
            Explora los torneos disponibles y demuestra tu talento.
          </p>
        </div>
        <a
          href="/torneos/crear"
          className="bg-accent-blue hover:brightness-110 text-black font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 glow-blue text-center whitespace-nowrap cursor-pointer"
        >
          + Crear torneo
        </a>
      </div>

      <div className="flex gap-2 mb-10 border-b border-border pb-4 overflow-x-auto">
        {FILTROS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFiltro(f.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
              filtro === f.key
                ? "bg-accent-blue/15 text-accent-blue"
                : "text-text-muted hover:text-text-secondary hover:bg-bg-card"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {torneosFiltrados.length === 0 && (
          <div className="col-span-full glass-card p-12 text-center">
            <span className="text-5xl block mb-4">🔍</span>
            <p className="text-text-secondary">
              No hay torneos con este filtro.
            </p>
          </div>
        )}
        {torneosFiltrados.map((torneo) => (
          <CardTorneo key={torneo.id} torneo={torneo} />
        ))}
      </div>
    </section>
  );
};

const CardTorneo = ({ torneo }: { torneo: Torneo }) => {
  const cfg = STATUS_CONFIG[torneo.status];
  const pct = Math.round((torneo.participantes / torneo.cupoMax) * 100);
  const lleno = torneo.participantes >= torneo.cupoMax;

  return (
    <div className="glass-card p-6 group">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-text-primary">{torneo.titulo}</h3>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-3 ${cfg.clase}`}
        >
          {torneo.status === "en_vivo" && (
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse mr-1.5 align-middle" />
          )}
          {cfg.label}
        </span>
      </div>
      <p className="text-text-secondary text-sm mb-4 leading-relaxed">
        {torneo.descripcion}
      </p>
      <div className="space-y-2.5 mb-4 text-sm">
        <div className="flex items-center gap-2 text-text-secondary">
          <span>📅</span>
          <span>{torneo.fecha}</span>
          <span className="text-text-muted">·</span>
          <span>⏱️ {torneo.duracion}</span>
        </div>
        <div className="flex items-center gap-2 text-text-muted text-xs">
          <span>👤</span>
          <span>Organizado por {torneo.organizador}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {torneo.lenguajes.map((leng) => (
            <span
              key={leng}
              className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded-md"
            >
              {leng}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-1.5 mb-5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-muted">Participantes</span>
          <span className="text-text-secondary font-medium">
            {torneo.participantes}/{torneo.cupoMax}
          </span>
        </div>
        <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${
              lleno ? "bg-accent-purple" : "bg-accent-green"
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
      {torneo.status === "finalizado" ? (
        <button className="w-full border border-border hover:border-text-muted text-text-secondary hover:text-text-primary font-medium py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer">
          Ver resultados
        </button>
      ) : lleno ? (
        <button className="w-full bg-text-muted/20 text-text-muted font-medium py-2.5 rounded-lg text-sm cursor-not-allowed">
          Cupos llenos
        </button>
      ) : (
        <button className="w-full bg-accent-blue hover:brightness-110 text-black font-semibold py-2.5 rounded-lg text-sm transition-all duration-200 glow-blue cursor-pointer">
          Inscribirme
        </button>
      )}
    </div>
  );
};

export default ListaTorneos;
