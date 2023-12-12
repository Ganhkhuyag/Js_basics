function findThree(num1, num2, num3, num4) {
  let result = 0;
  if (num1 % 3 == 0) {
    result = result + 1;
  }
  if (num2 % 3 == 0) {
    result = result + 1;
  }
  if (num3 % 3 == 0) {
    result = result + 1;
  }
  if (num4 % 3 == 0) {
    result = result + 1;
  }
  return result;
}
let result = findThree(3, 12, 8, 9);
console.log(result);
