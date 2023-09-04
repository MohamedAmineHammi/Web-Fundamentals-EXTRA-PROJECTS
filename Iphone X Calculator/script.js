'use strict';

const displayEle = document.getElementById('display');

// GLOBAL VARIABLES
let target = [];
let nbr = '';
let op = [];

// PRESS BTN
function press(n) {
  nbr += n;
  displayEle.innerText = nbr;
}

function setOP(ele) {
  op.push(ele);
  target.push(Number(nbr));
  nbr = '';
  console.log(target);
}

// CLEAR
function clr() {
  displayEle.innerText = 0;
  nbr = '';
  target = [];
  op = [];
}


function calculate2() {
  target.push(Number(nbr));
  for (let i = 0; i < op.length; i++) {
    target[i] += op[i];
  }
  target = target.join('');
  displayEle.innerText = eval(target);
  target = [];
  nbr = '';
  op = [];
}
