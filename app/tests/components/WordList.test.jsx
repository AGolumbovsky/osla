var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var WordList = require('WordList');
var WordInfo = require('WordInfo');

describe('WordList', () => {

    it('should exist', () => {
        expect(WordList).toExist();
    });

	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// this one fails. get to the booty of it
    it('should render one word per one list item', () => { 
        var words = [{
            id: 1,
            spelling: "alalalalalalalal"
        },
        {
            id: 2,
            spelling: "second word"
        }];
        var wordList = TestUtils.renderIntoDocument(<WordList words={words}/>);
        // this helps check how many components are in WordList.
        // returns array
        var wordsComponents = TestUtils.scryRenderedComponentsWithType(wordList, WordInfo);

        expect(wordsComponents.length).toBe(words.length);
    });
});