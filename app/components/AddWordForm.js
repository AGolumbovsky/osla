var React = require('react');

var AddWord = require('AddWord');

var AddWordForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var word = this.refs.word.value;

        if(word.length > 0) {
            this.refs.word.value = '';
            this.props.onAddWord(word);
        }
        else {
            this.refs.word.focus();
        }
    },
     
    render: function() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="word" placeholder="Enter the word to ass"/>
                    <button className="button expanded"> Add Word </button>
                </form>
            </div>
        );
    }
});

module.exports = AddWordForm;