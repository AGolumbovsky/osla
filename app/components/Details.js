import React, { Component } from 'react';

export class Details extends Component {

	render() {
		var {id, word, description} = this.props;

		return (
			<div>
				id: "tooLong"
				Word: {word}
				Description: {description}
			</div>
		);
	}
};
