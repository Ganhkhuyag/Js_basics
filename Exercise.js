// Dor hayj 10n object tei array zohio.
// 10n tamirchidiin onoog tootsdog program bichne.

// 1. Ehnii tamirchnii dundaj onoog ol.
// 2. 2 dahi tamirchnii dundaj onoog ol.
// 3. Hamgiin zaluu tamirchniig ol.

let Atheles = [
  {
    name: "Dorjoo",
    age: 22,
    scores: [10, 20, 30, 40],
  },
  {
    name: "Puujee",
    age: 25,
    scores: [15, 26, 34, 41],
  },
  {
    name: "Amgalan",
    age: 20,
    scores: [12, 25, 30, 45],
  },
  {
    name: "Ganaa",
    age: 25,
    scores: [15, 20, 35, 41],
  },
  {
    name: "Tseren",
    age: 26,
    scores: [18, 21, 32, 42],
  },
  {
    name: "Sukhee",
    age: 22,
    scores: [15, 22, 33, 43],
  },
  {
    name: "Turuu",
    age: 22,
    scores: [11, 23, 35, 42],
  },
  {
    name: "Mandakh",
    age: 18,
    scores: [19, 207, 33, 47],
  },
  {
    name: "Tsegmid",
    age: 20,
    scores: [10, 20, 30, 40],
  },
  {
    name: "Ider",
    age: 28,
    scores: [40, 28, 32, 14],
  },
];

// 1. Ehnii tamirchnii dundaj onoog ol.

// // let sum =
// //   Atheles[0].scores[0] +
// //   Atheles[0].scores[1] +
// //   Atheles[0].scores[2] +
// //   Atheles[0].scores[3];
// // let avg = sum / 4;
// // console.log(avg);

// // 2. 2 dahi tamirchnii dundaj onoog ol.

function y(Atheles) {
  let sumScores = 0;
  let avgScores = 0;
  for (let i = 0; i < Atheles[1].scores[i]; i = i + 1) {
    sumScores = sumScores + Atheles[1].scores[i];
  }
  console.log("sumPrice", sumScores);
  avgScores = sumScores / 4;
  console.log("avgScores", avgScores);
}
y(Atheles);

// 3. Hamgiin zaluu tamirchniig ol.

function findYoung() {
  let young = Atheles[0].age;
  for (i = 0; i < Atheles.length; i = i + 1) {
    if (young > Atheles[i].age) {
      young = Atheles[i].age;
    }
  }
  console.log("Young", young);
}
findYoung();
