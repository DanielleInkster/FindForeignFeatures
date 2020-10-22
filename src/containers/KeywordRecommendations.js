import React, { Component } from "react";

class KeywordRecommendations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rawKeywordRecommendations: [],
    };
  }

  createKeywordFetch = (value) => {
    value.forEach((num) => {
      fetch(`/fetchKeywordRecNumber/${this.props.type}/${num}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.fetchKeywordRecs(data, num);
        });
    });
  };

  fetchKeywordRecs = (data, num) => {
    let i;
    let pages = data.total_pages < 150 ? data.total_pages : 150;
    for (i = 1; i <= pages; i++) {
      fetch(`/fetchKeywordRecs/${this.props.type}/${num}/${i}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.pushKeywordRecs(data);
        });
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
    }, 7000);
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