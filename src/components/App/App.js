import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser'; 
import 'whatwg-fetch'
import Intro from '../Intro'
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
      <Intro message ="Here you can find all of your most-loved series."/>
      <br/>
      < Series />
    </div>
  );
    }
}

export default App;
