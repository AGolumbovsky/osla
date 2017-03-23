import React, { Component } from 'react';

export default class Details extends Component {

	render() {
		var {id, word, description} = this.props;

		console.log("this is this.props:", this.props)

		return (
			<div>
				id: "tooLong"
				Word: {word}
				Description: {description}
			</div>
		);
	}
};
