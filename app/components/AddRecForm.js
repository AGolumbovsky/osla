import React, { Component } from 'react';
import { connect } from 'react-redux';

// import AddRec from 'AddRec';
// import Details from 'Details';
import { something } from '../actions';

export default class AddRecForm extends Component {

    handleSubmit (e) {
        e.preventDefault();
        var query = document.getElementById("addText").value;

        if(query.length > 0) {
            this.refs.word.value = '';
            this.props.onAddWord(word);
        }
        else {
            this.refs.word.focus();
        }
    }
     
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="word" id="addText" placeholder="Enter the word to ass"/>
                    <button className="button expanded"> Add Word </button>
                </form>
            </div>
        );
    }
}