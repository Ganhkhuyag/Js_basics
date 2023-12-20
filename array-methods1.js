// ---------------sort------------
// sort dotor davhar for loop ergene.
// sort ni 2 shirheg utga awna.
// dotorh awj baigaa function nemeh esvel hasah too butsaana.

let num = [1, 2, 3, 4, 2, 2, 1, 6, 7]; //input
let new1N = num.sort((a, b) => {
  return b - a;
});
console.log(new1N);

[7, 6, 4, 3, 2, 2, 2, 1, 1]; //output

// ---------------map------------
// map dotor dan for loop ergene.
// map ni element(a) deeguur ni neg negeer guine.
// dotorh fuction yu butsaana ter bolgoniig ni tsugluulaad shine array uusgej ugnu.

let nums = [1, 2, 3, 4, 2, 2, 1, 6, 7]; //input
let newNum = nums.map((a) => {
  return a;
});
console.log(newNum);
[1, 2, 3, 4, 2, 2, 1, 6, 7]; // output;

let num1 = [1, 2, 3, 4, 2, 2, 1, 6, 7];
for (let i = 0; i < num1.length; i++) {
  console.log(num1[i]);
}

//-------------------------//

let nums1 = [1, 2, 3, 4, 5, 1, 3, 1, 3];
let newNums = nums1.map((a) => {
  if (a % 2 == 0) {
    return { name: "hosoo", age: 18 };
  }
});
console.log(newNums);
console.log(nums1);

// ---------filter----------
// neg shirheg utga awna.
// filter ni (boolean) unen esvel hudlaa gedeg zviliig butsaalgah ystoi.
// unen butsaah uyd baisan ter element(a) bolgoniig ni tsugluulaad shine array uusgej ugnu.
// array-in elemetuudees ni filterdeed elementuudiig ni l awj bolno zohiomol array uusge chadahgvi.

let evenArr = nums1.filter((a) => {
  return a % 2 == 0;
});
console.log("evenArr: ", evenArr);

const fruits = [
  "Apple",
  "orange",
  "banana",
  "mango",
  "pine-apple",
  "strawberry",
];
fruits.sort((a, b) => {
  if (b > a) {
    return -1;
  } else {
    return 1;
  }
});
console.log(fruits);
