import React from "react";
import "./Navbar.css"
import logo from "../../assets/Group 9 (1).svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-container">
        <p className="company-name">GILLY'S</p>
        <p className="sub-name">Koramangala</p>
      </div>
      <div className="right-container">
        <img src={logo} alt="" className="logo" />
      </div>
    </div>
  );
};

export default Navbar;
