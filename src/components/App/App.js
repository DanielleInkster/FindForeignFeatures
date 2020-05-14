import React, { Component } from 'react';
import Movies from '../../containers/Movies'
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
          <Movies/>
      </div>
  );
    }
}

export default App;
