import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import RecList from 'RecList';
import SearchRecForm from 'SearchRecForm';
import Details from 'Details';
// import { recsFetchData };

export class Dict extends Component {
	componentWillMount() {
		this.props.fetchData('./api');
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

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (uri) => dispatch(recsFetchData(uri))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(RecList);
