function y(x) {
  a = x % 10;
  b = parseInt((x / 10) % 10);
  c = parseInt(x / 100);
  sum = a + b + c;
  console.log(sum);
}
y(123);
