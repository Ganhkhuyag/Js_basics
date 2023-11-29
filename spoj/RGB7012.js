function hourMinutSecond(input) {
  let divisions = input / 60;
  let answer = divisions / 60;
  return answer;
}
let answer = hourMinutSecond(3612);
console.log(answer);
