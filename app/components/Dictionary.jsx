var React = require('react');

var SearchForm = require('SearchForm');
var WordInfo = require('WordInfo');

var Dictionary = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(word) {
        alert("searched! now what?");
        var self = this;
        self.setState({
            wordis: "worddddddd"
        })

    },
    render: function() {

       var word = "ass";

        return (
            <div>
                <h2 className="text-center page-title"> Search Dictionary</h2>
                <SearchForm onSearch={this.handleSearch}/>
                <WordInfo word={this.state.word}/>
            </div>
        )
    }
})

module.exports = Dictionary;