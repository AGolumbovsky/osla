import React, { Component } from 'react';
import { connect } from 'react-redux';

export class RecList extends Component {

	renderList = () => {
		const { recs } = this.props;
		return recs.map((rec) => (
			<li	key={rec.id}>
				<h4> { rec.word } </h4>
				<h5> { rec.description } </h5>
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

const mapStateToProps = (state) => ({
	recs: state.recs
})

export default connect(mapStateToProps)(RecList)
