
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
			return action.recs
		default:
			return state;
	}
}

export const recActive = (state = {word: "Select a word"}, action) => {
	switch (action.type) {
		case c.REC_ACTIVE:
			return action.rec
		default:
			return state
	}
}

export const postRec = (state = {word: "NOT_GREAT_SUCCESS!!!"}, action) => {
	switch (action.type) {
		case c.POST_REC:
			return action.rec
		default:
			return state
	}
}
