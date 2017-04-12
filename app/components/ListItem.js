import React, { Component } from 'react';

export default class ListItem extends Component {
    
	render() {
		var rec = this.props.rec;

		return (
			<div>
				{ this.props.word }
			</div>
		);
	}

}
