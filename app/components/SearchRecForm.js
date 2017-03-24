import React, { Component } from 'react';

export default class SearchRecForm extends Component {

    onFormSubmit (e) {
        e.preventDefault();

        var query = this.refs.searchText.value;

        if(query.length > 0) {

            this.props.onSearch(query);
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="searchText" placeholder="Enter word" onChange={this.handleSearchChange}/>
                    <button className="button expanded hollow"> Find in Dictionary </button>
                </form>
            </div>
        );
    }
}