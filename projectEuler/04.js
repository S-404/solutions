//Largest palindrome product
// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

let a = 999;
let b = 999;
let result = 0;
outer: while (a > 800) {
  while (b > 800) {
    let prod = a * b;
    let checkPal = prod.toString().split('');
    let ispal = 0;

    for (let i = 0; i < checkPal.length; i++) {
      if (checkPal[i] == checkPal[checkPal.length - 1 - i]) {
        ispal++;
      } else {
        break;
      }
    }

    if (ispal == checkPal.length) {
      result = prod;
      break outer;
    }
    b--;
  }
  a--;
  b = 999;
}
console.log(result);
//906609
