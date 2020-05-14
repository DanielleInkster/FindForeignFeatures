import React, { Component } from 'react';
import Series from '../../containers/Series'
import './App.css';

class App extends Component{
  
  render(){

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
