var Result = 0

function Plus() {
  var ResultInput = parseInt(document.getElementById('UserInput').value);
  Result = Result + ResultInput
    if (Result <= 99999999) {
  document.getElementById('Result').innerHTML = Result
} else {
  Result = 0
  document.getElementById('Result').innerHTML = Result
}
}

function Minor() {
  var ResultInput = parseInt(document.getElementById('UserInput').value);
  Result = Result - ResultInput
  if (Result >= 1) {
document.getElementById('Result').innerHTML = Result
} else {
Result = 0
document.getElementById('Result').innerHTML = Result
}
}
