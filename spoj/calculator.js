function calculator(num1, num2, operation) {
  let answer;
  if (operation == "+") {
    answer = num1 + num2;
  } else if (operation == "-") {
    answer = num1 - num2;
  } else if (operation == "*") {
    answer = num1 * num2;
  } else if (operation == "/") {
    answer = num1 / num2;
  }
  return answer;
}

let answer = calculator(10, 20, "+");
console.log(answer);
