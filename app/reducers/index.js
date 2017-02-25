import { combineReducers } from 'redux';

import recordReducer from './record';

var rootReducer = combineReducers({
	record: recordReducer
	// make some some
});

export default rootReducer;