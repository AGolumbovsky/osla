import React, { Component } from 'react';
import Nav from 'Nav';

export const Main = (props) => {

    console.log("Value of Nav in Main.js is:", Nav)
    console.log("Value of props.children in Main.js is:", props.children)

    return (
        <div>
            <Nav/>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );
};
