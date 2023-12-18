// dom -> document object model
function add() {
  // num1 + num2
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 + num2;
  document.getElementById("answer").innerText = sum;
}

function subtract() {
  // num1 - num2
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 - num2;
  document.getElementById("answer").innerText = sum;
}

function multiply() {
  // num1 * num2
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 * num2;
  document.getElementById("answer").innerText = sum;
}

function divide() {
  // num1 / num2
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 / num2;
  document.getElementById("answer").innerText = sum;
}
