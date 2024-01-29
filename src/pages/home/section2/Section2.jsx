import React from "react";
import "./section2.scss";

const Section2 = () => {
  return (
    <div className="Section2">
      <div className="head">
        <span className="business">Internships</span> with Ease
      </div>
      <div className="blocks">
        <div className="block">
          <div className="heading">Free Forever</div>
          <div className="para">
            We are FREE. Join Frint's community and seize the opportunity to
            enhance your skills, build your network, and kickstart your
            career—all without spending a dime.
          </div>
        </div>
        <div className="block">
          <div className="heading">Industry Relevent Program</div>
          <div className="para">
            Frint collaborates with leading industry experts to develop
            curriculum content that aligns with the latest trends and demands in
            various fields.
          </div>
        </div>
        <div className="block">
          <div className="heading">Networking Opportunities</div>
          <div className="para">
            Connect with professionals, mentors, and fellow interns through our
            extensive network. Frint provides exclusive networking events,
            workshops, and seminars to foster meaningful connections.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
