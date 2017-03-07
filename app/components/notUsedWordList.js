var React = require('react');
var uuid = require('node-uuid');

var Word = require('Word');

var WordList = React.createClass ({
	
	getInitialState: function() {
		return {
			words: [
				{
					id: uuid(),
					spelling: "uno",
					description: "in the galaxy far far away"
				},
				{
					id: uuid(),
					spelling: "dos",
					description: "two two two"
				},
				{
					id: uuid(),
					spelling: "tres",
					description: "three three"
				}
			]
		};
	},
	
	handleFindWord: function() {
		this.setState({
			words: [
				...this.state.words,
				{
					id: uuid(),
					word: "hello",
					description: "say hello to my little friend"
				}
			]
		});
	},
    
    render: function() {
		var {words} = this.state;
		var renderWords = () => {
			return words.map((word) => {
				return (
					<Word key={word.word} {...word} />
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