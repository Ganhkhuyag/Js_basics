function y(a, n) {
  sum = 1;
  for (i = 1; i <= n; i = i + 1) {
    sum = sum * a;
    console.log(a + "^", i + "=", sum);
  }
}
y(3, 5);
