import React, { Component } from 'react';

import Nav from 'Nav';

export default class Main extends Component {

   // console.log("Value of Nav in Main.js is:", Nav)
    // console.log("Value of props.children in Main.js is:", this.props.children)
    render(props) {

    return (
        <div>
            <Nav />
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {this.props.children}
                </div>
            </div>
        </div>
    )}
};

