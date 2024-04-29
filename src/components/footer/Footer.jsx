import React from "react";
import "./footer.scss";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="box" style={{ textAlign: "center" }}>
          <img src="/logo.png" alt="logo" className="logo" />
        </div>
        <div className="row-1">
          <div className="box">
            <h4 className="title">Frint</h4>
            <ul className="list">
              <li className="item">
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li className="item">
                <Link to="/internship" className="link">
                  Internships
                </Link>
              </li>
              <li className="item">
                <Link to="/about" className="link">
                  About Us
                </Link>
              </li>
              <li className="item">
                <Link to="/blog" className="link">
                  blogs
                </Link>
              </li>
              <li className="item">
                <Link to="/contact" className="link">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <h4 className="title">Dashboard</h4>
            <ul className="list">
              <li className="item">
                <Link to="https://student.frint.in" className="link">
                  Student Dashboard
                </Link>
              </li>
              <li className="item">
                <Link to="https://company.frint.in" className="link">
                  Company Dashboard
                </Link>
              </li>
              <li className="item">
                <Link to="/internship" className="link">
                  Internships
                </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <h4 className="title">Support</h4>
            <ul className="list">
              <li className="item">
                <Link to="/contact" className="link">
                  Get Help
                </Link>
              </li>
              <li className="item">
                <Link to="/faq" className="link">
                  FAQs
                </Link>
              </li>
              <li className="item">
                <Link to="/privacy-policy" className="link">
                  Privacy Policy
                </Link>
              </li>
              <li className="item">
                <Link to="/terms-conditions" className="link">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <h4 className="title">Contact us</h4>
            <ul className="list">
              <li className="item">
                <FaLocationDot className="link-icon"/>
                <Link to="#" className="link">
                  Assam Engineering College,
                  <br /> Jalukbari, Guwahati, Assam
                </Link>
              </li>
              <li className="item">
                <FaPhoneAlt className="link-icon"/>
                <Link to="tel:8134895509" className="link">
                  (+91) 81348 95509
                </Link>
              </li>
              <li className="item">
                <FaEnvelope className="link-icon"/>
                <Link to="mailto:contact@frint.in" className="link">
                  contact@frint.in
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row-2 u-margin-top-small">
          <p className="copyright">© 2024 Frint. All rights reserved.</p>
          <div className="social-icons-box">
            <Link to="#" className="social-link">
              <FaFacebook className="icon" />
            </Link>
            <Link to="https://www.instagram.com/frint.in/" className="social-link">
              <FaInstagram className="icon" />
            </Link>
            <Link to="https://linkedin.com/company/frint-in" className="social-link">
              <FaLinkedin className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
