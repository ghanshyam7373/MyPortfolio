import React from "react";
import "./Heading.css";

const Heading = (props) => {
  const { label, className, id } = props;
  return (
    <>
      <p className={`title ${className}`} id={id}>
        {label}
      </p>
    </>
  );
};

export default Heading;
