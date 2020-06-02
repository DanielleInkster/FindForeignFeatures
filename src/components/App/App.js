import React, { Component } from 'react';
import './App.css'
import Icon from '../Icon';
import Home from '../Home'
import Media from '../../containers/Media'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

class App extends Component {

    render() {
        return (
            <div>
            <div className="App">
                <header className="App-header">
                    <div className="Container">
                        <span id="Icon"><Icon /></span>
                        <p className="SiteTitle"> Find Foreign Features </p>
                    </div>
                </header>
                <br />
            </div>

            <Router>
                <div>
                    <Switch>
                        <Route exact match path="/" render={ ()=>{return(<Home/>)}}/>
                            <Route exact match path="/:mediaType" render={(props) => <Media {...props} />} />
                            {/* <Route exact match path="/movie" render={(props) => <Media {...props} />} /> */}
                    </Switch>
                </div>
            </Router>
            </div>
        );
    }
}
export default App;