// var React = require('react');
import React, { Component } from 'react';
import Nav from 'Nav';

export const Main = (props) => {

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
    