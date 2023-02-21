//функция должна возвращать true/false после проверки на наличие уникального значения в массиве чисел

var hasUniq = function (nums) {
    let countObj = nums.reduce((prev,curr)=>{
        prev[curr] = prev[curr] ? prev[curr] + 1 : 1
        return prev
    },{})
    for(let key in countObj){
        if(countObj[key] == 1) return true 
    }
    return false
}
var secondVarHasUniq = function(nums){ //faster
    let arr = nums.sort((a,b)=>a-b)
    for(let x = 0; x < arr.length; x+=2){
        if(arr.indexOf(arr[x]) === arr.lastIndexOf(arr[x])){
            return true
        }
    }
    return false
}
let start1 = Date.now()
console.log(hasUniq([2, 1, 2, 3, 3, 4, 4]))
console.log(hasUniq([1, 2, 1, 2]))
console.log(hasUniq([1]))
let end1 = Date.now()
console.log('first duration', end1 - start1)

let start2 = Date.now()
console.log(secondVarHasUniq([2, 1, 2, 3, 3, 4, 4]))
console.log(secondVarHasUniq([1, 2, 1, 2]))
console.log(secondVarHasUniq([1]))
let end2 = Date.now()
console.log('second duration', end2 - start2)