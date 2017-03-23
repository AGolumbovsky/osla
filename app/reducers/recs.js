
import * as c from 'actionTypes';

export const recsIsLoading = (state = false, action) => {
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

export const recs = (state = [{word: "test_deflt"}, {id: 999}], action) => {
	switch (action.type) {
		case c.RECS_FETCH_DATA_SUCCESS:
			// return action.recs;
			return [{"test": "test"}]
		default:
			return state;
	}
}
