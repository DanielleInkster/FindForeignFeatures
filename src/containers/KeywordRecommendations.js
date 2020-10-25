import React, { Component } from "react";

class KeywordRecommendations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rawKeywordRecommendations: [],
    };
  }

  createKeywordFetch = (value) => {
    value.forEach(async (num) => {
      const data = await fetch(`/fetchKeywordRecs/${this.props.type}/${num}/1`);
      const parsedData = await data.json();
      this.fetchKeywordRecs(await parsedData, num);
    });
  };

  fetchKeywordRecs = async (info, num) => {
    if (info.total_pages === 1) {
      this.pushKeywordRecs(info);
    } else {
      let i;
      let pages = info.total_pages < 75 ? info.total_pages : 75;
      for (i = 1; i <= pages; i++) {
        const data = await fetch(
          `/fetchKeywordRecs/${this.props.type}/${num}/${i}`
        );
        const parsedData = await data.json();
        this.pushKeywordRecs(await parsedData);
      }
    }
  };

  pushKeywordRecs = (data) => {
    data.results.forEach((movie) => {
      if (movie.original_language !== "en")
        this.setState((previousState) => ({
          rawKeywordRecommendations: [
            ...previousState.rawKeywordRecommendations,
            movie,
          ],
        }));
    });
  };

  getRecommendations() {
    this.props.rawKeywordHandler(this.state.rawKeywordRecommendations);
  }

  returnRecommendations() {
    this.createKeywordFetch(this.props.keywords);
    setTimeout(() => {
      this.getRecommendations();
    }, 3500);
  }

  render() {
    return (
      <div>
        {this.state.rawKeywordRecommendations.length === 0 &&
          this.returnRecommendations()}
      </div>
    );
  }
}

export default KeywordRecommendations;
