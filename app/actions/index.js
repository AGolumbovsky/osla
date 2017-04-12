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
			.then((res) => {
				if(!res.ok){
					throw Error(res.statusText);
				}
				return res;
			})
			.then((res) => res.json())
			.then((rec) => dispatch(recActive(rec)))
	}
}

export const recActive = (rec) => {
	return {
			type: c.REC_ACTIVE,
			rec
	}
}

export const postRec = (rec) => {
	return {
			type: POST_REC,
			rec
	}
}

