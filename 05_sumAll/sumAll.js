const sumAll = function(from, to) {
    let sum = 0;

    if (from < 0 || to < 0 || Number.isInteger(from) == false || 
    Number.isInteger(to) == false) return "ERROR";

    const temp = from;
    if (from > to) {
        from = to;
        to = temp;
    }

    for (let i = from; i <= to; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
