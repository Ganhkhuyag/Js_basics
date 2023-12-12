// Tegsh toonii niilberiig ol.
// 2t uldegdelgvi huvaagdaj bval tegsh too

function oddNumber(a, b, c) {
  let result = 0;
  if (a % 2 == 0) {
    result = result + a;
  }
  if (b % 2 == 0) {
    result = result + b;
  }
  if (c % 2 == 0) {
    result = result + c;
  }
  return result;
}

let result = oddNumber(10, 12, 5);
console.log(result);
