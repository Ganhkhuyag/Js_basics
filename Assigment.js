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

// 3n too ogogdohod ehnii toonoos 2 dahi too hurtel 3 dahi too goor ihsesen
// element tei array zohioj butsaah function bich
// Jishee n:
// input: 10 20 2
// output: [10,12,14,16,18,20]

function y(num1, num2, num3) {
  let array = [];
  let index = 0;
  for (let i = num1; i <= num2; i = i + num3) {
    array[index] = i;
    index++;
  }
  return array;
}
let result = y(10, 200, 2);
console.log(result);
