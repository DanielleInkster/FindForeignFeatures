import React from "react";
import ConvertISO from "./Assets/ConvertISO";
import ImageUrl from "./ImageUrl";
import Title from "./Title";
import FindYear from "./Assets/FindYear";

const MediaListItem = ({ item, type }) => {
  return (
    <div>
      <ImageUrl item={item} />
      <p className="mediaHeading">
        <Title item={item} type={type} />
      </p>
      <hr />
      <p id="text">
        <FindYear item={item} type={type} />
      </p>
      <p id="text">
        <ConvertISO language={item.original_language} />
      </p>
    </div>
  );
};

export default MediaListItem;
