// Simple arithmetic calc app

/**
 * Write some pseudo code steps here.
 * Use those steps as your `commit` messages (and delete them from here as you complete a step.)
 */

const calc = {
  add: function add(a, b) {
    return Number(a) + Number(b);
  },
  subtract: function subtract(a, b) {
    return a - b;
  },
  multiply: function multiply(a, b) {
    return a * b;
  },
  divide: function divide(a, b) {
    return a / b;
  },
  remainder: function remainder(a, b) {
    return a % b;
  }
};

// use an anonymous callback function as the 2nd argument
const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const select = document.querySelector("select");
const output = document.querySelector("output");
form.addEventListener("submit", function(event) {
  // Prevent the default browser behavior
  event.preventDefault();

  console.log(calc.add(num1.value, num2.value));

  // Display the result
  // Get the values in as the arguments to the function
  // ToDo: Figure out how to dynamically call a function by name
  // form inputs have a property called value
  output.textContent = calc.add(num1.value, num2.value, select.value);

  console.log(num1.value, num2.value, select.value);
});
