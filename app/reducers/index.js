import { combineReducers } from 'redux';

import { recs, recsHasErrored, recsIsLoading, recActive, postRec } from 'recs'


export default combineReducers({
	recs,
	recsHasErrored,
	recsIsLoading,
	recActive,
	postRec
});