import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Details extends Component {

	renderDetails(props) {
		// var { rec } = props;

		console.log("value of props in Details:", props)
		console.log("value of rec in Details:", rec) // this renders too many times

		return (
			<div>
				
				<h5>id: "tooLong" </h5>
				<h3>Word: {rec.word} </h3>
				<h6>Description: {rec.description}</h6>
				
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