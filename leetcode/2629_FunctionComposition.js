/*
Given an array of functions [f1, f2, f3, ..., fn], 
return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.
You may assume each function in the array accepts one integer as input and returns one integer as output.

 
Example 1:
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65

Example 2:
Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000

Example 3:
Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function
 

Constraints:

-1000 <= x <= 1000
0 <= functions.length <= 1000
all functions accept and return a single integer
*/


/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        // functions.reverse().forEach(fn=>x=fn(x))
        // or
        for (let i = functions.length - 1; i >= 0; i--){
            x = functions[i](x)
        }
        return x
    }
};


// const fn1 = compose([x => x + 1, x => x * x, x => 2 * x])
// const case1 = fn1(4) // 65
// console.log(case1)

// const fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x])
// const case2 = fn2(1) // 1000
// console.log(case2)

// const fn3 = compose([])
// const case3 = fn3(42) // 42
// console.log(case3)


