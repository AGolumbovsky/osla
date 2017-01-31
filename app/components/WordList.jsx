var React = require('react');
var uuid = require('node-uuid');

var WordInfo = require('WordInfo');

var WordList = React.createClass ({
	
	getInitialState: function() {
		return {
			words: [
				{
					id: uuid(),
					spelling: "once",
					description: "in the galaxy far far away"
				},
				{
					id: uuid(),
					spelling: "twice",
					description: "old spice"
				},
				{
					id: uuid(),
					spelling: "three",
					description: "segodnya bolshe ne kuri"
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
					spelling: "hello",
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
					<WordInfo key={word.id} {...word} />
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