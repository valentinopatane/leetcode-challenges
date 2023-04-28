// ** ------------------------9. Palindrome Number

// Given an integer x, return true if x is a palindrome and false otherwise.

// ** ------------------------

var isPalindrome = function (x) {
    const original = x.toString();
    const inverted = original.split("").reverse().join("");
    return original == inverted && true;
};
