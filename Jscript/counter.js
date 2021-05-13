let numValue = 0;

function newCounter() {
let divCount = document.getElementById("counter");
let countScreen = document.createElement("h1");
countScreen.innerHTML = "0";
countScreen.className = "count";

divCount.appendChild(countScreen);
}

//--------------------------------------------

function newButton1() {
let divCount = document.getElementById("counter");
let btn = document.createElement("button");

btn.innerHTML = "+";
btn.type = "button";
btn.name = "button";
btn.className = "counter-button";
btn.onclick = function() {
  let countScreen = document.getElementsByClassName("count");
  let number = countScreen[0].innerHTML = ++numValue;
};

divCount.appendChild(btn);
}

//---------------------------------------------

function newButton2() {
let divCount = document.getElementById("counter");
let btn = document.createElement("button");

btn.innerHTML = "-";
btn.type = "button";
btn.name = "button";
btn.className = "counter-button";
btn.onclick = function() {
  let countScreen = document.getElementsByClassName("count");
  let number = countScreen[0].innerHTML = --numValue;
};

divCount.appendChild(btn);
}

//---------------------------------------

function newButton3() {
let divCount = document.getElementById("counter");
let btn = document.createElement("button");

btn.innerHTML = "reset";
btn.type = "button";
btn.name = "button";
btn.className = "counter-button button-reset";
btn.onclick = function() {
  let countScreen = document.getElementsByClassName("count");
  let number = countScreen[0].innerHTML = (numValue = 0);
};

divCount.appendChild(btn);
}
