// 4 toonii bagiig ol.

function findSmallNumber(a, b, c, d) {
  if (a < b) {
    return a;
  }
  if (b < c) {
    return b;
  }
  if (c < d) {
    return c;
  }
  if (d < a) {
    return d;
  }
}
let result = findSmallNumber(23, 22, 12, 4);
console.log(result);
