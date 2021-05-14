let numValue = 0;

function newCounter() {
let divCount = document.getElementById("counter");
let countScreen = document.createElement("h1");
countScreen.innerHTML = "0";
countScreen.id = "count";

divCount.appendChild(countScreen);
}

//------------------     "+1 button"   --------------------------

function newButtons() {
let divCount = document.getElementById("counter");
let btn1 = document.createElement("button");
btn1.type = "button";
btn1.className = "counter-button";

let text1 = document.createTextNode("+");
btn1.appendChild(text1);

btn1.onclick = function() {
  let countScreen = document.getElementById("count");
  let number = countScreen.innerHTML = ++numValue;
};

divCount.appendChild(btn1);

//---------- "-1" button --------------------

let btn2 = document.createElement("button");
btn2.type = "button";
btn2.className = "counter-button";

let text2 = document.createTextNode("-");
btn2.appendChild(text2);

btn2.onclick = function() {
  let countScreen = document.getElementById("count");
  let number = countScreen.innerHTML = --numValue;
};

divCount.appendChild(btn2);

//--------------- "reset" button ----------------------

let btn3 = document.createElement("button");
btn3.type = "button";
btn3.className = "counter-button button-reset";

let text3 = document.createTextNode("reset");
btn3.appendChild(text3);

btn3.onclick = function() {
  let countScreen = document.getElementById("count");
  let number = countScreen.innerHTML = (numValue = 0);
};

divCount.appendChild(btn3);
}
