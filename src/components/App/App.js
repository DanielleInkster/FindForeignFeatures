import React, { Component } from 'react';
import Media from '../../containers/Media'
import Recommendations from '../../containers/Recommendations'
import ChooseMedia from '../ChooseMedia';
import Message from '../Message';
import './App.css';


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

  handleFetchState = (results) => {
    this.setState({ isFetching: results });
  }

  onClick = (e) => {
    e.target.value === 'Film' ? this.setState({ mediaSelection: 'movie' }) : this.setState({ mediaSelection: 'tv' })
    this.setState({ showing: false })
  }

  homeScreen(input, input2){
    if (this.state.mediaSelection.trim() === ''){
      return( 
      <div>
          <h2><Message text={input} /></h2>
          <p><Message text={input2} /></p>
          <ChooseMedia onClick ={this.onClick} />
      </div>
      )
    }

  }

  render(){
    let input = "Welcome to Find Foreign Features, the site that recommends foreign "+
                "films and tv series based on English ones you already love."
    let input2 = "What are you looking for today?" 
      
    return (
      <div className="App">
        <header className="App-header">
          <h1> Find Foreign Features </h1>
        </header>
          <br/>
        {this.homeScreen(input,input2)}
        { this.state.mediaSelection.trim() !== '' &&
        <Media handleResults={this.handleResults} 
        handleFetchState={this.handleFetchState} 
        type ={this.state.mediaSelection}  
        />
        }
        <Recommendations item={this.state.movieSelection} 
        isFetching={this.state.isFetching} 
        handleFetchState={this.handleFetchState}
        type={this.state.mediaSelection} 
        />
      </div>
    );
    }
}

export default App;
