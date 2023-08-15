const repeatString = function(str, n) {
    if (n < 0) return 'ERROR';
    let returnString = '';
    for (let i = 0; i < n; i++) {
        returnString += str;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
