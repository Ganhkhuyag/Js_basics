//  document.getElementById
//  document.createElement
//  document.appendChild
//  document.setAttribute
const root = document.getElementById("root");

const startButton = document.createElement("button");
startButton.innerText = "Start";

const headerDiv = document.createElement("div");
headerDiv.setAttribute("class", "header");

const score = document.createElement("p");
score.setAttribute("class", "score");
score.innerText = "Score:";

headerDiv.appendChild(startButton);
headerDiv.appendChild(score);
root.appendChild(headerDiv);

const containerDiv = document.createElement("div");
containerDiv.setAttribute("class", "container");
root.appendChild(containerDiv);

const box = document.createElement("div");
box.setAttribute("class", "box");
containerDiv.appendChild(box);

function startGame() {
  const red = Math.floor(Math.random() * 245) + 10;
}
