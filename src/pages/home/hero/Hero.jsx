import React from "react";
import "./hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="Hero">
        <div className="head">Ready, Set, Intern</div>
        <div className="tagline">Time to Greet Your Future Career</div>
        <div className="button-div">
          <div className="button-outline">
            <Link to="/auth" className="button">
              Register
            </Link>
          </div>
          <div className="button-outline">
            <Link to="/auth" className="button">
              Log in
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="img">
        <img
          src="/dash.png"
          alt=""
          width={"70vw"}
          style={{ 
            marginTop: "-20rem"
           }}
        />
      </div> */}
    </>
  );
};

export default Hero;
