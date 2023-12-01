function Month(year, month) {
  let product = year * 12;
  let sum = product + month;
  return sum;
}
let result = Month(2, 7);
console.log(result);
