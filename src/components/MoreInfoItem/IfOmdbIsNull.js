import React from "react";

const IfOmdbIsNull = (props) => {
  let data = "";
  if (props.omdb !== undefined && props.omdb !== "N/A") {
    data = props.omdb;
  } else if (
    (props.omdb === undefined || props.omdb === "N/A") &&
    props.tmdb !== undefined &&
    props.tmdb !== " min"
  ) {
    data = props.tmdb.toString();
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
