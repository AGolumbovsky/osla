var React = require('react');

var WordInfo = ({word, description}) => {
    return(

        <h3 className="text-center"> The word is: {word} , descripttion: {description}</h3>
    );
};

module.exports = WordInfo;