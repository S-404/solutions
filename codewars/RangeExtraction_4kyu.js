/*
A format for expressing an ordered list of integers 
is to use a comma separated list of either individual integers
or a range of integers denoted by the starting integer separated from 
the end integer in the range by a dash, '-'. 
The range includes all integers in the interval including both endpoints. 
It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order 
and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

*/


function solution(list) {
    let result = [];
    let checkArr = [];
    for (let x = 0; x <= list.length; x++) {
        switch (true) {
            case checkArr[checkArr.length - 1] + 1 === list[x] || !checkArr.length:
                checkArr.push(list[x]);
                break;
            case checkArr.length < 3:
                result.push(String([...checkArr]));
                checkArr.length = 0;
                checkArr.push(list[x]);
                break;
            default:
                result.push(`${checkArr[0]}-${checkArr[checkArr.length - 1]}`);
                checkArr.length = 0;
                checkArr.push(list[x]);
                break;
        }
    }

    return result.join(',');
}