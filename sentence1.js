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
