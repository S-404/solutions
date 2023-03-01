/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. 
The input numbers are strings and the function must return a string.


Example

add("123", "321"); -> "444"
add("11", "99");   -> "110"

Notes

    The input numbers are big.
    The input is a string of only digits
    The numbers are positives

*/

function add(a, b) {
    let mem = 0;
    let totResultArr = []

    const validVal = (val) => isNaN(val) ? 0 : val

    const aArr = a.split('').reverse();
    const bArr = b.split('').reverse();

    for (let x = 0; x < Math.max(aArr.length, bArr.length); x++) {
        let aVal = validVal(+aArr[x])
        let bVal = validVal(+bArr[x])

        let sum = aVal + bVal + mem;
        mem = Math.floor(sum / 10)
        totResultArr.push(sum % 10)
    }
    if (mem) totResultArr.push(mem)
    return totResultArr.reverse().join('')
}