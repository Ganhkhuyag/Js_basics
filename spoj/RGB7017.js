function YearMonth(a) {
  year = parseInt(a / 12);
  month = a % 12;
  console.log(year, month);
}
YearMonth(27);
