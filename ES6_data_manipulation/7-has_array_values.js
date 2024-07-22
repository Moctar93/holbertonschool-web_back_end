// 7-has_values_from_array.js

function hasValuesFromArray(set, array) {
    if (!(set instanceof Set)) {
        throw new TypeError('First argument must be a Set');
    }
    if (!Array.isArray(array)) {
        throw new TypeError('Second argument must be an Array');
    }
    return array.every(element => set.has(element));
}

module.exports = hasValuesFromArray;

