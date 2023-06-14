import React from "react";
import "./nav.css";
import { BsSearch } from "react-icons/bs";
import navLogo from "../../Assets/Images/navLogo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-searchbar">
        <BsSearch />
        <input type="text" placeholder="Search 8000+ tutorials" />
      </div>
      <Link to="/">
        <img src={navLogo} alt="Free Code Camp" className="nav-logo" />
      </Link>
      <div className="nav-btns">
        <Link to="/courses" className="nav-secondary-cta">
          Courses
        </Link>
        <Link to="/login" className="nav-primary-cta">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Nav;
