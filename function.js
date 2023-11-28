// function declaration
function doSomething(input) {
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
  } else if (num <= 360) {
    return "dec";
  }
}
console.log(findMonth(300));
