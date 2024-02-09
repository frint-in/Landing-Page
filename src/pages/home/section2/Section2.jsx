import React from "react";
import "./section2.scss";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Section2 = () => {
  const service = [
    {
      title: "Free forever",
      para: "We are FREE. Join Frint's community and seize the opportunity to enhance your skills, build your network, and kickstart your career—all without spending a dime.",
      link: "",
      image: "",
    },
    {
      title: "Industry-Relevant Training",
      para: "Frint collaborates with leading industry experts to develop curriculum content that aligns with the latest trends and demands in various fields.",
      link: "",
      image: "",
    },
    {
      title: "Networking opportunities",
      para: "Connect with professionals, mentors, and fellow interns through our extensive network. Frint provides exclusive networking events, workshops, and seminars to foster meaningful connections.",
      link: "",
      image: "",
    },
  ];

  const options = ["blue", "yellow", "green"];

  const getRandomOption = (index) => {
    const colorIndex = index % options.length;
    return options[colorIndex];
  };
  return (
    <div className="Section2">
      <div className="head">
        <span className="business">Internships</span> with Ease
      </div>
      <div className="services">
        {service.map((service, index) => (
          <div className={`service-div border-top-${getRandomOption(index)}`}>
            {/* <div key={index} className={`border-top-${getRandomOption(index)}`}> */}
            <Link
              to={service.link}
              key={index}
              className={`Card border-top-${getRandomOption(index)}`}
            >
              <img src={service.image} alt="" />
              <h2>{service.title}</h2>
              <p>{service.para}</p>
              <div className="explore-btn">
                <Link to={service.link} className={`${getRandomOption(index)}`}>
                  Explore <FaArrowRight />
                </Link>
              </div>
            </Link>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
