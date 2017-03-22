const INIT_STATE =  [{word: "nada to see here", description: "I can't describe it"}, {id: 999}];

import * as c from 'actionTypes';

export const recsIsLoading = (state = true, action) => {
	switch (action.type) {
		case c.RECS_IS_LOADING:
			return action.isLoading;
		default:
			return state;
	}
}

export const recsHasErrored = (state = false, action) => {
	switch (action.type) {
		case c.RECS_HAS_ERRORED:
			return action.hasErrored;
		default: 
			return state;
	}
}

export const recs = (state = INIT_STATE, action) => {
	switch (action.type) {
		case c.RECS_FETCH_DATA_SUCCESS:
			return action.recs;
		default:
			return state;
	}
}