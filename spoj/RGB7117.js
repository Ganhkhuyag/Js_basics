// Тоон үнэлгээ 89-өөс их бол А,
// 79-өөс их В, 69-өөс их бол С,
// 59-өөс их бол D бусад тохиолдолд F үсгэн дүнг хэвлэ.

function findSum(num) {
  if (num > 89) {
    return "A";
  } else if (num > 79) {
    return "B";
  } else if (num > 69) {
    return "C";
  } else if (num > 59) {
    return "D";
  } else if (num > 49) {
    return "F";
  }
}
console.log(findSum(50));
