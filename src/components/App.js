import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import { BrowserRouter as Router } from "react-router-dom"

import ScrollButton from './Assets/ScrollButton';

import '../stylesheets/App.css'

const trackingId = "UA-171500069-1"; 
ReactGA.initialize(trackingId);



const history = createBrowserHistory();
history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
});




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