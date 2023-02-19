// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]


// Example 2:

// Input: list1 = [], list2 = []
// Output: []


// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]


// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.


var mergeTwoLists = function (list1, list2) {
    const listToArr = (list) => {   
        const resultArr = []
        if(list?.val !== undefined) 
            resultArr.push(list.val)
        if(list?.next) 
            resultArr.push(...listToArr(list.next))
        return resultArr
    } 
    const arrToList = (arr) => {
        return arr.length ? 
            new ListNode( 
                    arr[0], 
                    arr.length > 1 ? arrToList(arr.slice(1)) : null
                ) : 
            null
    }
    let concated = listToArr(list1).concat(listToArr(list2)).sort((a,b)=>a-b)
    return arrToList(concated)
};


let cases = [
    { 
        list1: {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 4,
                    next: null,
                },
            },
        }, 
        list2: {
            val: 1,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: null,
                },
            },
        } 
    }, 
    { list1: {next:null}, list2: {} }, 
    { list1: {}, list2: {val:0,next:null} }
]
for (let c of cases) {
    console.log(`case:"${c}" - result:"${mergeTwoLists(c.list1, c.list2)}"`)
}