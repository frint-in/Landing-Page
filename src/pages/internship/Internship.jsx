import React, { useState } from "react";
import "./internship.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/internship-card/Card";
import Data from "../../components/data/Data";

const Internship = () => {
  const internship = Data();

  const colors = [
    "#FFDBB0",
    "#B6FFB0",
    "#EAB0FF",
    "#B0D9FF",
    "#FFB0B5",
    "#FFF7B0",
  ];

  return (
    <div className="Internship">
      <div className="header"></div>
      <Filter />
      <div className="headerdiv">
        <div className="headtext">Recommended Internships</div>
      </div>
      <div className="body">
        {internship &&
          internship.map((int, index) => (
            <Card
              key={index}
              date={int.date}
              company={int.company}
              title={int.title}
              level={int.level}
              tag={int.tag}
              stipend={int.stipend}
              link={int.link}
              location={int.location}
              color={colors[index % colors.length]} 
            />
          ))}
      </div>
    </div>
  );
};

export default Internship;
