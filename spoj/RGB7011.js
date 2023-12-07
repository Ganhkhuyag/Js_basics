// s = 200;
// min = (s - (s % 60)) / 60;
// //  (200 - (200 % 60)) / 60 = (200 - 140) / 60 = 60 / 60 = 1
// sec = s % 60;
// console.log(min, sec);

function findSecond(s) {
  min = (s - (s % 60)) / 60;
  sec = s % 60;
  return min, sec;
}

let result = findSecond(492);
console.log("result", min, sec);
