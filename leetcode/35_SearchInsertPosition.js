/*
Given a sorted array of distinct integers and a target value, 
return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2


Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1


Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    if (target > nums[nums.length - 1]) return nums.length
    if (target < nums[0] || nums.length <= 1) return 0

    const getNewIndex = (start, end) => Math.ceil((end - start) / 2)

    let searchStartIndex = 0
    let searchEndIndex = nums.length
    let searchIndex = getNewIndex(searchStartIndex, searchEndIndex)

    while (searchIndex >= 0 && searchIndex < nums.length) {

        if (target === nums[searchIndex]) return searchIndex

        if (searchEndIndex === searchStartIndex) return searchStartIndex
        
        if (target > nums[searchIndex]) {
            searchStartIndex = searchIndex + 1
            searchIndex += getNewIndex(searchStartIndex, searchEndIndex)
            continue
        }
        if (target < nums[searchIndex]) {
            searchEndIndex = searchIndex
            searchIndex -= getNewIndex(searchStartIndex, searchEndIndex)
            continue
        }

    }
    return searchIndex + 1
};

let start1 = Date.now()
let cases = [
    { nums: [1, 3, 5, 6], val: 5 },
    { nums: [1, 3, 5, 6], val: 4 },
    { nums: [1, 3, 5, 6], val: 7 },
    { nums: [1, 3], val: 2 },
    { nums: [1], val: 1 },
]
for (let c of cases) {
    console.log(`case:"${c.val}" - result:"${searchInsert(c.nums, c.val)}"`)
}
let end1 = Date.now()
console.log('completed', end1 - start1)