const Funcionamiento = () => {
  const funcionamientos = [
    {
      titulo: "1. Te inscribes",
      descripcion: "Entras al torneo publico o con link de invitacion",
    },
    {
      titulo: "2. Problema revelado",
      descripcion: "Al inicio de la ronda, todos ven el mismo desafio.",
    },
    {
      titulo: "3. Codeas en tu lenguaje",
      descripcion: "Python, JavaScript, Go... el que domines",
    },
    {
      titulo: "4. Envias y subes",
      descripcion:
        "Pasas los tests privados, tu tiempo se registra. el mas rapido gana.",
    },
  ];
  return (
    <div>
      <ol>
        {funcionamientos.map((funcionamiento) => (
          <CardFuncionamiento {...funcionamiento} />
        ))}
      </ol>
    </div>
  );
};

export default Funcionamiento;

const CardFuncionamiento = ({ titulo, descripcion }) => {
  return (
    <div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
};
