function findDay(num) {
  if (num == 1) {
    return "monday";
  }
  if (num == 2) {
    return "tuesday";
  }
  if (num == 3) {
    return "wednesday";
  }
  if (num == 4) {
    return "thursday";
  }
  if (num == 5) {
    return "friday";
  }
  if (num == 6) {
    return "saturday";
  }
  if (num == 7) {
    return "sunday";
  }
}
console.log(findDay(5));
