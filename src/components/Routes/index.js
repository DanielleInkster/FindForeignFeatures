import React, { Component } from 'react';
import Icon from '../Assets/Icon';
import Home from '../Home'
import NoResults from '../SimplePages/NoResults'
import PageNotFound from '../SimplePages/PageNotFound'
import Media from '../../containers/Media'
import Keywords from '../../containers/Keywords'
import SearchPage from '../SearchPage/SearchPage'
import SelectKeywords from '../../containers/SelectKeywords'
import MoreInfo from '../../containers/MoreInfo'
import MediaList from '../MediaList'
import FAQ from '../SimplePages/FAQ'
import Contact from '../SimplePages/Contact'
import RecommendationsList from '../RecommendationsList'

import {
    Link,
    Switch,
    Route
} from "react-router-dom"


class Routes extends Component {

    render() {
        return (
            <div className = 'page-container'>
                <div className='content-container'>
                <div className="App">
                    <header className="App-header">
                        <div className="Container">
                            <span id="Icon"><Icon /></span>
                            <Link to={{ pathname: '/' }}>
                                <p className="SiteTitle"> Find Foreign Features </p>
                            </Link>
                        </div>
                    </header>
                    <br />
                </div>

                    <div>
                        <Switch>
                            <Route exact match path="/" render={() => { return (<Home />) }} />
                            <Route exact match path="/:mediaType(tv|movie)" render={(props) => <Media {...props} />} />
                            <Route exact match path="/:mediaType/search/:name" render={(props) => <MediaList {...props} />} />
                            <Route exact match path="/:mediaType/:id" render={(props) => <Keywords {...props} />} />
                            <Route exact match path="/:mediaType/:id/search" render={(props) => <SearchPage {...props} />} />
                            <Route exact match path="/:mediaType/:id/search/keywords" render={(props) => <SelectKeywords {...props} />} />
                            <Route exact match path="/:mediaType/:id/recommendations" render={(props) => <RecommendationsList {...props} />} />
                            <Route exact match path="/:mediaType/:id/recommendations/:recId" render={(props) => <MoreInfo {...props} />} />
                            <Route exact match path="/:mediaType/:id/noresults" render={() => { return (<NoResults />) }} />
                            <Route exact match path="/FAQ" render={() => { return (<FAQ />) }} />
                            <Route exact match path="/contact" render={() => { return (<Contact />) }} />
                            <Route path="*" render={() => { return (<PageNotFound />) }} />
                        </Switch>
                    </div>
                </div>
                <footer className = 'App-footer'>
                <Link to={{ pathname: '/' }} className='Home'>Home</Link> 
                <Link to={{ pathname: '/FAQ' }} className='FAQ'>FAQ</Link> 
                <Link to={{ pathname: '/contact' }} className ='Contact'>Contact Us</Link>
                </footer>
            </div>
        );
    }
}
export default Routes;