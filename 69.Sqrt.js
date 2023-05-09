// ** ------------------------ 69. Sqrt(x)

//Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
//The returned integer should be non-negative as well.
//You must not use any built-in exponent function or operator.

// ** ------------------------
var mySqrt = function (x) {
    let i = 0;
    let j = x / 2;

    while (j != i) {
        i = j;
        j = (x / i + i) / 2;
    }

    return Math.floor(j);
};
mySqrt(4);
