import React, { useState } from "react";
import "./dropdown.scss";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
    const dropdownOpen = props.dropdownOpen
    const setDropdownopen = props.setDropdownOpen

    return (
        <div className="Dropdown">
            <div
                className={`dropdown-header ${dropdownOpen ? "open" : ""}`}
                // onClick={()=>setDropdownopen()}
            >
            {props.name}
            </div>
            {dropdownOpen && (
                <div className="options">
                    <div className="optiondiv">
                        <Link
                            to={props.link1}
                            className="option"
                        >{props.option1}
                        </Link>
                    </div>
                    <div className="optiondiv">

                        <Link
                            to={props.link2}
                            className="option"
                        >{props.option2}
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
