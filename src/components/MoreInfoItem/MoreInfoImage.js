import React from "react";
import NoImage from "../../Images/NoImage.png";
import "../../stylesheets/MoreInfo/MoreInfoImage.css";

export default function MoreInfoImage({ omdb, tmdb }) {
  function choosePicSource() {
    if (tmdb.poster_path !== null) {
      return `https://image.tmdb.org/t/p/w500/${tmdb.poster_path}`;
    } else if (
      omdb.Poster !== null &&
      omdb.Poster !== "N/A" &&
      omdb.Poster !== undefined
    ) {
      return omdb.Poster;
    } else {
      return NoImage;
    }
  }

  return <img src={choosePicSource()} alt={"Media Poster"} id="recPoster" />;
}
