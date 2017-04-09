import React, { Component } from 'react';
import { connect } from 'react-redux';

export class RecList extends Component {

	renderList = () => {
		const { recs } = this.props;
		return recs.map((rec) => (
			<li	key={rec._id} className="listItem">
				<h5> { rec.word } </h5>
				<h6> { rec.description } </h6>
			</li>
		))
	}

	render() {
		return (
			<ul className="recList">
				{this.renderList()}
			</ul>
		)
	}

}

const mapStateToProps = (state) => ({
	recs: state.recs
})


export default connect(mapStateToProps)(RecList)