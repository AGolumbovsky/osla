var React = require('react');

var WordInfo = React.createClass({
	render: function() {
		var {word, description} = this.props;
		
		return (
			<div>
				word: {word} 
				Description: {description}
			</div>
		);
	}
});

module.exports = WordInfo;