function NumberEnd(num) {
  let answe1 = num % 100;
  let answer = answe1 % 10;
  return answer;
}

let answer = NumberEnd(476);
console.log(answer);
