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
        <p>A platform made by students for students</p>
        <Link to="https://docs.google.com/forms/d/e/1FAIpQLScspKyvgZPGYuCCfZK9UzeW6AH7TonKjfxI3J-uOuCiyRmNWA/viewform" target="blank" className="link">
          Join our community <FaArrowUp />
        </Link>
      </div>
    </div>
  );
};

export default Section6;
