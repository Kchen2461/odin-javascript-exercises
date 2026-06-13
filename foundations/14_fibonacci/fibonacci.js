const fibonacci = function(n) {
    n = +n;

    if (n < 0) {
        return "OOPS";
    } else if (n == 0) {
        return 0;
    }

    let fibonacci_nums = [1, 1, 2, 3];
    
    if (n === 1 || n === 2) {
        return fibonacci_nums[n - 1];
    }

    let place = 2;

    while (place !== n) {
        fibonacci_nums[place] = fibonacci_nums[place - 1] + fibonacci_nums[place - 2];
        place++;
    }

    return fibonacci_nums[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
