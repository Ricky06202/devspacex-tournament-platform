const Caracteristicas = () => {
  const caracteristicas = [
    {
      titulo: "Tiempo Real",
      descripcion:
        "Todos los participantes ven el mismo problema al mismo tiempo. El reloj corre para todos.",
    },
    {
      titulo: "Tests Automaticos",
      descripcion:
        "Escribes en Python, JavaScript o Go. Los mismos tests validan tu solucion.",
    },
    {
      titulo: "Gana el Mas Rapdido",
      descripcion:
        "No importa el lenguaje. El primero en resolver correctamente, gana la ronda.",
    },
    {
      titulo: "Ranking Elo",
      descripcion:
        "Como en ajedrez. Cada torneo afecta tu puntuacion global. Sube al vencer a mejores rivales.",
    },
  ];
  return (
    <div>
      <ul>
        {caracteristicas.map((caracteristica) => (
          <CardCaracteristicas {...caracteristica} />
        ))}
      </ul>
    </div>
  );
};

export default Caracteristicas;

const CardCaracteristicas = ({ titulo, descripcion }) => {
  return (
    <li>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </li>
  );
};
