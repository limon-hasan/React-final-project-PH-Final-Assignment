import Logo from "../assets/logo-text.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="md:hidden p-1 text-gray-700 hover:text-black transition cursor-pointer"
        >
          <FiMenu className="text-2xl" />
        </button>

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
            <a
              href="#home"
              className="hover-text-brand-gradient transition-all duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              className="hover-text-brand-gradient transition-all duration-200"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover-text-brand-gradient transition-all duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover-text-brand-gradient transition-all duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover-text-brand-gradient transition-all duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-2 md:gap-4">
          <button
            type="button"
            className="text-xs md:text-sm font-medium text-gray-600 hover:text-black transition-colors cursor-pointer px-2 py-1"
          >
            Sign In
          </button>

          <button
            type="button"
            className="bg-brand-gradient text-white text-xs md:text-sm font-medium px-3.5 md:px-5 py-1.5 md:py-2 rounded-full shadow-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;