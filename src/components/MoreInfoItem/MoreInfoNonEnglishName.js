import React from "react";
import HtmlParser from "../Assets/HtmlParser";

const MoreInfoNonEnglishName = ({ item, type }) => {
  let searchTerm = "";
  let searchTerm2 = "";
  type === "tv" ? (searchTerm = "name") : (searchTerm = "title");
  type === "tv"
    ? (searchTerm2 = "original_name")
    : (searchTerm2 = "original_title");

  if (item[searchTerm] !== item[searchTerm2]) {
    return <HtmlParser text={`English Title: <b>${item[searchTerm]}</b>`} />;
  } else {
    return <HtmlParser text={`English Title: <b>N/A</b>`} />;
  }
};

export default MoreInfoNonEnglishName;
