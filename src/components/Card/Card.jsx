import React from "react";
import "./Card.css";
import FillBtn from "../Buttons/FillBtn/FillBtn";
import OutlineBtn from "../Buttons/OutlineBtn/OutlineBtn";

const Card = (props) => {
  const { img, title, desc, skills, url, github } = props;
  return (
    <div className="card">
      <div className="cardImgDiv">
        <img src={img} alt="projectImage" className="cardImg" />
      </div>
      <div className="cardContent">
        <p className="cardTitle">{title}</p>
        <p className="cardDesc">{desc}</p>
        <p className="cardSkills">
          <span className="skillTitle">Skills:</span> {skills}
        </p>
        <div className="cardBtns">
          <FillBtn label="Check Project" to={url} target="_blank" />
          <OutlineBtn label="Github" to={github} target="_blank" />
        </div>
      </div>
    </div>
  );
};

export default Card;
