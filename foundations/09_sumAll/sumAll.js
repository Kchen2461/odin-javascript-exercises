const sumAll = function(startNum, endNum) {
    let nums = [startNum, endNum].sort();

    // If not a number or not a positive number, return ERROR
    if (!Number.isInteger(nums[0]) || nums[0] < 0 || !Number.isInteger(nums[1]) || nums[1] < 0) {
        return "ERROR";
    }

    // Math way. Formula for sum between two integers (including start and end integers)
    //return (nums[1] - nums[0] + 1) * (nums[0] + nums[1]) / 2;

    let total = 0;

    for (let i = nums[0]; i <= nums[1]; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
