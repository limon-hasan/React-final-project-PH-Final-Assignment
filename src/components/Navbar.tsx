import Logo from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 hover:opacity-90 transition"
        >
          <img
            src={Logo}
            alt="Dev Stack Logo"
            className="h-7 w-auto object-contain"
          />
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <li>
            <a href="#home" className="hover:text-black transition-colors">
              Home
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              className="hover:text-black transition-colors"
            >
              Technologies
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-black transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-black transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-black transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
