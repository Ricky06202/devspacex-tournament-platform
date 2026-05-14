const ProximosTorneos = () => {
  const torneos = [
    {
      titulo: "Ronda Inaugural",
      fecha: "20 de Mayo, 19:00hs",
      duracion: "30 minutos",
      lenguajes: "python, JS, Go",
      cupos: "12/20 cupos",
    },
    {
      titulo: "Viernes de Algoritmos",
      fecha: "24 de Mayo, 21:00hs",
      duracion: "45 minutos",
      lenguajes: "python, JS",
      cupos: "8/15 cupos",
    },
  ];
  return (
    <div>
      {torneos.map((torneo) => (
        <CardTorneo {...torneo} />
      ))}
    </div>
  );
};

export default ProximosTorneos;

const CardTorneo = ({ titulo, fecha, duracion, lenguajes, cupos }) => {
  return (
    <div>
      <h3>{titulo}</h3>
      <span>{fecha}</span>
      <span>{duracion}</span>
      <span>{lenguajes}</span>
      <span>{cupos}</span>
    </div>
  );
};
