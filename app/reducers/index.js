import { combineReducers } from 'redux';

import { recs, recsHasErrored, recsIsLoading, recActive } from 'recs'


export default combineReducers({
	recs,
	recsHasErrored,
	recsIsLoading,
	recActive
});