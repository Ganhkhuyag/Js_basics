function findNum(x) {
  let result = ((x % 100) - (x % 10)) / 10;
  return result;
}
let result = findNum(423);
console.log(result);
