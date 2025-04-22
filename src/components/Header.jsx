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
    <div className={`w-full my-5 z-50 fixed top-0 left-0 bg-transparent`}>
      <div className="w-[90%] mx-auto ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={corn} alt="" className="h-10 w-10" />
            <div>
              <h1 className="text-white text-xl font-bold">WIARM</h1>
              <p className="text-white w-28 leading-3 text-[1.5vh]">
                Women In Agriculture Rural Movement
              </p>
            </div>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-7 h-7"
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
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col space-y-2 md:hidden z-40">
            {links.map((link) => (
              <Link
                key={link.title}
                to={link.url}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
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
