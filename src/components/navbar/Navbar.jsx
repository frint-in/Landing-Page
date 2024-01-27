import React, { useState, useEffect } from "react";
import "./navbar.scss";
// import logo from "/img/logo.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = window.innerHeight * 1;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`Navbar ${isScrolled ? "scrolled" : ""}`}>
      <a
        href="#"
        className="link"
        style={{
          fontSize: "2rem",
          cursor: "pointer",
        }}
      >
        {/* <img src={logo} alt="" /> */}
        FRINT
      </a>

      <div className="hamburger" onClick={toggleNav}>
        <div className={`line ${isNavOpen ? "open" : ""}`}></div>
        <div className={`line ${isNavOpen ? "open" : ""}`}></div>
        <div className={`line ${isNavOpen ? "open" : ""}`}></div>
      </div>

      <ul className={`links ${isNavOpen ? "open" : ""}`}>
        <li className="link">
          <a href="#">Home</a>
        </li>
        <li className="link">
          <a href="#">Internships</a>
        </li>
        <li className="link">
          <a href="#">About</a>
        </li>
        <li className="link">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="auth">
        <div className="link">
            Log in
        </div>
        <button >
            Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
