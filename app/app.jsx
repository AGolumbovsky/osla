var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// require local modules
var Main = require('Main');
var About = require('About');
var AddWord = require('AddWord');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      <Route path="about" component={About}/>
      <Route path="addWord" component={AddWord}/>

    </Route>
  </Router>,

  document.getElementById('app')
);