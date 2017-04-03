import React, { Component } from 'react';
import { connect } from 'react-redux';

// import AddRec from 'AddRec';
// import Details from 'Details';
import { something } from '../actions';

export class AddRecForm extends Component {

    handleSubmit (e) {
        e.preventDefault();
        var query = document.getElementById("addText").value;
        console.log('AddRecForm query is:', query)

        if(query.length < 1) {
            alert("Dude, c'mon...");
        }
        var queryStr = "http://127.0.0.1:8888/api/add" + query;
        console.log("query string is:", queryStr);
        this.props.addRec(queryStr)
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

const mapStateToProps = (state) => ({
    rec: state.rec
})

const mapDispatchToProps = (disatch) => ({
    addRec: (queryStr) => dispatch(addRec(queryStr))
})

export default connect (mapStateToProps, mapDispatchToProps)(AddRecForm)