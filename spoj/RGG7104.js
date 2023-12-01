function findLessNumber(a, b, c, d) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else if (c < a && c < b) {
    return c;
  } else if (d < b && d < c) {
    return d;
  }
}
let number = findLessNumber(20, 22, 13, 4);
console.log(number);
