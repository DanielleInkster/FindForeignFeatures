import React from "react";
import HtmlParser from "./HtmlParser";

const FindYear = ({ item, type }) => {
  let searchTerm = type === "tv" ? "first_air_date" : "release_date";

  let year =
    item.hasOwnProperty(searchTerm) && item[searchTerm] !== ""
      ? item[searchTerm].slice(0, 4)
      : "[Unknown]";

  return <HtmlParser text={`Year of Release: <b>${year}</b>`} />;
};
export default FindYear;
