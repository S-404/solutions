//Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

let number = 600851475143;
let div = 2;
let largest = 0;
while (number > 1) {
  if (number % div != 0) {
    div += 1;
  } else {
    largest = number;
    number /= div;
  }
}

console.log(largest);
//6857
