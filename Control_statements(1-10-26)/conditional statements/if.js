function showResult(id, msg) {
  var element = document.getElementById(id);
  element.innerHTML = msg;
  element.style.display = "block";
}
function checkNumber() {
  var n = Number(document.getElementById("number").value);
  if (n >= 10 && n <= 99) showResult("result1", n + " has two digits.");
  else showResult("result1", n + " does not have two digits.");
}
function checkWeekend() {
  var d = Number(document.getElementById("number1").value);
  if (d == 6) showResult("result2", "Saturday");
  else if (d == 7) showResult("result2", "Sunday");
  else if (d >= 1 && d <= 5) showResult("result2", "Weekday");
  else showResult("result2", "Enter 1 to 7.");
}
function checkMultiple7() {
  var n = Number(document.getElementById("number2").value);
  if (n % 7 == 0) showResult("result3", n + " is a multiple of 7.");
  else showResult("result3", n + " is not a multiple of 7.");
}
function checkRectangle() {
  var l = Number(document.getElementById("length").value);
  var w = Number(document.getElementById("width").value);
  if (l > 0 && w > 0) showResult("result4", "Area = " + l * w);
  else showResult("result4", "Enter positive values.");
}

function deliveryCharge() {
  var v = Number(document.getElementById("order").value);
  if (v < 500) showResult("result6", "Delivery charge = Rs.60");
  else if (v < 1000) showResult("result6", "Delivery charge = Rs.30");
  else showResult("result6", "Free delivery");
}
function checkScholarship() {
  var m = Number(document.getElementById("marks").value);
  var a = Number(document.getElementById("attendance").value);
  if (m >= 85 && a >= 75) showResult("result7", "Eligible");
  else showResult("result7", "Not eligible");
}
function parkingFee() {
  var h = Number(document.getElementById("hours").value);
  var fee;
  if (h <= 2) fee = 30;
  else if (h <= 5) fee = 30 + (h - 2) * 15;
  else fee = 75 + (h - 5) * 10;
  showResult("result8", "Parking fee = Rs." + fee);
}
