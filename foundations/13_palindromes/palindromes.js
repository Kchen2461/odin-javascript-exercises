const palindromes = function (str) {

    // The regex for detecting characters can be improved
    let regex = /[(a-z)(A-Z)(0-9)]/;
    let letters = str.split("").reduce((letters, currLetter) => {
        if (regex.test(currLetter)) {
            letters += currLetter.toLowerCase();
        }

        return letters;
    }, "");

    // Compare the reverse the first half of the string and the second half
    return letters.slice(0, (letters.length + 1) / 2).split("").reverse().join("") === letters.slice(letters.length / 2);
};

// Do not edit below this line
module.exports = palindromes;
