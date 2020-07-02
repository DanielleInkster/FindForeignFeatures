import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Routes from './Routes';
import { BrowserRouter as Router } from "react-router-dom"

import ScrollButton from './Assets/ScrollButton';

import '../stylesheets/App.css'

function initializeReactGA() {
    ReactGA.initialize("UA-171500069-1");
    ReactGA.pageview('/');
}


class App extends Component {

    render() {
        return (
            <div>
                {initializeReactGA()}
        
            <Router onUpdate={() => window.scrollTo(0, 0)}>
               <Routes/>
            </Router>
                <ScrollButton scrollStepInPx='100' delayInMs='16.66'/>
            </div>
            
        );
    }
}
export default App;