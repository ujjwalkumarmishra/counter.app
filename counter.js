// getting the html elements
const decrementBtn = document.getElementsByClassName("decrementBtn");
const incrementBtn = document.getElementsByClassName("incrementBtn");
const resetBtn = document.getElementsByClassName("resetBtn");
const displayValue = document.getElementsByClassName("displayValue")[0]

// for decrement button click
decrementBtn[0].addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value >= 0) {
    displayValue.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
});

// for increment button click
  incrementBtn[0].addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value >= 10) {
    alert("10+ values are not allowed");
  } else {
    displayValue.innerText = value + 1;
  }
});

// for reset button click
resetBtn[0].addEventListener("click", () => {
  displayValue.innerText = 0;
});
