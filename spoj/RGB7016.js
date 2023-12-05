// function findMinut(day, hour)

function findTimeMinSecond(d, h) {
  let product = d * 24;
  let sum = product + h;
  return sum;
}
let sum = findTimeMinSecond(2, 5);
console.log(sum);
