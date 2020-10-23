import React from "react";
import "../../stylesheets/Assets/CheckBox.css";

export const CheckBox = ({ id, value, handleCheckChildElement, isChecked }) => {
  return (
    <li>
      <input
        key={id}
        onChange={handleCheckChildElement}
        type="checkbox"
        checked={isChecked}
        value={value}
      />{" "}
      <span className="text" id="CheckBox">
        {" "}
        {value}
      </span>
    </li>
  );
};

export default CheckBox;
