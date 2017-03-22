import * as c from 'actionTypes';


export const recsIsLoading = (bool) => {
	return {
		type: c.RECS_IS_LOADING,
		isLoading: bool
	}
}

export const recsHasErrored = (bool) => {
	return {
		type: c.RECS_HAS_ERRORED,
		hasErrored: bool
	}
}


export const recsFetchDataSuccess = (recs) => {
	return {
		type: c.RECS_FETCH_DATA_SUCCESS,
		recs
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

export recsFetchData = (uri) => {

	return (dispatch) => {
		dispatch(recsIsLoading(true));
		console.log("recsFetchData is working")

		fetch(uri)
			.then((res) => {
				if(!res.ok) {
					throw Error(response.statusText);
				}
				dispatch(recsIsLoading(false));

				return res;
			})
			.then((res) => res.json())
			.then((recs) => dispatch(recsFetchDataSuccess(recs)))
			.catch(() => dispatch(recsHasErrored(true)));
	}
}

export const addRec = (rec) => {

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