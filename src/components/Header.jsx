import React, { useState } from "react";
import { Link } from "react-router-dom";
import corn from "../assets/corn_img.png";

const links = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Projects", url: "/projects" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full py-2 z-50 relative">
      <div className="mx-auto ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={corn} alt="" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold">WIARM</h1>
              <p className="w-28 leading-3 text-[1.5vh]">
                Women In Agriculture Rural Movement
              </p>
            </div>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="mt-2 flex flex-col space-y-2 md:hidden">
            {links.map((link) => (
              <Link
                key={link.title}
                to={link.url}
                onClick={() => setIsOpen(false)}
                className="block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded"
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
