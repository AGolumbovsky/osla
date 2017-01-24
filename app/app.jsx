var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// require local modules
var Main = require('Main');
var Dictionary = require('Dictionary');
var About = require('About');
var AddWord = require('AddWord');

// load foundation
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      
      <Route path="addWord" component={AddWord}/>
      <IndexRoute component={Dictionary}/>
      <Route path="about" component={About}/>

    </Route>
  </Router>,

  document.getElementById('app')
);