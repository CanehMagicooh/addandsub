function Calculate() {
    var Number1 = parseInt(document.getElementById("Number1").value);
    var Number2 = parseInt(document.getElementById("Number2").value);
    var Operator = document.getElementById("Operator").innerHTML
    var Plus = "+"

     if(Operator = Plus) {
	  document.getElementById("Result").innerHTML = Number1 + Number2
    }
}
