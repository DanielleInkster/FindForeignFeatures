// eslint-disable-next-line
import React from "react";
import ReactHtmlParser from "react-html-parser";

const HtmlParser = (props) => {
  return ReactHtmlParser(props.text);
};

export default HtmlParser;
