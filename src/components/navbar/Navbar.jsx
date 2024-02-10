import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = window.innerHeight * 0.2;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`Navbar ${isScrolled ? "scrolled" : ""}`}>

      <Link
        to="/"
        className="logo"
        // style={{
        //   fontSize: "2rem",
        //   cursor: "pointer",
        // }}
      >
        <img src={logo} alt="" width={120}/>
        {/* FRINT */}
      </Link>

      <div className="hamburger" onClick={toggleNav}>
        <div className={`line ${isNavOpen ? "open" : ""}`}></div>
        <div className={`line ${isNavOpen ? "open" : ""}`}></div>
        <div className={`line ${isNavOpen ? "open" : ""}`}></div>
      </div>

      <ul className={`links ${isNavOpen ? "open" : ""}`}>
        <li className="link">
          <Link className="a" to="/">
            Home
          </Link>
        </li>
        <li className="link">
          <Link className="a" to="/">
            Internships
          </Link>
        </li>
        <li className="link">
          <Link className="a" to="/">
            About
          </Link>
        </li>
        <li className="link">
          <Link className="a" to="/">
            Contact
          </Link>
        </li>
      </ul>
      <div className="auth">
        <div className="link">
          <Link className="a" to="/auth">
            Log in
          </Link>
        </div>
        <div className="button">
          <Link className="a" to="/auth">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
