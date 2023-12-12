// 1.

function y(n) {
  for (i = n; i >= 0; i = i - 3) {
    console.log(i);
  }
}
y(100);

// 2.

function y(n1, n2) {
  for (i = n2; i <= n1; i = i + 1) {
    console.log(i);
  }
}
y(150, 90);

// 3.

function y(num1, num2, num3) {
  let array = [];
  let index = 0;
  for (i = num1; i <= num2; i = i + num3) {
    console.log("i", i);
    array[index] = i;
    index++;
  }
  return array;
}
console.log(y(10, 20, 2));
