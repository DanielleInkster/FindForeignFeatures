import React from "react";
import Message from "./Assets/Message";
import Loading from "./Assets/Loading";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Search from "../containers/Search";

let input = "<div id='wow'>Searching...</div>";
let input2 = "<div id = 'text'>This can take up to 10 seconds.</div>";

const SearchPage = (props) => {
  if (props.allKeywords.length !== 0) {
    return (
      <div>
        <Loading />
        <h2>
          <Message text={input} />
        </h2>
        <Message text={input2} />
        <Search props={props} />
      </div>
    );
  } else {
    return <Redirect to="error/404" />;
  }
};

const mapStateToProps = (state) => {
  return {
    allKeywords: state.allKeywords,
  };
};

export default connect(mapStateToProps, null)(SearchPage);
