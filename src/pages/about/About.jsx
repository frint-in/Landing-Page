import React from "react";
import "./about.scss";
import Section1 from "../home/section1/Section1";

const About = () => {
  return (
    <div className="About">
      <div className="about-us">
      <div className="heading">
        <h1>About US</h1>
      </div> 
      <div className="container">
        <div className="left-container">
          <p>
              Welcome to Frint, a leading community dedicated to fostering
              student empowerment. We are committed to facilitating seamless
              connections and providing access to a world of opportunities. Our
              focus is on uncovering your potential, offering tailored
              internships, and organizing technical events and webinars for
              valuable exposure. Join our dynamic community to embark on a
              transformative journey filled with hands-on knowledge and
              essential skill development, serving as an optimal launchpad for
              your career. Join us today and be part of the force propelling the
              future forward.
          </p>
        </div>
        <div className="right-container">
          <img src="./pp.png" alt="" />
        </div>
      </div> 
      <div className="collaborations">
        <h1>Our Collaborations</h1>      
      </div>    
    </div>
    </div>
  );
};

export default About;


