//функция должна возвращать уникальное неповторяющееся значение в массиве чисел.
var singleNumber = function (nums) {
    let resultArray = nums.filter((value, index, array) => {
        return array.indexOf(value) === index &&
            array.lastIndexOf(value) === index
    })
    return resultArray.length ? resultArray[0] : null
};

console.log(singleNumber([2, 1, 2]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([1]))