import React, { useState } from "react";
import "./filter.scss";
import { FaFilter, FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [date, setDate] = useState();
  const [exp, setExp] = useState();
  const [prefLoc, setPrefLoc] = useState();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setDate({
      [name]: value,
    });
  };

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setExp({
      [name]: value,
    });
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setPrefLoc({
      [name]: value,
    });
  };

  const handleOptionClick = (option) => {
    setCategory(option);
    setDropdownOpen(false);
  };
  const handleOptionClick1 = (option) => {
    setType(option);
    setDropdownOpen1(false);
  };

  const options = [
    "Sales Event",
    "Tech Event",
    "Design Event",
    "Marketing Event",
  ];
  const options1 = [
    "Sales Event",
    "Tech Event",
    "Design Event",
    "Marketing Event",
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`Filter ${isOpen ? "open" : ""}`}>
      <div className="Sidebar">
        <div
          style={{
            width: isOpen ? "18rem" : "4.5rem",
            height: isOpen ? "86vh" : "4rem",
          }}
          className="container"
        >
          <div className="sidebarTop">
            <div className="top_section">
              <NavLink to={"/"} key={1}>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="logo"
                >
                  Filter
                </div>
              </NavLink>
              <div
                className="bars"
                style={{ marginLeft: isOpen ? "6rem" : "0.5rem" }}
              >
                <FaFilter
                  onClick={toggleSidebar}
                  className="abc"
                  // color="black"
                  style={{ display: isOpen ? "none" : "block", color: "#000" }}
                />
                <FaFilter
                  onClick={toggleSidebar}
                  className="cba"
                  // color="black"
                  style={{ display: isOpen ? "block" : "none", color: "#000" }}
                />
              </div>
            </div>
            <hr
              className="hr-bar"
              style={{ display: isOpen ? "block" : "none" }}
            />
            <div className="box" style={{ display: isOpen ? "block" : "none" }}>
              <label htmlFor="search" className="label">
                Search by Keywords
              </label>
              <input
                type="search"
                placeholder="🔎 company name, title..."
                className="search-input"
                id="search"
              />
              <label htmlFor="location" className="label">
                Location
              </label>
              <input
                type="search"
                placeholder="📍 city or pincode"
                className="search-input"
                id="location"
              />
              <label htmlFor="category" className="label">
                Category
              </label>
              <div className="Dropdown">
                <div
                  className={`dropdown-header ${dropdownOpen ? "open" : ""}`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {category ? category : "Select category"}
                  <div className="custom-down-icon">
                    <FaChevronDown />
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
                        value={category}
                        required
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <label htmlFor="type" className="label">
                Type
              </label>
              <div className="Dropdown">
                <div
                  className={`dropdown-header ${dropdownOpen1 ? "open" : ""}`}
                  onClick={() => setDropdownOpen1(!dropdownOpen1)}
                >
                  {type ? type : "Select type"}
                  <div className="custom-down-icon">
                    <FaChevronDown />
                  </div>
                </div>
                {dropdownOpen1 && (
                  <div className="options">
                    {options1.map((option) => (
                      <div
                        key={option}
                        className="option"
                        onChange={() => handleOptionClick1(option)}
                        onClick={() => handleOptionClick1(option)}
                        value={type}
                        required
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <label htmlFor="date" className="label">
                Date posted
              </label>
              <div className="date-buttons">
                <div className="date-input">
                  <input
                    id="hour"
                    value={date}
                    name="date"
                    type="radio"
                    onChange={handleChange}
                  />
                  <label htmlFor="hour">Last hour</label>
                </div>
                <div className="date-input">
                  <input
                    id="24-hour"
                    value={date}
                    name="date"
                    type="radio"
                    onChange={handleChange}
                  />
                  <label htmlFor="24-hour">Last 24 hours</label> 
                </div>
                <div className="date-input">
                  <input
                    id="7-days"
                    value={date}
                    name="date"
                    type="radio"
                    onChange={handleChange}
                  />
                  <label htmlFor="7-days">Last 7 days</label>
                </div>
                <div className="date-input">
                  <input
                    id="14-days"
                    value={date}
                    name="date"
                    type="radio"
                    onChange={handleChange}
                  />
                  <label htmlFor="14-days">Last 14 days</label>
                </div>
                <div className="date-input">
                  <input
                    id="30-days"
                    value={date}
                    name="date"
                    type="radio"
                    onChange={handleChange}
                  />
                  <label htmlFor="30-days">Last 30 days</label>
                </div>
              </div>
              <label htmlFor="exp-level" className="label">
                Experience level
              </label>
              <div className="date-buttons">
                <div className="date-input">
                  <input
                    id="fresh"
                    value={exp}
                    name="experience"
                    type="radio"
                    onChange={handleChange1}
                  />
                  <label htmlFor="fresh">Fresh</label>
                </div>
                <div className="date-input">
                  <input
                    id="1-year"
                    value={exp}
                    name="experience"
                    type="radio"
                    onChange={handleChange1}
                  />
                  <label htmlFor="1-year">1 year</label>
                </div>
                <div className="date-input">
                  <input
                    id="2-year"
                    value={exp}
                    name="experience"
                    type="radio"
                    onChange={handleChange1}
                  />
                  <label htmlFor="2-years">2 years</label>
                </div>
                <div className="date-input">
                  <input
                    id="3-year"
                    value={exp}
                    name="experience"
                    type="radio"
                    onChange={handleChange1}
                  />
                  <label htmlFor="3-years">3 years</label>
                </div>
                <div className="date-input" >
                  <input
                    id="more-than-3"
                    value={exp}
                    name="experience"
                    type="radio"
                    onChange={handleChange1}
                  />
                  <label htmlFor="more-than-3">More than 3 years</label>
                </div>
              </div>
              <label htmlFor="pref-location" className="label">
                preferred location
              </label>
              <div className="date-buttons">
                <div className="date-input">
                  <input
                    id="on-site"
                    value={prefLoc}
                    name="prefloc"
                    type="checkbox"
                    onChange={handleChange2}
                  />
                  <label htmlFor="on-site">On-Site</label>
                </div>
                <div className="date-input">
                  <input
                    id="remote"
                    value={prefLoc}
                    name="prefloc"
                    type="checkbox"
                    onChange={handleChange2}
                  />
                  <label htmlFor="remote">Remote</label>
                </div>
                <div className="date-input">
                  <input
                    id="hybrid"
                    value={prefLoc}
                    name="prefloc"
                    type="checkbox"
                    onChange={handleChange2}
                  />
                  <label htmlFor="hybrid">Hybrid</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
