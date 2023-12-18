function y(a, n) {
  sum = 1;
  for (i = 0; i < n; i = i + 1) {
    console.log("i = " + i + " baihad sum = " + sum);
    sum = sum * a;
  }
  //console.log("i = " + i + " baihad sum = " + sum);
}
y(3, 4);
