// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

var addTwoNumbers = function(l1, l2) {
    console.log('l1',JSON.stringify(l1) )
    console.log('l2',l2)
};

const cases = [
    {
        l1: { "val": 2, "next": { "val": 4, "next": { "val": 3, "next": null } } },
        l2: { "val": 5, "next": { "val": 6, "next": { "val": 4, "next": null } } },
    },
    {
        l1: { "val": 0, "next": null },
        l2: { "val": 0, "next": null },
    },
    {
        l1: { "val": 9, "next": { "val": 9, "next": { "val": 9, "next": { "val": 9, "next": { "val": 9, "next": { "val": 9, "next": { "val": 9, "next": null } } } } } } },
        l2: { "val": 9, "next": { "val": 9, "next": { "val": 9, "next": { "val": 9, "next": null } } } },
    }
]

let count = 0
for (let c of cases) {
    console.log(`case:"${count}" converted to "${addTwoNumbers(c.l1,c.l2)}"`)
    count++
}
