import React from "react";
import navLogo from "../../Assets/Images/navLogo.png";

const NavMin = () => {
  return (
    <div className="navMin">
      <a href="/">
        <img src={navLogo} alt="Free Code Camp" className="nav-logo" />
      </a>
    </div>
  );
};

export default NavMin;
