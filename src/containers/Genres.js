// eslint-disable-next-line
import React, { useEffect } from "react";

function Genres({ item, genreHandler }) {
  useEffect(() => {
    if (item.genre_ids !== undefined) {
      genreHandler(item.genre_ids);
    } else {
      let ids = getIds();
      genreHandler(ids);
    }
  });

  const getIds = () => {
    let arr = [];
    item.genres.forEach((entry) => {
      arr.push(entry.id);
    });
    return arr;
  };

  return null;
}

export default Genres;
