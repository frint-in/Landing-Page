// import React from "react";
// import "./hero.scss";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <>
//       <div className="Hero">
//         <div className="head">Ready, Set, Intern</div>
//         <div className="tagline">Time to Greet Your Future Career</div>
//         <div className="button-div">
//           <div className="button-outline">
//             <Link to="/auth" className="button">
//               Register
//             </Link>
//           </div>
//           <div className="button-outline">
//             <Link to="/auth" className="button">
//               Log in
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="img">
//         <img
//           src="/dash.png"
//           alt=""
//           width={"70vw"}
//           style={{
//             marginTop: "-20rem"
//            }}
//         />
//       </div>
//     </>
//   );
// };

// export default Hero;

import React from "react";
import "./hero.scss";

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
          <form id="form" autoComplete="off">
            <input
              type="email"
              id="email-id"
              name="email_address"
              aria-label="email adress"
              placeholder=""
              required=""
              onInput={() => checkEmpty()}
            />
            <button type="submit" className="btn" aria-label="submit">
              <span>Subscribe</span>
              <ion-icon name="arrow-forward-outline" />
            </button>
          </form>
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
          <img src="/photo.png" alt="" width={"90%"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
