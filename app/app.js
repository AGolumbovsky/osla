import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// require local modules
import Main from 'Main';
import Dictionary from 'Dictionary';
import Story from 'Story';
import AddWord from 'AddWord';
import Contact from 'Contact';
import Grammar from 'Grammar';

// don't know what this is.... find out 
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// load foundation
$(document).foundation();

// app css
import'style!css!sass!applicationStyles';

ReactDOM.render(
  <Provider store={store}>

    <Router history={hashHistory}>
      <Route path="/" component={Main}>

        <IndexRoute component={Dictionary}/>
        <Route path="addWord" component={AddWord}/>
        <Route path="story" component={Story}/>
        <Route path="contact" component={Contact}/>
  	    <Route path="grammar" component={Grammar}/>

      </Route>
    </Router>

  </Provider>,

  document.getElementById('app')
);