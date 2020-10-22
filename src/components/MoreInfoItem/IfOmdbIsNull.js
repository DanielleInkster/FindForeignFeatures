import React from "react";

const IfOmdbIsNull = ({ tmdb, omdb }) => {
  let data = "";
  if (omdb !== undefined && omdb !== "N/A") {
    data = omdb;
  } else if (
    (omdb === undefined || omdb === "N/A") &&
    tmdb !== undefined &&
    tmdb !== " min"
  ) {
    data = tmdb.toString();
  } else {
    data = "N/A";
  }

  return (
    <span>
      {data} <br />
    </span>
  );
};

export default IfOmdbIsNull;
