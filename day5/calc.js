const display = document.getElementById("display");
let isCalculated = false;
function addToDisplay(text) {
  if (isCalculated) {
    display.value = "";
    isCalculated = false;
  }
  display.value += text;
}
function clearAll() {
  display.value = "";
  localStorage.removeItem("previousValue");
}
function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
  isCalculated = true;
}

function clearLastEntry() {
  const currentValue = display.value;
  const trimmedValue = currentValue.trim();
  if (trimmedValue) {
    display.value = trimmedValue.substring(0, trimmedValue.length - 1);
  }
}
function store() {
  const currentValue = display.value;
  const trimmedValue = currentValue.trim();
  if (trimmedValue) {
    localStorage.setItem("previousValue", trimmedValue);
  }
}
function retrieve() {
  const storedValue = localStorage.getItem("previousValue");
  if (storedValue) {
    display.value = storedValue;
  }
}

// Attendance : https://bit.ly/SS-090824
// Trainer : Tambi
// Session : AN
