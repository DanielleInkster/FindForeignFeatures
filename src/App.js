import React from 'react';
import Intro from './components/Intro'
import './App.css';

function App() {
  state ={
    series:[]
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
         TV Series List
        </p>
      </header>
      <Intro message ="Here you can find all of your most loved series."/>
    </div>
  );
}

export default App;
