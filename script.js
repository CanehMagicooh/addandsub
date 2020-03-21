var Number1 = parseInt(document.getElementById("Number1").innerHTML)
var Number2 = parseInt(document.getElementById("Number2").innerHTML)
var Operator = document.getElementById("Operator").innerHTML

function Calculate() {
	var Number1 = parseInt(document.getElementById("Number1").innerHTML)
    var Number2 = parseInt(document.getElementById("Number2").innerHTML)
    var Operator = document.getElementById("Operator").innerHTML
    
	if(Operator = "+") {
		var Plus = Number1 + Number2
		document.getElementById("Result").innerHTML = "= " + Plus
    }
    if(Operator = "-") {
    	var Minor = Number1 - Number2
		document.getElementById("Result").innerHTML = "= " + Minor
    }
     if(Operator = "x") {
     	var Multiple = Number1 * Number2
		document.getElementById("Result").innerHTML = "= " + Multiple
    }
     if(Operator = ":") {
     	var Division = Number1 / Number2
		document.getElementById("Result").innerHTML = "= " + Division
    }
}
