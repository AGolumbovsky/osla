var React = require('react');

var WordInfo = React.createClass({
	render: function() {
		var {id, spelling, description} = this.props;
		
		return (
			<div>
				id: tooLong
				Word: {spelling} 
				Description: {description}
			</div>
		);
	}
});

module.exports = WordInfo;