import React from "react";
import { Link } from "react-router-dom";
import corn from '../assets/corn_img.png'

const Header = () => {
  return (
    <div className="w-full py-2">
      <div className="mx-auto border">
        <div className="flex items-center gap-2">
          <img src={corn} alt="" className="h-10 w-10" />
          <div>
            <h1 className="text-xl font-semibold">WIARM</h1>
            <p className="w-28 font-light leading-3 text-[1.5vh]">Women In Agriculture Rural Movement </p>
          </div>
        </div>
        {/* Mobile Menu */}
        <div>

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
