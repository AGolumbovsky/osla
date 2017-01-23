var React = require('react');

var SearchForm = require('SearchForm');
var WordInfo = require('WordInfo');

var Dictionary = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(word, description) {
        //var self = this;
        this.setState({
            word: "Bird",
            description: "description description fasdfadsdew qrefaqr>1345refaqr>"
        })

    },
    render: function() {

       var {word} = this.state;

        return (
            <div>
                <h2 className="text-center page-title"> Search Dictionary</h2>
                <SearchForm onSearch={this.handleSearch}/>
                <WordInfo word={this.state.word} description={this.state.description} />
            </div>
        );
    }
});

module.exports = Dictionary;