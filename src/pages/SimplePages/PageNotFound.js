import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Assets/Button";
import NotFound from "../../Images/404.gif";
import "../../stylesheets/SimplePages/PageNotFound.css";

const PageNotFound = () => (
  <div>
    <img src={NotFound} alt="Not Found" id="NotFound" />
    <br />
    <Link to={{ pathname: "/" }}>
      <Button value="Start a New Search" />
    </Link>
  </div>
);
export default PageNotFound;
