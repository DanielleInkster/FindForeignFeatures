import React, { Component } from 'react';
// import Media from '../../containers/Media'
// import Recommendations from '../../containers/Recommendations'
import ChooseMedia from '../ChooseMedia';
import Message from '../Message';
import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaSelection: '',
      movieSelection: [],
      isFetching: false,
    }
  }

  handleResults = (results) => {
    this.setState({ movieSelection: results });
  }

  handleFetchState = (results) => {
    this.setState({ isFetching: results });
  }

  homeScreen(input, input2) {
    if (this.state.mediaSelection.trim() === '') {
      return (
        <div className="homeScreen">
          <h2 id='heading'><Message text={input} /></h2>
          <p className='text'><Message text={input2} /></p>
          <ChooseMedia onClick={this.onClick} />
        </div>
      )
    }

  }

  render() {
    let input = "Welcome to <u><span id='SiteName'>Find Foreign Features</span></u>, the site that recommends foreign " +
      "films and TV series based on the English ones you already love."
    let input2 = "<div id='text'>What are you looking for today?</text>"

    return (
      
        <div className = 'body'>
          {this.homeScreen(input, input2)}
        </div>
  
    );
  }
}
export default Home;