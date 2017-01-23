var React = require('react');

var SearchForm = require('SearchForm');
var WordList = require('WordList'); 
var WordInfo = require('WordInfo');

var Dictionary = React.createClass({
    getInitialState: function() {
        return {
           words: [
			   {
				   id: 1,
				   word: "Uno",
				   description: "It means One in Spanish"
			   },
			   {
				   id: 2,
				   word: "Dos",
				   description: "It means Zwei in Spanish"
			   },
			   {
				   id: 3,
				   word: "Tres",
				   description: "It means Drei in Spanish"
			   },
			   {
				   id: 4,
				   word: "Quattro",
				   description: "It means Chatire in Spanish"
			   }
		   ]
        };
    },
    handleSearch: function(word, description) {


        this.setState({
            isLoading: true,
            word: "Bird Bird the word",
            description: "Second description"
        });
       
    },
    render: function() {

       var {words} = this.state;

        return (
            <div>
                <h2 className="text-center page-title"> Search Dictionary</h2>
                <SearchForm onSearch={this.handleSearch}/>
				<WordList words={words}/>
            </div>
        );
    }
});

module.exports = Dictionary;