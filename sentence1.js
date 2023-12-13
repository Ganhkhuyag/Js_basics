let sentence = `Many programmers around world extremely recommended pattern problems, to enhance logical thinking capabilities.
As a novice programmer you must practice these patterns to get a good hands on logical thinking and program flow control.
In this exercise I have compiled a list of Star patterns to practice for beginners and intermediate programmers. 
I have tried my best to explain the logic of each pattern individually`;
let str = "";
let array = [];
let index = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == " ") {
    array[index] = str;
    str = "";
    index++;
  } else {
    str = str + sentence[i];
  }
}
console.log(array);

let x = `Number pattern is a series Jof numbers arranged in specific order. These patterns are patterns created by numbers and are similar to star patterns. They are best suited to enhance your logical thinking abilities and to practice flow control statements.`;
let countedArr = [];
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphabetBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function y(x) {
  for (let j = 0; j < alphabet.length; j++) {
    let charCount = 0;
    // countedArr[j] = 0;
    for (let i = 0; i < x.length; i++) {
      //   console.log(
      //     "useg ni ",
      //     alphabet[j],
      //     "shalgaj baigaa useg",
      //     x[i],
      //     "charCount: ",
      //     charCount
      //   );

      if (x[i] == alphabet[j] || x[i] == alphabetBig[j]) {
        charCount += 1;
      }
      countedArr[j] = charCount;
    }
    if ((charCount = 0)) {
      countedArr[j] = 0;
    }
  }
  return countedArr;
}

console.log(x.length);
console.log(y(x));
