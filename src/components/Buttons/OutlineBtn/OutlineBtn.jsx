import React from "react";
import "./OutlineBtn.css";
import { Link } from "react-router-dom";

const OutlineBtn = (props) => {
  const { onClick, label, to } = props;
  return (
    <div>
      {onClick ? (
        <button className="outlineBtn" onClick={onClick}>
          {label}
        </button>
      ) : (
        <Link to={to}>
          <button className="outlineBtn">{label}</button>
        </Link>
      )}
    </div>
  );
};

export default OutlineBtn;
