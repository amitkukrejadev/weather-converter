const form = document.getElementById("converter-form");
const degreesInput = document.getElementById("degreesInput");
const typeSelect = document.getElementById("typeSelect");
const resultDisplay = document.getElementById("resultDisplay");
const darkToggle = document.getElementById("darkToggle");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const degrees = parseFloat(degreesInput.value);
  const type = typeSelect.value;
  let result = "";

  if (isNaN(degrees)) {
    result = "Please enter a valid number.";
  } else {
    switch (type) {
      case "Fahrenheit":
        result = (((degrees - 32) * 5) / 9).toFixed(2) + " °C";
        break;
      case "Celsius":
        result = ((degrees * 9) / 5 + 32).toFixed(2) + " °F";
        break;
      case "CtoK":
        result = (degrees + 273.15).toFixed(2) + " K";
        break;
      case "KtoC":
        result = (degrees - 273.15).toFixed(2) + " °C";
        break;
      case "FtoK":
        result = (((degrees - 32) * 5) / 9 + 273.15).toFixed(2) + " K";
        break;
      case "KtoF":
        result = (((degrees - 273.15) * 9) / 5 + 32).toFixed(2) + " °F";
        break;
      default:
        result = "Invalid conversion type.";
    }
  }

  resultDisplay.textContent = result;
});

// Dark mode toggle
darkToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  darkToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});
