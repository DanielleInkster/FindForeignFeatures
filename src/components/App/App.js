import React, { Component } from 'react';
import Home from '../Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" render={
                        ()=>{return(<Home/>)}}/>
                </div>
            </Router>
        );
    }
}
export default App;