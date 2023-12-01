//salary ni 2 sayaas ih,
// NDSH toldog bh,
// passporttoi eswel identitycardtai bh,
// bas person bh eswel itgemjleheer bh,
// dept ni 1 sayas baga bwal zeel garna.

// function loan(salary) {
//   if (salary >= 2000000) {
//     return "yes";
//   }
//   return "no";
// }

// console.log(loan(1000000));

function loan(salary, id, pass) {
  if (salary >= 2000000 && (id == "yes" || pass == "yes") && (==||==)) {
    return "yes";
  }
  return "no";
}

let tohioldol1 = loan(2100000, "no", "yes");
console.log(tohioldol1);

let tohioldol2 = loan(1100000, "yes", "yes");
console.log(tohioldol2);

let tohioldol3 = loan(2200000, "no", "no");
console.log(tohioldol3);

let tohioldol4 = loan(2100000, "yes", "no");
console.log(tohioldol4);

let tohioldol5 = loan(1100000, "yes", "yes");
console.log(tohioldol5);
