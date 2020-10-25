import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../components/Assets/Button";
import Input from "../components/Assets/Input";
import Message from "../components/Assets/Message";
import Loading from "../components/Assets/Loading";

class Media extends Component {
  constructor(props, { match }) {
    super(props);
    this.state = {
      options: [],
      inputValue: "",
      isFetching: false,
      showing: true,
    };
  }

  determineType = (mediaType) => {
    let searchTerm = mediaType === "tv" ? "TV series" : "film";
    return searchTerm;
  };

  createMessage = (mediaType) => {
    let input = "";
    let type = this.determineType(mediaType);
    if (
      this.state.options.length === 0 &&
      this.state.inputValue.trim() === ""
    ) {
      input = `Please enter the name of an English ${type} you enjoy.`;
    } else if (this.state.isFetching === true) {
      input = "<div id = 'wow'>Searching...</div>";
    }
    return input;
  };

  createFetch = async (value) => {
    const data = await fetch(
      `/fetchMedia/${this.props.match.params.mediaType}/${value}`
    );
    const returnData = await data.json();
    await returnData.results.forEach((item) => {
      if (item.original_language === "en")
        this.setState((previousState) => ({
          options: [...previousState.options, item],
        }));
    });
  };

  searchForMedia = (data) => {
    this.setState({ isFetching: true });
    this.createFetch(data);
    this.setState({ showing: false });
  };

  redirect(to, list) {
    this.props.history.push({ pathname: to, list });
  }

  mediaList(list) {
    this.props.storeList(list);
    this.redirect(
      `/${this.props.match.params.mediaType}/search/${this.state.inputValue}`
    );
  }

  noResults() {
    this.redirect(
      `/${this.props.match.params.mediaType}/${this.props.match.params.id}/noresults`
    );
  }

  handleSubmit = (e) => {
    if (this.state.inputValue.trim() === "") {
      alert("Please enter a title.");
    } else {
      this.searchForMedia(this.state.inputValue);
      setTimeout(() => {
        this.state.options.length > 0
          ? this.mediaList(this.state.options.slice(0, 6))
          : this.noResults();
      }, 950);
    }
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { showing } = this.state;
    return (
      <div className="body">
        {this.state.isFetching === true && <Loading />}
        <div id="heading">
          <Message
            text={this.createMessage(this.props.match.params.mediaType)}
          />
        </div>
        <br />
        <div style={{ display: showing ? "block" : "none" }}>
          <Input onChange={this.handleChange} />
          <Button value="Search" onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeList: (list) => dispatch({ type: "MEDIA_LIST", val: list }),
  };
};

export default connect(null, mapDispatchToProps)(Media);
