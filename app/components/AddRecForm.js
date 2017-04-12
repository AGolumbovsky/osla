import React, { Component } from 'react';
import { connect } from 'react-redux';

// import AddRec from 'AddRec';
// import Details from 'Details';
// import { postRec } from '../actions';

export class AddRecForm extends Component {

    handleSubmit (e) {
        e.preventDefault();
        var query = document.getElementById("addText").value;
        console.log('AddRecForm query is:', query)

        if(query.length < 1) {
            alert("Dude, c'mon...");
        }
        var queryStr = "http://127.0.0.1:8888/api/" + query;
        console.log("query string is:", queryStr);
        this.props.addRec(queryStr)
    }
     
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>New Word</label>
                    <input type="text" ref="word" id="addText" placeholder="Enter the word to ass"/>
                    <label> Select part of speech </label>
                    <select>
                        <option value="noun">Noun</option>
                        <option value="varb">Verb</option>
                        <option value="adjective">Adjective</option>
                        <option value="adverb">Adverb</option>
                        <option value="other">Other</option>
                    </select>
                    <label> Select chapter </label>
                    <select>
                        <option value="core">Core</option>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                        <option value="sci">Sci</option>
                    </select>
                    <label prompt="alalalalallf"> Provide description </label>
                    <textarea name="description" rows="3" cols="30"/>
                    <button className="button expanded"> Add Word </button>
                </form>
            </div>
        );
    }
}

/*const mapStateToProps = (state) => ({
    rec: state.rec
})

const mapDispatchToProps = (disatch) => ({
    addRec: (queryStr) => dispatch(postRec(queryStr))
})

export default connect (mapStateToProps, mapDispatchToProps)(AddRecForm)*/