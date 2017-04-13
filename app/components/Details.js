import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Details extends Component {

	renderDetails() {
		var rec = this.props.rec;

		console.log("value of this.props in Details:", this.props)
		console.log("value of rec in Details:", rec) // this renders too many times

		return (
			<div>
				
				<h2>{rec.word} </h2>
				<h3> {rec.partSp || "Unknown"} </h3>
				<h6> {rec.description || "This word has no meaning"} </h6>
				
			</div>
		);
	}

	render() {
		return (
		<div> { this.renderDetails() } </div>
		)
	}
}

/*const mapStateToProps = (state) => ({
	rec: state.recActive
})

export default connect(mapStateToProps)(Details)
*/