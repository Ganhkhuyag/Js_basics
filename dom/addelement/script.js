const root = document.getElementById("root");

const div1 = document.createElement("div");
div1.setAttribute("class", "box");
root.appendChild(div1);

const buttonB = document.createElement("button");
buttonB.setAttribute("class", "btn");
buttonB.innerText = "Nemeh";
root.appendChild(buttonB);

buttonB.addEventListener("click", add);

let count = 1;
function add() {
  const item = document.createElement("div");
  item.setAttribute("class", "item");
  item.innerText = count;
  count++;
  div1.appendChild(item);
}
