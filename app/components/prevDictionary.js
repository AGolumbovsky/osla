var React = require('react');
var axios = require('axios');
import { connect } from 'react-redux';
import { findWord } from '../actions';

var SearchForm = require('SearchForm');
var Word = require('Word');


class Dictionary extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            partSp: 'noun'
        }
    }
    
    render() {
        const { findRecordAction } = this.props;
        return (
            <div >

            </div>
        );
    }

}



({
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