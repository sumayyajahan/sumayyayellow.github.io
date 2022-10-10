"use struct";

const NORMAL_ANIMATION_SPEED = 250;
const TURBO_ANIMATION_SPEED = 50;

let intervalSpeed = NORMAL_ANIMATION_SPEED;

let currentAnimation = null;
let splitValue = [];
let interval = null;

function changeAnimation() {
  const animation = document.getElementById("animation").value;
  const textArea = document.getElementById("text-area");
  textArea.value = ANIMATIONS[animation];
  currentAnimation = ANIMATIONS[animation];
}

function changeSize() {
  const size = document.getElementById("fontsize").value;

  switch (size) {
    case "Tiny":
      document.getElementById("text-area").style.fontSize = "7pt";
      break;
    case "Small":
      document.getElementById("text-area").style.fontSize = "10pt";
      break;
    case "Medium":
      document.getElementById("text-area").style.fontSize = "12pt";
      break;
    case "Large":
      document.getElementById("text-area").style.fontSize = "16pt";
      break;
    case "Extra Large":
      document.getElementById("text-area").style.fontSize = "24pt";
      break;
    case "XXL":
      document.getElementById("text-area").style.fontSize = "32pt";
      break;
    default:
      return;
  }
}

function onStart() {
  const textArea = document.getElementById("text-area");
  const animation = currentAnimation;
  document.getElementById("stop").disabled = false;
  splitValue = animation.split("=====\n");

  document.getElementById("start").disabled = true;
  document.getElementById("animation").disabled = true;
  interval = setInterval(displayFrames, intervalSpeed);
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(displayFrames, NORMAL_ANIMATION_SPEED);
}

function onStop() {
  document.getElementById("stop").disabled = true;
  document.getElementById("start").disabled = false;
  document.getElementById("animation").disabled = false;

  clearInterval(interval);
}

function displayFrames() {
  const textArea = document.getElementById("text-area");
  const singleValue = splitValue.shift();
  textArea.value = singleValue;
  splitValue.push(singleValue);
}

function onTurboClick() {
  const turbo = document.getElementById("turbo").checked;

  if (turbo) {
    intervalSpeed = TURBO_ANIMATION_SPEED;
  } else {
    intervalSpeed = NORMAL_ANIMATION_SPEED;
  }

  clearInterval(interval);
  interval = setInterval(displayFrames, intervalSpeed);
}
