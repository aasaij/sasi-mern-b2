let x, y, z;
let txtNum1 = document.getElementById("num1");
let txtNum2 = document.getElementById("num2");
let txtResult = document.getElementById("result");
let addButton = document.getElementById("cmdAdd");
let clearButton = document.getElementById("cmdclear");
let sign;

cmdAdd.onclick = function () {
  x = Number(txtNum1.value);
  y = Number(txtNum2.value);
  if (document.getElementById("add").checked) z = x + y;
  else if (document.getElementById("minus").checked) z = x - y;
  else if (document.getElementById("multiply").checked) z = x * y;
  else if (document.getElementById("divide").checked) z = x / y;
  else if (document.getElementById("remain").checked) z = x % y;
  else if (document.getElementById("power").checked) z = x ** y;
  else z = "No operation applied";
  txtResult.value = z;
};

cmdClear.onclick = function () {
  txtNum1.value = "";
  txtNum2.value = "";
  txtResult.value = "";
};
