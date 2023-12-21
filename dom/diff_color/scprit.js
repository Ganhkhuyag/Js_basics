//  document.getElementById
//  document.createElement
//  document.appendChild
//  document.setAttribute
const root = document.getElementById("root");

const headerDiv = document.createElement("div");
headerDiv.setAttribute("class", "header");

const score = document.createElement("p");
score.setAttribute("class", "score");
score.innerText = `Score:`;

const startBtn = document.createElement("button");
startBtn.innerText = "Start";
const level = document.createElement("p");

level.setAttribute("class", "level");
level.innerText = "Level:";

headerDiv.appendChild(startBtn);
headerDiv.appendChild(score);
headerDiv.appendChild(level);
root.appendChild(headerDiv);

const gamebody = document.createElement("div");
gamebody.setAttribute("class", "gamebody");
root.appendChild(gamebody);

startBtn.addEventListener("click", startGame);

function startGame() {
  const box = document.createElement("div");
  box.setAttribute("class", "box");
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 230) + 15;
  const blue = Math.floor(Math.random() * 255);
  const rand = Math.floor(Math.random() * 9);
  for (let i = 0; i < 9; i++) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    if (i == rand) {
      card.style.backgroundColor = `rgb(${red}, ${green - 15}, ${blue})`;
    } else {
      card.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
    box.appendChild(card);
  }
  gamebody.innerHTML = "";
  gamebody.appendChild(box);
}
