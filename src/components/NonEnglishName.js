import React from "react";
import HtmlParser from "./Assets/HtmlParser";

const NonEnglishName = ({ item, type }) => {
  let searchTerm = "";
  let searchTerm2 = "";
  type === "tv" ? (searchTerm = "name") : (searchTerm = "title");
  type === "tv"
    ? (searchTerm2 = "original_name")
    : (searchTerm2 = "original_title");

  if (item[searchTerm] !== item[searchTerm2] && item[searchTerm].length < 40) {
    return <HtmlParser text={`English Title: <b>${item[searchTerm]}</b>`} />;
  } else if (
    item[searchTerm] !== item[searchTerm2] &&
    item[searchTerm].length > 40
  ) {
    return (
      <HtmlParser
        text={`English Title: <b>${item[searchTerm].slice(0, 35)}...</b>`}
      />
    );
  } else {
    return <HtmlParser text={`English Title: <b>N/A</b>`} />;
  }
};

export default NonEnglishName;
