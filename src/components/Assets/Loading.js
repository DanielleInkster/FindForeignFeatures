import React from "react";
import loaderSrc from "../../Images/loading.gif";
import "../../stylesheets/Assets/Loading.css";

const Loading = () => (
  <div>
    <img src={loaderSrc} alt="Loading" id="Loading" />
  </div>
);
export default Loading;
