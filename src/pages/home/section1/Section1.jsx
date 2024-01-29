import React from "react";
import "./section1.scss";

const Section1 = () => {
  const logos = [
    // "https://i.ibb.co/y8R5qrp/brand-number-one-1.png",
    // "https://i.ibb.co/3WgLMfR/brand-number-two-1.png",
    // "https://i.ibb.co/Vp5Q57N/brand-number-three.png",
    // "https://i.ibb.co/LYhVKBy/brand-number-four-1.png",
    // "https://i.ibb.co/6gsyP1h/brand-number-five-1.png",
    // "https://i.ibb.co/Yt15RLr/brand-number-six-1.png",
    // "https://i.ibb.co/6WTZ118/brand-number-seven-1.png",
    // "https://i.ibb.co/QPLgPL0/brand-number-eight.png",
    // "https://i.ibb.co/FKj2H3X/svkcrypto-podcast-500x200.png",
    // "https://i.ibb.co/wd7FSnZ/brand-number-ten-1.png",
    // "https://i.ibb.co/fDL9QLz/brand-number-eleven.png",
    // "https://i.ibb.co/z5YCnWD/brand-number-twelve.png",
    // Duplicate logos for repetition
    // Add more logos here if needed
    "/My3Dmeta.png",
    "/Poynt.png",
    "/Unexplored.png",
    "/Xipaar.png"
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
            {[...Array(10000)].map((_, repeatIndex) => (
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
