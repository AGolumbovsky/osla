var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = () => {
        return (
            <div>
                <h2>Nav Componenet</h2>
                <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}> See Whatsup </IndexLink>
                <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}> About </Link>
            </div>
        );
};

module.exports = Nav;
