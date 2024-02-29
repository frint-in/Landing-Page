import React from "react";
import "./about.scss";
const About = () => {
  const logos = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];

  return (
    <div className="About">
      <div className="header"></div>

      <div className="about-us">
        <div className="heading">
          <h1>About US</h1>
        </div>
        <div className="container">
          <div className="left-container">
            <p>
              Welcome to Frint, a leading community dedicated to fostering
              student empowerment.We are committed to facilitating seamless
              connections and providing access to a world of opportunities.Our
              focus is on uncovering your potential, offering tailored
              internships, and organizing technical events and webinars for
              valuable exposure.Join our dynamic community to embark on a
              transformative journey filled with hands-on knowledge and
              essential skill development, serving as an optimal launchpad for
              your career.Join us today and be part of the force propelling the
              future forward.
            </p>
          </div>
          <div className="right-container">
            <img src="./pp.png" alt="" />
          </div>
        </div>

        <div className="services">
          <h1>Our Services</h1>
          <p>
            Bringing talent together, empowering career and shaping the future
            of work
          </p>
          <div className="card-container">
            <div className="card">
              <img src="freelance.png" alt="" />
              <h2>Internship</h2>
              <p>
                Discover a curated selection of top-notch internships in various
                fields
              </p>
            </div>
            <div className="card">
              <img src="intership.png" alt="" />
              <h2>Freelancing</h2>
              <p>
                Earn extra income and build your skills wiht flexible and remote
                freelance projects
              </p>
            </div>
            <div className="card">
              <img src="skill.png" alt="" />
              <h2>Skill Development</h2>
              <p>
                Improve your skills and stay up to date with the latest industry
                trends through online courses and training programs
              </p>
            </div>
          </div>
        </div>

        <div className="collaborations">
          <h1>Our Collaborations</h1>
          <div>
            <div className="slider">
              <div className="slide-track">
                {[...Array(100)].map((_, repeatIndex) => (
                  // Duplicating logos for repetition
                  <React.Fragment key={repeatIndex}>
                    {logos.map((logo, index) => (
                      <div key={index} className="slide">
                        <img
                          src={logo}
                          alt={`Logo ${index + 1}`}
                          height={100}
                          width={250}
                        />
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
