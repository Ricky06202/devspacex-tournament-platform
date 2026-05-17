const CTA = () => {
  return (
    <section className="py-24">
      <div className="glass-card p-10 md:p-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-purple/5 pointer-events-none" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 leading-tight">
            ¿Listo para demostrar quién codea más rápido?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-lg mx-auto">
            Únete al próximo torneo y sube en el ranking global.
          </p>
          <a className="inline-block bg-accent-blue hover:brightness-110 text-black font-bold px-10 py-4 rounded-xl text-lg transition-all duration-200 glow-blue cursor-pointer">
            Inscribirme ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
