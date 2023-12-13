// LOOP
// for -> command uguh  (initialize; condition; udate){body}
// 1. initialize 2. condition 3. body 4. update 5. condition 6. body-update-condition-body->

for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}

for (let i = 0; i < 6; i = i + 1) {
  console.log("Hello world");
}

// for (initialize; condition; udate){body}
for (let i = 9; i < 10; i = i + 1) {
  console.log(i);
}

let num = 3;
for (console.log("initialize"); num < 7; console.log("update")) {
  num = num + 1;
  console.log("body");
}
function y(n) {
  sum = 1;
  for (i = 0; i <= n; i = i + 1) {
    sum = sum * 2;
  }
  console.log(sum);
}
y(5);
