/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, 
just two one's added together. 12 is written as XII, 
which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. 
Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 
There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given an integer, convert it to a roman numeral.

Example 1:
Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.

Example 2:
Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.

Example 3:
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Constraints: 1 <= num <= 3999

*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {

    const vmap = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    }

    let nums = String(num).split('').reverse()

    let res = []

    const cap = (n, i) => n * (10 ** i)

    for (let i = 0; i < nums.length; i++) {

        let val = ''

        switch (nums[i]) {
            case '4':
                val += vmap[cap(1, i)] + vmap[cap(5, i)]
                break;
            case '9':
                val += vmap[cap(1, i)] + vmap[cap(1, i) * 10]
                break;
            default:

                if (Math.floor(nums[i] / 5))
                    val += vmap[cap(5, i)] ?? ''

                let tail = nums[i] % 5
                val += vmap[cap(1, i)].repeat(tail)
        }


        res.push(val)

    }

    return res.reverse().join('')
};


let cases = [1994, 3, 58]
for (let str of cases) {
    console.log(`value:"${str}" converted to "${intToRoman(str)}"`)
}