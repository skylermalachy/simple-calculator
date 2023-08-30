"use strict";
const display = document.querySelector(".input");
const buttons = document.querySelectorAll(".buttton");
const operators = ["+", "*", "/", "-"];

let result = "";

buttons.forEach((b) => {
  b.addEventListener("click", function (b) {
    const showValue = b.target.dataset.number;

    if (showValue === "=" && result !== "") {
      result = eval(result.replace("%", "/100"));
    } else if (showValue === "C") {
      result = "";
    } else if (showValue === "del") {
      result = result.toString().slice(0, -1);
    } else {
      if (result === "" && operators.includes(showValue)) return;
      result += showValue;
    }

    display.value = result;
  });
});
