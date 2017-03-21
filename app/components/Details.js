import React from 'react';

var Details = React.createClass({
	render: function() {
		var {id, word, description} = this.props;
		
		return (
			<div>
				id: tooLong
				Word: {word} 
				Description: {description}
			</div>
		);
	}
});

module.exports = Details;