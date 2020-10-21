// eslint-disable-next-line
import React from "react";

const ReleaseDate = (props) => {
  let searchTerm = props.type === "tv" ? "first_air_date" : "release_date";
  let data = "";

  if (props.omdb !== undefined && props.omdb !== "N/A") {
    data = props.omdb;
  } else if (
    props.tmdb[searchTerm] !== undefined &&
    props.tmdb[searchTerm] !== ""
  ) {
    data = props.tmdb[searchTerm];
  } else {
    data = "N/A";
  }
  return data;
};

export default ReleaseDate;
