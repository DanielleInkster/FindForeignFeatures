// eslint-disable-next-line
import React from "react";

const CheckForUndefined = ({ omdb }) => {
  let data = omdb !== undefined ? omdb : "N/A";
  return (
    <span>
      {data}
      <br />
    </span>
  );
};

export default CheckForUndefined;
