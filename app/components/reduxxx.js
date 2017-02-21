var redux = require('redux');

console.log('Reduxxx xxx xxx ... xxx');


// reducer takes (state, action)
// returns new state
var reducer = (state = {name: 'Anonymous'}, action) => {
	// same as assigning default state in the argument
	// state = state || {name: 'Anonymous'};
	return state;
};

var store = redux.createStore();

var currentState = store.getState();
console.log('currentState', currentState);