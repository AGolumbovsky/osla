import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Details extends Component {

	renderDetails = () => {
		var { rec } = this.props;

		console.log("this.props.rec in Details:", rec)

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

const mapStateToProps = (state) => ({
	rec: state.recActive
})

export default connect(mapStateToProps)(Details)
