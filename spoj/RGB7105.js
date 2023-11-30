function num(a, b, c, d) {
  let result = 0;
  if (80 < a) result = result + a;
  if (80 < b) result = result + b;
  if (80 < c) result = result + c;
  if (80 < d) result = result + d;
  return result;
}
let result = num(85, 75, 96, 69);
console.log("Result", result);
