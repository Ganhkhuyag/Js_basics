// city gdeg nertei arrya zarla
// city ni dotroo 8 hotiin ner aguulna
// hot bolgoniig console.log ashiglaad hewlej haruulna

// usad object vvsge
// state vvdeer ni variable (15 state awna.)
//  state bolgonii population number

//state dotroo object vvsgene
// object ni dotroo city name, city population

let city = [
  "Khovd",
  "Uvs",
  "Zavkhan",
  "Bulgan",
  "Darkhan",
  "Khuvsgul",
  "Khentii",
  "Dornod",
];
console.log(city[0]);
console.log(city[1]);
console.log(city[2]);
console.log(city[3]);
console.log(city[4]);
console.log(city[5]);
console.log(city[6]);
console.log(city[7]);

let mongolia = {
  Khovd: "94994",
  Uvs: "88,672",
  Zavkhan: "108,530	",
  Bulgan: "62,089",
  Darkhan: "107,018",
  Khuvsgul: "82,054",
  Khentii: "71,014",
  Dornod: "47104",
  Arkhangai: "57748",
  Orkhon: "17928",
  Selenge: "110110",
  Tuv: "94250",
  Sukhbaatar: "63128",
  Omnogovi: "69187",
  Dornogovi: "83223",
};
console.log(Mongolia.Khovd);
console.log(Mongolia.Uvs);
console.log(Mongolia.Zavkhan);
console.log(Mongolia.Bulgan);
console.log(Mongolia.Darkhan);
console.log(Mongolia.Khuvsgul);
console.log(Mongolia.Khentii);
console.log(Mongolia.Dornod);
console.log(Mongolia.Arkhangai);
console.log(Mongolia.Orkhon);
console.log(Mongolia.Selenge);
console.log(Mongolia.Tuv);
console.log(Mongolia.Sukhbaatar);
console.log(Mongolia.Omnogovi);
console.log(Mongolia.Dornogovi);

let State = {
  Khovd: {
    provinceName: "Khovd",
    population: "94994",
  },
  Uvs: {
    provinceName: "Ulaangom",
    population: "88672",
  },
  Zavkhan: {
    provinceName: "Uliastai",
    population: "108530",
  },
  Bulgan: {
    provinceName: "Bulgan",
    population: "62089",
  },
  Darkhan: {
    provinceName: "Darkhan",
    population: "107018",
  },
  Khuvsgul: {
    provinceName: "Moron",
    population: "82054",
  },
  Khentii: {
    provinceName: "Ondorkhaan",
    population: "71014",
  },
  Dornod: {
    provinceName: "Choibalsan",
    population: "47104",
  },
  Arkhangai: {
    provinceName: "Tsetserleg",
    population: "57748",
  },
  Orkhon: {
    provinceName: "Erdenet",
    population: "17928",
  },
  Selenge: {
    provinceName: "Sukhbaatar",
    population: "110110",
  },
  Tuv: {
    provinceName: "Tuv",
    population: "94250",
  },
  Sukhbaatar: {
    provinceName: "Baruun-Urt",
    population: "63128",
  },
  Omnogovi: {
    provinceName: "Dalanzadgad",
    population: "69187",
  },
  Dornogovi: {
    provinceName: "Sainshand",
    population: "83223",
  },
};
console.log(State.Khovd.provinceName);
console.log(State.Uvs.provinceName);
console.log(State.Zavkhan.provinceName);
console.log(State.Bulgan.provinceName);
console.log(State.Darkhan.provinceName);
console.log(State.Khuvsgul.provinceName);
console.log(State.Khentii.provinceName);
console.log(State.Dornod.provinceName);
console.log(State.Arkhangai.provinceName);
console.log(State.Orkhon.provinceName);
console.log(State.Selenge.provinceName);
console.log(State.Tuv.provinceName);
console.log(State.Sukhbaatar.provinceName);
console.log(State.Omnogovi.provinceName);
console.log(State.Dornogovi.provinceName);

//salary ni 2 sayaas ih,
//insurance toldog bh,
//passporttoi eswel identitycardtai bh,
//bas person bh eswel itgemjleheer bh,
//dept ni 1 sayas baga bwal zeel garna.

function loan(salary, insurance, inperson, cred, dept, passport, identityCard) {
  if (
    salary > 10 &&
    insurance > 1 &&
    (inperson || cred) &&
    dept < 1000000 &&
    (passport || identityCard)
  ) {
    console.log("yes");
  } else console.log("no");
}
loan(
  11,
  1,
  (inperson = true),
  (cred = false),
  500,
  (passport = false),
  (identityCard = false)
);

// if its raining today, take umberella
// if its snowing today take umberella
// if its too sunny today take umberella

// ogogdson toog 5 bolon 11t huvaagddag eshiig tootsog function bich.
// too 5d huvaagdana gehdee 11t huvaagdahgui
