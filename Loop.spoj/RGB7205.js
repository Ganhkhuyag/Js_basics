function y(n) {
  let sum = 1;
  for (i = 1; i <= n; i = i + 1) {
    sum = sum * i;
    console.log("i = " + i + " baihad sum= " + sum);
  }
}

y(5);
