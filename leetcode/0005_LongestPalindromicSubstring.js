/*
Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

Constraints:
    1 <= s.length <= 1000
    s consist of only digits and English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */


var longestPalindrome = function (s) {
    const isPalindrome = (str) => {
        return str === str.split("").reverse().join("");
    }
    if (isPalindrome(s)) { return s; }
    let [len, resultIndex] = [1, 0]
    let startIndex, endIndex

    for (let i = 0; i < s.length; i++) {
        startIndex = i - 1;
        endIndex = i + 1;

        while (s[endIndex] === s[i]) { endIndex++; }
        while (s[startIndex] === s[i]) { startIndex--; }

        while (startIndex >= 0 && endIndex < s.length && s[startIndex] === s[endIndex]) {
            startIndex--;
            endIndex++;
        }

        if (endIndex - startIndex - 1 > len) {
            len = endIndex - startIndex - 1;
            resultIndex = startIndex + 1;
        }
    }

    return s.slice(resultIndex, resultIndex + len);
};

let cases = ["acbbcaa", "aclotatolca", "ccc", "ac", "a", "babad", "cbbd",]
for (let c of cases) {
    console.log(`case:"${c}" - result:"${longestPalindrome(c)}"`)
}
