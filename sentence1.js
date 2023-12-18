let x = `At LeetCode, our mission is to help you improve yourself and land your dream job. 
We have a sizable repository of interview resources for many companies. In the past few years, our users have landed jobs at top companies around the world.
Not only does LeetCode prepare candidates for technical interviews, we also help companies identify top technical talent. 
From sponsoring contests to providing online assessments and training, we offer numerous services to businesses.`;

let str = "";
let array = [];
let count = 0;
for (let i = 0; i < x.length; i++) {
  if (x[i] == " ") {
    array[count] = str;
    str = "";
    count++;
  } else {
    str = str + x[i];
  }
}
console.log(array);
