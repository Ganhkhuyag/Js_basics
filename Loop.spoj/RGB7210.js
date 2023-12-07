function y(n) {
  sum = 1;
  for (i = 1; i <= 10; i = i + 1) {
    sum = n * i;
    console.log(n + "*", i, "=", sum);
  }
}

y(3);
