function YearMonth(a) {
  year = (a - (a % 12)) / 12;
  month = year % 30;
}
YearMonth(27);
console.log(year, month);
