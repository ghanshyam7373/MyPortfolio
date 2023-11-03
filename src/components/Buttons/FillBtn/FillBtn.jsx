import React from "react";
import "./FillBtn.css";
import { Link } from "react-router-dom";

const FillBtn = (props) => {
  const { onClick, label, to, target, disabled } = props;
  return (
    <div>
      {onClick ? (
        <button
          className="fillBtn"
          onClick={onClick}
          disabled={disabled ? disabled : false}
        >
          {label}
        </button>
      ) : (
        <Link to={to} target={target ? target : ""}>
          <button className="fillBtn">{label}</button>
        </Link>
      )}
    </div>
  );
};

export default FillBtn;
