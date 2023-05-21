const removeFromArray = function(array, ...args) {
    for (const target of args) {
        if (array.includes(target)) {
            array.splice(array.indexOf(target), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
