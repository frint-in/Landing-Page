import React, { useState } from "react";
import "./internship.scss";
import Filter from "../../components/filter/Filter";
import { VscSettings } from "react-icons/vsc";
import Card from "../../components/internship-card/Card";


const Internship = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sort, setSort] = useState();

  const handleOptionClick = (option) => {
    setCategory(option);
    setDropdownOpen(false);
  };

  const options = [
    "Sales Event",
    "Tech Event",
    "Design Event",
    "Marketing Event",
  ];
  
  return (
    <div className="Internship">
      <div className="header"></div>
      <Filter />
      <div className="headerdiv">
        <div className="headtext">Recommended Internships</div>
        <div className="Dropdown">
          <div
            className={`dropdown-header ${dropdownOpen ? "open" : ""}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {sort ? sort : "Sorted by"}
            <div className="custom-down-icon">
              <VscSettings />
            </div>
          </div>
          {dropdownOpen && (
            <div className="options">
              {options.map((option) => (
                <div
                  key={option}
                  className="option"
                  onChange={() => handleOptionClick(option)}
                  onClick={() => handleOptionClick(option)}
                  value={sort}
                  required
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="body">
        <Card />
      </div>
    </div>
  );
};

export default Internship;
