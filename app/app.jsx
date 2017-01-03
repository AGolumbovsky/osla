var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// require local modules
var Main = require('Main');
var Dictionary = require('Dictionary');
var About = require('About');
var AddWord = require('AddWord');

// load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      <Route path="dictionary" componenet={Dictionary}/>
      <Route path="about" component={About}/>
      <Route path="addWord" component={AddWord}/>

    </Route>
  </Router>,

  document.getElementById('app')
);