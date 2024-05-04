import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import "./navbar.scss";
import Dropdown from "../dropdown/Dropdown";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logindropdownOpen, setLoginDropdownOpen] = useState(false);
  const [registerdropdownOpen, setRegisterDropdownOpen] = useState(false);

  const handleLoginDropdown = () => {
    if (!logindropdownOpen && registerdropdownOpen) {
      setRegisterDropdownOpen(false)
    }
    setLoginDropdownOpen(!logindropdownOpen);
  };

  const handleRegisterDropdown = () => {
    if (!registerdropdownOpen && logindropdownOpen) {
      setLoginDropdownOpen(false)
    }
    setRegisterDropdownOpen(!registerdropdownOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = window.innerHeight * 0.1;
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
      >
        <img src={logo} alt="" width={120} />
        {/* FRINT */}
      </Link>

      <div className="hamburger" onClick={toggleNav}>
        <div className={`line ${isNavOpen ? "open" : ""}`}></div>
        <div className={`line ${isNavOpen ? "open" : ""}`}></div>
        <div className={`line ${isNavOpen ? "open" : ""}`}></div>
      </div>

      <ul className={`links ${isNavOpen ? "open" : ""}`}>
        <li className="link">
          <Link className="a" to="/internship" onClick={closeNav}>
            Internships
          </Link>
        </li>
        <li className="link">
          <Link className="a" to="/about" onClick={closeNav}>
            About
          </Link>
        </li>
        {/* <li className="link">
          <Link className="a" to="/blog" onClick={closeNav}>
            Blog
          </Link>
        </li> */}
        <li className="link">
          <Link className="a" to="/contact" onClick={closeNav}>
            Contact
          </Link>
        </li>
        <li className="link login" onClick={() => handleLoginDropdown()}>
        <Dropdown name={"Login"}  dropdownOpen={logindropdownOpen} link1={"https://company.frint.in/auth"} link2={"https://student.frint.in/login"} option1={"Login as a Company"} option2={"Login as a Student"} />
        </li>
        <li className="link login" onClick={() => handleRegisterDropdown()}>
          <Dropdown name={"Register"}  dropdownOpen={registerdropdownOpen} link1={"https://company.frint.in/signup"} link2={"https://student.frint.in/sign-up"} option1={"Register as a Company"} option2={"Register as a Student"} />
          </li>
      </ul>
      <div className="auth">
        <div className="link" onClick={() => handleLoginDropdown()}>
          <Dropdown name={"Login"} dropdownOpen={logindropdownOpen} link1={"https://company.frint.in/auth"} link2={"https://student.frint.in/login"} option1={"Login as a Company"} option2={"Login as a Student"} />
        </div>
        <div className="button" onClick={() => handleRegisterDropdown()}>
          <Dropdown name={"Register"}  dropdownOpen={registerdropdownOpen} link1={"https://company.frint.in/signup"} link2={"https://student.frint.in/sign-up"} option1={"Register as a Company"} option2={"Register as a Student"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
