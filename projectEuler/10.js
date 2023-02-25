// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

let sum = 2;
for (let x = 2; x < 2000000; x++) {
  let isPrime = false;
  for (let y = 2; y < x; y++) {
    if (x % y != 0) {
      isPrime = true;
    } else {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    sum += x;
  }
}
console.log(sum);
//142913828922
