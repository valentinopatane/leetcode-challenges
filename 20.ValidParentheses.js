// ** ------------------------ 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// ** ------------------------

const isValid = (s) => {
    if (s.length % 2 != 0) {
        return false;
    }
    if (s[0] == "}" || s[0] == "]" || s[0] == ")") {
        return false;
    }
    if (
        s[s.length - 1] == "{" ||
        s[s.length - 1] == "[" ||
        s[s.length - 1] == "("
    ) {
        return false;
    }
    const parentheses = {
        "{": "}",
        "[": "]",
        "(": ")",
    };
    const validPar = [];

    const keys = Object.keys(parentheses);

    for (let i = 0; i < s.length; i++) {
        if (keys.find((k) => k === s[i])) {
            validPar.push(s[i]);
        } else if (parentheses[validPar.pop()] !== s[i]) {
            return false;
        }
    }
    return validPar.length === 0;
};

isValid("{[]}");
