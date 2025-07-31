const form = document.getElementById("converter-form");
const degreesInput = document.getElementById("degreesInput");
const typeSelect = document.getElementById("typeSelect");
const resultDisplay = document.getElementById("resultDisplay");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const degrees = parseFloat(degreesInput.value);
  const type = typeSelect.value;
  let result = "";

  if (isNaN(degrees)) {
    result = "Please enter a valid number.";
  } else if (type === "Fahrenheit") {
    result = (((degrees - 32) * 5) / 9).toFixed(2) + " °C";
  } else if (type === "Celsius") {
    result = ((degrees * 9) / 5 + 32).toFixed(2) + " °F";
  } else {
    result = "Invalid conversion type.";
  }

  resultDisplay.textContent = result;
});
