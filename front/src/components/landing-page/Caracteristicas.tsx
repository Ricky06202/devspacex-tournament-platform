const Caracteristicas = () => {
  const items = [
    {
      icon: "⚡",
      titulo: "Tiempo Real",
      descripcion:
        "Todos ven el mismo problema al mismo tiempo. El reloj corre para todos.",
    },
    {
      icon: "🧪",
      titulo: "Tests Automáticos",
      descripcion:
        "Python, JavaScript o Go. Los mismos tests validan tu solución.",
    },
    {
      icon: "🏆",
      titulo: "Gana el Más Rápido",
      descripcion:
        "No importa el lenguaje. El primero en resolver correctamente gana la ronda.",
    },
    {
      icon: "📊",
      titulo: "Ranking Elo",
      descripcion:
        "Como en ajedrez. Cada torneo afecta tu puntuación global.",
    },
  ];

  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="gradient-text">Características</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <Card key={item.titulo} {...item} />
        ))}
      </div>
    </section>
  );
};

const Card = ({
  icon,
  titulo,
  descripcion,
}: {
  icon: string;
  titulo: string;
  descripcion: string;
}) => {
  return (
    <div className="glass-card p-6 group">
      <span className="text-3xl block mb-4">{icon}</span>
      <h3 className="text-xl font-bold text-text-primary mb-2">{titulo}</h3>
      <p className="text-text-secondary leading-relaxed">{descripcion}</p>
    </div>
  );
};

export default Caracteristicas;
