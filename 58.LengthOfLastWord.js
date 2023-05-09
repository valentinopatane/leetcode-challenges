// ** ------------------------ 58. Length of Last Word

//Given a string s consisting of words and spaces, return the length of the last word in the string.
//A word is a maximal
//substring consisting of non-space characters only.

// ** ------------------------

const lengthOfLastWord = (s) => {
    const ns = s.replace(/\s+/g, " ").trim();
    const arr = ns.split(" ");
    return arr[arr.length - 1].length;
};

lengthOfLastWord("   fly me   to   the moon  ");
