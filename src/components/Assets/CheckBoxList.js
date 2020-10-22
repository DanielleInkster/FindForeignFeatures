import React from "react";
import CheckBox from "./CheckBox";
import "../../stylesheets/Assets/CheckBoxList.css";

const CheckBoxList = ({ options, handleChildElement }) => {
  return (
    <ul>
      {options.map((entry) => {
        return (
          <CheckBox handleCheckChildElement={handleChildElement} {...entry} />
        );
      })}
    </ul>
  );
};
export default CheckBoxList;
