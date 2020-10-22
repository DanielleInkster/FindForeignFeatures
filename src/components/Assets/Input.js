import React from "react";
import "../../stylesheets/Assets/Input.css";

const Input = ({ value, onChange }) => {
  return (
    <input className="Input" type="text" value={value} onChange={onChange} />
  );
};

export default Input;
