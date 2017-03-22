import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRec } from '../actions';

export class RecList extends Component {
	renderList = () => {

		const { records } = this.props;
		return records.map((record) => (
			<li	key={record.id}>
				<span>{record.word}</span>
			</li>
		))
	}

	render() {
		return (
			<ul>
				{this.renderList()}
			</ul>
		)
	}
		
}

const mapStateToProps = (reduxState) => ({
	records: reduxState.records
})

export default connect(mapStateToProps)(RecList)
