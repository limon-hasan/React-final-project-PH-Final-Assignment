import React from 'react';
import Logo from "../assets/logo-text.png"
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
        </div>
      </header>
    );
};

export default Navbar;