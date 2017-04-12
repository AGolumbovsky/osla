import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { AddRecForm } from 'AddRecForm';
import { Details } from 'Details';
import { postRec } from '../actions';

export class AddRec extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="pane-left">
                    <AddRecForm addRec={this.props.addRec}/>
                </div>
                <div className="pane-right">
                    <Details rec={this.props.rec}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rec: state.recActive
    }
}

const mapDispatchToProps = (dispatch) => ({
    addRec: (uri) => dispatch(postRec(uri))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddRec)