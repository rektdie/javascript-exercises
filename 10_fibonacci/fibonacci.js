const fibonacci = function(index) {
    if (index < 0) return "OOPS";

    let array = [];
    for (let i = 0; i <= index; i++) {
        if (array.length > 1) {
            array.push(array[i-2] + array[i-1]);
        } else {
            array.push(1);
        }
    }
    return array[index-1];
};

// Do not edit below this line
module.exports = fibonacci;
