"use strict";

const colors = [
  "red",
  "green",
  "blue",
  "#555",
  "teal",
  "orangered",
  "orange",
  "ultraviolet",
  "yellow",
  "aliceblue"
];

setInterval(function() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("little");

  newDiv.style.top = GenerateRandomNumber(0, 100) + "%";
  newDiv.style.left = GenerateRandomNumber(0, 100) + "%";

  const wh = GenerateRandomNumber(10, 300);

  newDiv.style.width = wh + "px";
  newDiv.style.height = wh + "px";

  newDiv.style.background = `linear-gradient(to right, ${GenerateRandomColor()}, ${GenerateRandomColor()})`;

  document.body.appendChild(newDiv);
}, 1000);

document.onclick = function(e) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("little");

  newDiv.style.top = e.pageY + "px";
  newDiv.style.left = e.pageX + "px";

  const wh = GenerateRandomNumber(10, 300);

  newDiv.style.width = wh + "px";
  newDiv.style.height = wh + "px";

  newDiv.style.background = `linear-gradient(to right, ${GenerateRandomColor()}, ${GenerateRandomColor()})`;

  document.body.appendChild(newDiv);
};

function GenerateRandomNumber(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

function GenerateRandomColor() {
  const letters = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 8; i++) {
    color += letters[GenerateRandomNumber(0, 15)];
  }

  return color;
}
