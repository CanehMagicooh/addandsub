function Calculate() {
    var Number1 = parseInt(document.getElementById("Number1").value);
    var Number2 = parseInt(document.getElementById("Number2").value);
    var Operator = document.getElementById("Operator").innerHTML

     if(Operator === "+") {
	  document.getElementById("Result").innerHTML = Number1 + Number2
    }
}
