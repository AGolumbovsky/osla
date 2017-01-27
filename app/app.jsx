var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// require local modules
var Main = require('Main');
var Dictionary = require('Dictionary');
var Story = require('Story');
var AddWord = require('AddWord');
var Contact = require('Contact');

// load foundation
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      <IndexRoute component={Dictionary}/>
      <Route path="addWord" component={AddWord}/>
      <Route path="story" component={Story}/>
      <Route path="contact" component={Contact}/>

    </Route>
  </Router>,

  document.getElementById('app')
);