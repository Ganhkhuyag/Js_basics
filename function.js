// function declaration
function doSomething(input) {
  console.log(input);
  return input * input;
}

// function calling
let result = doSomething(15);

console.log(result);

function printHello() {
  console.log("Hello World");
}

function getSomething(input) {
  console.log("input:", input);
}

function returnSomething() {
  return "Hello World";
}

printHello();
printHello();
printHello();

getSomething("MY TEXT");

function getMultiInput(num1, num2) {
  console.log("num1 = ", num1);
  console.log("num2 = ", num2);
  let sum = num1 + num2;
  return sum;
}
let sum = getMultiInput(20, 30);

console.log("sum =", sum);

function findDay(num) {
  if (num == 1) {
    return "monday";
  } else if (num == 2) {
    return "tuesday";
  }
}
console.log(findDay(2));

function findMonth(num) {
  if (num <= 31) {
    return "jan";
  } else if (num <= 59) {
    return "feb";
  } else if (num <= 89) {
    return "mar";
  } else if (num <= 109) {
    return "apr";
  } else if (num <= 139) {
    return "may";
  } else if (num <= 169) {
    return "jun";
  } else if (num <= 199) {
    return "jul";
  } else if (num <= 233) {
    return "aug";
  } else if (num <= 263) {
    return "sep";
  } else if (num <= 293) {
    return "oct";
  } else if (num <= 320) {
    return "nov";
  } else if (num <= 350) {
    return "dec";
  }
}
console.log(findMonth(100));

function find(avg) {
  if (avg < 60) {
    return "F";
  } else if (avg < 70) {
    return "D";
  } else if (avg < 80) {
    return "C";
  }
}
console.log(find(69));

// city gdeg nertei arrya zarla
// city ni dotroo 8 hotiin ner aguulna
// hot bolgoniig console.log ashiglaad hewlej haruulna

// usad object vvsge
// state vvdeer ni variable
//  state bolgonii population number

let city = [
  "Khovd",
  "Uvs",
  "Zavkhan",
  "Bulgan",
  "Darkhan",
  "Khuvsgul",
  "Khentii",
  "Dornod",
  "",
];
console.log(city[0]);
console.log(city[1]);
console.log(city[2]);
console.log(city[3]);
console.log(city[4]);
console.log(city[5]);
console.log(city[6]);
console.log(city[7]);

let Mongolia = {
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

let Mongolia = {
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
    provinceName: "Khovd",
    population: "69187",
  },
  Dornogovi: {
    provinceName: "Sainshand",
    population: "83223",
  },
};
console.log(Mongolia.Khovd.provinceName);
console.log(Mongolia.Uvs.provinceName);
console.log(Mongolia.Zavkhan.provinceName);
console.log(Mongolia.Bulgan.provinceName);
console.log(Mongolia.Darkhan.provinceName);
console.log(Mongolia.Khuvsgul.provinceName);
console.log(Mongolia.Khentii.provinceName);
console.log(Mongolia.Dornod.provinceName);
console.log(Mongolia.Arkhangai.provinceName);
console.log(Mongolia.Orkhon.provinceName);
console.log(Mongolia.Selenge.provinceName);
console.log(Mongolia.Tuv.provinceName);
console.log(Mongolia.Sukhbaatar.provinceName);
console.log(Mongolia.Omnogovi.provinceName);
console.log(Mongolia.Dornogovi.provinceName);
