import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import KeywordRecommendations from "./KeywordRecommendations";
import Genres from "./Genres";
import Compare from "./Compare";
import SortRecommendations from "./SortRecommendations";

function Search({props, selection}) {
  const [keywords, setKeywords] = useState([])
  const [rawKeywordRecommendations, setrawKeywordRecommendations] = useState([])
  const [genres, setGenres] = useState([])
   const [comparedRecommendations, setComparedRecommendations] = useState([])

   useEffect(() => {
     if (
      keywords.length === 0 &&
      props.location.keywords !== undefined
    ) {
      setKeywords(props.location.keywords);
    }
    window.scrollTo(0, 0);
  });


  function redirect(to, recommendations) {
    props.history.push({ pathname: to, recommendations });
  }

  function noResults() {
    redirect(
      `/${props.match.params.mediaType}/${props.match.params.id}/noresults`
    );
  }

  function rawKeywordHandler(results){
    results.length !== 0
      ? setrawKeywordRecommendations(results)
      : noResults();
  };

  function genreHandler(results){
    setGenres(results);
  };

  function comparedHandler(results){
    results.length !== 0
      ? setComparedRecommendations(results)
      : noResults();
  };

    return (
      <div>
        {keywords.length !== 0 &&
          rawKeywordRecommendations.length === 0 && (
            <KeywordRecommendations
              keywords={keywords}
              type={props.match.params.mediaType}
              rawKeywordHandler={rawKeywordHandler}
            />
          )}
        {selection !== "" && genres.length === 0 && (
          <Genres
            item={selection}
            genreHandler={genreHandler}
          />
        )}
        {rawKeywordRecommendations.length !== 0 &&
          genres.length !== 0 && (
            <Compare
              genres={genres}
              keywordRecs={rawKeywordRecommendations}
              comparedHandler={comparedHandler}
            />
          )}
        {comparedRecommendations.length !== 0 && (
          <SortRecommendations
            comparedRecommendations={comparedRecommendations}
            info={props}
          />
        )}
      </div>
    );
  }

const mapStateToProps = (state) => {
  return {
    selection: state.selection,
    allKeywords: state.allKeywords,
  };
};

export default connect(mapStateToProps, null)(Search);
