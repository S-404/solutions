// 10001st prime

// By listing the first six prime numbers:
// 2, 3, 5, 7, 11, and 13,
// we can see that the 6th prime is 13.

// What is the 10 001st prime number?

let primeCounter = 1;
let x = 2;
let result = 0;
while (primeCounter < 10001) {
  let isPrime = false;

  for (let i = 2; i < x; i++) {
    if (x % i != 0) {
      isPrime = true;
    } else {
      isPrime = false;
      break;
    }
  }

  if (isPrime == true) {
    primeCounter++;
    result = x;
  }
  x++;
}
console.log(result, primeCounter);
