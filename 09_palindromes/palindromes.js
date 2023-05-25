const palindromes = function (string) {
    let reversed = string.toLowerCase().replaceAll(" ", "").split("").reverse().join("");
    reversed = reversed.replace(/\W/g, ""); //removing non-alphanumberic characters

    let original = string.toLowerCase().replaceAll(" ", "");
    original = original.replace(/\W/g, "");

    return original === reversed;
};

// Do not edit below this line
module.exports = palindromes;
