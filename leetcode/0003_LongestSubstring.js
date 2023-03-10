/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 

Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.

*/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (arr.length === 0) {
            arr.push(s[i])
            continue
        }
        if (arr.indexOf(s[i]) !== -1) {
            maxLength = Math.max(maxLength, arr.length)
            arr = arr.slice(arr.indexOf(s[i]) + 1)
        }
        arr.push(s[i])
    }
    return Math.max(maxLength, arr.length)
};

let cases = ["aabaab!bb", "dvdf", " ", "abcabcbb", "bbbbb", "pwwkew",]
for (let c of cases) {
    console.log(`case:"${c}" - result:"${lengthOfLongestSubstring(c)}"`)
}