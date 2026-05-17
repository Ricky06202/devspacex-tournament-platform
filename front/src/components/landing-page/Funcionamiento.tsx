const Funcionamiento = () => {
  const pasos = [
    {
      numero: "01",
      titulo: "Te inscribes",
      descripcion: "Entras al torneo público o con link de invitación",
    },
    {
      numero: "02",
      titulo: "Problema revelado",
      descripcion: "Al iniciar la ronda, todos ven el mismo desafío",
    },
    {
      numero: "03",
      titulo: "Codeas",
      descripcion: "Python, JavaScript, Go... el que domines",
    },
    {
      numero: "04",
      titulo: "Envías y subes",
      descripcion: "Pasas los tests privados. El más rápido gana",
    },
  ];

  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="gradient-text">¿Cómo funciona?</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pasos.map((paso) => (
          <Card key={paso.numero} {...paso} />
        ))}
      </div>
    </section>
  );
};

const Card = ({
  numero,
  titulo,
  descripcion,
}: {
  numero: string;
  titulo: string;
  descripcion: string;
}) => {
  return (
    <div className="glass-card p-6 text-center group">
      <span className="text-4xl font-black gradient-text block mb-3">
        {numero}
      </span>
      <h3 className="text-lg font-bold text-text-primary mb-2">{titulo}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {descripcion}
      </p>
    </div>
  );
};

export default Funcionamiento;
