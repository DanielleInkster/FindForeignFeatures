import React, { Component } from 'react';
import Movies from '../../containers/Movies'
import Recommendations from '../../containers/Recommendations'
import './App.css';
import ChooseMedia from '../ChooseMedia';

class App extends Component{
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

  handleMediaSelection  = (results) => {
    this.setState({ mediaSelection: results });
  }

  handleFetchState = (results) => {
    this.setState({ isFetching: results });
  }

  render(){

    return (
      <div className="App">
        <header className="App-header">
          <h1> Find Foreign Features </h1>
        </header>
          <br/>
        <ChooseMedia handleMediaSelection = {this.handleMediaSelection}/>
        {this.state.mediaSelection.trim() !== '' &&
        <Movies handleResults={this.handleResults} handleFetchState={this.handleFetchState}  />
        }
        <Recommendations movie={this.state.movieSelection} isFetching={this.state.isFetching} handleFetchState={this.handleFetchState}/>
      </div>
    );
    }
}

export default App;
