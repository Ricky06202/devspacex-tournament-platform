const Ranking = () => {
  const top = [
    { user: "@vibecoder", elo: 1850, medal: "🥇" },
    { user: "@nightmare", elo: 1720, medal: "🥈" },
    { user: "@zer0cool", elo: 1680, medal: "🥉" },
  ];

  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="gradient-text">Ranking del Mes</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-text-primary mb-6">
            Top 3
          </h3>
          <div className="space-y-4">
            {top.map((item, i) => (
              <div
                key={item.user}
                className="flex items-center justify-between py-3 px-4 rounded-lg bg-bg-elevated/50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.medal}</span>
                  <span className="font-mono text-text-primary font-semibold">
                    {item.user}
                  </span>
                </div>
                <span className="text-accent-green font-bold font-mono">
                  {item.elo}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-text-primary mb-6">
            Último Torneo
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-bg-elevated/50">
              <span className="text-text-secondary">Participantes</span>
              <span className="text-text-primary font-bold">12</span>
            </div>
            <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-bg-elevated/50">
              <span className="text-text-secondary">Solución ganadora</span>
              <span className="text-accent-green font-bold font-mono">
                3m 24s
              </span>
            </div>
            <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-bg-elevated/50">
              <span className="text-text-secondary">Ganador</span>
              <span className="text-text-primary font-bold font-mono">
                @vibecoder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ranking;
