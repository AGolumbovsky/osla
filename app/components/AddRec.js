import React, { Component, PropTypes } from 'react';
import connect from 'react-redux';

import AddRecForm from 'AddRecForm';
import Details from 'Details';

export class AddRec extends Component {
    render() {
        return (
            <div>
                <AddRecForm/>
                <Details/>
            </div>
        )
    }
};
