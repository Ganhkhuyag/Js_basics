// let-> declare a variable
// = -> assign a value
// assignment -> suulgaj uguh
//  "Ganbaa" -> value
// "" -> quotation marks
let firstName = "Ganbaa";
// let myAge = 22;

// console.log -> Ur dung hevleh command
console.log(firstName);
console.log(myAge);

let num1 = 10;
let num2 = 20;

// let sum = num1 + num2;
let product = num1 * num2;
let division = num1 / num2;
let subtraction = num1 - num2;

console.log(sum);
console.log(product);
console.log(division);
console.log(subtraction);

// y = x*x + 2*x + 1;
// let x = 5;
let answer = (y = x * x + 2 * x + 1);
console.log(answer);

let number1 = 10;
let number2 = 20;
let sum = number1 + number2;
console.log(sum);

let number = 15;
number = number + 20;
console.log(number);

let x = 15;
let y = 20;
if (x > y) {
  console.log("x is bigger");
} else {
  console.log("y is bigger");
}

let myAge = 20;
// hervee minii nas 21s baga bol baar orj bolohgvi.
if (myAge < 21) {
  console.log("you are not allowed to enter:", myAge);
} else {
  console.log("you are allowed to enter:", myAge);
}

let myBrithYear = 1954;
console.log(2023 - myBrithYear);

let myNumber = 30;
console.log("myNumber=", myNumber);

let driver = 17;
// 18 hursen bol mashin barij bolno. hureegvi bol mashin barij bolohgvi.
if (driver > 18) {
  console.log("bolno", driver);
} else {
  console.log("bolohgvi", driver);
}

let day = 3;
if (1 == day) {
  console.log("Monday");
} else if (2 == day) {
  console.log("tuesday");
} else if (3 == day) {
  console.log("wednesday");
} else if (4 == day) {
  console.log("thuesday");
} else if (5 == day) {
  console.log("friday");
} else if (6 == day) {
  console.log("saturday");
} else if (7 == day) {
  console.log("sunday");
}

// sariig oldog program. odor ogdono, ogogdson odoroos hamaar heddehi sard baigaag todorhoilno
// jishee n 35 gevel 1r sard bish 2r sard baigaa bolhoor feburary
// 65 gevel 3r sar buyu MARCH gesen text hevledeg

let days = 201;
if (days <= 31) {
  console.log("Jan");
} else if (days <= 59) {
  console.log("feb");
} else if (days <= 90) {
  console.log("mar");
} else if (days <= 121) {
  console.log("apr");
} else if (days <= 151) {
  console.log("may");
} else if (days <= 169) {
  console.log("jun");
} else if (days <= 199) {
  console.log("july");
} else if (days <= 230) {
  console.log("aug");
} else if (days <= 260) {
  console.log("sep");
} else if (days <= 290) {
  console.log("oct");
} else if (days <= 330) {
  console.log("nov");
} else if (days <= 363) {
  console.log("dec");
}

// dung tootsoh program bichne.
// 3n oor torliin dun taniulna (midterm1, midterm2, final)
//hervee dundaj dun chine 60s doosh avsan bol dun chine F
//hervee dundaj dun chine 60-70 hoorond bol avsan bol dun chine D
//hervee dundaj dun chine 70-80 hoorond bol avsan bol dun chine C
//...//EXTRA midterm- uud n dund 25% iar noloolno harin final dun buh dungiin  50% d noloolno.

let mid1 = 60;
let mid2 = 40;
let final = 90;

let avg = (mid1 + mid2 + final) / 3;
console.log(avg);

if (avg < 60) {
  console.log("F");
} else if (avg < 70) {
  console.log("D");
} else if (avg < 80) {
  console.log("C");
}
