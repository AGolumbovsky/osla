export const FIND_REC = 'FIND_REC';
export const ADD_REC = 'ADD_REC';
export const REMOVE_REC = 'REMOVE_REC';
export const REC_HAS_ERRORED = 'REC_HAS_ERRORED';


export function recordsHasErrored(bool) {
	return {
		type: REC_HAS_ERRORED,
		hasErrored: bool
	}
}

export function recordsIsLoading(bool) {
	return {
		type: 'RECORDS_IS_LOADING',
		isLoading: bool
	}
}

export function recordsFetchDataSuccess(records) {
	return {
		type: 'RECORDS_FETCH_DATA_SUCCESS',
		records
	}
}


/*export const findRecord = (word) => {
	return (dispatch, getState) => {

		const word = getState().word;
		
		fetch('https://osla.herokuapp.com/dict', {
			method: 'GET', 
			headers
		})
		.then((data) => data.json())
		.then(({word}) => {
			dispatch({
				type: FIND_RECORD,
				payload: word
			})
		})

	}
}*/

export function recordsFetchData(uri) {
	return (dispatch) => {
		dispatch(recordsIsLoading(true));

		fetch(uri)
			.then((response) => {
				if(!response.ok) {
					throw Error(response.statusText);
				}
				dispatch(recordsIsLoading(false));

				return response;
			})
			.then((response) => response.json())
			.then((records) => dispatch(recordsFetchData(records)))
			.catch(() => dispatch(recordsHasErrored(true)));
	}
}

export const addRec = (record) => {
	return (dispatch, getState) => {


		dispatch({
			type: ADD_REC,
			payload: record
		})
	}
}

export const removeRec = (word) => ({
	type: REMOVE_REC,
	payload: word
})