import React, { Component } from 'react';
import Icon from '../Icon';
import Home from '../Home'
import NoResults from '../NoResults'
import PageNotFound from '../PageNotFound'
import Media from '../../containers/Media'
import Search from '../../containers/Search'
import SelectKeywords from '../../containers/SelectKeywords'
import MediaList from '../MediaList'
import RecommendationsList from '../RecommendationsList'

import {
    Link,
    Switch,
    Route
} from "react-router-dom"


class Routes extends Component {

    render() {
        return (
            <div>
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
                            <Route exact match path="/:mediaType/:id/search" render={(props) => <Search {...props} />} />
                            <Route exact match path="/:mediaType/:id/search/keywords" render={(props) => <SelectKeywords {...props} />} />
                            <Route exact match path="/:mediaType/:id/recommendations" render={(props) => <RecommendationsList {...props} />} />
                            <Route exact match path="/:mediaType/:id/noresults" render={() => { return (<NoResults />) }} />
                            <Route path="*" render={() => { return (<PageNotFound />) }} />
                        </Switch>
                    </div>
            </div>
        );
    }
}
export default Routes;