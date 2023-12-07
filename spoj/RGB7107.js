// Tegsh toonii niilberiig ol.

function oddNumber(a, b, c) {
  let result = 0;
  if (a % 2 == 0);{
  result = result + a;
  } else {
    result=0;
  }
  if (b % 2 == 0);{
  result = result + b;}
  if (c % 2 == 0);
  result = result + c;

  return result;
}

let result = oddNumber(10, 3, 5);
console.log(result);
