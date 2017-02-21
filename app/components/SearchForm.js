var React = require('react');

var DictionaryForm = React.createClass ({
    onFormSubmit: function(e) {
        e.preventDefault();
        
        var word = this.refs.searchText.value;
        console.log("you looking for", word + "?");

        if(word.length > 0) {
          
            this.props.onSearch(word);
        }
    },
    render: function() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="searchText" placeholder="enter word" onChange={this.handleSearchChange}/>
                    <button className="button expanded hollow"> Find in Dictionary </button>
                </form>
            </div>
        );
    }
});

module.exports = DictionaryForm;