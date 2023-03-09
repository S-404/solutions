/*
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints 
of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.

Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

Constraints:

    n == height.length
    2 <= n <= 105
    0 <= height[i] <= 104

*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0
    let left = 0
    let right = height.length - 1

    //O(n**2)
    // for (let i = 0; i < height.length; i++) {
    //     for (let x = i + 1; x < height.length; x++) {
    //         maxArea = Math.max(maxArea, Math.min(height[i], height[x]) * (x - i))
    //     }
    // }

    //O(n)
    while (left < right) {
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left))
        if (height[left] < height[right]) {
            left += 1
        } else {
            right -= 1
        }
    }

    return maxArea
};

let cases = [[1, 8, 6, 2, 5, 4, 8, 3, 7], [1, 1],]
for (let c of cases) {
    console.log(`case:"${JSON.stringify(c)}" - result:"${maxArea(c)}"`)
}
