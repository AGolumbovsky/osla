import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Nav extends Component {

    render () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Dictionary</IndexLink></li>
                        <li><Link to="/addWord" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Add Word</Link></li>
						<li><Link to="/grammar" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Grammar</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <a href="http://github.com/agolumbovsky/osla">see code</a>
                </div>
            </div>
        )
    }
}
