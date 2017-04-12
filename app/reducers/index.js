import { combineReducers } from 'redux';

import { recs, recsHasErrored, recsIsLoading, recActive, postRec } from 'recsReducer'


export default combineReducers({
	recs,
	recsHasErrored,
	recsIsLoading,
	recActive,
	postRec
});