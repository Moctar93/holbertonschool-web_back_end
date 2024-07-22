// 6-set_from_array.js

function setFromArray(array) {
    if (!Array.isArray(array)) {
        throw new TypeError('The argument must be an array');
    }
    return new Set(array);
}

module.exports = setFromArray;

