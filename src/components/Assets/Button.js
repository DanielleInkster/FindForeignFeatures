import React from "react";
import "../../stylesheets/Assets/Button.css";

const Button = ({ value, onClick }) => {
  return <input id="Button" type="submit" value={value} onClick={onClick} />;
};

export default Button;
