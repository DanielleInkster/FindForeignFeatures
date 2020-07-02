import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

import './index.css';
import App from '../src/components/App.js';

import * as serviceWorker from '../src/serviceWorker';

import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from '../src/store/reducer'

const trackingId = "UA-171500069-1"; 
ReactGA.initialize(trackingId);

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


const store = createStore(reducer)

ReactDOM.render(<Provider store = {store}><App /></Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
