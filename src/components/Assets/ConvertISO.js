import React from "react";
import HtmlParser from "./HtmlParser";
import ISO6391 from "iso-639-1";

const ConvertISO = ({ language }) => {
  let lang = language === "cn" ? "Chinese" : ISO6391.getName(language);

  return <HtmlParser text={`Language: <b>${lang}</b>`} />;
};

export default ConvertISO;
