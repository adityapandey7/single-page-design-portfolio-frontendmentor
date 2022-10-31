import React from 'react';
import logo from "../assets/logo.svg";

function NavBar() {
  return (
    <div className="nav style">
        <img src={logo} alt="" />
        <button>Free Consultation</button>
    </div>
  );
}

export default NavBar