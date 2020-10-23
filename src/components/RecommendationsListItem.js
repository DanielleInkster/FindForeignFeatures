import React from "react";
import ConvertISO from "./Assets/ConvertISO";
import ImageUrl from "./ImageUrl";
import Title from "./Title";
import NonEnglishName from "./NonEnglishName";
import FindYear from "./Assets/FindYear";

const RecommendationsListItem = ({ item, type }) => {
  return (
    <div>
      <ImageUrl item={item} />
      <p className="mediaHeading">
        <Title item={item} type={type} />
      </p>
      <hr />
      <p id="nonEnglishHeading">
        <NonEnglishName item={item} type={type} />
      </p>
      <p id="text">
        <FindYear item={item} type={type} />
      </p>
      <p id="text">
        <ConvertISO language={item.original_language} />
      </p>
      <p id="overview">
        {item.overview.length > 0 ? item.overview.slice(0, 75) + "..." : ""}
      </p>
    </div>
  );
};

export default RecommendationsListItem;
