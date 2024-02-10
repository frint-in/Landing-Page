import React from "react";
import "./section3.scss";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const Section3 = () => {
  return (
    <div className="Section3">
      <div className="body">
        <div className="left">
          <h2>Work with the best, wherever you work</h2>
          <p>
            In the office, remote, or a mix of the two, through Frint,
            collaborate, and co-create in one space no matter where you are.
          </p>
          <Link to='/' className="link">Learn more <FaArrowRight /></Link>
        </div>
        
        <div className="right">
          <img src="/section3-right.svg" alt="right-image"/>
        </div>
      </div>
    </div>
  );
};

export default Section3;
