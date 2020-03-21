function Calculate() {
	var Number1 = parseInt(document.getElementById("Number1").innerHTML)
    var Number2 = parseInt(document.getElementById("Number2").innerHTML)
    var Operator = document.getElementById("Operator").innerHTML
    var Plus = Number1 + Number2
    var Minor = Number1 - Number2
    var Multiple = Number1 * Number2

	if(Operator = "+") {
		document.getElementById("Result").innerHTML = "= " + "Plus"
    }
    if(Operator === "-") {
		document.getElementById("Result").innerHTML = "= " + Minor
    }
     if(Operator = "x") {
		document.getElementById("Result").innerHTML = "= " + Multiple
    }
     if(Operator = ":") {
		document.getElementById("Result").innerHTML = "= " + Division
    }
}
