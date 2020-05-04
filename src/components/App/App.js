import React, { Component } from 'react';
import 'whatwg-fetch'
import Intro from '../Intro'
import './App.css';

class App extends Component{
  state = {
    series:[]
  }
  componentDidMount(){
    fetch('http://api.tvmaze.com/search/shows?q=steven-universe')
      .then((response) => {
        return response.json();
      }).then((data) => {
          this.setState({series: data[0].show.summary})
        })
  }

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <p>
         TV Series List
        </p>
      </header>
      <Intro message ="Here you can find all of your most loved series."/>
      <br/>
      "{this.state.series}"
    </div>
  );
    }
}

export default App;
