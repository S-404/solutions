/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]
 
Constraints:
1 <= n <= 8
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = []

    const func = (str, open, close) => {
        if (str.length === n * 2) {
            result.push(str)
            return
        }

        if (open < n)
            func(str + '(', open + 1, close)

        if (close < open)
            func(str + ')', open, close + 1)

    }

    func('', 0, 0)

    return result
};

let cases = [3, 1, 4, 2]
for (let c of cases) {
    console.log(`case:"${c}" - result:"${generateParenthesis(c)}"`)
}