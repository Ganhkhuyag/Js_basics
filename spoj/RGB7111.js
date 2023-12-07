// Ugugdsun 4 toonii 11-d huvaagddaggvi toonuudiinh ni niilberiig ol.

function findSum(a, b, c, d) {
  let result = 0;
  if (a % 11 != 0) result = result + a;
  console.log(result);
  if (b % 11 != 0) result = result + b;
  console.log(result);
  if (c % 11 != 0) result = result + c;
  console.log(result);
  if (d % 11 != 0) result = result + d;
  console.log(result);
  return result;
}
let result = findSum(7, 22, 13, 30);
console.log(result);
