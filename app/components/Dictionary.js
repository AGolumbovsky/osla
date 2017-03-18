import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { recordsFetchData } from 'actions/records';

class Dictionary extends Component {
	componentDidMount() {
		this.props.fetchData('/api');
	}

	render() {
		if(this.props.hasErrored) {
			return <p>My bad</p>
		}

		if(this.props.isLoading) {
			return <p> Please Loading Wait </p>
		}

		return (
			<ul>
				{this.props.records.map((record) => (
					<li key={record.id}>
						{record.word}	
					</li>
				))}
			</ul>
		);

	}
}

Dictionary.propTypes = {
	fetchData: PropTypes.func,
	records: PropTypes.array,
	hasErrored: PropTypes.bool,
	isLoading: PropTypes.bool

};

const mapStateToProps = (state) => {
	return {
		records: state.records,
		hasErrored: state.recordsHasErrored,
		isLoading: state.recordsIsLoading
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (uri) => dispatch(recordsFetchData(uri))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordList);