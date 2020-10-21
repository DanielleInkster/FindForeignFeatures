import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import RecommendationsListItem from "../components/RecommendationsListItem";
import Button from "../components/Assets/Button";

const RecommendationsList = (props) => {
  let type = props.match.params.mediaType;
  if (props.recommendations.length !== 0) {
    return (
      <div>
        <div id="column">
          {" "}
          {props.recommendations.map((item) => (
            <li
              style={{ listStyleType: "none" }}
              key={item.id}
              className="card"
            >
              <div className="card-content">
                <RecommendationsListItem
                  item={item}
                  type={props.match.params.mediaType}
                />
                <Link
                  to={{
                    pathname:
                      `/${props.match.params.mediaType}/${props.match.params.id}/` +
                      `recommendations/${item.id}`,
                    type,
                  }}
                >
                  <Button value="More Information" />
                </Link>
              </div>
              <br />
            </li>
          ))}
        </div>
      </div>
    );
  } else {
    return <Redirect to="error/404" />;
  }
};

const mapStateToProps = (state) => {
  return {
    recommendations: state.recommendations,
  };
};

export default connect(mapStateToProps, null)(RecommendationsList);
