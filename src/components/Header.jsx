import React from "react";
import { Link } from "react-router-dom";
import corn from '../assets/corn_img.png'

const Header = () => {
  return (
    <div className="w-full py-4 mb-5">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"}>
          <div className="flex flex-col items-center gap-1">
            <img src={corn} alt="" className="w-7 h-7 text-[#46973B]" /> 
            <h1 className="font-semibold text-xl">WiARM</h1>
          </div>
        </Link>

        {/* Links */}
        <div>
          <ul className="flex gap-4">
            {links.map((link) => (
            <li key={link.url} className="text-xl font-medium">
              <Link to={link.url}>{link.title}</Link>
            </li>
            ))}
          </ul>
        </div>

        {/* Contact us */}
        <div className="bg-[#46973B] flex items-center rounded-3xl py-3 px-5">
          <p className="text-[#fefae0] text-normal font-normal">Get in touch</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
];
