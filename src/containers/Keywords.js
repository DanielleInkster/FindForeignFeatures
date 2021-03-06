import React, { Component } from "react";
import { connect } from "react-redux";
import SelectKeywords from "./SelectKeywords";

class Keywords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      fetchRun: false,
    };
  }

  componentDidMount() {
    if (this.props.selection === "") {
      this.fetchMissingData(
        this.props.match.params.mediaType,
        this.props.match.params.id
      );
    }

    if (this.props.selection !== "" && this.state.amount === 0) {
      this.runKeywordFetch();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.selection !== prevProps.selection &&
      this.state.amount === 0
    ) {
      this.runKeywordFetch();
    }
  }

  determineType = (type) => {
    let searchTerm = type === "tv" ? "results" : "keywords";
    return searchTerm;
  };

  handleData = (data) => {
    if (data === null) {
      return [];
    } else if (data.length < 4) {
      let arr = [];
      data.forEach((entry) => {
        arr.push(entry.id);
      });
      return arr;
    } else {
      return data;
    }
  };

  async fetchMissingData(mediaType, itemId) {
    const data = await fetch(`/fetchTMDBInfo/${mediaType}/${itemId}`);
    const parsedData = await data.json();
    this.props.storeSelection(await parsedData);
  }

  findKeywordsFetch = async (mediaType, id, searchTerm) => {
    const data = await fetch(`/fetchKeywords/${mediaType}/${id}`);
    const parsedData = await data.json();
    let arr = [];
    this.setState({ amount: parsedData[searchTerm].length });
    parsedData[searchTerm].length !== 0
      ? arr.push(this.handleData(parsedData[searchTerm]))
      : this.noResults();
    this.props.storeKeywords(arr);
    this.setState({ fetchRun: true });
  };

  runKeywordFetch = () => {
    let term = this.determineType(this.props.match.params.mediaType);
    this.findKeywordsFetch(
      this.props.match.params.mediaType,
      this.props.match.params.id,
      term
    );
  };

  redirect(to, keywords) {
    this.props.history.push({ pathname: to, keywords });
    this.setState({ fetchRun: false });
  }

  noResults() {
    this.redirect(
      `/${this.props.match.params.mediaType}/${this.props.match.params.id}/noresults`
    );
  }

  render() {
    return (
      <div>
        {this.state.fetchRun === true && this.state.amount >= 4 && (
          <SelectKeywords
            type={this.props.match.params.mediaType}
            id={this.props.match.params.id}
            history={this.props.history}
          />
        )}
        {0 < this.state.amount &&
          this.state.amount < 4 &&
          this.state.fetchRun === true &&
          this.redirect(
            `/${this.props.match.params.mediaType}/${this.props.match.params.id}/search`,
            this.props.allKeywords
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allKeywords: state.allKeywords,
    selection: state.selection,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeKeywords: (list) => dispatch({ type: "KEYWORDS", val: list }),
    storeSelection: (selection) =>
      dispatch({ type: "SELECTION", val: selection }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Keywords);
