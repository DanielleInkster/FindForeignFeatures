// eslint-disable-next-line
import React from "react";
import ReactHtmlParser from "react-html-parser";

const HtmlParser = ({ text }) => {
  return ReactHtmlParser(text);
};

export default HtmlParser;
