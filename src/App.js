import React from 'react';
import './App.css';

const Intro = (props) => (
  <p className ="App-Intro">Practice Component</p>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         TV Series List
        </p>
      </header>
      <Intro />
    </div>
  );
}

export default App;
