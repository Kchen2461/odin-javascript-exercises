function repeat(string, num) {
    let newStr = "";
    for (let i = 0; i < num; i++) {
        newStr += string;
    }

    return newStr;
}

const repeatString = function(string, num) {
    return (num < 0) ? `ERROR` : repeat(string, num);
};

// Do not edit below this line
module.exports = repeatString;
