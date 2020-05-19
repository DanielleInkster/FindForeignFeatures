import React, { Component } from 'react';
import Movies from '../../containers/Movies'
import Recommendations from '../../containers/Recommendations'
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      movieSelection: [],
      isFetching: false
    }
  }

  handleResults = (results) => {
    this.setState({ movieSelection: results });
  }

  handleFetchState = (results) => {
    this.setState({ isFetching: results });
  }

  render(){

    return (
      <div className="App">
        <header className="App-header">
          <h1>
          Find Foreign Features
          </h1>
        </header>
          <br/><br/>
          <Movies handleResults={this.handleResults} handleFetchState={this.handleFetchState}  />
          <Recommendations movie={this.state.movieSelection} isFetching = {this.state.isFetching} />
      </div>
  );
    }
}

export default App;
