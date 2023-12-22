// 2 too sanamsargui ogno.
// num1 num2 num3
// garaas 1 too ugnu
// shalgah tovch darval zuv esvel buruu gj garna
// zuv gargah:  num1, num2-iin niilber ni num3-tai tentsuu bval zuv gj garga.
// buruu gargah: num1, num2-iin niilber ni ni num3-tai tentsuu bish bval buruu gj garga.

const root = document.getElementById("root");

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);

document.getElementById("num1").value = num1;
document.getElementById("num2").value = num2;
console.log(num3);

let check = document.getElementById("check");
check.addEventListener("click", checkResult);
function checkResult() {
  let num3 = document.getElementById("num3").value;
  console.log(num1, num2, Number(num3));
  let sum = 0;
  sum = num1 + num2;
  if (sum == Number(num3)) {
    alert("zuv");
  } else {
    alert("buruu");
  }
}

let check1 = document.getElementById("check1");
check1.addEventListener("click", check1Result);
function check1Result() {
  num1 = Math.floor(Math.random() * 100);
  num2 = Math.floor(Math.random() * 100);
  document.getElementById("num1").value = num1;
  document.getElementById("num2").value = num2;
}
