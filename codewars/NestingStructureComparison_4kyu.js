/*
Complete the function/method (depending on the language) to return true/True 
when its argument is an array that has the same nesting structures 
and same corresponding length of nested arrays as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     

For your convenience, there is already a function 'isArray(o)' declared 
and defined that returns true if its argument is an array, false otherwise.

*/


Array.prototype.sameStructureAs = function (other) {

    let result = isArray(this) && isArray(other);

    const checkArr = (thisArr, otherArr) => {
        for (let x = 0; x < thisArr.length; x++) {
            if (result) {
                if (isArray(thisArr[x]) && isArray(otherArr[x])) {
                    checkArr(thisArr[x], otherArr[x])
                } else if (!isArray(thisArr[x]) && !isArray(otherArr[x])) {
                    result = thisArr[x] !== undefined && otherArr[x] !== undefined
                } else {
                    result = false
                }
            }
        }
    }


    checkArr(this, other)

    return result;
};
