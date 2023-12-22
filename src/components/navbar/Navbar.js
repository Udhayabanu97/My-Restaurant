import React, { useState } from "react";
import "./Navbar.css";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  return (
    <>
      <nav>
        <h5 className="title">My Restaurant</h5>
        <ul
          className={isResponsive ? "nav-toggler" : "link-items"}
          onClick={() => setIsResponsive(false)}
        >
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/menu" className="menu">
            Menu
          </Link>
          <Link to="/about" className="about">
            About
          </Link>
          <Link to="/contact" className="contact">
            Contact
          </Link>
        </ul>

        <button className="icon" onClick={() => setIsResponsive(!isResponsive)}>
          {isResponsive ? <ImCross /> : <FaBars />}
        </button>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
