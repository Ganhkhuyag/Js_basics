// 1.Element uusgeh  .createElement("div") element uusgeh
// 2.Class, src -> attribute utga onooh - cardDiv.setAttribute("class", "className")  - class, id, src attribute nemj bn
//                         cardDiv.setAttribute("src", "img-url")
// 3. Element dotor utga onooh - .innerText =

const root = document.getElementById("root");

const calculatorDiv = document.createElement("div");
calculatorDiv.setAttribute("class", "Calculator");
root.appendChild(calculatorDiv);

const output = document.createElement("div");
output.setAttribute("class", "output");
output.innerText = "0";
calculatorDiv.appendChild(output);

const buttonsDiv = document.createElement("div");
buttonsDiv.setAttribute("class", "buttons");
calculatorDiv.appendChild(buttonsDiv);

const clearBn = document.createElement("button");
clearBn.setAttribute("class", "btn operator1");
clearBn.innerText = "AC";
buttonsDiv.appendChild(clearBn);

const plsBn = document.createElement("button");
plsBn.setAttribute("class", "btn operator1");
plsBn.innerText = "+/-";
buttonsDiv.appendChild(plsBn);

const perBn = document.createElement("button");
perBn.setAttribute("class", "btn operator1");
perBn.innerText = "%";
buttonsDiv.appendChild(perBn);

const divOp = document.createElement("button");
divOp.setAttribute("class", "btn operation");
divOp.innerText = "/";
buttonsDiv.appendChild(divOp);

const seven = document.createElement("button");
seven.setAttribute("class", "btn number7");
seven.innerText = "7";
buttonsDiv.appendChild(seven);

const eight = document.createElement("button");
eight.setAttribute("class", "btn number8");
eight.innerText = "8";
buttonsDiv.appendChild(eight);

const nine = document.createElement("button");
nine.setAttribute("class", "btn number9");
nine.innerText = "9";
buttonsDiv.appendChild(nine);

const proBn = document.createElement("button");
proBn.setAttribute("class", "btn operation");
proBn.innerText = "x";
buttonsDiv.appendChild(proBn);

const four = document.createElement("button");
four.setAttribute("class", "btn number4");
four.innerText = "4";
buttonsDiv.appendChild(four);

const five = document.createElement("button");
five.setAttribute("class", "btn number5");
five.innerText = "5";
buttonsDiv.appendChild(five);

const six = document.createElement("button");
six.setAttribute("class", "btn number6");
six.innerText = "6";
buttonsDiv.appendChild(six);

const subOp = document.createElement("button");
subOp.setAttribute("class", "btn operation");
subOp.innerText = "-";
buttonsDiv.appendChild(subOp);

const one = document.createElement("button");
one.setAttribute("class", "btn number1");
one.innerText = "1";
buttonsDiv.appendChild(one);

const two = document.createElement("button");
two.setAttribute("class", "btn number2");
two.innerText = "2";
buttonsDiv.appendChild(two);

const three = document.createElement("button");
three.setAttribute("class", "btn number3");
three.innerText = "3";
buttonsDiv.appendChild(three);

const sumOp = document.createElement("button");
sumOp.setAttribute("class", "btn operation");
sumOp.innerText = "+";
buttonsDiv.appendChild(sumOp);

const zero = document.createElement("button");
zero.setAttribute("class", "btn zero");
zero.innerText = "0";
buttonsDiv.appendChild(zero);

const dum = document.createElement("button");
dum.setAttribute("class", "btn number4");
dum.innerText = ".";
buttonsDiv.appendChild(dum);

const equal = document.createElement("button");
equal.setAttribute("class", "btn equal");
equal.innerText = "=";
buttonsDiv.appendChild(equal);
