var React = require('react');

var AddWordForm = require('AddWordForm');
var WordInfo = require('WordInfo');

var AddWord = React.createClass({
    handleAddWord: function(word) {
		// go ahead and do the POST request 
	},   
    
    render: function() {
        return(
            <div>
                <h2 className="text-center page-title"> Search Dictionary</h2>
                <AddWordForm onAddWord={this.handleAddWord}/>
                <WordInfo/>
            </div>
        );
    }
});

module.exports = AddWord;