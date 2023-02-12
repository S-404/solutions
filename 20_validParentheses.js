// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


var isValid = function (s) {

    const bracketsOpen = {
        '(': 1,
        '[': 2,
        '{': 3
    }

    const bracketsClose = {
        ')': 1,
        ']': 2,
        '}': 3
    }

    const opened = []

    for (let x = 0; x < s.length; x++) {
        const bracket = s[x]
        const bracketType = bracketsOpen[bracket] ?? bracketsClose[bracket]
        if (bracketsOpen[bracket]) {
            opened.push(bracketType)
        } else {
            if (opened[opened.length - 1] !== bracketType) return false
            opened.pop()
        }
    }
    return opened.length === 0
};




let cases = ["()", "()[]{}", "(]", "([)]{}",  "[()]{}"]
for (let c of cases) {
    console.log(`case:"${c}" - result:"${isValid(c)}"`)
}