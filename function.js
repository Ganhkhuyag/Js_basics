// function declaration
function doSomething(input) {
  console.log(input);
  return input * input;
}

// function calling
let result = doSomething(15);

console.log(result);

function printHello() {
  console.log("Hello World");
}

function getSomething(input) {
  console.log("input:", input);
}

function returnSomething() {
  return "Hello World";
}

printHello();
printHello();
printHello();

getSomething("MY TEXT");

function getMultiInput(num1, num2) {
  console.log("num1 = ", num1);
  console.log("num2 = ", num2);
  let sum = num1 + num2;
  return sum;
}
let sum = getMultiInput(20, 30);

console.log("sum =", sum);

function findDay(num) {
  if (num == 1) {
    return "monday";
  } else if (num == 2) {
    return "tuesday";
  }
}
console.log(findDay(2));

function findMonth(num) {
  if (num <= 31) {
    return "jan";
  } else if (num <= 59) {
    return "feb";
  } else if (num <= 89) {
    return "mar";
  } else if (num <= 109) {
    return "apr";
  } else if (num <= 139) {
    return "may";
  } else if (num <= 169) {
    return "jun";
  } else if (num <= 199) {
    return "jul";
  } else if (num <= 233) {
    return "aug";
  } else if (num <= 263) {
    return "sep";
  } else if (num <= 293) {
    return "oct";
  } else if (num <= 320) {
    return "nov";
  } else if (num <= 350) {
    return "dec";
  }
}
console.log(findMonth(100));

function find(avg) {
  if (avg < 60) {
    return "F";
  } else if (avg < 70) {
    return "D";
  } else if (avg < 80) {
    return "C";
  }
}
console.log(find(69));
