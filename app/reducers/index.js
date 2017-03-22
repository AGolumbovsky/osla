import { combineReducers } from 'redux';

import { recs, recsHasErrored, recsIsLoading } from 'recs'


export default combineReducers({
	recs,
	recsHasErrored,
	recsIsLoading
});