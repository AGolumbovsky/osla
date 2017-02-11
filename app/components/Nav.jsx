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
                        <li className="menu-text"><a href="http://github.com/agolumbovsky/osla">OSLa app</a></li>
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Dictionary</IndexLink></li>
                        <li><Link to="/addWord" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Add Word</Link></li>
                        <li><Link to="/story" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Story</Link></li>
						<li><Link to="/grammar" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Grammar</Link></li>
                        <li><Link to="/contact" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Contact & Contribute</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
})

module.exports = Nav;
