import React, { Component } from 'react';
import Message from '../Message'
import Series from '../../containers/Series'
import './App.css';

class App extends Component{
  
  render(){
    let input  = "Here you can find all of your most-loved series."

    return (
      <div className="App">
        <header className="App-header">
          <p>
          Find Foreign Features
          </p>
        </header>
          <br/><br/>
          <Series/>
      </div>
  );
    }
}

export default App;
