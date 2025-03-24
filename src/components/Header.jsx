import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full py-4">
      <div className="w-[70%] mx-auto flex flex-row justify-between items-center">
        <div className="flex items-center">
          <Link to={"/"}>
            <h1 className="font-semibold text-2xl">WiARM</h1>
          </Link>
          <p className="px-2 text-xl">|</p>
          <ul className="flex gap-4">
            {links.map((link) => (
              <li key={link.url} className="text-xl">
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#283618] flex items-center p-3">
            <p className="text-[#fefae0] text-lg font-normal">Contact Us</p>
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
