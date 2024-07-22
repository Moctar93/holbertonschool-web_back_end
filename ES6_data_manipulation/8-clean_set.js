// 8-clean_set.js

function cleanSet(set, startString) {
    if (!(set instanceof Set)) {
        throw new TypeError('First argument must be a Set');
    }
    if (typeof startString !== 'string') {
        throw new TypeError('Second argument must be a String');
    }

    // Filter values that start with startString and remove the prefix
    const result = [...set]
        .filter(value => typeof value === 'string' && value.startsWith(startString))
        .map(value => value.slice(startString.length))
        .join('-');
    
    return result;
}

module.exports = cleanSet;

