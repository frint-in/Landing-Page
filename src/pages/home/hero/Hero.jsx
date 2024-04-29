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
            "Empowering the future workforce through connections and access to
            limitless opportunities, unlocking potentials and shaping a world of
            unbound growth and innovation."
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
          {/* <span className="item" style={{ "--i": 1 }} />
          <img className="item" style={{ "--i": 2 }} alt="" />
          <span className="item" style={{ "--i": 3 }} />
          <img className="item" style={{ "--i": 4 }} alt="" />
          <img className="item" style={{ "--i": 5 }} alt="" />
          <span className="item" style={{ "--i": 6 }} />
          <img className="item" style={{ "--i": 7 }} alt="" />
          <span className="item" style={{ "--i": 8 }} />
          <span className="item" style={{ "--i": 9 }} />
          <img className="item" style={{ "--i": 10 }} alt="" />
          <span className="item" style={{ "--i": 11 }} />
          <img className="item" style={{ "--i": 12 }} alt="" /> */}
          <img src="/summer-internship1.png" alt="" width={"100%"} style={{marginTop: "60px"}}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
