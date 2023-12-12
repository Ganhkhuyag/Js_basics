// Өгөгдсөн 3 тоон дахь сондгой тоонуудын үржвэрийг ол.
// 2t uldegdeltei bval sondgoi too

function y(num1, num2, num3) {
  let result = 1;
  if (num1 % 2 != 0);
  {
    result = result * num1;
  }
  if (num2 % 2 != 0) {
    result = result * num2;
  }

  if (num3 % 2 != 0) {
    result = result * num3;
  }

  return result;
}
let result = y(5, 2, 3);
console.log("result", result);
