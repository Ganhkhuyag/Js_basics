function findNum(num) {
  let answer = num % 100;
  let answer1 = answer - 3;
  let answer2 = answer1 / 10;
  return answer2;
}
let answer = findNum(423);
console.log(answer);
