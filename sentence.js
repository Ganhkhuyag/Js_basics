let sentence = `Many programmers around world extremely recommended pattern problems, to enhance logical thinking capabilities.
As a novice programmer you must practice these patterns to get a good hands on logical thinking and program flow control.
In this exercise I have compiled a list of Star patterns to practice for beginners and intermediate programmers. 
I have tried my best to explain the logic of each pattern individually`;

let str = ""; //
let arr = []; // a[0] = Many  a[1]=programmers
let counts = 0; // 1 2
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == " ") {
    // tuhain shalgaj bui useg (sentence[i]) hooson zai bol iishee orj irne
    // Ugiig array-d hadgalj bn
    arr[counts] = str;
    // Ug hadgalj bui huwisagchiig hooson bolgoj bn
    str = "";
    // hadgalah index.n dugaariig negeer nemj bn. / daraagiin indext hadgalahad belen bolgono
    counts++;
  } else {
    // tuhain shalgaj bui useg (sentence[i]) hooson zai bish bol iishee orj irne
    // Ugen deer useg zalgaj bn
    str = str + sentence[i];
  }
}
console.log("arr:", arr);

// ------- //

// let words = 0;
// for (let i = 0; i < sentence.length; i++) {
//   if (sentence[i] == " ") {
//     words++;
//   }
// }
// console.log(words);
