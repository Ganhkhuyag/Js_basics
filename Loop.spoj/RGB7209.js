function y(a, n) {
  sum = 1;
  for (i = 0; i < n; i = i + 1) {
    sum = sum * a;
  }
  console.log(sum);
}
y(3, 4);
