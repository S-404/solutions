/*
Given an array nums of distinct integers, 
return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]

Constraints:
    1 <= nums.length <= 6
    -10 <= nums[i] <= 10
    All the integers of nums are unique.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
    if (!nums.length) return [[]]

    let result = []

    for (let x = 0; x < nums.length; x++) {
        let numsCp = [...nums]
        numsCp.splice(x, 1)
        let restNums = permute(numsCp)
        for (let y = 0; y < restNums.length; y++) {
            result.push([nums[x], ...restNums[y]])
        }
    }
    
    return result
};

let cases = [[1, 2, 3], [0, 1], [1], [1, 2, 3, 5],[]]
for (let c of cases) {
    console.log(`case:"${JSON.stringify(c)}" - result:"${JSON.stringify(permute(c))}"`)
}