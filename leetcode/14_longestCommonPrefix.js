// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.


var longestCommonPrefix = function (strs) {
    let prefixChars = []
    for (let x = 0; x < strs.length; x++) {
        if (strs[x] == '') return ''
        if (!prefixChars.length) {
            prefixChars = strs[x].split('')
            continue
        }
        const strChars = strs[x].split('')
        const intersection = []
        for (let i = 0; i < Math.min(strChars.length, prefixChars.length) ; i++) {
            if(strChars[i]==prefixChars[i]){
                intersection.push(strChars[i])
            }else{
                break
            }
        }
        if (intersection.length) {
            prefixChars = intersection
        } else {
            return ''
        }
    }
    return prefixChars.join('')
};

let cases = [["cir", "car"]]
for (let c of cases) {
    console.log(`case:"${c}" - result:"${longestCommonPrefix(c)}"`)
}