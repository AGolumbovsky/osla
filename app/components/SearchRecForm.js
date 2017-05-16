import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { findRec } from '../actions';

export class SearchRecForm extends Component {

    onFormSubmit (e) {
        e.preventDefault();

        var query = document.getElementById("searchText").value;
        
        console.log('SearchRecForm search query is:', query)
        
        if(query.length < 1) {
            alert("Lift a finger!")
        }
        // var queryStr = 'http://127.0.0.1:8888/api/dict/' + query; // why " ` " didn't work, i don't know
        var queryStr = 'api/dict/' + query;
        console.log("queryStr is:", queryStr)
        this.props.fetchRec(queryStr)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <input type="search" ref="searchText" id="searchText" placeholder="Enter word"/>
                    <button className="button expanded hollow"> Find </button>
                </form>
            </div>
        );
    }
}

SearchRecForm.PropTypes = {
    rec: PropTypes.object
}

const mapStateToProps = (state) => ({
    rec: state.rec
})

const mapDispatchToProps = (dispatch) => ({
    fetchRec: (queryStr) => dispatch(findRec(queryStr))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchRecForm)