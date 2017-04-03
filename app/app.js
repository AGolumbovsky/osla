import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// import local modules
import Main from 'Main';
import Dict from 'Dict';
import AddRec from 'AddRec';
import Grammar from 'Grammar';
import Details from 'Details';

const middleware = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// load foundation
$(document).foundation();

// app css
import'style!css!sass!applicationStyles';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Dict}/>
        <Route path="addword" component={AddRec}/>
  	    <Route path="grammar" component={Grammar}/>
      </Route>
    </Router>
  </Provider>,

  document.getElementById('app')
);
