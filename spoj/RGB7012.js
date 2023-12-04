// s = 3612;
// h = (s - (s % 3600)) / 3600;
// // (3612 - (3612 % 3600)) / 3600 = (3612-12) / 3600 = 3600 / 3600 = 1
// // h = s % 3600;
// // // h = 3612 % 3600 = 12 uldsen
// min = (12 - (12 % 60)) / 60;
// // min = (12 - (12 % 60)) / 60 = (112-52) / 60 = 60 / 60 = 1
// sec = s % 60;
// // sec =  3612 % 60 = 12
// console.log(h, min, sec);

function findTimeMinSecond(s) {
  hour = (s - (s % 3600)) / 3600;
  minute = ((s % 3600) - ((s % 3600) % 60)) / 60;
  sec = s % 60;
  console.log(hour, minute, sec);
}
findTimeMinSecond(3612);
