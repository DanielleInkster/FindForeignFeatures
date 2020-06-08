import React, { Component } from 'react';
import './App.css'
import Routes from '../Routes';
import {BrowserRouter as Router} from "react-router-dom"


class App extends Component {

    render() {
        return (
    
            <Router>
               <Routes/>
            </Router>
            
        );
    }
}
export default App;