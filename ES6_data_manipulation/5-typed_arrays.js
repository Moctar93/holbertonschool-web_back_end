// 5-create_int8_typed_array.js

function createInt8TypedArray(length, position, value) {
    // Create an ArrayBuffer of the specified length
    const buffer = new ArrayBuffer(length);
    // Create a DataView for the buffer to manipulate its content
    const dataView = new DataView(buffer);

    // Check if the position is within the valid range
    if (position < 0 || position >= length) {
        throw new Error("Position outside range");
    }

    // Set the Int8 value at the specified position
    dataView.setInt8(position, value);

    return dataView;
}

module.exports = createInt8TypedArray;

