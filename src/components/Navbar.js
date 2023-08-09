import React, { useState } from "react";
import blackLogo from "../images/blackLogo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`top-0 z-50 bg-opacity-0 ${
        menuOpen ? "backdrop-blur-xl fixed inset-0" : ""
      }`}
    >
      <div className="w-full mx-auto px-4 fixed top-0 z-50">
        <div className="flex justify-between backdrop-blur-xl items-center h-12">
          <img
            src={blackLogo}
            alt="Logo for Jonny's portfolio - initials JB in <> tags"
            className="h-16 w-16"
          />
          <div className="md:hidden">
            <button
              className="text-gray-900 focus:outline-none"
              onClick={handleMenuToggle}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-4 font-bold text-gray-900">
            <a href="#about" onClick={handleMenuItemClick}>
              About
            </a>
            <a href="#projects" onClick={handleMenuItemClick}>
              Projects
            </a>
            <a href="#contact" onClick={handleMenuItemClick}>
              Contact
            </a>
          </div>
        </div>
        {menuOpen && (
          <div className="mt-2 md:hidden">
            <a
              href="#about"
              className="hover:underline font-bold block py-2 text-gray-900"
              onClick={handleMenuItemClick}
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:underline block py-2 text-gray-900"
              onClick={handleMenuItemClick}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:underline block py-2 text-gray-900"
              onClick={handleMenuItemClick}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
