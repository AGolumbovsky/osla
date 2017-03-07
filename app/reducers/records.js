const INIT_STATE = []

import { FIND_RECORD } from '../actions';

/*export default (state = INIT_STATE, action) => {
	switch (action.type) {
		default: 
			return state;
	}
}*/

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

export function records(state = [], action) {
	switch (action.type) {
		case 'RECORDS_FETCH_DATA_SUCCESS':
			return action.records;
		default:
			return state;
	}
}