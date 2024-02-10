import React from "react";
import "./section4.scss";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Section4 = () => {
  return (
    <div className="Section4">
      <div className="body">
        <div className="left">
          <h2>Connect with the Top Individuals</h2>
          <p>
            Whether you are tech enthusiast, or a UI Designer, Frint helps you
            make connections with the best in your category.
          </p>
          <Link to="/" className="link">
            Learn more <FaArrowRight />
          </Link>
        </div>

        <div className="right">
          <img src="/section4-left.svg" alt="left-image" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
