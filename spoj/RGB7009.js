function findProduct(x) {
  a = x % 10;
  b = (x - a) / 10;
  c = a * b;
  return c;
}
let result = findProduct(27);
console.log(result);
