function generateNum() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  num1 = Math.ceil(num1);
  num2 = Math.floor(num2);
  var p = document.getElementById("randomP");

  if (num1 == null || num1 == "" || num2 == null || num2 == "") {
    p.style.color = "red";
    p.innerHTML = "Error: Empty Field";
  } else {
    var randNum = Math.floor(Math.random() * (num2 - num1) + num1);
    if (randNum < 0) {
      p.style.color = "red";
      p.innerHTML = "Error: Number One Is Bigger Than The Second";
    } else {
      p.style.color = "black";
      p.innerHTML = randNum;
    }
  }
}
