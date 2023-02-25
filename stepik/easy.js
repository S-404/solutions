// В этом задании в нашу функцию testArray передаются два массива случайной длины заполненные случайными числами. 
// Вам нужно сосчитать сумму всех элементов обоих массивов и возвратить ее из функции.

// Sample Input:

// [0, 1, 5, 3]  [3]
// Sample Output:

// 12


// вариант решения
function testArray(a, b) {
    return a.concat(...b).reduce((prev,curr)=>prev+curr,0)
}

console.log(testArray([0, 1, 5, 3],[3]))