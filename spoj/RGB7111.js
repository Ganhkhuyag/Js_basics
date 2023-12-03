function findSum(a, b, c, d) {
  let result = 0;
  if (a % 11 == 0) {
    result = result + a;
  }
  result = result;
  if (b % 11 == 0) {
    result = result + b;
  }
  result = result;
  if (c % 11 == 0) {
    result = result + c;
  }
  result = result;
  if (d % 11 == 0) {
    result = result + d;
  }
  result = result;
  return result;
}
let result = findSum(7, 22, 33, 30);
console.log(result);
