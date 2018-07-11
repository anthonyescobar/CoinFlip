import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

const myLabel = document.getElementById("myLabel");
const hSide = document.getElementById("gHeads");
const tSide = document.getElementById("gTails");
const label = document.getElementById("gLabel");

hSide.style.opacity = 0;
tSide.style.opacity = 0;
myLabel.text = "tap";

let mybutton = document.getElementById("mybutton");
mybutton.onactivate = function(evt) {
  console.log("CLICKED!");
  var result = flip();
  myLabel.text = result;
  label.animate("enable");
  if (result == "heads") {
    tSide.style.opacity = 0;
    hSide.style.opacity = 1;
    hSide.animate("enable");
  } else {
    hSide.style.opacity = 0;
    tSide.style.opacity = 1;
    tSide.animate("enable");
  }
}

let btnTR = document.getElementById("btn-tr");
btnTR.onactivate = function(evt) {
  console.log("TOP RIGHT!");
  hSide.style.opacity = 0;
  tSide.style.opacity = 0;
  myLabel.text = "tap";  
}

// let btnLR = document.getElementById("btn-lr");
// btnLR.onactivate = function(evt) {
//   console.log("LOWER RIGHT!");
// }

function flip() {
  return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}