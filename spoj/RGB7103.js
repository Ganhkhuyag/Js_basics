function bigNumber(a, b, c, d) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
}
let result = bigNumber(5, 9, 6);
console.log(result);
