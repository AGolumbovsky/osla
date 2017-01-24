var React = require('react');

var AddWordForm = require('AddWordForm');

var AddWord = React.createClass({
    handleAddWord: function(word) {
		alert("new word is: " + word);
	},   
    render: function() {
        return(
            <div>
                <h2 className="text-center page-title"> Search Dictionary</h2>
                <AddWordForm onAddWord={this.handleAddWord}/>
            </div>
        );
    }
});

module.exports = AddWord;