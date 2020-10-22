import React from "react";
import NoImage from "./../Images/NoImage.png";
import "./../stylesheets/ImageUrl/ImageUrl.css";

const ImageUrl = ({ item }) => {
  let picSource =
    item.poster_path != null
      ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      : NoImage;
  return (
    <img src={picSource} alt={item.original_name + " poster."} id="poster" />
  );
};
export default ImageUrl;
