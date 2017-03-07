import { combineReducers } from 'redux';

import { records, recordsHasErrored, recordsIsLoading } from './records'


export default combineReducers({
	records,
	recordsHasErrored,
	recordsIsLoading
});