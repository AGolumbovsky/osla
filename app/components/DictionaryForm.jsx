var React = require('react');

var DictionaryForm = React.createClass ({
    onFormSubmit: function(evt) {
        evt.preventDefault();
        alert(this.refs.word.value);

        var word = this.refs.word.value;

        if(word.length > 0) {
            this.refs.word.value = "";
            this.props.onSearch(word);
        }
    },
    render: function() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="word" placeholder="enter word"/>
                    <button className="button expanded hollow"> Find in Dictionary </button>
                </form>
            </div>
        );
    }
});

module.exports = DictionaryForm;