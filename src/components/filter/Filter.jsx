import React, { useState } from "react";
import "./filter.scss";
import { FaFilter, FaPowerOff, FaLock } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const menuItem = [
  {
    path: "/company-dashboard",
    name: "Dashboard",
    icon: <RxDashboard />,
  },
  {
    path: "/company-profile",
    name: "Profile",
    icon: <CgProfile />,
  },
  {
    path: "/internship",
    name: "Internship",
    icon: <PiSuitcaseSimpleBold />,
  },
  {
    path: "/company-password",
    name: "Change Password",
    icon: <FaLock />,
  },
];

const Filter = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`Filter ${isOpen ? "open" : ""}`}>
      <div className="Sidebar">
        <div
          style={{ width: isOpen ? "25rem" : "4.5rem" }}
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
                  style={{ display: isOpen ? "none" : "block", color: "#fff" }}
                />
                <FaFilter
                  onClick={toggleSidebar}
                  className="cba"
                  style={{ display: isOpen ? "block" : "none", color: "#fff" }}
                />
              </div>
            </div>
            <hr
              className="hr-bar"
              style={{ display: isOpen ? "block" : "none" }}
            />
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={`link ${selectedTab === item.path ? "active" : ""}`}
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Filter;
