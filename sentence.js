let sentence = `Many programmers around world extremely recommended pattern problems, to enhance logical thinking capabilities.
As a novice programmer you must practice these patterns to get a good hands on logical thinking and program flow control.
In this exercise I have compiled a list of Star patterns to practice for beginners and intermediate programmers. 
I have tried my best to explain the logic of each pattern individually`;

let count = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == "a" || sentence[i] == "A") {
    count++;
  }
}
console.log(count);

function number() {
  let sum = 0;

  let sentence = `The Beginning After The End follows the life of the 
    late King Grey after his untimely and mysterious death. Reborn as Arthur Leywin,
     he seeks to correct his past mistakes in the vibrant new continent of Dicathen, 
     a world of magic and fantastical creatures. Equipped with the knowledge of a
      powerful king in his mid-thirties, Arthur navigates his new life as the magic-wielding 
      child of two retired adventurers and gains purpose through each of his new 
      experiences—something he lacked in his previous life. When a kind dragon sacrifices her life to protect him,
       Arthur resolves to live a sincere, kind, and courageous life with those he loves. With the help of a lost elf princess .`;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) == `a` || sentence.charAt(i) == `A`) {
      sum = sum + 1;
    }
  }
  console.log(sum);
}
number();

let word = "hello world";
for (let i = 0; i < word.length; i++) {
  console.log(word.charAt(i));
}
console.log(word);
