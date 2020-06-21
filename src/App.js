import React, { Component } from 'react';
import ScrollButton from './components/Assets/ScrollButton';

import './App.css'
import Routes from './components/Routes';
import {BrowserRouter as Router} from "react-router-dom"


class App extends Component {

    render() {
        return (
            <div>
            <Router onUpdate={() => window.scrollTo(0, 0)}>
               <Routes/>
            </Router>
                <ScrollButton scrollStepInPx='100' delayInMs='16.66'/>
            </div>
            
        );
    }
}
export default App;