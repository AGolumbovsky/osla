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

export const recsFetchData = (uri) => {
	return (dispatch) => {
		dispatch(recsIsLoading(true));
		fetch(uri)
			.then((res) => {
				if(!res.ok) {
					throw Error(res.statusText);
				}
				dispatch(recsIsLoading(false));
				return res;
			})
			.then((res) => res.json())
			.then((recs) => dispatch(recsFetchDataSuccess(recs)))
			.catch(() => dispatch(recsHasErrored(true)));
	}
}

export const findRec = (queryStr) => {
	return (dispatch) => {
		fetch(queryStr)
			.then((response) => {
				if(!response.ok){
					throw Error(response.statusText);
				}
				return response;
			})
			.then((response) => response.json())
			.then((rec) => dispatch(recActive(rec)))
			.catch(() => dispatch(recsHasErrored(true)));
	}
}

export const recActive = (rec) => {
	return {
		type: c.REC_ACTIVE,
		rec
	}
}

export const recPosted = (rec) => {
	return {
		type: c.REC_POSTED,
		rec
	}
}

export const postRec = (rec) => {
	return (dispatch) => {
		console.log("rec in post req is:", rec);
		fetch('/api/add', { 
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(rec) // changed this july 29
		})
		.then((response) => response.json())
		.then((body) => {
			console.log("POST response.body is:", body);
			dispatch(recActive(rec));
			dispatch(recPosted(rec));
			dispatch(recsFetchData("api/dict"));
		});
	}
}

/*fetch('htt://127.0.0.1', {  
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})*/

