// h = 44;
// day = (h - (h % 24)) / 24;
// hour = h % 24;
// console.log(day, hour);

function findhour(h) {
  day = (h - (h % 24)) / 24;
  hour = h % 24;
}
findhour(44);
console.log(day, hour);
