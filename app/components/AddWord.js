var React = require('react');

var AddWordForm = require('AddWordForm');
var Details = require('Details');

var AddWord = React.createClass({
    handleAddWord: function(word) {
		// go ahead and do the POST request 
	},   
    
    render: function() {
        return(
            <div>
                <h2 className="text-center page-title"> Search Dictionary</h2>
                <AddWordForm onAddWord={this.handleAddWord}/>
                <Details/>
            </div>
        );
    }
});

module.exports = AddWord;