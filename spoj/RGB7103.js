function bigNumber(num1, num2, num3) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num3) {
    return num2;
  } else if (num3 > num2) {
    return num3;
  }
}

let answer = bigNumber(1, 3, 2);
console.log(answer);
