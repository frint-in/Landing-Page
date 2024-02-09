import React, { useState } from "react";
import "./auth.scss";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaPhoneAlt,
  FaGraduationCap,
  FaSuitcase,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Auth = () => {
  const [eye, setEye] = useState("password");

  const togglePasswordVisibility = () => {
    const inputElement1 = document.getElementById("myInput1");
    const inputElement2 = document.getElementById("myInput2");

    if (inputElement1.type && inputElement2.type === "password") {
      inputElement1.type = inputElement2.type = "text";
      setEye("text");
    } else {
      inputElement1.type = inputElement2.type = "password";
      setEye("password");
    }
  };

  const [isSignUpMode, setSignUpMode] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  // const handleOptionChange = (option) => {
  //   setSelectedOption(option);
  // };

  return (
    <div className="Auth">
      <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <div className="fas">
                  <FaEnvelope fontSize="20" />
                </div>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <div className="fas">
                  <FaLock fontSize="20" />
                </div>
                <input type="password" placeholder="Password" id="myInput1" />
                {eye === "password" ? (
                  <FaEye className="eye" onClick={togglePasswordVisibility} />
                ) : (
                  <FaEyeSlash
                    className="eye"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
              <input type="submit" defaultValue="Login" className="btn solid" />
              {/* <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <FaFacebookF fontSize="20" />
                </a>
                <a href="#" className="social-icon">
                  <FaTwitter fontSize="20" />
                </a>
                <a href="#" className="social-icon">
                  <FaGoogle fontSize="20" />
                </a>
                <a href="#" className="social-icon">
                  <FaLinkedinIn fontSize="20" />
                </a>
              </div> */}
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="category">
                <div className="radio_group">
                  <input type="radio" name="like" />
                  <label htmlFor="like">
                    <FaGraduationCap fontSize="2.5rem" />
                  </label>
                </div>
                <div className="radio_group">
                  <input type="radio" name="like" />
                  <label htmlFor="like">
                    <FaSuitcase fontSize="2rem" />
                  </label>
                </div>
              </div>
              <div className="input-field">
                <div className="fas">
                  <FaUser fontSize="20" />
                </div>
                <input type="text" placeholder="Name" />
              </div>
              <div className="input-field">
                <div className="fas">
                  <FaEnvelope fontSize="20" />
                </div>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <div className="fas">
                  <FaPhoneAlt fontSize="20" />
                </div>
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="input-field">
                <div className="fas">
                  <FaLock fontSize="20" />
                </div>
                <input type="password" placeholder="Password" id="myInput2" />
                {eye === "password" ? (
                  <FaEye className="eye" onClick={togglePasswordVisibility} />
                ) : (
                  <FaEyeSlash
                    className="eye"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
              <input type="submit" className="btn" defaultValue="Sign up" />
              {/* <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <FaFacebookF fontSize="20" />
                </a>
                <a href="#" className="social-icon">
                  <FaTwitter fontSize="20" />
                </a>
                <a href="#" className="social-icon">
                  <FaGoogle fontSize="20" />
                </a>
                <a href="#" className="social-icon">
                  <FaLinkedinIn fontSize="20" />
                </a>
              </div> */}
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={handleSignUpClick}
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={handleSignInClick}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
