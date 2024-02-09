import React from "react";
import "./section1.scss";

const Section1 = () => {
  const logos = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
  ];

  return (
    <div className="Section1">
      <div>
        <div className="head">
          Trusted by <span className="number">100+</span> growing{" "}
          <span className="business">businesses</span>
        </div>
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
  );
};

export default Section1;
