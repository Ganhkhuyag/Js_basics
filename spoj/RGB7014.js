// Ugugdsun tsag, minut, secundiig secund ruu shiljuul.

function y(a, b, c) {
  hour = a * 3600;
  minut = b * 60;
  sec = c;
  sum = hour + minut + sec;
  return sum;
}
let result = y(1, 2, 3);
console.log(result);
