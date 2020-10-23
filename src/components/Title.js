// eslint-disable-next-line
import React from "react";

const Title = ({ item, type }) => {
  let searchTerm = type === "tv" ? "original_name" : "original_title";
  return item[searchTerm].length < 25
    ? item[searchTerm]
    : item[searchTerm].slice(0, 25) + "...";
};

export default Title;
