var React = require('react');

var WordInfo = (word) => {
    return (
        <h3 className="text-center"> The word is: {word} </h3>
    );
};

module.exports = WordInfo;