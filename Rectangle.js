function drawSqr(size) {
  let sqrStr = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      sqrStr += "*";
    }
    sqrStr += "\n";
  }
  console.log(sqrStr);
}
drawSqr(10);

function hollowSqr(size) {
  let sqrStr = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i == 0 || i == size - 1 || j == 0 || j == size - 1) {
        sqrStr += "*";
      } else {
        sqrStr += " ";
      }
    }
    sqrStr += "\n";
  }
  console.log(sqrStr);
}
hollowSqr(5);

function drawLeftTri(size) {
  let triSqr = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i >= j) {
        triSqr += " ";
      }
    }
    for (let j = 0; j < size; j++) {
      if (i == 0 || i == size - 1 || j == 0 || j == size - 1) {
        triSqr += "*";
      } else {
        triSqr += "*";
      }
    }
    triSqr += "\n";
  }
  console.log(triSqr);
}
drawLeftTri(5);

function drawRightTri(size) {
  let triSqr = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      triSqr += " ";
    }
    for (let j = 0; j <= i; j++) {
      triSqr += "*";
    }
    triSqr += "\n";
  }
  console.log(triSqr);
}
drawRightTri(5);
