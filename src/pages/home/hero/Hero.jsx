import React from "react";
import "./hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="Home">
      <div className="home">
        <div className="description">
          <h1 className="title">
            Say <span className="gradient-text">Hi</span> to your{" "}
            <span className="gradient-text">New Internship</span>
          </h1>
          <p className="paragraph">
            "Dive into our <b>Summer Internship</b> Program for more than just a resume booster. Unleash your potential and seize freelance gigs, networking opportunities, and real-world experiences that spark your creativity and growth."
          </p>
          {/* <form id="form" autoComplete="off"> */}
          {/* <input
              type="email"
              id="email-id"
              name="email_address"
              aria-label="email adress"
              placeholder=""
              required=""
              onInput={() => checkEmpty()}
            /> */}
          <div className="btn-div">
            <button type="submit" className="btn">
              <Link to="https://student.frint.in" target="blank" style={{ all: "unset", textDecoration: "none" }}>
                <span>Participate Now</span>
                <ion-icon name="arrow-forward-outline" />
              </Link>
            </button>
          </div>
          {/* </form> */}
        </div>
        <div className="users-color-container">
          <img src="/summer-internship1.png" alt="" width={"100%"} style={{ marginTop: "60px" }} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
