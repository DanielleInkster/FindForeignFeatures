import React, { Component } from 'react';
import Message from '../Message'
import Form from '../Form'
import Series from '../../containers/Series'
import './App.css';

class App extends Component{

  constructor() {
    super();
    this.state = {
      form: ''
    };
  }
  handleFormData = (e) => {
    e.length > 0 ? this.setState({ form: e }) : alert("Please enter a series name")
  }
 
  render(){
    let input  = "Here you can find all of your most-loved series."

    return (
      <div className="App">
        <header className="App-header">
          <p>
          Find Foreign Features
          </p>
        </header>
        <br />
          <Message text = {input}/>
        <br/>
        <br />
          < Form handleData={this.handleFormData}/>
        <br />
          <Series form={this.state.form} />
      </div>
  );
    }
}

export default App;
