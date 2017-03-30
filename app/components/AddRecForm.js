import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddRec from 'AddRec';
import Details from 'Details';

export class AddRecForm extends Component {

    handleSubmit (e) {
        e.preventDefault();
        var word = this.refs.word.value;

        if(word.length > 0) {
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
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="word" placeholder="Enter the word to ass"/>
                    <button className="button expanded"> Add Word </button>
                </form>
            </div>
        );
    }
}