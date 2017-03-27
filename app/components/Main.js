import React, { Component } from 'react';

import Nav from 'Nav';

export default class Main extends Component {

    render() {

    return (
        <div>
            <Nav />
            <div className="row">
                <div className="small-centered large-centered columns">
                    {this.props.children}
                </div>
            </div>
        </div>
    )}
};

