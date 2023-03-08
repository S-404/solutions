/*
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside 
the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Constraints:
    -231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let str = String(Math.abs(x)).split('').reverse().join('')
    return str > (2 ** 31) - 1 ?
        0 :
        Number(x < 0 ? `-${str}` : str)
};

let cases = [123, -123, 120, 1534236469]
for (let c of cases) {
    console.log(`case:"${c}" - result:"${reverse(c)}"`)
}
