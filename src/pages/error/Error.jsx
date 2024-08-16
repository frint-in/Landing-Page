import React, { useEffect } from "react";
import Parallax from "parallax-js"; // Make sure to install the parallax-js package4
import "./error.scss";

const Error = () => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    const parallaxInstance = new Parallax(scene);

    return () => {
      parallaxInstance.destroy(); // Clean up the parallax instance on component unmount
    };
  }, []);

  return (
    <div className="Error">
      {/* Parallax Section */}
      <section className="wrapper">
        <div className="container">
          <div id="scene" className="scene" data-hover-only="false">
            <div className="circle" data-depth="1.2"></div>

            <div className="one" data-depth="0.9">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="two" data-depth="0.60">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="three" data-depth="0.40">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <p className="p404" data-depth="0.50">
              404
            </p>
            <p className="p404" data-depth="0.10">
              404
            </p>
          </div>

          <div className="text">
            <article>
              <p>
                Dashboard is under construction... <br />
                Developers are cooking something new 😉
              </p>
              {/* <button>i dare!</button> */}
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
