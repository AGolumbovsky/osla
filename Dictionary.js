var React = require('react');
var axios = require('axios');

var SearchForm = require('SearchForm');
var Word = require('Word');

var Dictionary = React.createClass({
    getInitialState: function() {
        return {
           words: [
			   {
				   id: 1,
				   word: "Uno",
				   description: "It means One in Spanish, it almost certainly means 'asshole' in some other language"
			   }
		   ]
        };
    },
	
    handleSearch: function(word, description) {

        this.setState({
            word: word,
            description: description
        });
       
    },
    render: function() {

       var {words} = this.state;

        return (
            <div>
                <h2 className="text-center page-title"> Search Dictionary</h2>
                <SearchForm onSearch={this.handleSearch}/>
            </div>
        );
    }
});

module.exports = Dictionary;