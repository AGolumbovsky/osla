const INIT_STATE =  [{word: "nada to see here"}, {id: 999}];

import { FIND_RECORD } from '../actions';

export function recordsHasErrored(state = false, action) {
	switch (action.type) {
		case 'RECORDS_HAS_ERRORED':
			return action.hasErrored;
		default: 
			return state;
	}
}

export function recordsIsLoading(state = false, action) {
	switch (action.type) {
		case 'RECORDS_IS_LOADING':
			return action.isLoading;
		default:
			return state;
	}
}

export const records = (state = INIT_STATE, action) => {
	switch (action.type) {
		case 'RECORDS_FETCH_DATA_SUCCESS':
			return action.records;
		default:
			return state;
	}
}