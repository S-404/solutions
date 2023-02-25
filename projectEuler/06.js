/*
The sum of the squares of the first ten natural numbers is,  
1**2 + 2**2 + ... + 10**2 = 385

The square of the sum of the first ten natural numbers is,
(1+2+...+10)**2 = 55**2 = 3025

Hence the difference between the sum of the squares 
of the first ten natural numbers and the square of the sum is
3025 - 385 = 2640
.

Find the difference between the sum of the squares 
of the first one hundred natural numbers and the square of the sum.
*/

let sumOfSq = 0;
let sqOfsum = 0;

for (x = 1; x <= 100; x++) {
  sumOfSq += x ** 2;
  sqOfsum += x;
}

sqOfsum = sqOfsum ** 2;

console.log(sqOfsum - sumOfSq);
//25164150
