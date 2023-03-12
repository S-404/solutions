/*
Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters 
of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let collection = {}
    for (let x = 0; x < strs.length; x++) {
        let col = (strs[x]).split('').sort().join('')
        if (collection[col]) {
            collection[col].push(strs[x])
        } else {
            collection[col] = [strs[x]]
        }
    }
    return Object.values(collection).reduce((acc, curr) => {
        acc.push(curr)
        return acc
    }, [])
};

let cases = [["eat", "tea", "tan", "ate", "nat", "bat"], [""], ["a"]]
for (let c of cases) {
    console.log(`case:"${JSON.stringify(c)}" - result:"${groupAnagrams(c)}"`)
}