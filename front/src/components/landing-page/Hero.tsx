const Hero = (props: {}) => {
  return (
    <div className="h-[50rem] flex flex-col gap-16 justify-center">
      <h1 className="text-8xl text-center">DevSpaceX Coding Tournaments</h1>
      <p className="text-4xl text-center">
        Torneos para tu club. Problemas en vivo, multiples lenguajes, gana el
        mas rapido.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 text-2xl">
        <a className="bg-accent-blue p-4 rounded-2xl text-black font-bold">
          Unirme al proximo torneo
        </a>
        <a className="border-2 border-accent-blue p-4 rounded-2xl font-bold">
          Ver ranking
        </a>
      </div>
    </div>
  );
};

export default Hero;
