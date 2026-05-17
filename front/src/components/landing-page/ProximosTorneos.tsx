const ProximosTorneos = () => {
  const torneos = [
    {
      titulo: "Ronda Inaugural",
      fecha: "20 de Mayo, 19:00hs",
      duracion: "30 min",
      lenguajes: ["Python", "JS", "Go"],
      cupos: 12,
      cuposMax: 20,
    },
    {
      titulo: "Viernes de Algoritmos",
      fecha: "24 de Mayo, 21:00hs",
      duracion: "45 min",
      lenguajes: ["Python", "JS"],
      cupos: 8,
      cuposMax: 15,
    },
  ];

  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="gradient-text">Próximos Torneos</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {torneos.map((t) => (
          <Card key={t.titulo} {...t} />
        ))}
      </div>
    </section>
  );
};

const Card = ({
  titulo,
  fecha,
  duracion,
  lenguajes,
  cupos,
  cuposMax,
}: {
  titulo: string;
  fecha: string;
  duracion: string;
  lenguajes: string[];
  cupos: number;
  cuposMax: number;
}) => {
  const porcentaje = Math.round((cupos / cuposMax) * 100);

  return (
    <div className="glass-card p-6 group">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-text-primary">{titulo}</h3>
        <span className="text-xs font-semibold text-accent-green bg-accent-green/10 px-3 py-1 rounded-full">
          Próximo
        </span>
      </div>
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-text-secondary text-sm">
          <span>📅</span>
          <span>{fecha}</span>
        </div>
        <div className="flex items-center gap-2 text-text-secondary text-sm">
          <span>⏱️</span>
          <span>{duracion}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {lenguajes.map((leng) => (
            <span
              key={leng}
              className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded-md"
            >
              {leng}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-muted">Cupos</span>
          <span className="text-text-secondary font-medium">
            {cupos}/{cuposMax}
          </span>
        </div>
        <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent-green rounded-full transition-all"
            style={{ width: `${porcentaje}%` }}
          />
        </div>
      </div>
      <button className="w-full mt-5 bg-accent-blue hover:brightness-110 text-black font-semibold py-2.5 rounded-lg text-sm transition-all duration-200 glow-blue cursor-pointer">
        Inscribirme
      </button>
    </div>
  );
};

export default ProximosTorneos;
