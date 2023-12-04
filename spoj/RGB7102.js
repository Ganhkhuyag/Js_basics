function findTwoSmall(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

let result = findTwoSmall(1020, 60220);
console.log(result);
