const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-black text-xs shadow-sm">
                DS
              </span>
              <span className="text-xl font-bold text-gray-950">
                Dev<span className="text-pink-600">Stack</span>
              </span>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex items-center gap-5 pt-2 text-xs font-semibold text-gray-600">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-950 transition"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-950 transition"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-950 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#home" className="hover:text-gray-900 transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="hover:text-gray-900 transition"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-900 transition">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#about" className="hover:text-gray-900 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-900 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-gray-900 transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#privacy" className="hover:text-gray-900 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-gray-900 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} DevStack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-600 transition">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-gray-600 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
