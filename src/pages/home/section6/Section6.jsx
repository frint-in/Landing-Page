import React from "react";
import "./section6.scss";
import { FaArrowUp } from 'react-icons/fa'
import { Link } from "react-router-dom";


const Section6 = () => {
  return (
    <div className="Section6">
      <div className="box">
        <h1>Join 2000+ users today</h1>
        <p>Start for free</p>
        <p>Joining as an Company?</p>
        <Link to="/login" className="link">
          Sign up free <FaArrowUp />
        </Link>
      </div>
    </div>
  );
};

export default Section6;
