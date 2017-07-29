import * as c from 'actionTypes';

export const transformWord = (state, action) => {
    switch (action.type) {
        case c.WORD_IS_NOUN:
            return action.transformNoun
        case c.WORD_IS_VERB:
            return action.transformVerb
        case c.WORD_IS_ADJECTIVE:
            return action.transformAdjective
        case c.WORD_IS_ADVERB:
            return action.transformAdverb
        default:
            return state
    }
}

export const recs = (state = [{word: "test_deflt"}, {id: 999}], action) => {
	switch (action.type) {
		case c.RECS_FETCH_DATA_SUCCESS:
			return action.recs
		default:
			return state;
	}
}