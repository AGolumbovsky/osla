var React = require('react');

var WordInfo = require('WordInfo');

var WordList = React.createClass ({
    
    render: function() {
		var {words} = this.props;
		var renderWords = () => {
			return words.map((word) => {
				return (
					<WordInfo key={word.id} {...word}/>
				);
			});
		};
		
        return(
            <div>
				{renderWords()}
            </div>
        );
    }
});

module.exports = WordList;