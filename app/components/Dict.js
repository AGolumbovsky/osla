import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SearchRecForm from 'SearchRecForm';
import RecList from 'RecList';
import Details from 'Details';
import { recsFetchData } from '../actions';

export class Dict extends Component {

	componentDidMount() {
		this.props.fetchAll('http://127.0.0.1:8888/api/dict');
	}

	render() {

		if (this.props.hasErrored) {
			return <p>My bad</p>
		}

		if (this.props.isLoading) {
			return <p> Just a sec </p>
		}
		
		return (
			<div className="main-container">
				<div className="pane-left">
					<SearchRecForm />
					<RecList />
				</div>
				<div className="pane-right">
					<Details />
				</div>
			</div>
		);
	}
}

Dict.propTypes = {
	fetchData: PropTypes.func,
	recs: PropTypes.array,
	hasErrored: PropTypes.bool,
	isLoading: PropTypes.bool

}

const mapStateToProps = (state) => {
	return {
		recs: state.recsFetchDataSuccess,
		hasErrored: state.recsHasErrored,
		isLoading: state.recsIsLoading,
		rec: state.recActive
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchAll: (uri) => dispatch(recsFetchData(uri))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dict);
