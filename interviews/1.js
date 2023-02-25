//функция должна возвращать уникальное неповторяющееся значение в массиве чисел.
var singleNumber = function (nums) {
    let result = nums.reduce((prev,curr)=>{
         prev[curr] = prev[curr] !== undefined ? prev[curr] += 1 : 1
         return prev
    },{})
    for(let key in result){
        if(result[key]===1) return key
    }

};

console.log(singleNumber([2, 1, 2]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([1]))