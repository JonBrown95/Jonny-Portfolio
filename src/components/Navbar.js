import React, { useState } from "react";
import blackLogo from "../images/blackLogo.svg";
import { ReactComponent as GithubIcon } from "../images/Github.svg";

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
      className={`top-0 z-50 bg-opacity-0 ${menuOpen ? "backdrop-blur-xl fixed inset-0" : ""}`}
    >
      <div className="w-full mx-auto px-4 fixed top-0 z-50">
        <div className="flex justify-between backdrop-blur-xl items-center h-12">
          <div onClick={handleMenuItemClick}>
            <img
              src={blackLogo}
              alt="Logo for Jonny's portfolio - initials JB in <> tags"
              className="h-16 w-16 cursor-pointer"
            />
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-900 focus:outline-none"
              onClick={handleMenuToggle}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
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
            <a href="#about" onClick={handleMenuItemClick} aria-label="About">
              About
            </a>
            <a href="#projects" onClick={handleMenuItemClick} aria-label="Projects">
              Projects
            </a>
            <a href="#contact" onClick={handleMenuItemClick} aria-label="Contact">
              Contact
            </a>
            <a
              href="https://github.com/JonBrown95"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6 hover:text-black" />
            </a>
          </div>
        </div>
        {menuOpen && (
          <div className="mt-16 md:hidden">
            <div
              onClick={handleMenuItemClick}
              className="hover:underline text-center text-6xl font-bold block py-4 text-gray-900 cursor-pointer"
            >
              About
            </div>
            <div
              onClick={handleMenuItemClick}
              className="hover:underline text-center text-6xl font-bold block py-4 text-gray-900 cursor-pointer"
            >
              Projects
            </div>
            <div
              onClick={handleMenuItemClick}
              className="hover:underline text-center text-6xl block font-bold py-4 text-gray-900 cursor-pointer"
            >
              Contact
            </div>
            <a
              href="https://github.com/JonBrown95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-12 h-12 text-6xl mx-auto block" />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
