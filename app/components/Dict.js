import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SearchRecForm from 'SearchRecForm';
import RecList from 'RecList';
import Details from 'Details';
import { recsFetchData } from '../actions';

export class Dict extends Component {
	componentWillMount() {
		console.log(recsFetchData);
		this.props.fetchData('127.0.0.1:8666/api/dict');
	}

	render() {

		if (this.props.hasErrored) {
			return <p>My bad</p>
		}

		if (this.props.isLoading) {
			return <p> Please Loading Wait </p>
		}

		return (
			<div>
				<SearchRecForm />
				<RecList />
				<Details />
			</div>
		);

	}
}

Dict.propTypes = {
	fetchData: PropTypes.func,
	recs: PropTypes.array,
	hasErrored: PropTypes.bool,
	isLoading: PropTypes.bool

};

const mapStateToProps = (state) => {
	return {
		recs: state.recs,
		hasErrored: state.recsHasErrored,
		isLoading: state.recsIsLoading
	}
};

const mapDispatchToProps = (dispatch) => ({
	fetchData: (uri) => dispatch(recsFetchData(uri))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dict);
