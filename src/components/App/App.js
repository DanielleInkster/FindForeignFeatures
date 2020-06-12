import React, { Component } from 'react';
import ScrollButton from '../ScrollButton';
import './App.css'
import Routes from '../Routes';
import {BrowserRouter as Router} from "react-router-dom"


class App extends Component {

    render() {
        return (
            <div>
            <Router>
               <Routes/>
            </Router>
                <ScrollButton />
            </div>
            
        );
    }
}
export default App;