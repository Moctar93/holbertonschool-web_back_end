// 10-update_unique_items.js

function updateUniqueItems(map) {
    if (!(map instanceof Map)) {
        throw new Error('Cannot process');
    }

    // Iterate over each entry in the map
    for (const [key, value] of map.entries()) {
        if (value === 1) {
            map.set(key, 100);
        }
    }

    return map;
}

module.exports = updateUniqueItems;

