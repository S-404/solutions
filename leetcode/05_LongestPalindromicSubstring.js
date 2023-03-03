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

    let chars = s.split('')
    let result = ''
    let tmpStr = ''

    const isPalindrome = (str) => {
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] !== str[str.length - 1 - i]) return false
        }
        return true
    }


    for (let x = 0; x < chars.length; x++) {

        let sameCharsInds = chars
            .slice(x + 1)
            .reduce((acc, curr, index) => {
                if (curr === chars[x]) {
                    acc.push(index)
                }
                return acc
            }, [])

        for (i = sameCharsInds.length - 1; i >= 0; i--) {
            tmpStr = s.slice(x, x + 1 + sameCharsInds[i] + 1)
            if (isPalindrome(tmpStr)) {
                result = tmpStr.length > result.length ? tmpStr : result
                break
            } 
        }

        if (result.length === s.length) break
    }

    return result.length === 0 ? s[0] : result
};

let cases = ["acbbcaa", "aclotatolca", "ccc", "ac", "a", "babad", "cbbd",]
for (let c of cases) {
    console.log(`case:"${c}" - result:"${longestPalindrome(c)}"`)
}
