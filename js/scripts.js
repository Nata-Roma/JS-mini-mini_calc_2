window.onload = function(e){

    var num = document.querySelector('input[type="number"]');
var btn = document.querySelectorAll('input[type="button"]');
var num1 = 0;
var num2 = 0;
var sign = "";
var res = 0;

num.focus();

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function() {
    if (this.value !== "=") {
      num1 = parseFloat(num.value);
      num.value = "";
      sign = this.value;
      num.focus();
    } else {
      num2 = parseFloat(num.value);
      calcResult();
      num.value = +res.toFixed(5);
      num.focus();
    }
  };
}

function calcResult() {
  switch (sign) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    case "/":
      res = num1 / num2;
      break;
    default:
      break;
  }
}

}

