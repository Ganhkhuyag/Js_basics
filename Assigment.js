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

array = [10, 20, 30, 40, 50];
function y(array) {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < array[i]; i++) {
    sum = sum + array[i];
    console.log("i = " + i + "baihad niilber = " + sum);
  }
  avg = sum / 5;
  console.log(avg);
}
y(array);
