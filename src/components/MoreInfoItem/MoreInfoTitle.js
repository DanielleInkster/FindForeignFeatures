// eslint-disable-next-line
import React from "react";

const RecTitle = ({ type, item }) => {
  let searchTerm = type === "tv" ? "original_name" : "original_title";
  return item[searchTerm];
};

export default RecTitle;
