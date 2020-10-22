// eslint-disable-next-line
import React from "react";
import "../../stylesheets/MoreInfo/MoreInfoPlot.css";

const DisplayPlot = ({omdb, tmdb}) => {
  let plot =
   omdb !== undefined && omdb.length > tmdb.length
      ? omdb
      :tmdb;
  return (
    <div id="plot">
      {plot} <br />
      <br />
    </div>
  );
};

export default DisplayPlot;
