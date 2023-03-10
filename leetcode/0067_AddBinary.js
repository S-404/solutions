/*
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Constraints:
    1 <= a.length, b.length <= 104
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself.
*/


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
       let result = ''
       let mem = 0
       let i = 0
       while (i < a.length || i < b.length) {
           let sum = Number(a[a.length - 1 - i] || 0) + Number(b[b.length - 1 - i] || 0) + mem
           mem = Math.max(0, mem - 1)
           if (sum > 1) mem += 1
           result = `${sum % 2}${result}`
           i++
       }
       return `${mem ? mem : ''}${result}`
};

let cases = [
    { a: "11010", b: "10111" },
    { a: "11", b: "11" },
    { a: "11", b: "1" },
    { a: "1010", b: "1011" },

]
for (let c of cases) {
    console.log(`case:"${JSON.stringify(c)}" - result:"${addBinary(c.a, c.b)}"`)
}