function y(n) {
  let sum = 1;
  for (i = 1; i <= n; i = i + 1) {
    sum = sum * i;
  }
  console.log(sum);
}
y(5);
