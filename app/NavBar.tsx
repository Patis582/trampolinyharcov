"use client";

import React, { useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-white shadow-lg rounded-2xl sticky top-0 z-100 sm:mx-16 lg:mx-32 transition-rounded duration-300 ease-in-out ${isMenuOpen ? "rounded-none" : "rounded-2xl"}`}>
      <div className="px-6 md:px-8 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/images/logo.jpg" alt={"logo"} width={"45"} height={"45"}/>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className="text-foreground hover:text-primary rounded-md font-hind text-base transition-colors"
              >
                Domů
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary rounded-md font-hind text-base transition-colors"
              >
                O nás
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary rounded-md font-hind text-base transition-colors"
              >
                Projekt
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary rounded-md font-hind text-base transition-colors"
              >
                Aktuality
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary rounded-md font-hind text-base transition-colors"
              >
                Galerie
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary rounded-md font-hind text-base transition-colors"
              >
                Možnosti podpory
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary font-hind text-base transition-colors"
              >
                Kontakt
              </a>
            </div>
          </div>

          {/* Mobile menu button s animovaným hamburgerem */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Otevřít hlavní menu</span>

              {/* Animovaný hamburger */}
              <div className="w-8 h-8 flex flex-col justify-center items-center">
                <span
                  className={`bg-current block transition-all duration-300 ease-out h-1 w-7 rounded-sm ${
                    isMenuOpen
                      ? "rotate-45 translate-y-1.5"
                      : "-translate-y-0.5"
                  }`}
                />
                <span
                  className={`bg-current block transition-all duration-300 ease-out h-1 w-7 rounded-sm my-0.5 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`bg-current block transition-all duration-300 ease-out h-1 w-7 rounded-sm ${
                    isMenuOpen
                      ? "-rotate-45 -translate-y-1.5"
                      : "translate-y-0.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu s animací výjezdu */}
      <div
        className={`absolute top-full left-0 right-0 lg:hidden overflow-hidden transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t-2 border-primary shadow-lg rounded-b-2xl ">
          <a
            href="#"
            className="text-foreground hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium transition-colors transform hover:translate-x-1"
          >
            Domů
          </a>
          <a
            href="#"
            className="text-foreground hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium transition-colors transform hover:translate-x-1"
          >
            O nás
          </a>
          <a
            href="#"
            className="text-foreground hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium transition-colors transform hover:translate-x-1"
          >
            Služby
          </a>
          <a
            href="#"
            className="text-foreground hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium transition-colors transform hover:translate-x-1"
          >
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
