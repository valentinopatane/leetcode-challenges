// ** ------------------------13.Roman to integer

//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//Given a roman numeral, convert it to an integer.

// ** ------------------------

var romanToInt = function (s) {
    const romanN = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let value = 0;
    for (let i = 0; i < s.length; i++) {
        romanN[s[i]] < romanN[s[i + 1]]
            ? (value -= romanN[s[i]])
            : (value += romanN[s[i]]);
    }
    return value;
};
