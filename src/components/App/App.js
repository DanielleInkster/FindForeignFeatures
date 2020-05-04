import React, { Component } from 'react';
import Intro from '../Intro'
import './App.css';

class App extends Component{
  state = {
    series:[]
  }
  componentDidMount(){
    const series =["WestWorld", "Steven Universe"]
    setTimeout(()=>{
        this.setState({ series: series});
    }, 2000)
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
      The length of series array = {this.state.series.length}
    </div>
  );
    }
}

export default App;
