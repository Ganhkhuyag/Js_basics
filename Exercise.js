// Dor hayj 10n object tei array zohio.
// 10n tamirchidiin onoog tootsdog program bichne.

// 1. Ehnii tamirchnii dundaj onoog ol.
// 2. 2 dahi tamirchnii dundaj onoog ol.
// 3. Hamgiin zaluu tamirchniig ol.

let sportmans = [
  {
    name: "Dorjoo",
    age: "22",
    scores: [10, 20, 30, 40],
  },
  {
    name: "Puujee",
    age: "25",
    scores: [15, 26, 34, 41],
  },
  {
    name: "Amgalan",
    age: "20",
    scores: [12, 25, 30, 45],
  },
  {
    name: "Ganaa",
    age: "25",
    scores: [15, 20, 35, 41],
  },
  {
    name: "Tseren",
    age: "26",
    scores: [18, 21, 32, 42],
  },
  {
    name: "Sukhee",
    age: "22",
    scores: [15, 22, 33, 43],
  },
  {
    name: "Turuu",
    age: "22",
    scores: [11, 23, 35, 42],
  },
  {
    name: "Mandakh",
    age: "27",
    scores: [19, 207, 33, 47],
  },
  {
    name: "Tsegmid",
    age: "20",
    scores: [10, 20, 30, 40],
  },
  {
    name: "Ider",
    age: "28",
    scores: [40, 28, 32, 14],
  },
];
let sum =
  sportmans[0].scores[0] +
  sportmans[0].scores[1] +
  sportmans[0].scores[2] +
  sportmans[0].scores[3];
let avg = sum / 4;
console.log(avg);

let result =
  sportmans[1].scores[0] +
  sportmans[1].scores[1] +
  sportmans[1].scores[2] +
  sportmans[1].scores[3];
let average = result / 4;
console.log(average);

function findYoung() {
  let young = sportmans[0].age;
  for (i = 0; i < 10; i = i + 1) {
    if (young > sportmans[i].age) {
      young = sportmans[i].age;
    }
  }
  console.log(young);
}
findYoung();
