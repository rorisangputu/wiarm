import React from "react";
import { Link } from "react-router-dom";
import corn from '../assets/corn_img.png'

const Header = () => {
  return (
    <div className="w-full py-2">
      <div className="">

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
