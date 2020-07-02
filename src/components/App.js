import React, { Component } from 'react';
import Routes from './Routes';
import { BrowserRouter as Router } from "react-router-dom"

import ScrollButton from './Assets/ScrollButton';

import '../stylesheets/App.css'



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