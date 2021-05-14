let numValue = 0;

function newCounter() {
let divCount = document.getElementById("counter");
let countScreen = document.createElement("h1");
countScreen.innerHTML = "0";
countScreen.className = "count";

divCount.appendChild(countScreen);
}

//--------------------------------------------

function newButtons() {
let divCount = document.getElementById("counter");
let btn1 = document.createElement("button");

btn1.innerHTML = "+";
btn1.type = "button";
btn1.name = "button";
btn1.className = "counter-button";
btn1.onclick = function() {
  let countScreen = document.getElementsByClassName("count");
  let number = countScreen[0].innerHTML = ++numValue;
};

divCount.appendChild(btn1);

let btn2 = document.createElement("button");

btn2.innerHTML = "-";
btn2.type = "button";
btn2.name = "button";
btn2.className = "counter-button";
btn2.onclick = function() {
  let countScreen = document.getElementsByClassName("count");
  let number = countScreen[0].innerHTML = --numValue;
};

divCount.appendChild(btn2);


let btn3 = document.createElement("button");

btn3.innerHTML = "reset";
btn3.type = "button";
btn3.name = "button";
btn3.className = "counter-button button-reset";
btn3.onclick = function() {
  let countScreen = document.getElementsByClassName("count");
  let number = countScreen[0].innerHTML = (numValue = 0);
};

divCount.appendChild(btn3);
}
//---------------------------------------------
