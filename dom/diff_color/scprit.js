//  document.getElementById
//  document.createElement
//  document.appendChild
//  document.setAttribute

// const root = document.getElementById("root");

// const headerDiv = document.createElement("div");
// headerDiv.setAttribute("class", "header");

// let ScoreV = 0;
// const score = document.createElement("p");
// score.innerText = "Score:" + ScoreV;

// let ChanceV = 0;
// const Chance = document.createElement("p");
// Chance.innerText = "Chance:" + ChanceV;

// const startbtn = document.createElement("button");
// startbtn.innerText = "Start";

// headerDiv.appendChild(score);
// headerDiv.appendChild(startbtn);
// headerDiv.appendChild(Chance);
// root.appendChild(headerDiv);

// const gamebody = document.createElement("div");
// gamebody.setAttribute("class", "gamebody");
// root.appendChild(gamebody);

// startbtn.addEventListener("click", startGame);

// const startGame (){
//   ScoreV = 0
//   score.innerText = "Score:" + ScoreV;
//   ChanceV = 3
//   ChanceV.innerText = "Chance:" + Chance;

// }
const headerDiv = document.createElement("div");
headerDiv.setAttribute("class", "header");

let scoreP = 0;
const score = document.createElement("p");
score.setAttribute("class", "score");
score.innerText = "Score:" + scoreP;

const startBtn = document.createElement("button");
startBtn.innerText = "Start";

const bolomj = document.createElement("p");
let BolomjN = 3;
bolomj.setAttribute("class", "bolomj");
bolomj.innerText = "bolomj:" + BolomjN;

headerDiv.appendChild(startBtn);
headerDiv.appendChild(score);
headerDiv.appendChild(bolomj);
root.appendChild(headerDiv);

const gamebody = document.createElement("div");
gamebody.setAttribute("class", "gamebody");
root.appendChild(gamebody);

startBtn.addEventListener("click", startGame);

function startGame() {
  scoreP = 0;
  score.innerText = "Score:" + scoreP;
  BolomjN = 3;
  bolomj.innerText = "bolomj:" + BolomjN;
  nextStart();
}

startBtn.addEventListener("click", nextStart);

function nextStart() {
  gamebody.innerHTML = "";
  const box = document.createElement("div");
  box.setAttribute("class", "box");
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 240) + 15;
  const blue = Math.floor(Math.random() * 255);
  const rand = Math.floor(Math.random() * 8);
  for (let i = 0; i < 9; i++) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", i);
    // <div class="card" id="4"></div>
    if (i == rand) {
      card.style.backgroundColor = `rgb(${red}, ${green - 15}, ${blue})`;
    } else {
      card.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
    card.addEventListener("click", (e) => {
      console.log("e.target", e.target.id);
      let cardId = e.target.id;
      if (cardId == rand) {
        scoreP++;
        score.innerText = "Score:" + scoreP;
        if (scoreP == 10) {
          gamebody.innerHTML = "win";
        } else {
          console.log(scoreP);
          nextStart();
        }
        console.log("zuv darlaa");
      } else {
        console.log("buruu darlaa");
        BolomjN--;
        if (BolomjN == 0) {
          gamebody.innerHTML = "lose";
        }
        bolomj.innerText = "bolomj:" + BolomjN;
      }
    });

    box.appendChild(card);
  }
  gamebody.appendChild(box);
}
