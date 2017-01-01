var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();
        alert("keep calm and new year!!!");
    },
    render: function() {
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Osla app</li>
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Dictionary</IndexLink></li>
                        <li><Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link></li>
                        <li><Link to="/addWord" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Add Word</Link></li>
                    </ul>
                </div>
                <div>
                    <div className="top-bar-right">
                        <form onSubmit={this.onSearch}>
                            <ul className="menu">
                                <li>
                                    <input type="search" placeholder="search or smth"/>
                                </li>
                                <li>
                                    <input type="submit" className="button" value="bored?"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
})

module.exports = Nav;
