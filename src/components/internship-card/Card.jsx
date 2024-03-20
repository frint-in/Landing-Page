import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className="Card">
      <Link to={props.link} className="link">
        <div className="topbox" style={{ backgroundColor: props.color }}>
          <div className="top">
            <div className="date">{props.date}</div>
            <div className="bookmark">
              <FaRegBookmark />
            </div>
          </div>
          <div className="company">{props.company}</div>
          <div className="title">
            {props.level} {props.title}
          </div>
          <div className="tag">
            <div className="tag-items">{props.tag}</div>
            {/* &&
              props.tag.map((tagItem, index) => (
                <div key={index} className="tag-items">
                  {tagItem}
                </div>
              )) */}
          </div>
        </div>
        <div className="bottom">
          <div className="stipend">
            <b>Stipend: ₹ {props.stipend} </b>
            <br />
            <p>{props.location}</p>
          </div>
          <Link className="button" to={props.link}>
            Details
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default Card;
