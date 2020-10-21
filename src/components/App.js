import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Routes from '../Routes';
import { BrowserRouter as Router } from "react-router-dom"
import { createBrowserHistory } from 'history';

import ScrollButton from './Assets/ScrollButton';

import '../stylesheets/App.css'


const history = createBrowserHistory();

function initializeReactGA(){
    ReactGA.initialize("UA-171500069-1");

    history.listen(location => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    })
}

class App extends Component {

    render() {
        return (
            <div>
                {initializeReactGA()}
        
            <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
               <Routes/>
            </Router>
                <ScrollButton scrollStepInPx='100' delayInMs='16.66'/>
            </div>
            
        );
    }
}
export default App;