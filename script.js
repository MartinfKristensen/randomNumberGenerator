function generateNum() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var p = document.getElementById("randomP");
  var errorP = document.getElementById("errorP");

  if (num1 == null || num1 == "" || num2 == null || num2 == "") {
    errorP.style.display = "block";
    errorP.style.color = "red";
    errorP.innerHTML = "Error: Empty Field";
    p.innerHTML = "Error";
  } else {
    num1 = Math.floor(num1);
    num2 = Math.ceil(num2);
    var randNum = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
    // console.log(randNum);
    if (num1 > num2) {
      errorP.style.display = "block";
      errorP.style.color = "red";
      errorP.innerHTML = "Error: Num1 > Num2";
      p.innerHTML = "Error";
    } else {
      errorP.style.display = "none";
      p.innerHTML = randNum;
    }
  }
}
