const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-8 text-center animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight">
          <span className="gradient-text">DevSpaceX</span>
          <br />
          <span className="text-text-primary">Coding Tournaments</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Torneos de programación en vivo para tu club.
          Múltiples lenguajes, un ganador.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
        <a className="bg-accent-blue hover:brightness-110 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 glow-blue cursor-pointer">
          Unirme al próximo torneo
        </a>
        <a className="border-2 border-border hover:border-accent-blue text-text-secondary hover:text-accent-blue px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 cursor-pointer">
          Ver ranking
        </a>
      </div>
    </section>
  );
};

export default Hero;
