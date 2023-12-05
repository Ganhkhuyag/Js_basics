// Тоон үнэлгээ 89-өөс их бол А,
// 79-өөс их В, 69-өөс их бол С,
// 59-өөс их бол D бусад тохиолдолд F үсгэн дүнг хэвлэ.

function findSum(num) {
  if (num > 89) {
    return "A";
  }
  if (num > 79) {
    return "B";
  }
  if (num > 69) {
    return "C";
  }
  if (num > 59) {
    return "D";
  }
  if (num > 49) {
    return "F";
  }
}
console.log(findSum(100));
