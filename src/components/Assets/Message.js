import React from "react";
import HtmlParser from "./HtmlParser";

const Message = ({ text }) => {
  return <HtmlParser text={text} />;
};

export default Message;
