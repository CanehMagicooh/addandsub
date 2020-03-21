function Calculate() {
    var Plus = parseInt(document.getElementById("Number1").innerHTML) + parseInt(document.getElementById("Number2").innerHTML)
    var Minor = parseInt(document.getElementById("Number1").innerHTML) - parseInt(document.getElementById("Number2").innerHTML)
    var Multiple = parseInt(document.getElementById("Number1").innerHTML) * parseInt(document.getElementById("Number2").innerHTML)

	if(document.getElementById("Operator").innerHTML = "+") {
		document.getElementById("Result").innerHTML = "= " + Plus
    }
    if(document.getElementById("Operator").innerHTML === "-") {
		document.getElementById("Result").innerHTML = "= " + Minor
    }
     if(document.getElementById("Operator").innerHTML = "x") {
		document.getElementById("Result").innerHTML = "= " + Multiple
    }
     if(document.getElementById("Operator").innerHTML = ":") {
		document.getElementById("Result").innerHTML = "= " + Division
    }
}
}
