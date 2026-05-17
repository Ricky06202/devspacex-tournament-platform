const Footer = () => {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold gradient-text">DevSpaceX</span>
          <span className="text-text-muted text-sm">Coding Tournaments</span>
        </div>
        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} DevSpaceX. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
