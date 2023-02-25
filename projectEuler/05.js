// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let x = 20;

outer: while (true) {
  let divcheck = false;
  for (i = 1; i <= 20; i++) {
    if (x % i == 0) {
      divcheck = true;
    } else {
      divcheck = false;
      break;
    }
  }

  if (divcheck) {
    console.log(x);
    break outer;
  }

  x += 20;
}

//232792560
