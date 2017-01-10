var React = require('react');

var AddWord = (props) => {
    return (
        <div>
            <h3>--Add Word Component-- </h3>
            <h4> props.children: { props.children } </h4>
        </div>
    )
}

module.exports = AddWord;