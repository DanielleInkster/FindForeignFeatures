import React, { Component } from 'react';
import Intro from '../Intro'
import Form from '../Form'
import Series from '../../containers/Series'
import './App.css';

const API_KEY = `${process.env.REACT_APP_DB_API_KEY}`

class App extends Component{

  constructor() {
    super();
    this.state = {
      name: 'React',
      form: ''
    };
  }
  handleFormData = (e) => {
    console.log(API_KEY) 
    this.setState({ form: e })
   
  }
 
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
        < Form handleData={this.handleFormData}/>
        <br />
        <Series form={this.state.form} />
    </div>
  );
    }
}

export default App;
