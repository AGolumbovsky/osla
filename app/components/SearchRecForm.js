import React, { Component } from 'react';

export default class SearchRecForm extends Component {

    onFormSubmit (e) {
        e.preventDefault();

        var query = document.getElementById("searchText").value;

        if(query.length > 0) {

            // this.props.onSearch(query);
            console.log("value of this. is:", this);
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="searchText" id="searchText" placeholder="Enter word"/>
                    <button className="button expanded hollow"> Find </button>
                </form>
            </div>
        );
    }
}
