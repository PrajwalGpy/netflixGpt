import React from "react";
import netflix_Logo from "../assets/Netflix_Logo_RGB.png";
const Header = () => {
  return (
    <div className="absolute bg-gradient-to-bl from-black px-3 py-4 z-50">
      <img src={netflix_Logo} alt="Netflix_Logo" className="w-56" />
    </div>
  );
};

export default Header;
