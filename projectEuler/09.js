// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// 2 + 3 + 4 = 9    4 = 9 - 2 + 3
// Find the product abc.

const val = 1000;

let a, b, c;
outer: for (a = 1; a <= val / 2; a++) {
  for (b = a + 1; b <= val / 2; b++) {
    c = val - (a + b);

    if (a ** 2 + b ** 2 === c ** 2) {
      console.log(a, b, c);
      break outer;
    }
  }
}

console.log(a * b * c);
// 200 375 425
// 31875000
