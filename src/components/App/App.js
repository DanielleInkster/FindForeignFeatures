import React, { Component } from 'react';
import 'whatwg-fetch'
import Intro from '../Intro'
import Form from '../Form'
import Series from '../../containers/Series'
import './App.css';


class App extends Component{
 
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <p>
         TV Series List
        </p>
      </header>
        <br />
      <Intro message ="Here you can find all of your most-loved series."/>
      <br/>
      <br />
      < Form />
        <br />
      < Series />
    </div>
  );
    }
}

export default App;
