function showResult(id, msg) {
  var e = document.getElementById(id);
  e.innerHTML = msg;
  e.style.display = "block";
}
function firstMultiple8() {
  var a = Number(document.getElementById("start1").value);
  var b = Number(document.getElementById("end1").value);
  var found = "Not found";
  for (var n = a; n <= b; n++) {
    if (n % 8 == 0) {
      found = n;
      break;
    }
  }
  showResult("result1", "First multiple of 8 = " + found);
}
function lastMultiple4() {
  var a = Number(document.getElementById("start2").value);
  var b = Number(document.getElementById("end2").value);
  var found = "Not found";
  for (var n = a; n<= b; n++) {
    if (n % 4 == 0) {
      found = n;
      break;
    }
  }
  showResult("result2", "Last multiple of 4 = " + found);
}
function firstFive() {
  var a = Number(document.getElementById("start3").value);
  var b = Number(document.getElementById("end3").value);
  var text = "";
  var count = 0;
  for (var n = a; n <= b; n++) {
    if (count == 5) break;
    text = text + n + " ";
    count++;
  }
  showResult("result3", text);
}
function firstDigitAbove6() {
  var n = Math.abs(Number(document.getElementById("number1").value));
  var found = "Not found";
  while (n > 0) {
    var d = n % 10;
    if (d > 6) {
      found = d;
      break;
    }
    n = parseInt(n / 10);
  }
  showResult("result4", "Digit = " + found);
}
function skipFives() {
  var n = Math.abs(Number(document.getElementById("number2").value));
  var text = "";
  while (n > 0) {
    var d = n % 10;
    n = parseInt(n / 10);
    if (d == 5) continue;
    text = text + d + " ";
  }
  showResult("result5", text);
}
function skipMultiples3() {
  var n = Number(document.getElementById("number3").value);
  var text = "";
  for (var i = 1; i <= n; i++) {
    if (i % 3 == 0) continue;
    text = text + i + " ";
  }
  showResult("result6", text);
}
function firstCommonMultiple() {
  var a = Number(document.getElementById("start4").value);
  var b = Number(document.getElementById("end4").value);
  var found = "Not found";
  for (var n = a; n <= b; n++) {
    if (n % 6 == 0 && n % 9 == 0) {
      found = n;
      break;
    }
  }
  showResult("result7", "Answer = " + found);
}
