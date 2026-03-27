const removeFromArray = function(arr) {
    let args = Array.from(arguments);
    let newArr = [];

    for (item of arr) {
        if (args.includes(item)) {
            continue;
        }

        newArr.push(item);
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
