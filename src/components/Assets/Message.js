import React from "react";
import HtmlParser from "./HtmlParser";

const Message = (props) => {
  return <HtmlParser text={props.text} />;
};

export default Message;
