const Header = (props: {}) => {
  return (
    <header className="flex h-30 items-center ">
      <h1 className="text-4xl">DevSpaceX</h1>
      <nav className="text-lg">
        <a href="">Home</a>
        <a href="">Torneos</a>
      </nav>
    </header>
  );
};

export default Header;
