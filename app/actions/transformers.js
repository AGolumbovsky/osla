import * as c from 'actionTypes';

export const transformNoun = (w) => {
    return () => {
        console.log("transformNoun in da house");
    }
}

export const transformVerb = (w) => {
    return {
        type: c.WORD_IS_VERB,
        w
    }
}

export const transformAdjective = (w) => {
    return {
        type: c.WORD_IS_ADJECTIVE,
        w
    }
}

export const transformAdverb = (w) => {
    return {
        type: c.WORD_IS_ADVERB,
        w
    }
}
