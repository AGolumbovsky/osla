var React = require('react');

var DictionaryForm = require('DictionaryForm');

var Dictionary = React.createClass({
    render: function() {
        return (
            <div>
                <h2 className="text-center page-title"> Search Dictionary</h2>
                <DictionaryForm/>
            </div>
        )
    }
})

module.exports = Dictionary;