/*
Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.

Return the minimum number of substrings in such a partition.

Note that each character should belong to exactly one substring in a partition.

 

Example 1:

Input: s = "abacaba"
Output: 4
Explanation:
Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
It can be shown that 4 is the minimum number of substrings needed.
Example 2:

Input: s = "ssssss"
Output: 6
Explanation:
The only valid partition is ("s","s","s","s","s","s").
 

Constraints:

1 <= s.length <= 105
s consists of only English lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
    let tmpStr = ''
    let result = 0
    for (let x = 0; x < s.length; x++) {
        if (tmpStr.indexOf(s[x]) === -1) {
            tmpStr += s[x]
        } else {
            result++
            tmpStr = s[x]
        }
    }
    if (tmpStr.length) result++
    return result
};

let cases = ['abacaba', 'ssssss']
for (let c of cases) {
    console.log(`case:"${c}" - result:"${partitionString(c)}"`)
}