import React from "react";
import loaderSrc from "../../Images/loading.webm";
import "../../stylesheets/Assets/Loading.css";

const Loading = () => (
  <div>
    <img src={loaderSrc} alt="Loading" id="Loading" />
  </div>
);
export default Loading;
