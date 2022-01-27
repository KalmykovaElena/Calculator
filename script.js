const numbersBtn = document.querySelectorAll(".number"),
  operatorBtn = document.querySelectorAll(".operators"),
  decimalBtn = document.querySelector(".decimal"),
  resultBtn = document.querySelector(".result"),
  clearBtn = document.querySelectorAll(".clear"),
  display = document.querySelector(".display");

// console.log(numbersBtn)
// console.log(operatorBtn)
// console.log(decimalBtn)
// console.log(resultBtn)
// console.log(clearBtn)
 console.log(display)
function numberPress(number) {
  if (display.value == "0") {
    display.value = number;
  } else {
    display.value += number;
  }
}
numbersBtn.forEach((number) => { //добавляем прослушиватель событий
  number.addEventListener("click", (event) => {
    numberPress(event.target.textContent);
  });
});
