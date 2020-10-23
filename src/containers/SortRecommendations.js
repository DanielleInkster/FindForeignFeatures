// eslint-disable-next-line
import React, { useEffect } from "react";
import { connect } from "react-redux";

function SortRecommendations({comparedRecommendations, storeRecommendations,  info}){

 useEffect(() => {
     returnSortedResults(comparedRecommendations);
    window.scrollTo(0, 0);
  });

  function redirect(to) {
    info.props.history.push({ pathname: to });
  }

  function sortResults(arr){
    let sorted = arr.sort((a, b) =>
      b.returns > a.returns ? 1 : a.returns > b.returns ? -1 : 0
    );
    return sorted;
  };

  function returnSortedResults(arr){
    let sorted = sortResults(arr);
    storeRecommendations(sorted.slice(0, 50));
    redirect(
      `/${info.props.match.params.mediaType}/${info.props.match.params.id}/recommendations`
    );
  };

    return null;
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeRecommendations: (list) =>
      dispatch({ type: "RECOMMENDATIONS", val: list }),
  };
};

export default connect(null, mapDispatchToProps)(SortRecommendations);
